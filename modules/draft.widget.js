System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.28/main-layout.widget", "react@18.2.0", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.28/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.28/i18n.ts", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.6-dev.28/components/ui", "@aimpact/ailearn-app@0.1.6-dev.28/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/image", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp016Dev28MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev28MainLayoutWidget;
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
    }, function (_aimpactAilearnApp016Dev28WidgetsBreadcrumbWidget) {
      dependency_11 = _aimpactAilearnApp016Dev28WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev28I18nTs) {
      dependency_12 = _aimpactAilearnApp016Dev28I18nTs;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_13 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp016Dev28ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev28ComponentsUi;
    }, function (_aimpactAilearnApp016Dev28ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp016Dev28ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.28"], ["@aimpact/ailearn-app", "0.1.6-dev.28"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.28/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@beyond-js/widgets/controller', dependency_6], ['@aimpact/ailearn-sdk/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/base', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/alert', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form/react-select', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/image', dependency_24], ['@beyond-js/kernel/routing', dependency_25], ['pragmate-ui/list', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.28/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.28/modules/draft.widget');
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
        hash: 2272648545,
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
              // (globalThis as any).__store = this as any;
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
                //currently the onConsume function caller is expecting a status property
                return {
                  status: true,
                  ...data
                };
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
        hash: 2368628466,
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
            const name = owner.entity === 'user' ? owner.displayName : owner.name;
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
        hash: 3160922891,
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
              if (owner.entity === 'organization') {
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
        hash: 1363840350,
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
              const response = await store.model.consumeCoins();
              if (response.error) return response;
              console.log(0.1, response);
              const response2 = await store.getObjectiveImprovements({
                objective: values.objective
              });
              setShowCoinsModal(false);
              return response2;
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

      /******************************************
      INTERNAL MODULE: ./views/pathway/animations
      ******************************************/

      ims.set('./views/pathway/animations', {
        hash: 3779295974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            slideDown: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            default: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/pathway/confirmation
      ********************************************/

      ims.set('./views/pathway/confirmation', {
        hash: 3373285809,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationForm = ConfirmationForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          var _context2 = require("./context");
          var _animations = require("./animations");
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
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
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
        hash: 1967060276,
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
          var _framerMotion = require("framer-motion");
          var _animations = require("./animations");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
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
        hash: 2214638110,
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
          var _framerMotion = require("framer-motion");
          var _context = require("../../context");
          var _context2 = require("../context");
          var _totalActivities = require("./total-activities");
          var _animations = require("../animations");
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
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
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
        hash: 1470500870,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DecistionType = DecistionType;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _context2 = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _animations = require("../animations");
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
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
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
        hash: 3177909322,
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
          var _framerMotion = require("framer-motion");
          var _animations = require("../animations");
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
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
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
        hash: 2323125868,
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
        hash: 529425688,
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
          var _context2 = require("./context");
          var _examples = require("./examples");
          var _alert = require("../components/alert");
          var _confirmation = require("./confirmation");
          var _decisionType = require("./forms/decision-type");
          var _framerMotion = require("framer-motion");
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
            }, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwidmFsdWUiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiX19pZCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVhY3RpdmVQcm9wcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGlzdGVuVGV4dHMiLCJ1bmRlZmluZWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJzdGF0dXMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiUmVhY3QiLCJ1c2VUZXh0c0NhbGxiYWNrIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJCYXR0ZXJ5IiwicGVyY2VudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiQ29pbnNNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJlbnN1cmUiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQWxlcnQiLCJBbGVydFJlbmRlcmVyIiwidGltZSIsInJlbW92ZSIsInNldFJlbW92ZSIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50Iiwic3VibWl0VGV4dCIsImJhY2siLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJBbmltYXRlZERpdiIsImNscyIsIl9pbWFnZSIsIkNvbmZpcm1hdGlvbk1vZGFsIiwic2V0dXAiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX2hvb2tzIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwic2V0VmFsdWVzIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVkIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZWxlY3QiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJUb3VyU3RlcCIsImFzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJtZXNzYWdlcyIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwic2V0UHJvY2Vzc2luZyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJwaG90b1VybCIsIkFwcEljb24iLCJJbWFnZSIsInNyYyIsIl9hbmltYXRlZERpdiIsIl9hdWRpZW5jZSIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfbGFuZ3VhZ2UiLCJfdHJpbSIsIl9hY3Rpb24iLCJfcGF0aHdheSIsIl9jb25maXJtYXRpb25Nb2RhbCIsInNldFNob3ciLCJzdGF0ZSIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsImludmFsaWRGb3JtIiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJjb25maXJtYXRpb25DYWxsYmFjayIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm9uQ29maXJtZWQiLCJjbHNDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiX2FpQnV0dG9uIiwidGV4dEFjdGlvbnMiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiY2xvc2VNb2RhbCIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwib25Db25zdW1lIiwicmVzcG9uc2UiLCJjb25zdW1lQ29pbnMiLCJsb2ciLCJyZXNwb25zZTIiLCJhbmFseXNlIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiaXJyZWxldmFudCIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlSW50IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50IiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2NvbnRleHQyIiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwib25TYXZlIiwic2V0VmlldyIsInVzZU1vZGFsQ29udGV4dCIsInJlZmluZSIsIk1vZGFsQ29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwib25CYWNrIiwiSXRlbSIsImV4YW1wbGVzIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsIm9uR2VuZXJhdGUiLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImZsb2F0aW5nIiwiZ2VuZXJhdGUiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY2hlY2tlZCIsImFpIiwibWFudWFsbHkiLCJNYW51YWxGb3JtIiwicGF0aHdheSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiSW5wdXQiLCJtYW51YWwiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX21hbnVhbCIsIl9haUZvcm0iLCJfcmVxdWVzdENyZWRpdHMiLCJ2aWV3IiwiY29udHJvbHMiLCJzZWxlY3Rpb24iLCJyZXF1ZXN0IiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJ2aWV3RGVmaW5lZCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21hbmFnZW1lbnQudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBT0wsTUFBQSxDQUFBTSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDUyxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7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