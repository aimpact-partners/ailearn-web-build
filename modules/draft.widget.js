System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.21/main-layout.widget", "react@18.2.0", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.21/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.21/i18n.ts", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "@aimpact/ailearn-app@0.1.6-dev.21/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/image", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp016Dev21MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev21MainLayoutWidget;
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
    }, function (_aimpactAilearnApp016Dev21WidgetsBreadcrumbWidget) {
      dependency_11 = _aimpactAilearnApp016Dev21WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev21I18nTs) {
      dependency_12 = _aimpactAilearnApp016Dev21I18nTs;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_13 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev21ComponentsUi;
    }, function (_aimpactAilearnApp016Dev21ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp016Dev21ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_16 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Base) {
      dependency_17 = _pragmateUi100Beta6Base;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_18 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_19 = _pragmateUi100Beta6Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_20 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_22 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Form) {
      dependency_23 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Image) {
      dependency_24 = _pragmateUi100Beta6Image;
    }, function (_beyondJsKernel019Routing) {
      dependency_25 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6List) {
      dependency_26 = _pragmateUi100Beta6List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@beyond-js/widgets/controller', dependency_6], ['@aimpact/ailearn-sdk/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/base', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/alert', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form/react-select', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/image', dependency_24], ['@beyond-js/kernel/routing', dependency_25], ['pragmate-ui/list', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/modules/draft.widget');
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
        hash: 3378927345,
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
            }, React.createElement("h1", null, texts.setup.title)), React.createElement(_alert.AlertRenderer, {
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
        hash: 1199633414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
          var _aiButton = require("../../components/ai-button");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const closeModal = () => setShowCoinsModal(false);
            const generateImprovements = async () => {
              try {
                if (!store.hasCredits) {
                  setShowCoinsModal(true);
                  return;
                }
                await store.getObjectiveImprovements({
                  objective: values.objective
                });
              } catch (e) {
                console.error(e);
              }
            };
            const onConsume = async () => {
              try {
                await store.model.consumeCoins();
                setShowCoinsModal(false);
                await store.getObjectiveImprovements({
                  objective: values.objective
                });
              } catch (e) {
                console.error(e);
              }
            };
            if (store.improvements) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_aiButton.AIButton, {
              disabled: !saved,
              ensure: false,
              onClick: generateImprovements,
              variant: "primary",
              bordered: true
            }, textActions.analyse), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              owner: store.model?.owner,
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              onConsume: onConsume
            }));
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
        hash: 3506778693,
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
              className: "centered-container"
            }, _react.default.createElement("header", {
              className: "modal__header"
            }, _react.default.createElement("h3", null, texts.refine.confirm.title)), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, texts.refine.confirm.description)), _react.default.createElement("footer", {
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
        hash: 2956698225,
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
            console.log(0.2, texts);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwidmFsdWUiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiX19pZCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVhY3RpdmVQcm9wcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGlzdGVuVGV4dHMiLCJ1bmRlZmluZWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiUmVhY3QiLCJ1c2VUZXh0c0NhbGxiYWNrIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJCYXR0ZXJ5IiwicGVyY2VudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiQ29pbnNNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJlbnN1cmUiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQWxlcnQiLCJBbGVydFJlbmRlcmVyIiwidGltZSIsInJlbW92ZSIsInNldFJlbW92ZSIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50Iiwic3VibWl0VGV4dCIsImJhY2siLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJBbmltYXRlZERpdiIsImNscyIsIl9pbWFnZSIsIkNvbmZpcm1hdGlvbk1vZGFsIiwic2V0dXAiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX2hvb2tzIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwic2V0VmFsdWVzIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVkIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZWxlY3QiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJUb3VyU3RlcCIsImFzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJtZXNzYWdlcyIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwic2V0UHJvY2Vzc2luZyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJwaG90b1VybCIsIkFwcEljb24iLCJJbWFnZSIsInNyYyIsIl9hbmltYXRlZERpdiIsIl9hdWRpZW5jZSIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfbGFuZ3VhZ2UiLCJfdHJpbSIsIl9hY3Rpb24iLCJfcGF0aHdheSIsIl9jb25maXJtYXRpb25Nb2RhbCIsInNldFNob3ciLCJzdGF0ZSIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsImludmFsaWRGb3JtIiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJjb25maXJtYXRpb25DYWxsYmFjayIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm9uQ29maXJtZWQiLCJjbHNDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiX2FpQnV0dG9uIiwidGV4dEFjdGlvbnMiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiY2xvc2VNb2RhbCIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiYW5hbHlzZSIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImlycmVsZXZhbnQiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImhhcyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwidXBkYXRpbmciLCJzZXRVcGRhdGluZyIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCIsIl9jb250ZXh0MiIsIkNvbmZpcm1hdGlvbkZvcm0iLCJvblNhdmUiLCJzZXRWaWV3IiwidXNlTW9kYWxDb250ZXh0IiwicmVmaW5lIiwiTW9kYWxDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwib25HZW5lcmF0ZSIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZmxvYXRpbmciLCJnZW5lcmF0ZSIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjaGVja2VkIiwiYWkiLCJtYW51YWxseSIsIk1hbnVhbEZvcm0iLCJwYXRod2F5IiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJJbnB1dCIsIm1hbnVhbCIsImxvZyIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsInZpZXciLCJzdGF0dXMiLCJjb250cm9scyIsInNlbGVjdGlvbiIsInJlcXVlc3QiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZpZXdEZWZpbmVkIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbWFuYWdlbWVudC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdHJpbS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2ltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQUksS0FBSztjQUNuQixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUUsTUFBTUEsQ0FBQTtjQUNULE9BQU9MLE1BQUEsQ0FBQU0sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUosS0FBTSxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RTtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1MsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQsSUFBQWEsTUFBQSxHQUFBaEIsT0FBQTtVQVNNLFNBQVVpQixvQkFBb0JBLENBQUM7WUFBRVosS0FBSztZQUFFTTtVQUFHLENBQUU7WUFDbEQsTUFBTSxDQUFDTyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHSCxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDVixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQztZQUNwRixNQUFNUyxHQUFHLEdBQUdOLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE9BQ0NQLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGNBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQXdCQyxFQUFFLEVBQUVwQixLQUFLLENBQUNxQixLQUFLLENBQUNELEVBQUU7Y0FBRVAsVUFBVSxFQUFFQSxVQUFVO2NBQUVJLEdBQUcsRUFBRUE7WUFBRyxFQUFJLENBQzNFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUFLLGdCQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLE1BQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsUUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixXQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQStCLE1BQUEsR0FBQS9CLE9BQUE7VUFDQSxJQUFBZ0MsZUFBQSxHQUFBaEMsT0FBQTtVQUNBLElBQUFpQyxXQUFBLEdBQUFqQyxPQUFBO1VBQ0EsSUFBQWtDLEtBQUEsR0FBQWxDLE9BQUE7VUFTTSxNQUFPbUMsWUFBYSxTQUFRUCxNQUFBLENBQUFRLGFBQTJCO1lBQzVEQyxPQUFPLEdBQUcsSUFBSTtZQUVkLENBQUFYLEtBQU07WUFDTixDQUFBWSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBT0wsS0FBQSxDQUFBSyxXQUFXLENBQUNDLEtBQUs7WUFDekI7WUFFQTs7O1lBR0EsQ0FBQUMsS0FBTSxHQUFHLEtBQUs7WUFDZCxJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlmLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQWdCLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBakIsS0FBTSxDQUFDa0IsT0FBTyxFQUFFQyxLQUFLLEdBQUcsQ0FBQztZQUN0QztZQUNBLENBQUFDLG9CQUFxQixHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNqQyxJQUFJRCxvQkFBb0JBLENBQUE7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsb0JBQXFCO1lBQ2xDO1lBRUEsSUFBSUUsSUFBSUEsQ0FBQTtjQUNQLE9BQU9uQixRQUFBLENBQUFvQixjQUFjLENBQUNELElBQUk7WUFDM0I7WUFFQSxJQUFJRSxVQUFVQSxDQUFBO2NBQ2IsT0FBT2pCLFdBQUEsQ0FBQWtCLGVBQWUsQ0FBQ0QsVUFBVTtZQUNsQztZQUNBLENBQUFFLGNBQWU7WUFDZixJQUFJQSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsTUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQ04sSUFBSSxDQUFDTyxhQUFhLENBQUNDLEtBQUs7Y0FFMUMsT0FBTyxDQUNOO2dCQUFFQyxLQUFLLEVBQUUsSUFBSSxDQUFDVCxJQUFJLENBQUN2QixFQUFFO2dCQUFFaUMsS0FBSyxFQUFFLElBQUksQ0FBQ1YsSUFBSSxDQUFDVztjQUFXLENBQUUsRUFDckQsR0FBR0wsSUFBSSxDQUFDTSxHQUFHLENBQUVDLElBQVMsS0FBTTtnQkFBRUosS0FBSyxFQUFFSSxJQUFJLENBQUNwQyxFQUFFO2dCQUFFaUMsS0FBSyxFQUFFRyxJQUFJLENBQUNDO2NBQUksQ0FBRSxDQUFDLENBQUMsQ0FDbEU7WUFDRjtZQUVBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxJQUFJLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ3NDLEtBQUssRUFBRTtnQkFDckIsT0FBTztrQkFBRVAsS0FBSyxFQUFFLElBQUksQ0FBQy9CLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQ3ZDLEVBQUU7a0JBQUVpQyxLQUFLLEVBQUUsSUFBSSxDQUFDaEMsS0FBSyxDQUFDc0MsS0FBSyxDQUFDRjtnQkFBSSxDQUFFOztZQUVyRTtZQUVBLENBQUFHLFFBQVM7WUFDVCxJQUFJQyxhQUFhQSxDQUFBO2NBQ2hCLE9BQU87Z0JBQ05DLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsU0FBUyxFQUFFLEVBQUU7Z0JBQ2JDLGVBQWUsRUFBRSxDQUFDO2dCQUNsQkMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBN0MsS0FBTSxDQUFDNkM7ZUFDdEI7WUFDRjtZQUVBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBL0IsS0FBTSxHQUFHLElBQUksQ0FBQ2YsS0FBSyxDQUFDK0MsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDUCxhQUFhO1lBQ3JFO1lBQ0EsQ0FBQTFCLEtBQU0sR0FBK0IsSUFBSVQsTUFBQSxDQUFBMkMsWUFBWSxDQUFDMUMsZUFBQSxDQUFBMkMsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSXBDLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVpQixLQUFLO1lBQzFCO1lBRUEsSUFBSW9CLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBckMsS0FBTSxDQUFDcUMsS0FBSyxJQUFJM0MsS0FBQSxDQUFBSyxXQUFXLENBQUNzQyxLQUFLO1lBQzdEO1lBQ0EsQ0FBQUMsbUJBQW9CLEdBQUcsSUFBSUMsR0FBRyxFQUFrQjtZQUVoREMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsSUFBSSxHQUFHQyxXQUFXLENBQUNDLEdBQUcsRUFBRTtjQUU3QixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2NBQzVEbEQsS0FBQSxDQUFBSyxXQUFXLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBOUMsS0FBTSxDQUFDNkMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNFLFdBQVcsQ0FBQztZQUMzQztZQUVBQSxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUNsQixJQUFJLENBQUNELFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUIsQ0FBQztZQUVEeEUsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWSxLQUFNLEdBQUc4RCxTQUFTO2NBQ3ZCLEtBQUssQ0FBQ1gsS0FBSyxHQUFHLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLENBQUFuQyxZQUFhLEdBQUc4QyxTQUFTO2NBQzlCLElBQUksQ0FBQ0YsWUFBWSxFQUFFO2NBQ25CeEQsV0FBQSxDQUFBMkQsWUFBWSxDQUFDQyxLQUFLLEVBQUU7WUFDckI7WUFFQUMsaUJBQWlCQSxDQUFBO2NBQ2hCLElBQUksQ0FBQyxDQUFBakQsWUFBYSxHQUFHOEMsU0FBUztjQUM5QixJQUFJLENBQUNGLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7WUFFQSxNQUFNNUUsSUFBSUEsQ0FBQ2UsRUFBVztjQUNyQixJQUFJO2dCQUNILElBQUlBLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQUMsS0FBTSxFQUFFRCxFQUFFLEtBQUtBLEVBQUUsRUFBRTtrQkFDakM7O2dCQUdELE1BQU1tRSxLQUFLLEdBQUc7a0JBQUVDLElBQUksRUFBRSxPQUFPO2tCQUFFcEU7Z0JBQUUsQ0FBRTtnQkFDbkMsSUFBSSxDQUFDLENBQUFDLEtBQU0sR0FBRyxNQUFNQyxnQkFBQSxDQUFBbUUsY0FBYyxDQUFDakYsR0FBRyxDQUFDK0UsS0FBSyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsQ0FBQWxFLEtBQU0sQ0FBQzJELEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxDQUFBN0MsS0FBTSxHQUFHLENBQUMsQ0FBQ2hCLEVBQUU7Z0JBRWxCSyxXQUFBLENBQUEyRCxZQUFZLENBQUNNLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQXJFLEtBQU0sRUFBRSxJQUFJLENBQUM7Z0JBQ3hDSSxXQUFBLENBQUEyRCxZQUFZLENBQUNPLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFBdkQsS0FBTTtnQkFFNUMsS0FBSyxDQUFDb0MsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ1MsWUFBWSxFQUFFO2VBQ25CLENBQUMsT0FBT1csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjtZQUVBRyxRQUFRQSxDQUFBO2NBQ1A7WUFBQTtZQUdELE1BQU1DLElBQUlBLENBQUNULEtBQTBCO2NBQ3BDLElBQUksQ0FBQ1UsVUFBVSxHQUFHLElBQUk7Y0FFdEJ4RSxXQUFBLENBQUEyRCxZQUFZLENBQUNNLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQXJFLEtBQU0sRUFBRSxJQUFJLENBQUM7Y0FDeEMsTUFBTSxJQUFJLENBQUNBLEtBQUssQ0FBQzZFLFNBQVMsQ0FBQ1gsS0FBSyxDQUFDO2NBRWpDLElBQUksQ0FBQ1UsVUFBVSxHQUFHLEtBQUs7Y0FDdkIsSUFBSSxDQUFDLENBQUE3RCxLQUFNLEdBQUcsSUFBSTtjQUNsQlgsV0FBQSxDQUFBMkQsWUFBWSxDQUFDTyxpQkFBaUIsR0FBRyxJQUFJO2NBQ3JDLE9BQU8sSUFBSSxDQUFDLENBQUF0RSxLQUFNO1lBQ25CO1lBRUEsTUFBTThFLEtBQUtBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQTlFLEtBQU0sQ0FBQytFLFVBQVUsQ0FBQ0QsS0FBSyxFQUFFO2NBQzlCLElBQUksQ0FBQyxDQUFBL0QsS0FBTSxHQUFHK0MsU0FBUztjQUN2QixJQUFJLENBQUNrQixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUE7Ozs7Ozs7WUFPQSxNQUFNQyx3QkFBd0JBLENBQUM7Y0FBRXRDO1lBQVMsQ0FBeUI7Y0FDbEUsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQWpCLGNBQWUsR0FBRyxXQUFXO2dCQUNsQyxJQUFJLENBQUN3RCxtQkFBbUIsR0FBRyxJQUFJO2dCQUMvQixNQUFNQyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNuRixLQUFLLENBQUNpRix3QkFBd0IsQ0FBQztrQkFBRXRDO2dCQUFTLENBQUUsQ0FBQztnQkFDckUsSUFBSSxDQUFDLENBQUEzQixZQUFhLEdBQUdtRSxJQUFJO2dCQUV6QixJQUFJLENBQUN2QixZQUFZLENBQUMsUUFBUSxDQUFDO2VBQzNCLENBQUMsT0FBT1csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUE3QyxjQUFlLEdBQUdvQyxTQUFTO2dCQUNoQyxJQUFJLENBQUNvQixtQkFBbUIsR0FBRyxLQUFLOztZQUVsQztZQUVBLE1BQU1FLGlCQUFpQkEsQ0FBQztjQUFFekMsU0FBUztjQUFFM0I7WUFBWSxDQUFpRDtjQUNqRyxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBVSxjQUFlLEdBQUcsbUJBQW1CO2dCQUMxQyxJQUFJLENBQUN3RCxtQkFBbUIsR0FBRyxJQUFJO2dCQUUvQixNQUFNQyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNuRixLQUFLLENBQUNvRixpQkFBaUIsQ0FBQztrQkFBRXpDLFNBQVM7a0JBQUUzQjtnQkFBWSxDQUFFLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxDQUFBb0MsbUJBQW9CLENBQUNpQyxHQUFHLENBQUMxQyxTQUFTLEVBQUV3QyxJQUFJLENBQUN4QyxTQUFTLENBQUM7Z0JBQ3hELElBQUksQ0FBQzNDLEtBQUssQ0FBQzJFLElBQUk7Z0JBQ2YsSUFBSSxDQUFDLENBQUEzRSxLQUFNLENBQUMyQyxTQUFTLEdBQUd3QyxJQUFJLENBQUN4QyxTQUFTO2dCQUN0QyxJQUFJLENBQUMsQ0FBQTNCLFlBQWEsR0FBRzhDLFNBQVM7Z0JBQzlCO2dCQUNBLElBQUksQ0FBQyxDQUFBMUMsb0JBQXFCLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUN1QyxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUMzQixPQUFPLElBQUksQ0FBQyxDQUFBNUQsS0FBTSxDQUFDMkMsU0FBUztlQUM1QixDQUFDLE9BQU80QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUMsQ0FBQTdDLGNBQWUsR0FBR29DLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ29CLG1CQUFtQixHQUFHLEtBQUs7O1lBRWxDO1lBRUEsTUFBTUksd0JBQXdCQSxDQUFDcEIsS0FBMEI7Y0FDeEQsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQXhDLGNBQWUsR0FBRyxpQkFBaUI7Z0JBQ3hDLElBQUksQ0FBQzZELGFBQWEsR0FBRyxJQUFJO2dCQUN6QixNQUFNLElBQUksQ0FBQ3ZGLEtBQUssQ0FBQ3dGLG1CQUFtQixDQUFDO2tCQUFFLEdBQUd0QjtnQkFBSyxDQUFFLENBQUM7ZUFDbEQsQ0FBQyxPQUFPSyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUMsQ0FBQTdDLGNBQWUsR0FBR29DLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ3lCLGFBQWEsR0FBRyxLQUFLOztZQUU1QjtZQUVBLE1BQU1FLGdCQUFnQkEsQ0FBQzFGLEVBQVU7Y0FDaEMsSUFBSSxJQUFJLENBQUN1QixJQUFJLENBQUN2QixFQUFFLEtBQUtBLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUN1QixJQUFJOztjQUVqQixNQUFNb0UsR0FBRyxHQUFHLElBQUksQ0FBQ3BFLElBQUksQ0FBQ08sYUFBYSxDQUFDQyxLQUFLLENBQUM2RCxJQUFJLENBQUV4RCxJQUFTLElBQUtBLElBQUksQ0FBQ3BDLEVBQUUsS0FBS0EsRUFBRSxDQUFDO2NBRTdFLE9BQU8yRixHQUFHO1lBQ1g7WUFFQUUsUUFBUUEsQ0FBQztjQUFFQyxPQUFPO2NBQUUxQixJQUFJO2NBQUUyQixRQUFRLEdBQUc7WUFBSyxDQUF5QjtjQUNsRSxJQUFJLENBQUMsQ0FBQWxGLEtBQU0sR0FBRztnQkFBRWlGLE9BQU87Z0JBQUUxQixJQUFJO2dCQUFFMkI7Y0FBUSxDQUFFO2NBRXpDLElBQUksQ0FBQ2QsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUM5QjtZQUNBZSxVQUFVQSxDQUFBO2NBQ1QsSUFBSSxDQUFDLENBQUFuRixLQUFNLEdBQUdrRCxTQUFTO2NBQ3ZCLElBQUksQ0FBQ2tCLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDOUI7O1VBQ0EzRixPQUFBLENBQUFvQixZQUFBLEdBQUFBLFlBQUE7VUFFTSxNQUFNOUIsS0FBSyxHQUFBVSxPQUFBLENBQUFWLEtBQUEsR0FBRyxJQUFJOEIsWUFBWSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVQakMsU0FBVXVGLFFBQVFBLENBQUNDLEtBQWEsRUFBRUMsU0FBaUI7WUFDeEQsSUFBSUQsS0FBSyxDQUFDRSxNQUFNLElBQUlELFNBQVMsRUFBRSxPQUFPRCxLQUFLO1lBRTNDLElBQUlHLE9BQU8sR0FBR0gsS0FBSyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxFQUFFSCxTQUFTLENBQUM7WUFFdkM7WUFDQSxJQUFJRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDSSxJQUFJLENBQUNMLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLENBQUMsRUFBRTtjQUM1RCxNQUFNSyxTQUFTLEdBQUdOLEtBQUssQ0FBQ0ksS0FBSyxDQUFDSCxTQUFTLENBQUM7Y0FDeEMsTUFBTU0sY0FBYyxHQUFHRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUM7Y0FDcERMLE9BQU8sSUFBSUksY0FBYyxLQUFLLENBQUMsQ0FBQyxHQUFHRCxTQUFTLENBQUNGLEtBQUssQ0FBQyxDQUFDLEVBQUVHLGNBQWMsQ0FBQyxHQUFHRCxTQUFTOztZQUdsRixPQUFPLEdBQUdILE9BQU8sS0FBSztVQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBTSxLQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQStCLE1BQUEsR0FBQS9CLE9BQUE7VUFFTSxTQUFVcUksZ0JBQWdCQSxDQUFDekQsU0FBUyxFQUFFMEQsUUFBUTtZQUNuRCxNQUFNLENBQUN6RCxLQUFLLEVBQUUwRCxRQUFRLENBQUMsR0FBR0gsS0FBSyxDQUFDL0csUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNtQixLQUFLLEVBQUVnRyxRQUFRLENBQUMsR0FBR0osS0FBSyxDQUFDL0csUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1QytHLEtBQUssQ0FBQ0ssU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsVUFBVSxHQUFHLElBQUkzRyxNQUFBLENBQUEyQyxZQUFZLENBQUNFLFNBQVMsQ0FBQztjQUM5QyxNQUFNVSxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsSUFBSTdCLEtBQUssR0FBR2lGLFVBQVUsQ0FBQ2pGLEtBQUs7Z0JBQzVCK0UsUUFBUSxDQUFDL0UsS0FBSyxDQUFDO2dCQUNmOEUsUUFBUSxDQUFDRyxVQUFVLENBQUM3RCxLQUFLLENBQUM7Z0JBQzFCLElBQUk2RCxVQUFVLENBQUM3RCxLQUFLLEVBQUV5RCxRQUFRLENBQUM3RSxLQUFLLENBQUM7Y0FDdEMsQ0FBQztjQUNEaUYsVUFBVSxDQUFDckQsRUFBRSxDQUFDLFFBQVEsRUFBRUMsWUFBWSxDQUFDO2NBQ3JDQSxZQUFZLEVBQUU7Y0FDZCxPQUFPLE1BQUs7Z0JBQ1hvRCxVQUFVLENBQUNyRCxFQUFFLENBQUMsUUFBUSxFQUFFQyxZQUFZLENBQUM7Y0FDdEMsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixNQUFNcUQsT0FBTyxHQUFHOUQsS0FBSyxJQUFJLENBQUMsQ0FBQ3JDLEtBQUs7WUFDaEMsT0FBTyxDQUFDbUcsT0FBTyxFQUFFbkcsS0FBSyxDQUFDO1VBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBeEIsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUE0SSxNQUFBLEdBQUE1SSxPQUFBO1VBQ0EsSUFBQTZJLEdBQUEsR0FBQTdJLE9BQUE7VUFDTSxTQUFVOEksVUFBVUEsQ0FBQztZQUFFckksSUFBSTtZQUFFc0ksT0FBTztZQUFFdkc7VUFBSyxDQUFFO1lBQ2xELElBQUksQ0FBQy9CLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIrQixLQUFLLEdBQUdBLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQzFHLEtBQUs7WUFFekIsT0FDQ3RCLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNvSCxNQUFBLENBQUFLLFVBQVU7Y0FBQ3hJLElBQUk7Y0FBQ3lJLFdBQVcsRUFBRTFHLEtBQUssQ0FBQzJHLE1BQU07Y0FBRUMsU0FBUyxFQUFFTCxPQUFPO2NBQUVBLE9BQU8sRUFBRUE7WUFBTyxHQUMvRS9ILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGlCQUNDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxhQUFLZ0IsS0FBSyxDQUFDNkcsS0FBSyxDQUFNLEVBQ3RCckksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3FILEdBQUEsQ0FBQVMsT0FBTztjQUFDQyxPQUFPLEVBQUMsS0FBSztjQUFDQyxTQUFTLEVBQUM7WUFBSSxFQUFHLEVBQ3hDeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsWUFBSWdCLEtBQUssQ0FBQ2lILFdBQVcsQ0FBSyxDQUNsQixDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUF6SSxNQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQTRJLE1BQUEsR0FBQTVJLE9BQUE7VUFDQSxJQUFBNkksR0FBQSxHQUFBN0ksT0FBQTtVQUNNLFNBQVUwSixVQUFVQSxDQUFDO1lBQUVySixLQUFLO1lBQUVJLElBQUk7WUFBRXNJLE9BQU87WUFBRXZHO1VBQUssQ0FBRTtZQUN6RCxJQUFJLENBQUMvQixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU0sQ0FBQ2tKLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc1SSxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUM4RSxLQUFLLEVBQUUwRCxRQUFRLENBQUMsR0FBRzdJLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLEVBQUU7WUFDMUNtQixLQUFLLEdBQUdBLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ2MsS0FBSztZQUV6QixNQUFNVixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hRLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU12SixLQUFLLENBQUNxQixLQUFLLENBQUNxSSxVQUFVLEVBQUU7Z0JBQzlCaEIsT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPOUMsQ0FBQyxFQUFFO2dCQUNYNEQsUUFBUSxDQUFDckgsS0FBSyxDQUFDd0gsTUFBTSxDQUFDQyxTQUFTLENBQUM7ZUFDaEMsU0FBUztnQkFDVEwsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE9BQ0M1SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDb0gsTUFBQSxDQUFBc0IsWUFBWTtjQUNaekosSUFBSTtjQUNKK0ksU0FBUyxFQUFDLFVBQVU7Y0FDcEJXLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2tCQUFFMUcsS0FBSyxFQUFFbEIsS0FBSyxDQUFDMkgsT0FBTyxDQUFDQyxPQUFPO2tCQUFFQyxPQUFPLEVBQUU7Z0JBQVMsQ0FBRTtnQkFDN0RDLE1BQU0sRUFBRTtrQkFBRTVHLEtBQUssRUFBRWxCLEtBQUssQ0FBQzJILE9BQU8sQ0FBQ0csTUFBTTtrQkFBRUQsT0FBTyxFQUFFLFNBQVM7a0JBQUVFLFFBQVEsRUFBRTtnQkFBSTtlQUN6RTtjQUNEbkIsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCb0IsUUFBUSxFQUFFekIsT0FBTztjQUNqQkEsT0FBTyxFQUFFQTtZQUFPLEdBRWhCL0gsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGFBQUtnQixLQUFLLENBQUM2RyxLQUFLLENBQU0sRUFDdEJySSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDcUgsR0FBQSxDQUFBNEIsYUFBYTtjQUFDdEUsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDL0JuRixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDcUgsR0FBQSxDQUFBUyxPQUFPO2NBQUNDLE9BQU8sRUFBQyxLQUFLO2NBQUNDLFNBQVMsRUFBQztZQUFJLEVBQUcsRUFDeEN4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxZQUFJZ0IsS0FBSyxDQUFDaUgsV0FBVyxDQUFLLENBQ2xCLENBQ0s7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBekksTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUEwSyxNQUFBLEdBQUExSyxPQUFBO1VBQ0EsSUFBQTJLLFdBQUEsR0FBQTNLLE9BQUE7VUFFQSxJQUFBNEssT0FBQSxHQUFBNUssT0FBQTtVQUNBLElBQUE4QixXQUFBLEdBQUE5QixPQUFBO1VBUU87VUFBVSxTQUFVNkssUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRUMsTUFBTTtZQUFFLEdBQUdDO1VBQUssSUFBcUI7WUFBRUQsTUFBTSxFQUFFO1VBQUksQ0FBRTtZQUM3RyxNQUFNRSxXQUFXLEdBQUdGLE1BQU0sR0FBRyxNQUFNbEosV0FBQSxDQUFBMkQsWUFBWSxDQUFDMEYsYUFBYSxDQUFDSixPQUFPLENBQUMsR0FBR0EsT0FBTztZQUVoRixPQUNDL0osTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLFdBQUEsQ0FBQVMsTUFBTTtjQUFBLEdBQUtILEtBQUs7Y0FBRUksSUFBSSxFQUFFWCxNQUFBLENBQUFZLEtBQUssQ0FBQ0MsT0FBTztjQUFFUixPQUFPLEVBQUVHO1lBQVcsR0FDMURKLFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVVSxZQUFZQSxDQUFDO1lBQUVWLFFBQVE7WUFBRUMsT0FBTztZQUFFQyxNQUFNO1lBQUUsR0FBR0M7VUFBSyxJQUFxQjtZQUFFRCxNQUFNLEVBQUU7VUFBSSxDQUFFO1lBQ2pILE1BQU1FLFdBQVcsR0FBR0YsTUFBTSxHQUFHLE1BQU1sSixXQUFBLENBQUEyRCxZQUFZLENBQUMwRixhQUFhLENBQUNKLE9BQU8sQ0FBQyxHQUFHQSxPQUFPO1lBQ2hGLE9BQ0MvSixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDb0osT0FBQSxDQUFBYSxVQUFVO2NBQUEsR0FBS1IsS0FBSztjQUFFSSxJQUFJLEVBQUVYLE1BQUEsQ0FBQVksS0FBSyxDQUFDQyxPQUFPO2NBQUVSLE9BQU8sRUFBRUc7WUFBVyxHQUM5REosUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBOUosTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUEwTCxNQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFFQSxJQUFBNEwsYUFBQSxHQUFBNUwsT0FBQTtVQUNNLFNBQVV5SyxhQUFhQSxDQUFDO1lBQUVqSSxLQUFLO1lBQUUyRDtVQUFLLENBQWlEO1lBQzVGO1lBRUEsT0FBT25GLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNrSyxNQUFBLENBQUFHLEtBQUs7Y0FBQ3hCLE9BQU8sRUFBQztZQUFPLEdBQUU3SCxLQUFLLENBQUMyRCxLQUFLLENBQUMsQ0FBUztVQUNyRDtVQUVNLFNBQVUyRixhQUFhQSxDQUFDO1lBQzdCakcsSUFBSSxHQUFHLFNBQVM7WUFDaEIwQixPQUFPO1lBQ1BpQyxTQUFTO1lBQ1R1QyxJQUFJLEdBQUcsSUFBSTtZQUNYdEwsSUFBSSxHQUFHO1VBQUksQ0FPWDtZQUNBK0ksU0FBUyxHQUFHLGdDQUFnQzNELElBQUksR0FBRzJELFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckYsTUFBTSxDQUFDd0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2pMLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0sQ0FBQzZLLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUduTCxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QyxNQUFNO2NBQUVoQjtZQUFLLENBQUUsR0FBRyxJQUFBc0wsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNwQ3BMLE1BQUEsQ0FBQUksT0FBSyxDQUFDcUgsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDaEksSUFBSSxFQUFFO2dCQUNWMEwsUUFBUSxDQUFDM0csU0FBUyxDQUFDO2dCQUNuQnlHLFNBQVMsQ0FBQ3pHLFNBQVMsQ0FBQztnQkFDcEI7O2NBRUQsTUFBTTBHLEtBQUssR0FBR0csVUFBVSxDQUFDLE1BQUs7Z0JBQzdCLElBQUk1TCxJQUFJLEVBQUU7a0JBQ1R3TCxTQUFTLENBQUMsSUFBSSxDQUFDOztnQkFHaEI1TCxLQUFLLENBQUNvSCxVQUFVLEVBQUU7Y0FDbkIsQ0FBQyxFQUFFc0UsSUFBSSxDQUFDO2NBQ1JJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2NBRWYsT0FBTyxNQUFNSSxZQUFZLENBQUNKLEtBQUssQ0FBQztZQUNqQyxDQUFDLEVBQUUsQ0FBQzNFLE9BQU8sRUFBRTlHLElBQUksQ0FBQyxDQUFDO1lBRW5CLElBQUl1TCxNQUFNLElBQUksQ0FBQ3ZMLElBQUksRUFBRSxPQUFPLElBQUk7WUFFaEMsT0FDQ08sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ29LLGFBQUEsQ0FBQVcsTUFBTSxDQUFDQyxHQUFHO2NBQ1ZDLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYeEksUUFBUSxFQUFFLEdBQUc7a0JBQ2J5SSxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RDLENBQUMsRUFBRTtlQUNIO2NBQ0RDLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYeEksUUFBUSxFQUFFO2lCQUNWO2dCQUNEc0ksT0FBTyxFQUFFO2VBQ1Q7Y0FDRGxELFNBQVMsRUFBRUE7WUFBUyxHQUVuQmpDLE9BQU8sQ0FDSTtVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQSxJQUFBdkcsTUFBQSxHQUFBaEIsT0FBQTtVQUVBLElBQUEySyxXQUFBLEdBQUEzSyxPQUFBO1VBQ0EsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFRTSxTQUFVZ04sV0FBV0EsQ0FBQztZQUFFQyxXQUFXLEdBQUcsTUFBTTtZQUFFQyxRQUFRO1lBQUVDLFFBQVEsR0FBRyxLQUFLO1lBQUVDLFFBQVEsR0FBRztVQUFJLENBQWdCO1lBQzlHLE1BQU07Y0FBRTVLLEtBQUs7Y0FBRTZLLFVBQVU7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQTNCLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFekQsTUFBTW1CLFVBQVUsR0FBRy9LLEtBQUssQ0FBQzJILE9BQU8sQ0FBQzhDLFdBQVcsQ0FBQztZQUU3QyxPQUNDak0sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0U0TCxRQUFRLElBQ1JwTSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUNmLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQ1EsT0FBTyxFQUFFQSxDQUFBLEtBQU1zQyxVQUFVLENBQUNDLE9BQU8sR0FBRyxDQUFDO1lBQUMsR0FDdkU5SyxLQUFLLENBQUMySCxPQUFPLENBQUNxRCxJQUFJLENBRXBCLEVBQ0R4TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUN2RixJQUFJLEVBQUMsUUFBUTtjQUFDd0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ1UsT0FBTyxFQUFFbUMsUUFBUTtjQUFFQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRU0sTUFBTSxFQUFDO1lBQUksR0FDeEZGLFVBQVUsQ0FDSCxDQUNEO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUF2TSxNQUFBLEdBQUFoQixPQUFBO1VBTU0sU0FBVTBOLFVBQVVBLENBQUM7WUFBRTVDLFFBQVE7WUFBRTZDLEdBQUcsR0FBRztVQUFNLENBQW1CO1lBQ3JFLE1BQU1DLE9BQU8sR0FBR0QsR0FBRztZQUNuQixPQUFPM00sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ29NLE9BQU87Y0FBQ0MsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRWhEO2NBQVE7WUFBRSxFQUFJO1VBQ2xFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RNLFNBQVVpRCxVQUFVQSxDQUFDdkwsS0FBSztZQUMvQixPQUFPO2NBQ04yQixRQUFRLEVBQUUsQ0FDVCxDQUFDM0IsS0FBSyxDQUFDMkIsUUFBUSxDQUFDNkosTUFBTSxFQUFFeEwsS0FBSyxDQUFDMkIsUUFBUSxDQUFDNkosTUFBTSxDQUFDLEVBQzlDLENBQUN4TCxLQUFLLENBQUMyQixRQUFRLENBQUM4SixVQUFVLEVBQUV6TCxLQUFLLENBQUMyQixRQUFRLENBQUM4SixVQUFVLENBQUMsRUFDdEQsQ0FBQ3pMLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQytKLE9BQU8sRUFBRTFMLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQytKLE9BQU8sQ0FBQyxDQUNoRDtjQUNEOUosUUFBUSxFQUFFLENBQ1QsQ0FBQyxJQUFJLEVBQUU1QixLQUFLLENBQUM0QixRQUFRLENBQUMrSixLQUFLLENBQUMsRUFDNUIsQ0FBQyxJQUFJLEVBQUUzTCxLQUFLLENBQUM0QixRQUFRLENBQUNnSyxRQUFRLENBQUMsRUFDL0IsQ0FBQyxJQUFJLEVBQUU1TCxLQUFLLENBQUM0QixRQUFRLENBQUNpSyxRQUFRLENBQUMsQ0FDL0I7Y0FDRDlKLFFBQVEsRUFBRSxDQUNULENBQUMsSUFBSSxFQUFFL0IsS0FBSyxDQUFDOEwsU0FBUyxDQUFDQyxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUUvTCxLQUFLLENBQUM4TCxTQUFTLENBQUNFLEVBQUUsQ0FBQyxFQUMxQixDQUFDLElBQUksRUFBRWhNLEtBQUssQ0FBQzhMLFNBQVMsQ0FBQ0csRUFBRSxDQUFDLEVBQzFCLENBQUMsSUFBSSxFQUFFak0sS0FBSyxDQUFDOEwsU0FBUyxDQUFDSSxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUVsTSxLQUFLLENBQUM4TCxTQUFTLENBQUNLLEVBQUUsQ0FBQzthQUUzQjtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBM04sTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUEySyxXQUFBLEdBQUEzSyxPQUFBO1VBQ0EsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBNE8sUUFBQSxHQUFBNU8sT0FBQTtVQUNNLFNBQVU2TyxXQUFXQSxDQUFDO1lBQUUvSyxJQUFJO1lBQUVnTCxRQUFRO1lBQUVwTCxLQUFLO1lBQUVPLFFBQVEsR0FBRztVQUFDLENBQUU7WUFDbEUsTUFBTTtjQUFFekIsS0FBSztjQUFFbkM7WUFBSyxDQUFFLEdBQUcsSUFBQXNMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTWUsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRTlNLEtBQUssQ0FBQ3NKLFFBQVEsSUFBSXRKLEtBQUssQ0FBQ3FCLEtBQUssQ0FBQ2lJO1lBQVEsQ0FBRTtZQUNyRSxNQUFNOUMsSUFBSSxHQUFHLElBQUErSCxRQUFBLENBQUFiLFVBQVUsRUFBQ3ZMLEtBQUssQ0FBQztZQUU5QixNQUFNdU0sTUFBTSxHQUFHbEksSUFBSSxDQUFDL0MsSUFBSSxDQUFDLENBQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUNILEtBQUssRUFBRUMsS0FBSyxDQUFDLEVBQUVzTCxLQUFLLEtBQ25EaE8sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLFdBQUEsQ0FBQVMsTUFBTTtjQUFDdEgsSUFBSSxFQUFFQSxJQUFJO2NBQUEsR0FBTXFKLFFBQVE7Y0FBQSxjQUFjNkIsS0FBSztjQUFFakUsT0FBTyxFQUFFK0QsUUFBUTtjQUFFRyxHQUFHLEVBQUVELEtBQUs7Y0FBRXZMLEtBQUssRUFBRUE7WUFBSyxHQUM5RkMsS0FBSyxDQUVQLENBQUM7WUFFRixPQUNDMUMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBS2dJLFNBQVMsRUFBQztZQUF5QixHQUN2Q3hJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU8wTixPQUFPLEVBQUVwTDtZQUFJLEdBQUdKLEtBQUssQ0FBUyxFQUNyQzFDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNtSixXQUFBLENBQUF3RSxXQUFXO2NBQUNsTCxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNa0o7WUFBUSxHQUMzQzRCLE1BQU0sQ0FDTSxDQUNUO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUEvTixNQUFBLEdBQUFoQixPQUFBO1VBc0JPLE1BQU1vUCxhQUFhLEdBQUFyTyxPQUFBLENBQUFxTyxhQUFBLEdBQUdwTyxNQUFBLENBQUFJLE9BQUssQ0FBQ2lPLGFBQWEsQ0FBQyxFQUFtQixDQUFDO1VBQzlELE1BQU1qRCxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNcEwsTUFBQSxDQUFBSSxPQUFLLENBQUNrTyxVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDck8sT0FBQSxDQUFBcUwsZ0JBQUEsR0FBQUEsZ0JBQUE7VUFTL0QsTUFBTW1ELHNCQUFzQixHQUFBeE8sT0FBQSxDQUFBd08sc0JBQUEsR0FBR3ZPLE1BQUEsQ0FBQUksT0FBSyxDQUFDaU8sYUFBYSxDQUFDLEVBQXdCLENBQUM7VUFDNUUsTUFBTUcseUJBQXlCLEdBQUdBLENBQUEsS0FBTXhPLE1BQUEsQ0FBQUksT0FBSyxDQUFDa08sVUFBVSxDQUFDQyxzQkFBc0IsQ0FBQztVQUFDeE8sT0FBQSxDQUFBeU8seUJBQUEsR0FBQUEseUJBQUE7VUFPakYsTUFBTUMsa0JBQWtCLEdBQUExTyxPQUFBLENBQUEwTyxrQkFBQSxHQUFHek8sTUFBQSxDQUFBSSxPQUFLLENBQUNpTyxhQUFhLENBQUMsRUFBMEIsQ0FBQztVQUMxRSxNQUFNSyxxQkFBcUIsR0FBR0EsQ0FBQSxLQUFNMU8sTUFBQSxDQUFBSSxPQUFLLENBQUNrTyxVQUFVLENBQUNHLGtCQUFrQixDQUFDO1VBQUMxTyxPQUFBLENBQUEyTyxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q2hGLElBQUExTyxNQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQTRMLGFBQUEsR0FBQTVMLE9BQUE7VUFFTSxTQUFVMlAsV0FBV0EsQ0FBQztZQUFFN0UsUUFBUTtZQUFFOEU7VUFBRyxJQUF5QjtZQUFFOUUsUUFBUSxFQUFFLElBQUk7WUFBRThFLEdBQUcsRUFBRTtVQUFFLENBQUU7WUFDOUYsT0FDQzVPLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNvSyxhQUFBLENBQUFXLE1BQU0sQ0FBQ0MsR0FBRztjQUNWaEQsU0FBUyxFQUFDLHNCQUFzQjtjQUNoQ2lELE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYeEksUUFBUSxFQUFFLEdBQUc7a0JBQ2J5SSxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RDLENBQUMsRUFBRTtlQUNIO2NBQ0RDLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYeEksUUFBUSxFQUFFO2lCQUNWO2dCQUNEc0ksT0FBTyxFQUFFOztZQUNULEdBRUE1QixRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQTlKLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBNEksTUFBQSxHQUFBNUksT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQTZQLE1BQUEsR0FBQTdQLE9BQUE7VUFDQSxJQUFBMkssV0FBQSxHQUFBM0ssT0FBQTtVQU9PO1VBQVUsU0FBVThQLGlCQUFpQkEsQ0FBQztZQUFFL0csT0FBTztZQUFFSztVQUFTLENBQVU7WUFDMUUsSUFBSTtjQUFFL0ksS0FBSztjQUFFbUMsS0FBSztjQUFFZ0M7WUFBTSxDQUFFLEdBQUcsSUFBQW1ILFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDakQsTUFBTTtjQUFFcEk7WUFBSyxDQUFFLEdBQUdRLE1BQU07WUFDeEIsTUFBTTtjQUFFakM7WUFBVyxDQUFFLEdBQUdsQyxLQUFLO1lBQzdCbUMsS0FBSyxHQUFHQSxLQUFLLENBQUN1TixLQUFLLENBQUNDLFlBQVk7WUFDaEMsTUFBTUMsV0FBVyxHQUFHMU4sV0FBVyxDQUFDNEgsT0FBTztZQUN2QyxNQUFNckcsSUFBSSxHQUFHRSxLQUFLLENBQUNnQixXQUFXLENBQUNsQixJQUFJLEtBQUssTUFBTSxHQUFHRSxLQUFLLENBQUNMLFdBQVcsR0FBR0ssS0FBSyxDQUFDRixJQUFJO1lBQy9FLE9BQ0M5QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDb0gsTUFBQSxDQUFBc0gsS0FBSztjQUFDelAsSUFBSTtjQUFDK0ksU0FBUyxFQUFDLHlCQUF5QjtjQUFDVCxPQUFPLEVBQUVBO1lBQU8sR0FDL0QvSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxjQUNDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxpQkFDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsYUFBS2dCLEtBQUssQ0FBQzZHLEtBQUssQ0FBTSxFQUN0QnJJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGVBQU9nQixLQUFLLENBQUMyTixRQUFRLENBQVEsQ0FDckIsRUFDVG5QLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBaUIsR0FDL0J4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDcU8sTUFBQSxDQUFBTyxVQUFVO2NBQUNwTSxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM1QmhELE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBWSxHQUMxQnhJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGFBQUtzQyxJQUFJLENBQU0sRUFDZjlDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGVBQU9nQixLQUFLLENBQUM2TixnQkFBZ0IsQ0FBUSxDQUNoQyxDQUNELEVBQ05yUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0ksU0FBUyxFQUFDO1lBQStCLEdBQzdDeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsZUFBT2dCLEtBQUssQ0FBQ2lILFdBQVcsQ0FBUSxDQUMzQixFQUNOekksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBU2dJLFNBQVMsRUFBQztZQUFvQixHQUN0Q3hJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNtSixXQUFBLENBQUFTLE1BQU07Y0FBQ2YsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDUSxPQUFPLEVBQUVoQztZQUFPLEdBQ2pEa0gsV0FBVyxDQUFDM0YsTUFBTSxDQUNYLEVBQ1R0SixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUNmLE9BQU8sRUFBQyxTQUFTO2NBQUNVLE9BQU8sRUFBRTNCO1lBQVMsR0FDMUM2RyxXQUFXLENBQUNLLFFBQVEsQ0FDYixDQUNBLENBQ0wsQ0FDQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBbEksS0FBQSxHQUFBcEksT0FBQTtVQUNBLElBQUF1USxNQUFBLEdBQUF2USxPQUFBO1VBQ0EsSUFBQTZJLEdBQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBMkwsUUFBQSxHQUFBM0wsT0FBQTtVQUVBLElBQUFnQyxlQUFBLEdBQUFoQyxPQUFBO1VBRUEsSUFBQXdRLENBQUEsR0FBQXhRLE9BQUE7VUFFTztVQUFVLFNBQ1J5USxjQUFjQSxDQUFDO1lBQUVwUSxLQUFLO1lBQUVNO1VBQUcsQ0FBcUM7WUFDeEUsTUFBTSxDQUFDK1AsVUFBVSxFQUFFbE8sS0FBSyxDQUFDLEdBQUcsSUFBQStOLE1BQUEsQ0FBQUksUUFBUSxFQUFDM08sZUFBQSxDQUFBMkMsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDK0UsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3hCLEtBQUssQ0FBQy9HLFFBQVEsQ0FBQ2hCLEtBQUssQ0FBQ3NKLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNpSCxXQUFXLENBQUMsR0FBR3hJLEtBQUssQ0FBQy9HLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxHQUFHd1AsVUFBVSxDQUFDLEdBQUd6SSxLQUFLLENBQUMvRyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQ2lNLE9BQU8sRUFBRUQsVUFBVSxDQUFDLEdBQUdqRixLQUFLLENBQUMvRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ21ELE1BQU0sRUFBRXNNLFNBQVMsQ0FBQyxHQUFHMUksS0FBSyxDQUFDL0csUUFBUSxDQUFzQjtjQUFFLEdBQUdoQixLQUFLLENBQUNtRTtZQUFNLENBQUUsQ0FBQztZQUNwRixNQUFNLENBQUMyQixLQUFLLEVBQUUwRCxRQUFRLENBQUMsR0FBR3pCLEtBQUssQ0FBQy9HLFFBQVEsRUFBVTtZQUNsRCxNQUFNLENBQUMwUCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHNUksS0FBSyxDQUFDL0csUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNO2NBQUU4SjtZQUFhLENBQUUsR0FBRyxJQUFBUSxRQUFBLENBQUE2RCx5QkFBeUIsR0FBRTtZQUNyRCxJQUFBZSxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDNVEsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QndRLFVBQVUsQ0FBQyxFQUFFLENBQUM7Y0FDZGpILFdBQVcsQ0FBQ3ZKLEtBQUssRUFBRXNKLFFBQVEsQ0FBQztZQUM3QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUMrRyxVQUFVLElBQUksQ0FBQ3JRLEtBQUssQ0FBQ3dFLEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQzlDLE1BQU1pSyxRQUFRLEdBQUlvQyxLQUEwQyxJQUFJO2NBQy9ESixTQUFTLENBQUM7Z0JBQUUsR0FBR3RNLE1BQU07Z0JBQUUsQ0FBQzBNLEtBQUssQ0FBQ0MsYUFBYSxDQUFDck4sSUFBSSxHQUFHb04sS0FBSyxDQUFDQyxhQUFhLENBQUMxTixLQUFLO2dCQUFFMk4sT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQy9GLENBQUM7WUFFRCxNQUFNM04sS0FBSyxHQUFHO2NBQ2JwRCxLQUFLO2NBQ0x5TyxRQUFRO2NBQ1J0TSxLQUFLO2NBQ0xvTyxXQUFXO2NBQ1h0RCxPQUFPO2NBQ1BELFVBQVU7Y0FDVjNLLFlBQVksRUFBRXJDLEtBQUssQ0FBQ3FDLFlBQVk7Y0FDaEN5RCxLQUFLO2NBQ0xnRixhQUFhO2NBQ2J0QixRQUFRO2NBQ1JGLFFBQVEsRUFBRUEsUUFBUSxJQUFJb0gsVUFBVTtjQUNoQ0MsYUFBYTtjQUNidk8sS0FBSyxFQUFFcEMsS0FBSyxDQUFDb0MsS0FBSztjQUNsQitCLE1BQU07Y0FDTnNNO2FBQ0E7WUFDRCxNQUFNbEIsR0FBRyxHQUFHLEdBQUdqRyxRQUFRLEdBQUcsYUFBYSxHQUFHLEVBQUUsRUFBRTtZQUU5QyxPQUNDdkIsS0FBQSxDQUFBNUcsYUFBQSxDQUFBNEcsS0FBQSxDQUFBaUosUUFBQSxRQUNDakosS0FBQSxDQUFBNUcsYUFBQSxDQUFDbUssUUFBQSxDQUFBeUQsYUFBYSxDQUFDa0MsUUFBUTtjQUFDN04sS0FBSyxFQUFFQTtZQUFLLEdBQ25DMkUsS0FBQSxDQUFBNUcsYUFBQSxDQUFDcUgsR0FBQSxDQUFBMEksYUFBYTtjQUFDL0gsU0FBUyxFQUFFb0csR0FBRztjQUFFakcsUUFBUSxFQUFFQSxRQUFRLElBQUksQ0FBQyxDQUFDdEosS0FBSyxDQUFDcUIsS0FBSyxFQUFFK0UsVUFBVSxDQUFDb0I7WUFBTSxHQUNwRk8sS0FBQSxDQUFBNUcsYUFBQSxDQUFDZ1AsQ0FBQSxDQUFBZ0IsU0FBUyxPQUFHLENBQ0UsQ0FDUSxDQUN2QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBeFEsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUF5UixZQUFBLEdBQUF6UixPQUFBO1VBQ0EsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFHTSxTQUFVMFIsYUFBYUEsQ0FBQztZQUFFdkU7VUFBUSxDQUFFO1lBQ3pDLE1BQU07Y0FDTDNLLEtBQUssRUFBRTtnQkFBRTJCLFFBQVEsRUFBRTNCO2NBQUssQ0FBRTtjQUMxQkEsS0FBSyxFQUFFO2dCQUFFbVAsYUFBYSxFQUFFQztjQUFJLENBQUU7Y0FDOUJ2UjtZQUFLLENBQ0wsR0FBRyxJQUFBc0wsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNO2NBQUUwRSxTQUFTO2NBQUV0TTtZQUFNLENBQUUsR0FBRyxJQUFBbUgsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUVoRCxJQUFJbkksUUFBUSxHQUFHO2NBQUVSLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRWxCLEtBQUssQ0FBQ21GLEtBQUssQ0FBQ2tLO1lBQU0sQ0FBRTtZQUN2RCxNQUFNL0MsUUFBUSxHQUFJb0MsS0FBMkMsSUFDNURKLFNBQVMsQ0FBRXRNLE1BQTJCLElBQUk7Y0FDekMsT0FBTztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFTCxRQUFRLEVBQUUrTSxLQUFLLENBQUNZLE1BQU0sQ0FBQ3JPO2NBQUssQ0FBRTtZQUNuRCxDQUFDLENBQUM7WUFDSCxNQUFNc08sT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ3pQLEtBQUssQ0FBQzBQLFNBQVMsQ0FBQyxDQUFDdE8sR0FBRyxDQUFDdU8sSUFBSSxJQUFHO2NBQ3ZEbE8sUUFBUSxHQUFHa08sSUFBSSxLQUFLM04sTUFBTSxDQUFDTCxRQUFRLEdBQUc7Z0JBQUVWLEtBQUssRUFBRTBPLElBQUk7Z0JBQUV6TyxLQUFLLEVBQUVsQixLQUFLLENBQUMwUCxTQUFTLENBQUNDLElBQUk7Y0FBQyxDQUFFLEdBQUdsTyxRQUFRO2NBQzlGLE9BQU87Z0JBQUVSLEtBQUssRUFBRTBPLElBQUk7Z0JBQUV6TyxLQUFLLEVBQUVsQixLQUFLLENBQUMwUCxTQUFTLENBQUNDLElBQUk7Y0FBQyxDQUFFO1lBQ3JELENBQUMsQ0FBQztZQUVGLE1BQU1DLFVBQVUsR0FBRztjQUFFQSxVQUFVLEVBQUUvUixLQUFLLENBQUNvQyxLQUFLLElBQUkwSztZQUFRLENBQUU7WUFFMUQsT0FDQ25NLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGNBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU8wTixPQUFPLEVBQUM7WUFBRSxHQUFFMU0sS0FBSyxDQUFDbUYsS0FBSyxDQUFDakUsS0FBSyxDQUFTLEVBQzdDMUMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2lRLFlBQUEsQ0FBQVksV0FBVztjQUNYdk8sSUFBSSxFQUFDLFVBQVU7Y0FDZkwsS0FBSyxFQUFFZSxNQUFNLENBQUNMLFFBQVE7Y0FDdEJtTyxXQUFXLEVBQUU5UCxLQUFLLENBQUNtRixLQUFLLENBQUNrSyxNQUFNO2NBQy9CRSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJqRCxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkc0Q7WUFBVSxFQUNiLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQXBSLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBeVIsWUFBQSxHQUFBelIsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBRU0sU0FBVXVTLGFBQWFBLENBQUM7WUFBRXBGO1VBQVEsQ0FBRTtZQUN6QyxNQUFNO2NBQUUzSyxLQUFLO2NBQUVuQyxLQUFLO2NBQUV5UTtZQUFTLENBQUUsR0FBRyxJQUFBbkYsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUV0RCxNQUFNMEMsUUFBUSxHQUFJb0MsS0FBMkMsSUFDNURKLFNBQVMsQ0FBRXRNLE1BQTJCLEtBQU07Y0FBRSxHQUFHQSxNQUFNO2NBQUVELFFBQVEsRUFBRTJNLEtBQUssQ0FBQ1ksTUFBTSxDQUFDck87WUFBSyxDQUFFLENBQUMsQ0FBQztZQUMxRixNQUFNc08sT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDbk8sR0FBRyxDQUFDQyxJQUFJLEtBQUs7Y0FBRUosS0FBSyxFQUFFSSxJQUFJO2NBQUVILEtBQUssRUFBRWxCLEtBQUssQ0FBQzhMLFNBQVMsQ0FBQ3pLLElBQUk7WUFBQyxDQUFFLENBQUMsQ0FBQztZQUN6RixNQUFNdU8sVUFBVSxHQUFHO2NBQUVBLFVBQVUsRUFBRS9SLEtBQUssQ0FBQ29DLEtBQUssSUFBSTBLO1lBQVEsQ0FBRTtZQUUxRCxPQUNDbk0sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsY0FDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBTzBOLE9BQU8sRUFBQztZQUFFLEdBQUUxTSxLQUFLLENBQUM4TCxTQUFTLENBQUN1RCxNQUFNLENBQUNuTyxLQUFLLENBQVMsRUFDeEQxQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDaVEsWUFBQSxDQUFBWSxXQUFXO2NBQ1hDLFdBQVcsRUFBRTlQLEtBQUssQ0FBQzhMLFNBQVMsQ0FBQ3VELE1BQU0sQ0FBQ1MsV0FBVztjQUMvQzdPLEtBQUssRUFBRXBELEtBQUssQ0FBQ3FCLEtBQUssQ0FBQzZDLFFBQVE7Y0FDM0JULElBQUksRUFBQyxVQUFVO2NBQ2ZpTyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJqRCxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkc0Q7WUFBVSxFQUNiLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQXBSLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBd1MsS0FBQSxHQUFBeFMsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQTRMLGFBQUEsR0FBQTVMLE9BQUE7VUFDQSxJQUFBMEwsTUFBQSxHQUFBMUwsT0FBQTtVQUNBLElBQUE2SSxHQUFBLEdBQUE3SSxPQUFBO1VBRU0sU0FBVXlTLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFak8sTUFBTTtjQUFFaEMsS0FBSztjQUFFc00sUUFBUTtjQUFFek87WUFBSyxDQUFFLEdBQUcsSUFBQXNMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFN0QsTUFBTXNHLFNBQVMsR0FBR2xRLEtBQUssQ0FBQ3VOLEtBQUssQ0FBQzRDLElBQUk7WUFFbEMsT0FDQzNSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNvSyxhQUFBLENBQUFnSCxlQUFlO2NBQUNDLElBQUksRUFBQztZQUFNLEdBQzNCN1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3FILEdBQUEsQ0FBQWlLLFFBQVE7Y0FBQ0MsRUFBRSxFQUFDLFNBQVM7Y0FBQ3ZRLEtBQUssRUFBRUEsS0FBSyxDQUFDbVAsYUFBYTtjQUFFN04sSUFBSSxFQUFDO1lBQVcsR0FDbEU5QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0ksU0FBUyxFQUFDO1lBQWtCLEdBQ2hDeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2dSLEtBQUEsQ0FBQVEsUUFBUTtjQUNSbEUsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCckwsS0FBSyxFQUFFZSxNQUFNLENBQUNILFNBQVM7Y0FDdkJQLElBQUksRUFBQyxXQUFXO2NBQ2hCd08sV0FBVyxFQUFFSSxTQUFTLENBQUNyTyxTQUFTLENBQUM0TyxRQUFRO2NBQ3pDQyxPQUFPO2NBQ1BDLFNBQVMsRUFBRTtZQUFHLEVBQ2IsRUFDRm5TLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNrSyxNQUFBLENBQUFJLGFBQWE7Y0FDYnJMLElBQUksRUFBRSxDQUFDLENBQUNKLEtBQUssQ0FBQ2lDLEtBQUssSUFBSWpDLEtBQUssQ0FBQ2lDLEtBQUssQ0FBQ2tGLFFBQVEsS0FBSyxXQUFXO2NBQzNEM0IsSUFBSSxFQUFDLFNBQVM7Y0FDZDJELFNBQVMsRUFBQyxrREFBa0Q7Y0FDNURqQyxPQUFPLEVBQUUvRSxLQUFLLENBQUN1TixLQUFLLENBQUNxRCxRQUFRLENBQUMvTTtZQUFJLEVBQ2pDLENBQ0csQ0FDSSxDQUNNO1VBRXBCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBckYsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUF5UixZQUFBLEdBQUF6UixPQUFBO1VBQ0EsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBNkksR0FBQSxHQUFBN0ksT0FBQTtVQUNBLElBQUFxVCxlQUFBLEdBQUFyVCxPQUFBO1VBQ00sU0FBVXNULGNBQWNBLENBQUM7WUFBRW5HO1VBQVEsSUFBNkIsRUFBRTtZQUN2RSxNQUFNO2NBQ0wzSyxLQUFLLEVBQUU7Z0JBQ051TixLQUFLLEVBQUU7a0JBQUU0QyxJQUFJLEVBQUVZO2dCQUFNO2NBQUUsQ0FDdkI7Y0FDRC9RLEtBQUssRUFBRTtnQkFBRW1QLGFBQWEsRUFBRUM7Y0FBSSxDQUFFO2NBQzlCdlI7WUFBSyxDQUNMLEdBQUcsSUFBQXNMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFMEUsU0FBUztjQUFFdE87WUFBSyxDQUFFLEdBQUcsSUFBQW1KLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDL0MsTUFBTTtjQUFFb0g7WUFBYSxDQUFFLEdBQUcsSUFBQTdILFFBQUEsQ0FBQTZELHlCQUF5QixHQUFFO1lBQ3JELE1BQU0sQ0FBQ3ZMLFFBQVEsRUFBRXdQLFdBQVcsQ0FBQyxHQUFHelMsTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsQ0FBTSxJQUFJLENBQUM7WUFDekQsTUFBTSxDQUFDcVMsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHM1MsTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsQ0FBdUM7Y0FDaEd1UyxPQUFPLEVBQUUsRUFBRTtjQUNYdkosT0FBTyxFQUFFO2FBQ1QsQ0FBQztZQUVGLElBQUl3SixhQUFhLEdBQUc7Y0FBRXBRLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRTZQLE1BQU0sQ0FBQ08sYUFBYSxDQUFDakM7WUFBTSxDQUFFO1lBQ3JFLElBQUl4UixLQUFLLENBQUNxQixLQUFLLENBQUNzQyxLQUFLLEVBQUU7Y0FDdEI2UCxhQUFhLEdBQUc7Z0JBQUVwUSxLQUFLLEVBQUVwRCxLQUFLLENBQUNxQixLQUFLLENBQUNzQyxLQUFLLENBQUN2QyxFQUFFO2dCQUFFaUMsS0FBSyxFQUFFckQsS0FBSyxDQUFDcUIsS0FBSyxDQUFDc0MsS0FBSyxDQUFDRjtjQUFJLENBQUU7O1lBRy9FLE1BQU1MLEtBQUssR0FBR3BELEtBQUssQ0FBQ3FCLEtBQUssQ0FBQ3NDLEtBQUssRUFBRXZDLEVBQUU7WUFDbkMsTUFBTXNTLEtBQUssR0FBRztjQUFFM0IsVUFBVSxFQUFFL1IsS0FBSyxDQUFDZ0QsVUFBVSxFQUFFd0UsTUFBTSxLQUFLLENBQUMsSUFBSXhILEtBQUssQ0FBQ29DLEtBQUssSUFBSTBLO1lBQVEsQ0FBRTtZQUV2RixNQUFNMkIsUUFBUSxHQUFHLE1BQU9vQyxLQUEwQyxJQUFJO2NBQ3JFeUMsaUJBQWlCLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxFQUFFO2dCQUFFdkosT0FBTyxFQUFFO2NBQUUsQ0FBRSxDQUFDO2NBQy9DbUosYUFBYSxDQUFDLElBQUksQ0FBQztjQUNuQixNQUFNeFAsS0FBSyxHQUFHLE1BQU0zRCxLQUFLLENBQUM4RyxnQkFBZ0IsQ0FBQytKLEtBQUssQ0FBQ1ksTUFBTSxDQUFDck8sS0FBSyxDQUFDO2NBRTlELElBQUlPLEtBQUssQ0FBQ2dCLFdBQVcsQ0FBQ2xCLElBQUksS0FBSyxjQUFjLEVBQUU7Z0JBQzlDLE1BQU1FLEtBQUssQ0FBQytGLFVBQVUsRUFBRTs7Y0FFekIwSixXQUFXLENBQUN6UCxLQUFLLENBQUM7Y0FFbEIsSUFBSUEsS0FBSyxDQUFDZ0YsS0FBSyxFQUFFZ0wsT0FBTyxLQUFLeE8sU0FBUyxFQUFFO2dCQUN2Q1UsT0FBTyxDQUFDQyxLQUFLLENBQUMsMkVBQTJFLENBQUM7Z0JBQzFGOztjQUVELE1BQU07Z0JBQUU4TjtjQUFLLENBQUUsR0FBR2pRLEtBQUssQ0FBQ2dGLEtBQUssQ0FBQ2dMLE9BQU87Y0FDckMsTUFBTVosUUFBUSxHQUFHNVEsS0FBSyxDQUFDMFIsTUFBTSxDQUFDbEwsS0FBSztjQUNuQyxNQUFNekIsT0FBTyxHQUFHME0sS0FBSyxHQUFHYixRQUFRLENBQUNlLFNBQVMsR0FBR2YsUUFBUSxDQUFDZ0IsV0FBVztjQUNqRSxNQUFNdk8sSUFBSSxHQUFHb08sS0FBSyxHQUFHLFNBQVMsR0FBRyxPQUFPO2NBQ3hDTixpQkFBaUIsQ0FBQztnQkFBRUMsT0FBTyxFQUFFck0sT0FBTztnQkFBRThDLE9BQU8sRUFBRXhFO2NBQUksQ0FBRSxDQUFDO2NBRXREaUwsU0FBUyxDQUFFdE0sTUFBVyxLQUFNO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVSO2NBQUssQ0FBRSxDQUFDLENBQUM7Y0FDbER3UCxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxPQUNDeFMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQVIsTUFBQSxDQUFBSSxPQUFBLENBQUFpUSxRQUFBLFFBQ0NyUSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDcUgsR0FBQSxDQUFBaUssUUFBUTtjQUFDdFEsS0FBSyxFQUFFb1AsSUFBSTtjQUFFOU4sSUFBSSxFQUFDLGVBQWU7Y0FBQ2lQLEVBQUUsRUFBQyxLQUFLO2NBQUN2SixTQUFTLEVBQUM7WUFBZSxHQUM3RXhJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBaUIsR0FDL0J4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFPME4sT0FBTyxFQUFDO1lBQUUsR0FBRXFFLE1BQU0sQ0FBQ08sYUFBYSxDQUFDcFEsS0FBSyxDQUFTLEVBQ3REMUMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2lRLFlBQUEsQ0FBQVksV0FBVztjQUNYNU8sS0FBSyxFQUFFQSxLQUFLO2NBQ1o2TyxXQUFXLEVBQUVpQixNQUFNLENBQUNPLGFBQWEsQ0FBQ2pDLE1BQU07Y0FDeEMvTixJQUFJLEVBQUMsT0FBTztjQUNaaU8sT0FBTyxFQUFFMVIsS0FBSyxDQUFDZ0QsVUFBVTtjQUN6QnlMLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RpRjtZQUFLLEVBQ1IsRUFDRi9TLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUM2UixlQUFBLENBQUFnQixjQUFjO2NBQUEsR0FBS1g7WUFBYyxFQUFJLENBQ2pDLENBQ0ksQ0FDVDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZFQSxJQUFBMVMsTUFBQSxHQUFBaEIsT0FBQTtVQVFBLE1BQU1zVSxlQUFlLEdBQTJCO1lBQy9DQyxPQUFPLEVBQUUsY0FBYztZQUN2QkMsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQkMsUUFBUSxFQUFFLGVBQWU7WUFDekJDLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCQyxJQUFJLEVBQUUsV0FBVztZQUNqQnhPLEtBQUssRUFBRSxZQUFZO1lBQ25CeU8sT0FBTyxFQUFFLGNBQWM7WUFDdkJ4VCxPQUFPLEVBQUU7V0FDVDtVQUVNO1VBQVUsU0FBVWlULGNBQWNBLENBQUM7WUFDekNULE9BQU87WUFDUHZKLE9BQU8sR0FBRyxTQUFTO1lBQ25CYixTQUFTLEdBQUcsRUFBRTtZQUNkLEdBQUdxTDtVQUFJLENBQ2M7WUFDckIsSUFBSSxDQUFDakIsT0FBTyxFQUFFLE9BQU8sSUFBSTtZQUN6QixNQUFNa0IsWUFBWSxHQUFHUixlQUFlLENBQUNqSyxPQUFPLENBQUMsSUFBSWlLLGVBQWUsQ0FBQ2xULE9BQU87WUFDeEUsTUFBTTJULGlCQUFpQixHQUFHLHVCQUF1QkQsWUFBWSxJQUFJdEwsU0FBUyxFQUFFLENBQUN3TCxJQUFJLEVBQUU7WUFFbkYsT0FDQ2hVLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUV1TCxpQkFBaUI7Y0FBQSxHQUFNRjtZQUFJLEdBQzFDN1QsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsZUFBT29TLE9BQU8sQ0FBUSxDQUNqQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBNVMsTUFBQSxHQUFBaEIsT0FBQTtVQUVBLElBQUE2UCxNQUFBLEdBQUE3UCxPQUFBO1VBQ0EsSUFBQTBLLE1BQUEsR0FBQTFLLE9BQUE7VUFFTztVQUFVLFNBQVVvUSxVQUFVQSxDQUFDO1lBQUVwTTtVQUFLLENBQWlEO1lBQzdGLElBQUksQ0FBQ0EsS0FBSyxFQUFFaVIsUUFBUSxFQUFFO2NBQ3JCLE9BQU9qVSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDa0osTUFBQSxDQUFBd0ssT0FBTztnQkFBQzdKLElBQUksRUFBQyxRQUFRO2dCQUFDN0IsU0FBUyxFQUFDO2NBQVcsRUFBRzs7WUFFdkQsT0FBT3hJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNxTyxNQUFBLENBQUFzRixLQUFLO2NBQUNDLEdBQUcsRUFBRXBSLEtBQUssQ0FBQ2lSLFFBQVE7Y0FBRXpMLFNBQVMsRUFBQztZQUFRLEVBQUc7VUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkEsSUFBQXBCLEtBQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBcVYsWUFBQSxHQUFBclYsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQTZJLEdBQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBc1YsU0FBQSxHQUFBdFYsT0FBQTtVQUNBLElBQUF1VixVQUFBLEdBQUF2VixPQUFBO1VBQ0EsSUFBQXdWLFVBQUEsR0FBQXhWLE9BQUE7VUFDQSxJQUFBeVYsUUFBQSxHQUFBelYsT0FBQTtVQUNBLElBQUEySyxXQUFBLEdBQUEzSyxPQUFBO1VBQ0EsSUFBQXdTLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBMFYsWUFBQSxHQUFBMVYsT0FBQTtVQUNBLElBQUEwTCxNQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTJWLFNBQUEsR0FBQTNWLE9BQUE7VUFFQSxJQUFBNFYsS0FBQSxHQUFBNVYsT0FBQTtVQUNBLElBQUE2VixPQUFBLEdBQUE3VixPQUFBO1VBQ0EsSUFBQThWLFFBQUEsR0FBQTlWLE9BQUE7VUFDQSxJQUFBdVEsTUFBQSxHQUFBdlEsT0FBQTtVQUNBLElBQUErVixrQkFBQSxHQUFBL1YsT0FBQTtVQUVNLFNBQVV3UixTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRWhOLE1BQU07Y0FBRXNNLFNBQVM7Y0FBRXpRLEtBQUs7Y0FBRW1DLEtBQUs7Y0FBRUMsS0FBSztjQUFFa0g7WUFBUSxDQUFFLEdBQUcsSUFBQWdDLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDL0UsTUFBTSxDQUFDM0wsSUFBSSxFQUFFdVYsT0FBTyxDQUFDLEdBQUc1TixLQUFLLENBQUMvRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU0wSCxPQUFPLEdBQUdBLENBQUEsS0FBTWlOLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDcEMsTUFBTXRTLEtBQUssR0FBR3JELEtBQUssQ0FBQ3FCLEtBQUssQ0FBQ3VVLEtBQUssSUFBSXhULEtBQUssR0FBR0QsS0FBSyxDQUFDMkgsT0FBTyxDQUFDbUcsUUFBUSxHQUFHOU4sS0FBSyxDQUFDMkgsT0FBTyxDQUFDOUQsSUFBSTtZQUN0RixNQUFNO2NBQUUvRSxHQUFHLEVBQUU0VTtZQUFPLENBQUUsR0FBRyxJQUFBck4sR0FBQSxDQUFBc04sYUFBYSxFQUFDLGlCQUFpQixFQUFFOVYsS0FBSyxDQUFDd0UsS0FBSyxFQUFFckMsS0FBSyxFQUFFbVAsYUFBYSxFQUFFeUUsT0FBTyxDQUFDO1lBQ3JHLE1BQU0sQ0FBQzlQLFVBQVUsRUFBRWtOLGFBQWEsQ0FBQyxHQUFHcEwsS0FBSyxDQUFDL0csUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNZ1YsV0FBVyxHQUFHLENBQUM3UixNQUFNLENBQUNSLEtBQUssSUFBSSxDQUFDUSxNQUFNLENBQUNMLFFBQVEsSUFBSSxDQUFDSyxNQUFNLENBQUNILFNBQVMsSUFBSSxDQUFDRyxNQUFNLENBQUNELFFBQVE7WUFDOUYsTUFBTTZOLFVBQVUsR0FBR2lFLFdBQVcsSUFBSS9QLFVBQVUsSUFBSWpHLEtBQUssQ0FBQ2lHLFVBQVU7WUFDaEUsTUFBTSxDQUFDZ1EsZ0JBQWdCLEVBQUVDLG1CQUFtQixDQUFDLEdBQUduTyxLQUFLLENBQUMvRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JFLElBQUFrUCxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDNVEsS0FBSyxDQUFDLEVBQUUsTUFBTW1ULGFBQWEsQ0FBQ25ULEtBQUssQ0FBQ3VHLG1CQUFtQixDQUFDLENBQUM7WUFFbEUsTUFBTTRQLG9CQUFvQixHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN2QyxNQUFNblcsS0FBSyxDQUFDZ0csSUFBSSxDQUFDO2dCQUFFLEdBQUc3QixNQUFNO2dCQUFFeVIsS0FBSyxFQUFFO2NBQVMsQ0FBRSxDQUFDO2NBQ2pENVYsS0FBSyxDQUFDNkMsVUFBVSxDQUFDdVQsUUFBUSxDQUFDL1MsS0FBSyxHQUFHLElBQUFrUyxLQUFBLENBQUFsTyxRQUFRLEVBQUNySCxLQUFLLENBQUNxQixLQUFLLENBQUMyQyxTQUFTLEVBQUUsRUFBRSxDQUFDO2NBQ3JFb1IsUUFBQSxDQUFBaUIsT0FBTyxDQUFDQyxZQUFZLENBQUMsRUFBRSxFQUFFblIsU0FBUyxFQUFFLDBCQUEwQm5GLEtBQUssQ0FBQ3FCLEtBQUssQ0FBQ0QsRUFBRSxFQUFFLENBQUM7Y0FDL0U4VSxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7Y0FDMUJsVyxLQUFLLENBQUNpSCxRQUFRLENBQUM7Z0JBQ2RDLE9BQU8sRUFBRS9FLEtBQUssQ0FBQ3VOLEtBQUssQ0FBQ3FELFFBQVEsQ0FBQy9NLElBQUk7Z0JBQ2xDbUIsUUFBUSxFQUFFO2VBQ1YsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNb1AsVUFBVSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QnBELGFBQWEsQ0FBQyxJQUFJLENBQUM7Y0FDbkIsSUFBSW5ULEtBQUssQ0FBQ3FCLEtBQUssQ0FBQ3VVLEtBQUssS0FBS3pSLE1BQU0sQ0FBQ3lSLEtBQUssSUFBSTVWLEtBQUssQ0FBQ3FCLEtBQUssQ0FBQzJDLFNBQVMsS0FBS0csTUFBTSxDQUFDSCxTQUFTLEVBQUU7Y0FDdEYsTUFBTXlNLFNBQVMsQ0FBQztnQkFBRSxHQUFHdE0sTUFBTTtnQkFBRTRNLE9BQU8sRUFBRTtjQUFLLENBQUUsQ0FBQztjQUU5QyxJQUFJL1EsS0FBSyxDQUFDcUIsS0FBSyxDQUFDdVUsS0FBSyxLQUFLLFNBQVMsRUFBRTtjQUVyQ00sbUJBQW1CLENBQUMsSUFBSSxDQUFDO2NBQ3pCL0MsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDO1lBRUQsTUFBTXRHLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxJQUFJNUcsVUFBVSxFQUFFO2dCQUVoQixNQUFNc1EsVUFBVSxFQUFFO2dCQUVsQixJQUFJblUsS0FBSyxJQUFJcEMsS0FBSyxDQUFDcUIsS0FBSyxDQUFDdVUsS0FBSyxLQUFLLFNBQVMsRUFBRTtrQkFDN0NELE9BQU8sQ0FBQyxJQUFJLENBQUM7a0JBQ2I7O2VBRUQsQ0FBQyxPQUFPL1AsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1R1TixhQUFhLENBQUMsS0FBSyxDQUFDOztZQUV0QixDQUFDO1lBRUQsTUFBTTVELEdBQUcsR0FBRyxnQ0FBZ0NqRyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUUsSUFBSXJELFVBQVUsR0FBRyxlQUFlLEdBQUcsRUFBRSxFQUFFO1lBQzdHLE1BQU11USxZQUFZLEdBQUd2USxVQUFVLEdBQUcsZUFBZSxHQUFHLEVBQUU7WUFFdEQsT0FDQzhCLEtBQUEsQ0FBQTVHLGFBQUE7Y0FBS0YsR0FBRyxFQUFFNFUsT0FBTztjQUFFMU0sU0FBUyxFQUFFcU47WUFBWSxHQUN6Q3pPLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQ2dSLEtBQUEsQ0FBQXNFLElBQUk7Y0FBQ3ROLFNBQVMsRUFBRW9HLEdBQUc7Y0FBRTFDLFFBQVEsRUFBRUE7WUFBUSxHQUN2QzlFLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQzZULFlBQUEsQ0FBQTFGLFdBQVcsUUFDWHZILEtBQUEsQ0FBQTVHLGFBQUE7Y0FBU2dJLFNBQVMsRUFBQztZQUFXLEdBQzdCcEIsS0FBQSxDQUFBNUcsYUFBQTtjQUFRZ0ksU0FBUyxFQUFDO1lBQW1CLEdBQ3BDcEIsS0FBQSxDQUFBNUcsYUFBQSxhQUFLZ0IsS0FBSyxDQUFDdU4sS0FBSyxDQUFDMUcsS0FBSyxDQUFNLENBQ3BCLEVBQ1RqQixLQUFBLENBQUE1RyxhQUFBLENBQUNrSyxNQUFBLENBQUFJLGFBQWE7Y0FDYmpHLElBQUksRUFBRXhGLEtBQUssQ0FBQ2lDLEtBQUssRUFBRXVELElBQUk7Y0FDdkIwQixPQUFPLEVBQUVsSCxLQUFLLENBQUNpQyxLQUFLLEVBQUVpRixPQUFPO2NBQzdCOUcsSUFBSSxFQUFFLENBQUMsQ0FBQ0osS0FBSyxDQUFDaUMsS0FBSyxJQUFJakMsS0FBSyxDQUFDaUMsS0FBSyxDQUFDa0YsUUFBUSxLQUFLLEtBQUs7Y0FDckRnQyxTQUFTLEVBQUM7WUFBYyxFQUN2QixFQUNGcEIsS0FBQSxDQUFBNUcsYUFBQTtjQUFTZ0ksU0FBUyxFQUFDO1lBQTZCLEdBQy9DcEIsS0FBQSxDQUFBNUcsYUFBQSxDQUFDK1QsVUFBQSxDQUFBakMsY0FBYztjQUFDbkcsUUFBUSxFQUFFN0c7WUFBVSxFQUFJLEVBQ3hDOEIsS0FBQSxDQUFBNUcsYUFBQSxDQUFDcUgsR0FBQSxDQUFBaUssUUFBUTtjQUNSdFEsS0FBSyxFQUFFQSxLQUFLLENBQUNtUCxhQUFhO2NBQzFCN04sSUFBSSxFQUFDLFlBQVk7Y0FDakJpUCxFQUFFLEVBQUMsS0FBSztjQUNSdkosU0FBUyxFQUFDO1lBQXNCLEdBRWhDcEIsS0FBQSxDQUFBNUcsYUFBQSxDQUFDbVUsU0FBQSxDQUFBcEQsYUFBYTtjQUFDcEYsUUFBUSxFQUFFN0c7WUFBVSxFQUFJLEVBQ3ZDOEIsS0FBQSxDQUFBNUcsYUFBQSxDQUFDOFQsU0FBQSxDQUFBNUQsYUFBYTtjQUFDdkUsUUFBUSxFQUFFN0c7WUFBVSxFQUFJLENBQzdCLENBQ0YsRUFFVjhCLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQ3FILEdBQUEsQ0FBQWlLLFFBQVE7Y0FDUkMsRUFBRSxFQUFDLFNBQVM7Y0FDWnZRLEtBQUssRUFBRUEsS0FBSyxDQUFDbVAsYUFBYTtjQUMxQjdOLElBQUksRUFBQyxXQUFXO2NBQ2hCMEYsU0FBUyxFQUFDO1lBQW1ELEdBRTdEcEIsS0FBQSxDQUFBNUcsYUFBQSxDQUFDZ1UsVUFBQSxDQUFBL0MsY0FBYyxPQUFHLENBQ1IsQ0FDRixFQUNWckssS0FBQSxDQUFBNUcsYUFBQSxDQUFDa1UsWUFBQSxDQUFBcUIsb0JBQW9CO2NBQUN2RCxhQUFhLEVBQUVBLGFBQWE7Y0FBRWxOLFVBQVUsRUFBRUE7WUFBVSxFQUFJLEVBQzlFOEIsS0FBQSxDQUFBNUcsYUFBQSxpQkFDQzRHLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQ3FVLE9BQUEsQ0FBQW1CLGlCQUFpQixPQUFHLEVBQ3JCNU8sS0FBQSxDQUFBNUcsYUFBQSxDQUFDcUgsR0FBQSxDQUFBaUssUUFBUTtjQUFDdFEsS0FBSyxFQUFFQSxLQUFLLENBQUNtUCxhQUFhO2NBQUU3TixJQUFJLEVBQUMsTUFBTTtjQUFDMEYsU0FBUyxFQUFDO1lBQXdCLEdBQ25GcEIsS0FBQSxDQUFBNUcsYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUN2RixJQUFJLEVBQUMsUUFBUTtjQUFDb1IsS0FBSztjQUFDOUosUUFBUSxFQUFFaUYsVUFBVTtjQUFFL0gsT0FBTyxFQUFDO1lBQVMsR0FDakUzRyxLQUFLLENBQ0UsQ0FDQyxDQUNILENBQ0ksRUFDZDBFLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQ3FILEdBQUEsQ0FBQXFPLGdCQUFnQjtjQUFDdk4sUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDbEMsRUFDUHZCLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQ3NVLFFBQUEsQ0FBQXFCLGlCQUFpQjtjQUFDMVcsSUFBSSxFQUFFQSxJQUFJO2NBQUVzSSxPQUFPLEVBQUVBO1lBQU8sRUFBSSxFQUNsRHVOLGdCQUFnQixJQUNoQmxPLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQ3VVLGtCQUFBLENBQUFqRyxpQkFBaUI7Y0FBQzFHLFNBQVMsRUFBRW9OLG9CQUFvQjtjQUFFek4sT0FBTyxFQUFFQSxDQUFBLEtBQU13TixtQkFBbUIsQ0FBQyxLQUFLO1lBQUMsRUFDN0YsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9IQSxJQUFBdlYsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBRUEsSUFBQW9YLFNBQUEsR0FBQXBYLE9BQUE7VUFDQSxJQUFBNkksR0FBQSxHQUFBN0ksT0FBQTtVQUNNLFNBQVVnWCxpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNO2NBQ0x4VSxLQUFLLEVBQUU7Z0JBQUUySCxPQUFPLEVBQUVrTixXQUFXO2dCQUFFLEdBQUc3VTtjQUFLLENBQUU7Y0FDekNuQyxLQUFLO2NBQ0xtRSxNQUFNO2NBQ04yRyxhQUFhO2NBQ2IxSTtZQUFLLENBQ0wsR0FBRyxJQUFBa0osUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNLENBQUNrTCxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUd2VyxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNbVcsVUFBVSxHQUFHQSxDQUFBLEtBQU1ELGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNRSxvQkFBb0IsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDdkMsSUFBSTtnQkFDSCxJQUFJLENBQUNwWCxLQUFLLENBQUNzQyxVQUFVLEVBQUU7a0JBQ3RCNFUsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2tCQUN2Qjs7Z0JBRUQsTUFBTWxYLEtBQUssQ0FBQ3NHLHdCQUF3QixDQUFDO2tCQUFFdEMsU0FBUyxFQUFFRyxNQUFNLENBQUNIO2dCQUFTLENBQUUsQ0FBQztlQUNyRSxDQUFDLE9BQU80QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxNQUFNeVIsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixJQUFJO2dCQUNILE1BQU1yWCxLQUFLLENBQUNxQixLQUFLLENBQUNpVyxZQUFZLEVBQUU7Z0JBQ2hDSixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLE1BQU1sWCxLQUFLLENBQUNzRyx3QkFBd0IsQ0FBQztrQkFBRXRDLFNBQVMsRUFBRUcsTUFBTSxDQUFDSDtnQkFBUyxDQUFFLENBQUM7ZUFDckUsQ0FBQyxPQUFPNEIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQsSUFBSTVGLEtBQUssQ0FBQ3FDLFlBQVksRUFBRSxPQUFPLElBQUk7WUFFbkMsT0FDQzFCLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUFSLE1BQUEsQ0FBQUksT0FBQSxDQUFBaVEsUUFBQSxRQUNDclEsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQzRWLFNBQUEsQ0FBQXZNLFFBQVE7Y0FBQ3NDLFFBQVEsRUFBRSxDQUFDMUssS0FBSztjQUFFdUksTUFBTSxFQUFFLEtBQUs7Y0FBRUQsT0FBTyxFQUFFME0sb0JBQW9CO2NBQUVwTixPQUFPLEVBQUMsU0FBUztjQUFDRSxRQUFRO1lBQUEsR0FDbEc4TSxXQUFXLENBQUNPLE9BQU8sQ0FDVixFQUNWTixjQUFjLElBQ2R0VyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDcUgsR0FBQSxDQUFBYSxVQUFVO2NBQ1YxRixLQUFLLEVBQUUzRCxLQUFLLENBQUNxQixLQUFLLEVBQUVzQyxLQUFLO2NBQ3pCdkQsSUFBSSxFQUFFNlcsY0FBYztjQUNwQnZPLE9BQU8sRUFBRXlPLFVBQVU7Y0FDbkJqVixXQUFXLEVBQUVsQyxLQUFLLENBQUNrQyxXQUFXO2NBQzlCbVYsU0FBUyxFQUFFQTtZQUFTLEVBRXJCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2REEsSUFBQTFXLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBMkwsUUFBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUF3VixVQUFBLEdBQUF4VixPQUFBO1VBRUEsSUFBQTZYLEtBQUEsR0FBQTdYLE9BQUE7VUFFTSxTQUFVK1csb0JBQW9CQSxDQUFDO1lBQ3BDelEsVUFBVTtZQUNWa047VUFBYSxDQUliO1lBQ0EsTUFBTTtjQUFFblQ7WUFBSyxDQUFFLEdBQUcsSUFBQXNMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTSxDQUFDMEwsaUJBQWlCLEVBQUVDLG9CQUFvQixDQUFDLEdBQUcvVyxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RTtZQUNBLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ3FDLFlBQVksSUFBSXJDLEtBQUssQ0FBQ3FDLFlBQVksQ0FBQ3NWLFVBQVUsRUFBRSxPQUFPLElBQUk7WUFDckUsTUFBTUMsWUFBWSxHQUFHO2NBQUVILGlCQUFpQjtjQUFFQyxvQkFBb0I7Y0FBRXpSLFVBQVU7Y0FBRWtOO1lBQWEsQ0FBRTtZQUMzRixPQUNDeFMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21LLFFBQUEsQ0FBQThELGtCQUFrQixDQUFDNkIsUUFBUTtjQUFDN04sS0FBSyxFQUFFd1U7WUFBWSxHQUMvQ2pYLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNnVSxVQUFBLENBQUEwQyxpQkFBaUIsT0FBRyxFQUNyQmxYLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNxVyxLQUFBLENBQUFNLGVBQWU7Y0FBQ2xCLEtBQUssRUFBRSxDQUFDYTtZQUFpQixFQUFJLENBQ2pCO1VBRWhDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBOVcsTUFBQSxHQUFBaEIsT0FBQTtVQUVBLElBQUEySyxXQUFBLEdBQUEzSyxPQUFBO1VBQ0EsSUFBQTZYLEtBQUEsR0FBQTdYLE9BQUE7VUFDQSxJQUFBMkwsUUFBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUFvWSxLQUFBLEdBQUFwWSxPQUFBO1VBRU0sU0FBVW1ZLGVBQWVBLENBQUM7WUFBRWxCO1VBQUssQ0FBRTtZQUN4QyxNQUFNO2NBQ0x6VSxLQUFLLEVBQUU7Z0JBQUU2VixXQUFXLEVBQUU3VixLQUFLO2dCQUFFMkgsT0FBTyxFQUFFa047Y0FBVyxDQUFFO2NBQ25EaFgsS0FBSztjQUNMbUUsTUFBTTtjQUNOL0IsS0FBSztjQUNMcU87WUFBUyxDQUNULEdBQUcsSUFBQW5GLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFMkw7WUFBb0IsQ0FBRSxHQUFHLElBQUFwTSxRQUFBLENBQUErRCxxQkFBcUIsR0FBRTtZQUN4RCxNQUFNLENBQUN6TCxRQUFRLEVBQUV3UCxXQUFXLENBQUMsR0FBR3pTLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQUMsSUFBSTBCLEdBQUcsRUFBRSxDQUFDO1lBRXpELElBQUksQ0FBQzFDLEtBQUssQ0FBQ3FDLFlBQVksRUFBRSxPQUFPLElBQUk7WUFDcEMsTUFBTTtjQUFFMlY7WUFBVyxDQUFFLEdBQUdoWSxLQUFLLENBQUNxQyxZQUFZO1lBRTFDLE1BQU00VixLQUFLLEdBQUcsTUFBT3BILEtBQTBDLElBQUk7Y0FDbEUsTUFBTXRMLEtBQUssR0FBRztnQkFDYnZCLFNBQVMsRUFBRUcsTUFBTSxDQUFDSCxTQUFTO2dCQUMzQjNCLFlBQVksRUFBRTZWLEtBQUssQ0FBQ0MsSUFBSSxDQUFDdlUsUUFBUSxDQUFDLENBQUNMLEdBQUcsQ0FBRTZVLENBQVMsSUFBS3BZLEtBQUssQ0FBQ3FDLFlBQVksQ0FBQzJWLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDLENBQUNDLFVBQVU7ZUFDbEc7Y0FFRCxNQUFNclksS0FBSyxDQUFDeUcsaUJBQWlCLENBQUNsQixLQUFLLENBQUM7Y0FDcENtUyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7Y0FDM0JqSCxTQUFTLENBQUV0TSxNQUEyQixLQUFNO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVILFNBQVMsRUFBRWhFLEtBQUssQ0FBQ3FCLEtBQUssQ0FBQzJDO2NBQVMsQ0FBRSxDQUFDLENBQUM7WUFDOUYsQ0FBQztZQUVELE1BQU1tRyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQmlKLFdBQVcsQ0FBQyxJQUFJMVEsR0FBRyxFQUFFLENBQUM7Y0FDdEJnVixvQkFBb0IsQ0FBQyxLQUFLLENBQUM7Y0FDM0IxWCxLQUFLLENBQUNzRixpQkFBaUIsRUFBRTtZQUMxQixDQUFDO1lBQ0QsTUFBTXdILFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUsQ0FBQ2xKLFFBQVEsQ0FBQzBVLElBQUksSUFBSTFCO1lBQUssQ0FBRTtZQUN0RCxNQUFNckgsR0FBRyxHQUFHLG1DQUFtQ3FILEtBQUssR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRTVFLE9BQ0NqVyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFTZ0ksU0FBUyxFQUFFb0c7WUFBRyxHQUN0QjVPLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNxVyxLQUFBLENBQUFlLElBQUk7Y0FDSnBQLFNBQVMsRUFBQyw2QkFBNkI7Y0FDdkM1RCxLQUFLLEVBQUU7Z0JBQUUzQixRQUFRO2dCQUFFd1AsV0FBVztnQkFBRXdEO2NBQUssQ0FBRTtjQUN2QzRCLE9BQU8sRUFBRVQsS0FBQSxDQUFBVSx3QkFBd0I7Y0FDakN0VixLQUFLLEVBQUU2VTtZQUFXLEVBQ2pCLEVBRUZyWCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0ksU0FBUyxFQUFDO1lBQWtCLEdBQ2hDeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsZUFDRWdCLEtBQUssQ0FBQ0ssS0FBSyxFLE1BQUlvQixRQUFRLENBQUMwVSxJQUFJLENBQ3ZCLEVBQ1AzWCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0ksU0FBUyxFQUFDO1lBQWtCLEdBQ2hDeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLFdBQUEsQ0FBQVMsTUFBTTtjQUFDK0IsUUFBUSxFQUFFOEosS0FBSztjQUFFbE0sT0FBTyxFQUFFUCxRQUFRO2NBQUVILE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7WUFBQSxHQUNwRThNLFdBQVcsQ0FBQzBCLGlCQUFpQixDQUN0QixFQUNUL1gsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLFdBQUEsQ0FBQVMsTUFBTTtjQUFBLEdBQUsrQixRQUFRO2NBQUU5QyxPQUFPLEVBQUMsU0FBUztjQUFDVSxPQUFPLEVBQUV1TjtZQUFLLEdBQ3BEakIsV0FBVyxDQUFDMkIsZ0JBQWdCLENBQ3JCLENBQ0osQ0FDRCxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUFoWSxNQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFTTSxTQUFVOFksd0JBQXdCQSxDQUFDN04sS0FBQSxHQUFnQixFQUFFO1lBQzFELE1BQU07Y0FBRStELEtBQUs7Y0FBRW5MLElBQUk7Y0FBRW9ULEtBQUs7Y0FBRWhULFFBQVE7Y0FBRXdQO1lBQVcsQ0FBRSxHQUFHeEksS0FBSztZQUMzRCxNQUFNO2NBQ0w1SyxLQUFLO2NBQ0xtQyxLQUFLLEVBQUU7Z0JBQUU2VixXQUFXLEVBQUU3VjtjQUFLO1lBQUUsQ0FDN0IsR0FBRyxJQUFBbUosUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNNk0sUUFBUSxHQUFJL0gsS0FBb0MsSUFBSTtjQUN6REEsS0FBSyxDQUFDZ0ksZUFBZSxFQUFFO2NBQ3ZCLE1BQU1sSyxLQUFLLEdBQUdtSyxRQUFRLENBQUNqSSxLQUFLLENBQUNDLGFBQWEsQ0FBQ2lJLE9BQU8sQ0FBQ3BLLEtBQUssQ0FBQztjQUN6RCxNQUFNcUssUUFBUSxHQUFHcFYsUUFBUTtjQUN6Qm9WLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDdEssS0FBSyxDQUFDLEdBQUdxSyxRQUFRLENBQUNFLE1BQU0sQ0FBQ3ZLLEtBQUssQ0FBQyxHQUFHcUssUUFBUSxDQUFDRyxHQUFHLENBQUN4SyxLQUFLLENBQUM7Y0FDbEUzTyxLQUFLLENBQUN5QyxvQkFBb0IsQ0FBQzBXLEdBQUcsQ0FBQ3hLLEtBQUssQ0FBQztjQUNyQ3lFLFdBQVcsQ0FBQyxJQUFJMVEsR0FBRyxDQUFDc1csUUFBUSxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUVELE1BQU16SixHQUFHLEdBQUcsbUJBQW1CM0wsUUFBUSxDQUFDcVYsR0FBRyxDQUFDdEssS0FBSyxDQUFDLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUN2RSxNQUFNK0UsS0FBSyxHQUFvQztjQUFFdkssU0FBUyxFQUFFb0csR0FBRztjQUFFLFlBQVksRUFBRVo7WUFBSyxDQUFFO1lBRXRGLElBQUksQ0FBQ2lJLEtBQUssRUFBRWxELEtBQUssQ0FBQ2hKLE9BQU8sR0FBR2tPLFFBQVE7WUFFcEMsT0FDQ2pZLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUVvRyxHQUFHO2NBQUEsY0FBY1osS0FBSztjQUFBLEdBQU0rRTtZQUFLLEdBQ2hEL1MsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU1nSSxTQUFTLEVBQUM7WUFBa0IsR0FBRWhILEtBQUssQ0FBQ2lYLE1BQU0sQ0FBUSxFQUN4RHpZLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU1nSSxTQUFTLEVBQUM7WUFBc0IsR0FBRTNGLElBQUksQ0FBQzZWLFNBQVMsQ0FBUSxDQUN0RCxFQUNUMVksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBS2dJLFNBQVMsRUFBQztZQUFlLEdBQzdCeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU1nSSxTQUFTLEVBQUM7WUFBa0IsR0FBRWhILEtBQUssQ0FBQ2tCLEtBQUssQ0FBUSxDQUMvQyxFQUNSRyxJQUFJLENBQUM2VSxVQUFVLENBQ1gsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBMVgsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQTJLLFdBQUEsR0FBQTNLLE9BQUE7VUFDTSxTQUFVa1ksaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FDTDFWLEtBQUssRUFBRTtnQkFDTm1QLGFBQWEsRUFBRUMsSUFBSTtnQkFDbkJ5RyxXQUFXLEVBQUU7a0JBQ1poVSxTQUFTLEVBQUU7b0JBQUU4RixPQUFPLEVBQUUzSDtrQkFBSztnQkFBRTtjQUM3QixDQUNEO2NBQ0RuQyxLQUFLO2NBQ0x5USxTQUFTO2NBQ1R0TSxNQUFNO2NBQ05uRSxLQUFLLEVBQUU7Z0JBQUVxQztjQUFZO1lBQUUsQ0FDdkIsR0FBRyxJQUFBaUosUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNO2NBQUUwTCxpQkFBaUI7Y0FBRUM7WUFBb0IsQ0FBRSxHQUFHLElBQUFwTSxRQUFBLENBQUErRCxxQkFBcUIsR0FBRTtZQUMzRSxNQUFNO2NBQUVpSztZQUFRLENBQUUsR0FBR2pYLFlBQVk7WUFDakMsTUFBTSxDQUFDa1gsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzdZLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELElBQUksQ0FBQ3FCLFlBQVksSUFBSW9WLGlCQUFpQixFQUFFLE9BQU8sSUFBSTtZQUVuRCxNQUFNL00sT0FBTyxHQUFHLE1BQU9tRyxLQUEwQyxJQUFJO2NBQ3BFMkksV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixJQUFJM0ksS0FBSyxDQUFDQyxhQUFhLENBQUMxTixLQUFLLEtBQUssTUFBTSxFQUFFO2dCQUN6QyxNQUFNcEQsS0FBSyxDQUFDZ0csSUFBSSxDQUFDO2tCQUFFaEMsU0FBUyxFQUFFc1Y7Z0JBQVEsQ0FBRSxDQUFDO2dCQUN6QzdJLFNBQVMsQ0FBQztrQkFBRSxHQUFHdE0sTUFBTTtrQkFBRUgsU0FBUyxFQUFFc1Y7Z0JBQVEsQ0FBRSxDQUFDOztjQUc5QzVCLG9CQUFvQixDQUFDLElBQUksQ0FBQztjQUUxQjhCLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUVELE1BQU1qSyxHQUFHLEdBQUcsd0JBQXdCZ0ssUUFBUSxHQUFHLGVBQWUsR0FBRyxFQUFFLEVBQUU7WUFFckUsT0FDQzVZLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUVvRztZQUFHLEdBQ2xCNU8sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsYUFBS21ZLFFBQVEsQ0FBTSxFQUNuQjNZLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBK0IsR0FDN0N4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFNZ0ksU0FBUyxFQUFDO1lBQWMsR0FBRWhILEtBQUssQ0FBQ2tCLEtBQUssQ0FBUSxFQUNuRDFDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBa0IsR0FDaEN4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUNmLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQzlHLEtBQUssRUFBQyxPQUFPO2NBQUNzSCxPQUFPLEVBQUVBO1lBQU8sR0FDL0R2SSxLQUFLLENBQUM4SCxNQUFNLENBQ0wsRUFDVHRKLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNtSixXQUFBLENBQUFTLE1BQU07Y0FBQ2YsT0FBTyxFQUFDLFNBQVM7Y0FBQzVHLEtBQUssRUFBQyxNQUFNO2NBQUNzSCxPQUFPLEVBQUVBO1lBQU8sR0FDckR2SSxLQUFLLENBQUM0SCxPQUFPLENBQ04sQ0FDSixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQWhDLEtBQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBdVEsTUFBQSxHQUFBdlEsT0FBQTtVQUVBLElBQUE4WixVQUFBLEdBQUE5WixPQUFBO1VBQ0EsSUFBQStaLFdBQUEsR0FBQS9aLE9BQUE7VUFDQSxJQUFBOEIsV0FBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBRU87VUFBVSxTQUNSUSxJQUFJQSxDQUFDeUssS0FBVTtZQUN2QixNQUFNO2NBQUU1SztZQUFLLENBQUUsR0FBNEI0SyxLQUFLO1lBQ2hEO1lBQ0EsTUFBTSxDQUFDM0UsVUFBVSxFQUFFa04sYUFBYSxDQUFDLEdBQUdwTCxLQUFLLENBQUMvRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU0sR0FBR3VJLFdBQVcsQ0FBQyxHQUFHeEIsS0FBSyxDQUFDL0csUUFBUSxDQUFDaEIsS0FBSyxDQUFDc0osUUFBUSxDQUFDO1lBQ3RELE1BQU0sR0FBR2tILFVBQVUsQ0FBQyxHQUFHekksS0FBSyxDQUFDL0csUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNO2NBQUVtQjtZQUFLLENBQUUsR0FBR25DLEtBQUs7WUFDdkIsSUFBQWtRLE1BQUEsQ0FBQVUsU0FBUyxFQUFDLENBQUM1USxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCd1EsVUFBVSxDQUFDLEVBQUUsQ0FBQztjQUNkO1lBQ0QsQ0FBQyxDQUFDOztZQUVGLElBQUksQ0FBQ3hRLEtBQUssQ0FBQ3dFLEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO1lBRS9CLE1BQU1wQixLQUFLLEdBQUc7Y0FDYmpCLEtBQUs7Y0FDTG5DLEtBQUs7Y0FDTGlHLFVBQVU7Y0FDVmtOLGFBQWE7Y0FDYnJJLGFBQWEsRUFBRXJKLFdBQUEsQ0FBQTJELFlBQVksQ0FBQzBGO2FBQzVCO1lBRUQsT0FDQy9DLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQTRHLEtBQUEsQ0FBQWlKLFFBQUEsUUFDQ2pKLEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQ21LLFFBQUEsQ0FBQTRELHNCQUFzQixDQUFDK0IsUUFBUTtjQUFDN04sS0FBSyxFQUFFQTtZQUFLLEdBQzNDcEQsS0FBSyxDQUFDcUIsS0FBSyxDQUFDdVUsS0FBSyxLQUFLLFdBQVcsR0FDakM3TixLQUFBLENBQUE1RyxhQUFBLENBQUN1WSxXQUFBLENBQUE5WSxvQkFBb0I7Y0FBQ1osS0FBSyxFQUFFQSxLQUFLO2NBQUVNLEdBQUcsRUFBRXNLLEtBQUssQ0FBQ3RLO1lBQUcsRUFBSSxHQUV0RHlILEtBQUEsQ0FBQTVHLGFBQUEsQ0FBQ3NZLFVBQUEsQ0FBQXJKLGNBQWM7Y0FBQ3BRLEtBQUssRUFBRUEsS0FBSztjQUFFTSxHQUFHLEVBQUVzSyxLQUFLLENBQUN0SztZQUFHLEVBQzVDLENBQ2dDLENBQ2hDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFLLE1BQUEsR0FBQWhCLE9BQUE7VUFFQSxJQUFBMkssV0FBQSxHQUFBM0ssT0FBQTtVQUdBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQWdhLFNBQUEsR0FBQWhhLE9BQUE7VUFDTSxTQUFVaWEsZ0JBQWdCQSxDQUFDO1lBQUVDO1VBQU0sQ0FBRTtZQUMxQyxNQUFNO2NBQUUxWCxLQUFLO2NBQUVuQztZQUFLLENBQUUsR0FBRyxJQUFBc0wsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNO2NBQUUrTixPQUFPO2NBQUVwUjtZQUFPLENBQUUsR0FBRyxJQUFBaVIsU0FBQSxDQUFBSSxlQUFlLEdBQUU7WUFDOUMsTUFBTSxDQUFDelEsUUFBUSxDQUFDLEdBQUczSSxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV4QyxNQUFNK0gsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QjtjQUNBK1EsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNyQixDQUFDO1lBQ0QsT0FDQ25aLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBb0IsR0FDbEN4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFRZ0ksU0FBUyxFQUFDO1lBQWUsR0FDaEN4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxhQUFLZ0IsS0FBSyxDQUFDNlgsTUFBTSxDQUFDalEsT0FBTyxDQUFDZixLQUFLLENBQU0sQ0FDN0IsRUFDVHJJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBc0IsR0FDcEN4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxlQUFPZ0IsS0FBSyxDQUFDNlgsTUFBTSxDQUFDalEsT0FBTyxDQUFDWCxXQUFXLENBQVEsQ0FDMUMsRUFDTnpJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQVFnSSxTQUFTLEVBQUM7WUFBMEMsR0FDM0R4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUNmLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQ1EsT0FBTyxFQUFFaEM7WUFBTyxHQUNqRHZHLEtBQUssQ0FBQzJILE9BQU8sQ0FBQ0csTUFBTSxDQUNiLEVBQ1R0SixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUNmLE9BQU8sRUFBQyxTQUFTO2NBQUNVLE9BQU8sRUFBRTNCO1lBQVMsR0FDMUM1RyxLQUFLLENBQUMySCxPQUFPLENBQUNDLE9BQU8sQ0FDZCxDQUNELENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQXBKLE1BQUEsR0FBQWhCLE9BQUE7VUFVTyxNQUFNc2EsWUFBWSxHQUFBdlosT0FBQSxDQUFBdVosWUFBQSxHQUFHdFosTUFBQSxDQUFBSSxPQUFLLENBQUNpTyxhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUNsRSxNQUFNK0ssZUFBZSxHQUFHQSxDQUFBLEtBQU1wWixNQUFBLENBQUFJLE9BQUssQ0FBQ2tPLFVBQVUsQ0FBQ2dMLFlBQVksQ0FBQztVQUFDdlosT0FBQSxDQUFBcVosZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hwRSxJQUFBcFosTUFBQSxHQUFBaEIsT0FBQTtVQUlBLElBQUEySyxXQUFBLEdBQUEzSyxPQUFBO1VBRUEsSUFBQTZYLEtBQUEsR0FBQTdYLE9BQUE7VUFDQSxJQUFBMkwsUUFBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUFnYSxTQUFBLEdBQUFoYSxPQUFBO1VBRU0sU0FBVXVhLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUUvWDtZQUFLLENBQUUsR0FBRyxJQUFBbUosUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUUrTixPQUFPO2NBQUVLO1lBQVEsQ0FBRSxHQUFHLElBQUFSLFNBQUEsQ0FBQUksZUFBZSxHQUFFO1lBRS9DLE1BQU1LLE1BQU0sR0FBR0EsQ0FBQSxLQUFNTixPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3pDLE1BQU1PLElBQUksR0FBR0EsQ0FBQztjQUFFN1c7WUFBSSxDQUFFLEtBQUk7Y0FDekIsTUFBTWtILE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2dCQUNwQnlQLFFBQVEsQ0FBQzNXLElBQUksQ0FBQztnQkFDZHNXLE9BQU8sQ0FBQyxhQUFhLENBQUM7Y0FDdkIsQ0FBQztjQUNELE9BQ0NuWixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtnQkFBSWdJLFNBQVMsRUFBQztjQUFZLEdBQ3pCeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsZUFBT3FDLElBQUksQ0FBUSxFQUNuQjdDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGNBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNtSixXQUFBLENBQUFTLE1BQU07Z0JBQUNiLFFBQVE7Z0JBQUNGLE9BQU8sRUFBQyxTQUFTO2dCQUFDVSxPQUFPLEVBQUVBO2NBQU8sR0FDakR2SSxLQUFLLENBQUM2WCxNQUFNLENBQUNNLFFBQVEsQ0FBQ3hRLE9BQU8sQ0FBQzBILE1BQU0sQ0FDN0IsQ0FDSixDQUNGO1lBRVAsQ0FBQztZQUNELE9BQ0M3USxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFBUixNQUFBLENBQUFJLE9BQUEsQ0FBQWlRLFFBQUEsUUFDQ3JRLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBMkIsR0FDekN4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxhQUFLZ0IsS0FBSyxDQUFDNlgsTUFBTSxDQUFDTSxRQUFRLENBQUN0UixLQUFLLENBQU0sRUFDdENySSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDcVcsS0FBQSxDQUFBZSxJQUFJO2NBQUNwUCxTQUFTLEVBQUMsZ0NBQWdDO2NBQUNoRyxLQUFLLEVBQUVoQixLQUFLLENBQUM2WCxNQUFNLENBQUNNLFFBQVEsQ0FBQ25YLEtBQUs7Y0FBRXFWLE9BQU8sRUFBRTZCO1lBQUksRUFBSSxFQUV0RzFaLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBK0IsR0FDN0N4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0ksU0FBUyxFQUFDO1lBQWdCLEdBQzlCeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLFdBQUEsQ0FBQVMsTUFBTTtjQUFDZixPQUFPLEVBQUMsU0FBUztjQUFDVSxPQUFPLEVBQUUwUDtZQUFNLEdBQ3ZDalksS0FBSyxDQUFDNlgsTUFBTSxDQUFDTSxRQUFRLENBQUN4USxPQUFPLENBQUNxRCxJQUFJLENBQzNCLENBQ0osQ0FDRCxDQUNELENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQXhNLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBd1MsS0FBQSxHQUFBeFMsT0FBQTtVQUNBLElBQUE2SSxHQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQTJLLFdBQUEsR0FBQTNLLE9BQUE7VUFHQSxJQUFBMkwsUUFBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUFnYSxTQUFBLEdBQUFoYSxPQUFBO1VBRUEsSUFBQTRhLGdCQUFBLEdBQUE1YSxPQUFBO1VBRU0sU0FBVTZhLGdCQUFnQkEsQ0FBQyxFQUFFO1lBQ2xDLE1BQU07Y0FBRXJZLEtBQUs7Y0FBRWdDLE1BQU07Y0FBRXNNO1lBQVMsQ0FBRSxHQUFHLElBQUFuRixRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU07Y0FBRStOLE9BQU87Y0FBRVcsS0FBSztjQUFFTjtZQUFRLENBQUUsR0FBRyxJQUFBUixTQUFBLENBQUFJLGVBQWUsR0FBRTtZQUN0RCxNQUFNO2NBQUUvWjtZQUFLLENBQUUsR0FBRyxJQUFBc0wsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUVwQyxNQUFNLENBQUN6QyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHNUksTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTBaLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSTtnQkFDSG5SLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU12SixLQUFLLENBQUNnRyxJQUFJLENBQUM7a0JBQUUsR0FBRzdCO2dCQUFNLENBQUUsQ0FBQztnQkFDL0IsTUFBTW5FLEtBQUssQ0FBQzJHLHdCQUF3QixDQUFDO2tCQUFFLEdBQUd4QyxNQUFNO2tCQUFFc1c7Z0JBQUssQ0FBRSxDQUFDO2VBQzFELENBQUMsT0FBTzdVLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUMkQsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE1BQU1vUixNQUFNLEdBQUc7Y0FDZGxNLFFBQVEsRUFBR29DLEtBQTZDLElBQUk7Z0JBQzNEc0osUUFBUSxDQUFDdEosS0FBSyxDQUFDQyxhQUFhLENBQUMxTixLQUFLLENBQUM7Y0FDcEMsQ0FBQztjQUNEc0gsT0FBTyxFQUFFZ1EsVUFBVTtjQUNuQlosT0FBTyxFQUFFQSxDQUFBLEtBQU1BLE9BQU8sQ0FBQyxVQUFVLENBQUM7Y0FDbENNLE1BQU0sRUFBRUEsQ0FBQSxLQUFNTixPQUFPLENBQUMsV0FBVzthQUNqQztZQUVELE9BQ0NuWixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0ksU0FBUyxFQUFDO1lBQWEsR0FDM0J4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDZ1IsS0FBQSxDQUFBc0UsSUFBSTtjQUFDNUosUUFBUSxFQUFFOE4sTUFBTSxDQUFDalE7WUFBTyxHQUM3Qi9KLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGlCQUNDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxhQUFLZ0IsS0FBSyxDQUFDNlgsTUFBTSxDQUFDNVQsVUFBVSxDQUFDNEMsS0FBSyxDQUFNLENBQ2hDLEVBQ1RySSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDb1osZ0JBQUEsQ0FBQUssZUFBZSxPQUFHLEVBQ25CamEsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2dSLEtBQUEsQ0FBQVEsUUFBUTtjQUNSdFAsS0FBSyxFQUFFbEIsS0FBSyxDQUFDNlgsTUFBTSxDQUFDYSxRQUFRLENBQUN4WCxLQUFLO2NBQ2xDSSxJQUFJLEVBQUMsY0FBYztjQUNuQkwsS0FBSyxFQUFFcVgsS0FBSztjQUNaSyxRQUFRO2NBQ1JyTSxRQUFRLEVBQUVrTSxNQUFNLENBQUNsTSxRQUFRO2NBQ3pCd0QsV0FBVyxFQUFFOVAsS0FBSyxDQUFDNlgsTUFBTSxDQUFDYSxRQUFRLENBQUM1STtZQUFXLEVBQzdDLENBQ0ksRUFDUHRSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGlCQUNDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUNmLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQ1EsT0FBTyxFQUFFaVEsTUFBTSxDQUFDUDtZQUFNLEdBQ3ZEalksS0FBSyxDQUFDMkgsT0FBTyxDQUFDcUQsSUFBSSxDQUNYLEVBQ1R4TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosV0FBQSxDQUFBUyxNQUFNO2NBQUNmLE9BQU8sRUFBQyxTQUFTO2NBQUNVLE9BQU8sRUFBRWlRLE1BQU0sQ0FBQ2pRO1lBQU8sR0FDL0N2SSxLQUFLLENBQUMySCxPQUFPLENBQUNpUixRQUFRLENBQ2YsQ0FDRCxFQUVUcGEsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3FILEdBQUEsQ0FBQXFPLGdCQUFnQjtjQUFDdk4sUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDbkM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRUEsSUFBQTNJLE1BQUEsR0FBQWhCLE9BQUE7VUFFQSxJQUFBMkssV0FBQSxHQUFBM0ssT0FBQTtVQUVBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQWdhLFNBQUEsR0FBQWhhLE9BQUE7VUFDQSxJQUFBNkksR0FBQSxHQUFBN0ksT0FBQTtVQUVNLFNBQVVxYixhQUFhQSxDQUFDLEVBQUU7WUFDL0IsTUFBTTtjQUFFN1ksS0FBSztjQUFFbkM7WUFBSyxDQUFFLEdBQUcsSUFBQXNMLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFckQ7WUFBTyxDQUFFLEdBQUcsSUFBQWlSLFNBQUEsQ0FBQUksZUFBZSxHQUFFO1lBQ3JDLE1BQU0xSCxTQUFTLEdBQUdsUSxLQUFLLENBQUN1TixLQUFLLENBQUN1TCxVQUFVO1lBQ3hDLE1BQU1uUixPQUFPLEdBQUczSCxLQUFLLENBQUN1TixLQUFLLENBQUM1RixPQUFPO1lBQ25DLE1BQU0sQ0FBQ29SLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR3hhLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLEVBQXNCO1lBQzlFLE1BQU07Y0FBRThZO1lBQU8sQ0FBRSxHQUFHLElBQUFILFNBQUEsQ0FBQUksZUFBZSxHQUFFO1lBRXJDLE1BQU10TCxRQUFRLEdBQUlvQyxLQUEwQyxJQUFJO2NBQy9ELE1BQU07Z0JBQUV6TjtjQUFLLENBQUUsR0FBR3lOLEtBQUssQ0FBQ0MsYUFBYTtjQUNyQ3FLLGdCQUFnQixDQUFDL1gsS0FBSyxDQUFDO1lBQ3hCLENBQUM7WUFDRCxNQUFNc0gsT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDcEIsSUFBSXdRLGFBQWEsS0FBSyxLQUFLLElBQUksQ0FBQ2xiLEtBQUssQ0FBQ3FCLEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO2dCQUMxRHNYLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ2xCOztjQUdEQSxPQUFPLENBQUNvQixhQUFhLEtBQUssS0FBSyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUM7WUFDbkQsQ0FBQztZQUVELE9BQ0N2YSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0ksU0FBUyxFQUFDO1lBQWEsR0FDM0J4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxpQkFDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsYUFBS2tSLFNBQVMsQ0FBQ3JKLEtBQUssQ0FBTSxFQUMxQnJJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtnSSxTQUFTLEVBQUM7WUFBc0IsR0FDcEN4SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxlQUFPa1IsU0FBUyxDQUFDdkMsUUFBUSxDQUFRLENBQzVCLENBQ0UsRUFFVG5QLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNxSCxHQUFBLENBQUFnRyxXQUFXO2NBQ1g0TSxPQUFPLEVBQUVGLGFBQWEsS0FBSyxLQUFLO2NBQ2hDek0sUUFBUSxFQUFFQSxRQUFRO2NBQ2xCcEwsS0FBSyxFQUFFZ1AsU0FBUyxDQUFDWCxPQUFPLENBQUMySixFQUFFO2NBQzNCalksS0FBSyxFQUFDLEtBQUs7Y0FDWEssSUFBSSxFQUFDO1lBQWUsRUFDbkIsRUFFRjlDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNxSCxHQUFBLENBQUFnRyxXQUFXO2NBQ1g0TSxPQUFPLEVBQUVGLGFBQWEsS0FBSyxVQUFVO2NBQ3JDek0sUUFBUSxFQUFFQSxRQUFRO2NBQ2xCcEwsS0FBSyxFQUFFZ1AsU0FBUyxDQUFDWCxPQUFPLENBQUM0SixRQUFRO2NBQ2pDbFksS0FBSyxFQUFDLFVBQVU7Y0FDaEJLLElBQUksRUFBQztZQUFlLEVBQ25CLEVBRUY5QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxpQkFDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLFdBQUEsQ0FBQVMsTUFBTTtjQUFDZixPQUFPLEVBQUMsU0FBUztjQUFDRSxRQUFRO2NBQUNRLE9BQU8sRUFBRWhDO1lBQU8sR0FDakRvQixPQUFPLENBQUNHLE1BQU0sQ0FDUCxFQUNUdEosTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLFdBQUEsQ0FBQVMsTUFBTTtjQUFDZixPQUFPLEVBQUMsU0FBUztjQUFDOEMsUUFBUSxFQUFFLENBQUNvTyxhQUFhO2NBQUV4USxPQUFPLEVBQUVBO1lBQU8sR0FDbEVaLE9BQU8sQ0FBQ21HLFFBQVEsQ0FDVCxDQUNELENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUEsSUFBQXRQLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBMkssV0FBQSxHQUFBM0ssT0FBQTtVQUVBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQWdhLFNBQUEsR0FBQWhhLE9BQUE7VUFDQSxJQUFBd1MsS0FBQSxHQUFBeFMsT0FBQTtVQUVNLFNBQVU0YixVQUFVQSxDQUFDLEVBQUU7WUFDNUIsSUFBSTtjQUFFcFosS0FBSztjQUFFbkMsS0FBSztjQUFFbUUsTUFBTTtjQUFFc007WUFBUyxDQUFFLEdBQUcsSUFBQW5GLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFNUQsTUFBTXNHLFNBQVMsR0FBR2xRLEtBQUssQ0FBQ3VOLEtBQUssQ0FBQ3VMLFVBQVU7WUFDeEMsTUFBTW5SLE9BQU8sR0FBRzlKLEtBQUssQ0FBQ2tDLFdBQVcsQ0FBQzRILE9BQU87WUFFekMsTUFBTTtjQUFFZ1E7WUFBTyxDQUFFLEdBQUcsSUFBQUgsU0FBQSxDQUFBSSxlQUFlLEdBQUU7WUFDckMsTUFBTSxDQUFDelEsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzVJLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JEbUIsS0FBSyxHQUFHQSxLQUFLLENBQUNxWixPQUFPO1lBRXJCLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRy9hLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQUM7Y0FBRWdJLEtBQUssRUFBRSxFQUFFO2NBQUVJLFdBQVcsRUFBRTtZQUFFLENBQUUsQ0FBQztZQUNsRixNQUFNeUQsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixJQUFJO2dCQUNIdEQsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakJrSCxTQUFTLENBQUM7a0JBQUUsR0FBR3RNLE1BQU07a0JBQUU2RSxLQUFLLEVBQUV5UyxVQUFVLENBQUN6UyxLQUFLO2tCQUFFSSxXQUFXLEVBQUVxUyxVQUFVLENBQUNyUztnQkFBVyxDQUFFLENBQUM7Z0JBQ3RGLE1BQU1wSixLQUFLLENBQUNnRyxJQUFJLENBQUM7a0JBQ2hCLEdBQUc3QixNQUFNO2tCQUNUNkUsS0FBSyxFQUFFeVMsVUFBVSxDQUFDelMsS0FBSztrQkFDdkJJLFdBQVcsRUFBRXFTLFVBQVUsQ0FBQ3JTLFdBQVc7a0JBQ25Dd00sS0FBSyxFQUFFO2lCQUNQLENBQUM7ZUFDRixDQUFDLE9BQU9oUSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVDJELFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxNQUFNa0YsUUFBUSxHQUFJb0MsS0FBZ0UsSUFBSTtjQUNyRixNQUFNO2dCQUFFek4sS0FBSztnQkFBRUs7Y0FBSSxDQUFFLEdBQUdvTixLQUFLLENBQUNDLGFBQWE7Y0FDM0M0SyxhQUFhLENBQUM7Z0JBQUUsR0FBR0QsVUFBVTtnQkFBRSxDQUFDaFksSUFBSSxHQUFHTDtjQUFLLENBQUUsQ0FBQztZQUNoRCxDQUFDO1lBQ0QsTUFBTStHLFFBQVEsR0FBR0EsQ0FBQSxLQUFNMlAsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUUzQyxPQUNDblosTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBS2dJLFNBQVMsRUFBQztZQUFhLEdBQzNCeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGFBQUtrUixTQUFTLENBQUNySixLQUFLLENBQU0sRUFDMUJySSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLZ0ksU0FBUyxFQUFDO1lBQXNCLEdBQ3BDeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsZUFBT2tSLFNBQVMsQ0FBQ3ZDLFFBQVEsQ0FBUSxDQUM1QixDQUNFLEVBQ1RuUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDZ1IsS0FBQSxDQUFBc0UsSUFBSTtjQUFDNUosUUFBUSxFQUFFQTtZQUFRLEdBQ3ZCbE0sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2dSLEtBQUEsQ0FBQXdKLEtBQUs7Y0FDTHRZLEtBQUssRUFBRWxCLEtBQUssQ0FBQ3laLE1BQU0sQ0FBQzVTLEtBQUssQ0FBQzNGLEtBQUs7Y0FDL0JvTCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJyTCxLQUFLLEVBQUVxWSxVQUFVLENBQUN6UyxLQUFLLElBQUksRUFBRTtjQUM3QnZGLElBQUksRUFBQztZQUFPLEVBQ1gsRUFDRjlDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNnUixLQUFBLENBQUFRLFFBQVE7Y0FDUnRQLEtBQUssRUFBRWxCLEtBQUssQ0FBQ3laLE1BQU0sQ0FBQ3hTLFdBQVcsQ0FBQy9GLEtBQUs7Y0FDckNJLElBQUksRUFBQyxhQUFhO2NBQ2xCdUcsT0FBTyxFQUFDLFVBQVU7Y0FDbEJ5RSxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJyTCxLQUFLLEVBQUVxWSxVQUFVLENBQUNyUyxXQUFXLElBQUk7WUFBRSxFQUNsQyxFQUNGekksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNtSixXQUFBLENBQUFTLE1BQU07Y0FBQ2YsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDUSxPQUFPLEVBQUVQO1lBQVEsR0FDbERMLE9BQU8sQ0FBQ3FELElBQUksQ0FDTCxFQUNUeE0sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLFdBQUEsQ0FBQVMsTUFBTTtjQUNOZixPQUFPLEVBQUMsU0FBUztjQUNqQjhDLFFBQVEsRUFBRSxDQUFDMk8sVUFBVSxDQUFDclMsV0FBVyxJQUFJLENBQUNxUyxVQUFVLENBQUN6UyxLQUFLO2NBQ3REMEIsT0FBTyxFQUFFbUM7WUFBUSxHQUVoQi9DLE9BQU8sQ0FBQ21HLFFBQVEsQ0FDVCxDQUNELENBQ0gsQ0FDRjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBdFAsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUF5UixZQUFBLEdBQUF6UixPQUFBO1VBRUEsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFDTSxTQUFVaWIsZUFBZUEsQ0FBQTtZQUM5QixJQUFJO2NBQUU1YSxLQUFLO2NBQUVtQyxLQUFLO2NBQUVnQyxNQUFNO2NBQUVzTTtZQUFTLENBQUUsR0FBRyxJQUFBbkYsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUM1RDtZQUNBNUosS0FBSyxHQUFHQSxLQUFLLENBQUNxWixPQUFPLENBQUNILEVBQUU7WUFFeEIsTUFBTXZPLFFBQVEsR0FBRyxFQUFFO1lBQ25CakgsT0FBTyxDQUFDZ1csR0FBRyxDQUFDLEdBQUcsRUFBRTFaLEtBQUssQ0FBQztZQUN2QixNQUFNdVAsT0FBTyxHQUFHLENBQ2Y7Y0FBRXRPLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRWxCLEtBQUssQ0FBQ21RLElBQUksQ0FBQ2dHLElBQUksQ0FBQ25WLEtBQUssQ0FBQzJLLEtBQUs7Y0FBRTdKLGVBQWUsRUFBRTtZQUFDLENBQUUsRUFDckU7Y0FBRWIsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsS0FBSyxFQUFFbEIsS0FBSyxDQUFDbVEsSUFBSSxDQUFDZ0csSUFBSSxDQUFDblYsS0FBSyxDQUFDNEssUUFBUTtjQUFFOUosZUFBZSxFQUFFO1lBQUMsQ0FBRSxFQUN4RTtjQUFFYixLQUFLLEVBQUUsRUFBRTtjQUFFQyxLQUFLLEVBQUVsQixLQUFLLENBQUNtUSxJQUFJLENBQUNnRyxJQUFJLENBQUNuVixLQUFLLENBQUM2SyxRQUFRO2NBQUUvSixlQUFlLEVBQUU7WUFBQyxDQUFFLENBQ3hFO1lBQ0QsTUFBTXdLLFFBQVEsR0FBSW9DLEtBQTJDLElBQUk7Y0FDaEUsTUFBTXJLLElBQUksR0FBR2tMLE9BQU8sQ0FBQzFLLElBQUksQ0FBQ3hELElBQUksSUFBSUEsSUFBSSxDQUFDSixLQUFLLEtBQUswVixRQUFRLENBQUNqSSxLQUFLLENBQUNZLE1BQU0sQ0FBQ3JPLEtBQUssQ0FBQyxDQUFDO2NBRTlFcU4sU0FBUyxDQUFFdE0sTUFBVyxLQUFNO2dCQUMzQixHQUFHQSxNQUFNO2dCQUNUSixRQUFRLEVBQUU4TSxLQUFLLENBQUNZLE1BQU0sQ0FBQ3JPLEtBQUs7Z0JBQzVCYSxlQUFlLEVBQUV1QyxJQUFJLENBQUN2QztlQUN0QixDQUFDLENBQUM7WUFDSixDQUFDO1lBQ0QsSUFBSTZYLGFBQWEsR0FBVyxDQUFDO1lBQzdCLElBQUlsWSxRQUFRLEdBQVcsQ0FBQztZQUN4QixJQUFJTyxNQUFNLEVBQUU0WCxhQUFhLEVBQUVELGFBQWEsR0FBR2hELFFBQVEsQ0FBQzNVLE1BQU0sQ0FBQ0osUUFBUSxDQUFDO1lBQ3BFLElBQUlJLE1BQU0sRUFBRUosUUFBUSxFQUFFNEssS0FBSyxFQUFFL0ssUUFBUSxHQUFHa1YsUUFBUSxDQUFDM1UsTUFBTSxDQUFDSixRQUFRLENBQUM0SyxLQUFLLENBQUM7WUFFdkUsSUFBSTFCLE9BQU8sR0FBRyxFQUFFO1lBQ2hCLElBQUk5SSxNQUFNLENBQUNKLFFBQVEsRUFBRTtjQUNwQmtKLE9BQU8sR0FBR3lFLE9BQU8sQ0FBQzFLLElBQUksQ0FBQ3hELElBQUksSUFBSUEsSUFBSSxDQUFDSixLQUFLLEtBQUtlLE1BQU0sQ0FBQ0osUUFBUSxDQUFDOztZQUcvRCxPQUNDcEQsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsY0FDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBTzBOLE9BQU8sRUFBQztZQUFFLEdBQUUxTSxLQUFLLENBQUNtUSxJQUFJLENBQUNnRyxJQUFJLENBQUNyRyxXQUFXLENBQVMsRUFDdkR0UixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDaVEsWUFBQSxDQUFBWSxXQUFXO2NBQ1hDLFdBQVcsRUFBRTlQLEtBQUssQ0FBQ21RLElBQUksQ0FBQ2dHLElBQUksQ0FBQ3JHLFdBQVc7Y0FDeEN4RCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJoTCxJQUFJLEVBQUMsVUFBVTtjQUNmTCxLQUFLLEVBQUVlLE1BQU0sQ0FBQ0osUUFBUTtjQUFBLEdBQ2xCK0ksUUFBUTtjQUNaNEUsT0FBTyxFQUFFQTtZQUFPLEVBQ2YsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEQSxJQUFBL1EsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUE0SSxNQUFBLEdBQUE1SSxPQUFBO1VBQ0EsSUFBQTZJLEdBQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBMkwsUUFBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUE0TCxhQUFBLEdBQUE1TCxPQUFBO1VBQ0EsSUFBQWdhLFNBQUEsR0FBQWhhLE9BQUE7VUFDQSxJQUFBcWMsU0FBQSxHQUFBcmMsT0FBQTtVQUNBLElBQUEwTCxNQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQXNjLGFBQUEsR0FBQXRjLE9BQUE7VUFDQSxJQUFBdWMsYUFBQSxHQUFBdmMsT0FBQTtVQUVBLElBQUF3YyxPQUFBLEdBQUF4YyxPQUFBO1VBQ0EsSUFBQXljLE9BQUEsR0FBQXpjLE9BQUE7VUFDQSxJQUFBMGMsZUFBQSxHQUFBMWMsT0FBQTtVQUVNLFNBQVVtWCxpQkFBaUJBLENBQUM7WUFBRTFXLElBQUk7WUFBRXNJO1VBQU8sQ0FBMEM7WUFDMUYsTUFBTTtjQUFFdkcsS0FBSztjQUFFbkMsS0FBSztjQUFFbUUsTUFBTTtjQUFFOUI7WUFBWSxDQUFFLEdBQUcsSUFBQWlKLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDakUsTUFBTSxDQUFDekMsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzVJLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3laLEtBQUssRUFBRU4sUUFBUSxDQUFDLEdBQUd4WixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFTLEVBQUUsQ0FBQztZQUVwRCxNQUFNLENBQUNzYixJQUFJLEVBQUV4QyxPQUFPLENBQUMsR0FBR25aLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLEVBQXNCO1lBQzVELE1BQU0sQ0FBQzhFLEtBQUssRUFBRTBELFFBQVEsQ0FBQyxHQUFHN0ksTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsQ0FBUyxFQUFFLENBQUM7WUFFcEQsSUFBSSxDQUFDWixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU15WixNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLElBQUk7Z0JBQ0gsTUFBTTtrQkFBRTBDO2dCQUFNLENBQUUsR0FBRyxNQUFNdmMsS0FBSyxDQUFDcUIsS0FBSyxDQUFDNkUsU0FBUyxDQUFDO2tCQUFFMFAsS0FBSyxFQUFFO2dCQUFXLENBQUUsQ0FBQztnQkFFdEUsSUFBSSxDQUFDMkcsTUFBTSxFQUFFO2tCQUNaL1MsUUFBUSxDQUFDLFNBQVMsQ0FBQztrQkFDbkI7O2dCQUdEZCxPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU85QyxDQUFDLEVBQUU7Z0JBQ1g0RCxRQUFRLENBQUMsU0FBUyxDQUFDOztZQUVyQixDQUFDO1lBRUQsTUFBTWdULFFBQVEsR0FBc0M7Y0FDbkR6UyxPQUFPLEVBQUVrUyxhQUFBLENBQUFyQyxnQkFBZ0I7Y0FDekI2QyxTQUFTLEVBQUVQLGFBQUEsQ0FBQWxCLGFBQWE7Y0FDeEJLLEVBQUUsRUFBRWUsT0FBQSxDQUFBNUIsZ0JBQWdCO2NBQ3BCb0IsTUFBTSxFQUFFTyxPQUFBLENBQUFaLFVBQVU7Y0FDbEJqQixRQUFRLEVBQUUwQixTQUFBLENBQUE5QixrQkFBa0I7Y0FDNUJ3QyxPQUFPLEVBQUVMLGVBQUEsQ0FBQU07YUFDVDtZQUVELE1BQU1DLFdBQVcsR0FBVyxDQUFDLENBQUN2YSxZQUFZLElBQUksQ0FBQ2lhLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQ0EsSUFBSSxHQUFHLFdBQVcsR0FBR0EsSUFBSTtZQUM1RixNQUFNL08sT0FBTyxHQUFHaVAsUUFBUSxDQUFDSSxXQUFXLENBQUM7WUFDckMsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDeEIxQyxRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ1pMLE9BQU8sQ0FBQzNVLFNBQVMsQ0FBQztjQUNsQnVELE9BQU8sRUFBRTtZQUNWLENBQUM7WUFFRCxPQUNDL0gsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ29ILE1BQUEsQ0FBQXNILEtBQUs7Y0FBQzFHLFNBQVMsRUFBQyxxQkFBcUI7Y0FBQy9JLElBQUk7Y0FBQ3NJLE9BQU8sRUFBRW1VLFdBQVc7Y0FBRUMsYUFBYSxFQUFFO1lBQUssR0FDckZuYyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDa0ssTUFBQSxDQUFBakIsYUFBYTtjQUFDdEUsS0FBSyxFQUFFQSxLQUFLO2NBQUUzRCxLQUFLLEVBQUVBLEtBQUssQ0FBQzZYLE1BQU0sQ0FBQ3JRO1lBQU0sRUFBSSxFQUMzRGhKLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUN3WSxTQUFBLENBQUFNLFlBQVksQ0FBQ2hKLFFBQVE7Y0FDckI3TixLQUFLLEVBQUU7Z0JBQ05rWixJQUFJO2dCQUNKNVQsT0FBTyxFQUFFQSxDQUFBLEtBQUs7a0JBQ2J5UixRQUFRLENBQUMsRUFBRSxDQUFDO2tCQUNaTCxPQUFPLENBQUMzVSxTQUFTLENBQUM7a0JBQ2xCdUQsT0FBTyxFQUFFO2dCQUNWLENBQUM7Z0JBRURvUixPQUFPO2dCQUNQVyxLQUFLO2dCQUNMTjs7WUFDQSxHQUVEeFosTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ29LLGFBQUEsQ0FBQWdILGVBQWUsUUFDZjVSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNvTSxPQUFPO2NBQUNzTSxNQUFNLEVBQUVBLE1BQU07Y0FBRWpMLEdBQUcsRUFBQztZQUFTLEVBQUcsRUFDekNqTyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDcUgsR0FBQSxDQUFBcU8sZ0JBQWdCO2NBQUNqSSxHQUFHLEVBQUMsV0FBVztjQUFDdEYsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDdkMsQ0FDSyxDQUNqQjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pGQSxJQUFBM0ksTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUE2SSxHQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBZ2EsU0FBQSxHQUFBaGEsT0FBQTtVQUVNLFNBQVVnZCx1QkFBdUJBLENBQUE7WUFDdEMsTUFBTTtjQUFFalUsT0FBTztjQUFFb1I7WUFBTyxDQUFFLEdBQUcsSUFBQXhPLFFBQUEsQ0FBQXlPLGVBQWUsR0FBRTtZQUM5QyxNQUFNO2NBQUUvWjtZQUFLLENBQUUsR0FBRyxJQUFBMlosU0FBQSxDQUFBNU4sZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTTVKLEtBQUssR0FBRztjQUFFLEdBQUduQyxLQUFLLENBQUNrQztZQUFXLENBQUU7WUFFdENDLEtBQUssQ0FBQzJILE9BQU8sQ0FBQ0csTUFBTSxHQUFHakssS0FBSyxDQUFDa0MsV0FBVyxDQUFDNEgsT0FBTyxDQUFDcUQsSUFBSTtZQUNyRCxNQUFNaEQsUUFBUSxHQUFHQSxDQUFBLEtBQU0yUCxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQzNDLE1BQU1pRCxTQUFTLEdBQUdBLENBQUEsS0FBTWpELE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDckMsT0FDQ25aLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUFSLE1BQUEsQ0FBQUksT0FBQSxDQUFBaVEsUUFBQSxRQUNDclEsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3FILEdBQUEsQ0FBQXdVLGtCQUFrQjtjQUNsQjNGLFNBQVMsRUFBRXJYLEtBQUssQ0FBQ3FCLEtBQUssQ0FBQ2lXLFlBQVk7Y0FDbkNwVixXQUFXLEVBQUVDLEtBQUs7Y0FDbEJ3QixLQUFLLEVBQUUzRCxLQUFLLENBQUNxQixLQUFLLENBQUNzQyxLQUFLO2NBQ3hCK0UsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCeUIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCNFMsU0FBUyxFQUFFQTtZQUFTLEVBQ25CLENBQ0E7VUFFTCJ9