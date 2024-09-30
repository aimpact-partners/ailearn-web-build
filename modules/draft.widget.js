System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-app@0.1.13/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.13/i18n.ts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.13/modules/management/overview.code", "@aimpact/ailearn-app@0.1.13/modules/management/activity.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, ConfirmationModal, SupportingText, OwnerImage, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ConfirmationModal: void 0,
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
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsWidgets110Controller) {
      dependency_5 = _beyondJsWidgets110Controller;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_6 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactChatSdk130Session) {
      dependency_7 = _aimpactChatSdk130Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_9 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactAilearnApp0113WidgetsBreadcrumbWidget) {
      dependency_10 = _aimpactAilearnApp0113WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp0113I18nTs) {
      dependency_11 = _aimpactAilearnApp0113I18nTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_13 = _react2;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_14 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_16 = _pragmateUi100Beta6Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_19 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_20 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Form) {
      dependency_21 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Base) {
      dependency_22 = _pragmateUi100Beta6Base;
    }, function (_pragmateUi100Beta6Image) {
      dependency_23 = _pragmateUi100Beta6Image;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_24 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_25 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6List) {
      dependency_26 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp0113ModulesManagementOverviewCode) {
      dependency_27 = _aimpactAilearnApp0113ModulesManagementOverviewCode;
    }, function (_aimpactAilearnApp0113ModulesManagementActivityCode) {
      dependency_28 = _aimpactAilearnApp0113ModulesManagementActivityCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_9], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['react', dependency_13], ['pragmate-ui/modal', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/base', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/components/icons', dependency_24], ['pragmate-ui/icons', dependency_25], ['pragmate-ui/list', dependency_26], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_27], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/draft.widget');
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 459501729,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.store = exports.StoreManager = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
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
            #view;
            get view() {
              return this.#view;
            }
            set view(value) {
              if (this.#view === value) return;
              this.#view = value;
              this.triggerEvent();
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
            #activitySelected;
            get activitySelected() {
              return this.#activitySelected;
            }
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
            editActivity(activity) {
              this.#activitySelected = activity;
              this.view = 'activity';
              this.triggerEvent();
            }
            async update(specs) {
              try {
                const {
                  status
                } = await this.#model.saveDraft({
                  state: 'confirmed'
                });
                this.view = 'setup';
                return {
                  status
                };
              } catch (e) {
                console.error(e);
              }
            }
            async load(id, activityId) {
              try {
                if (id && this.#model?.id === id) {
                  return;
                }
                this.#model = new _learningModules.Draft({
                  id
                });
                if (id) {
                  const data = await this.#model.load();
                  this.view = this.#model.state === 'confirmed' ? 'overview' : 'setup';
                }
                if (activityId && this.#model.activities.has(activityId)) {
                  this.#activitySelected = this.#model.activities.get(activityId);
                  this.view = 'activity';
                }
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
                console.log('finally');
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

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2782604694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/coins/alert
      ***********************************/

      ims.set('./views/coins/alert', {
        hash: 93663821,
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
            const {
              title,
              description,
              action
            } = texts.coins.alert;
            return _react.default.createElement(_modal.AlertModal, {
              buttonLabel: action,
              onConfirm: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, title), _react.default.createElement(_ui.Battery, {
              percent: "100",
              className: "lg"
            }), _react.default.createElement("p", null, description)));
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

      /***********************************************
      INTERNAL MODULE: ./views/components/radio-button
      ***********************************************/

      ims.set('./views/components/radio-button', {
        hash: 2984847910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
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
            const data = {
              audience: [],
              duration: [],
              language: []
            };
            const output = data[name]?.map(([value, label], index) => _react.default.createElement(_components.Button, {
              name: name,
              ...disabled,
              "data-index": index,
              onClick: () => onChange(value),
              key: index,
              value: value
            }, label)) || [];
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
        hash: 3754697744,
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
        hash: 845818832,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = ConfirmationModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _image = require("./image");
          var _components = require("pragmate-ui/components");
          var _trim = require("../../trim");
          /*bundle*/
          function ConfirmationModal({
            store,
            values,
            show,
            onClose
          }) {
            const {
              owner
            } = values;
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            // const texts = store.texts;
            const onConfirm = async () => {
              setLoading(true);
              await store.save({
                ...values,
                state: 'created'
              });
              store.breadcrumb.lastItem.label = (0, _trim.trimText)(store.model.objective, 15);
              // routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
              onClose();
              store.setAlert({
                message: store.texts.setup.messages.save,
                position: 'objective'
              });
              setLoading(false);
            };
            const {
              globalTexts
            } = store;
            const texts = store.texts.setup.confirmation;
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
              onClick: onClose,
              disabled: loading
            }, actionTexts.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onConfirm,
              disabled: loading
            }, actionTexts.continue))));
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
        hash: 317254154,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _alert = require("../../components/alert");
          function ObjectiveField() {
            const {
              values,
              texts,
              onChange,
              store
            } = (0, _context.useModuleContext)();
            const formTexts = texts.setup.form;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
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
            })));
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
        hash: 1000953501,
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
          var _language = require("./fields/language");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _suggestions = require("./suggestions");
          var _alert = require("../components/alert");
          var _action = require("./suggestions/action");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function DraftForm() {
            const {
              values,
              setValues,
              store,
              texts,
              saved,
              fetching,
              togglePathway,
              toggleConfirmation
            } = (0, _context.useModuleContext)();
            const label = store.model.state && saved ? texts.actions.continue : texts.actions.save;
            const {
              ref: mainRef
            } = (0, _ui.useDriverTour)('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
            const [processing, setProcessing] = React.useState(false);
            const invalidForm = !values.owner || !values.audience || !values.objective || !values.language;
            const isDisabled = invalidForm || processing || store.processing;
            (0, _hooks.useBinder)([store], () => {
              setProcessing(store.fetchingSuggestions);
            }, 'fetchingSuggestions.changed');
            const onCofirmed = async () => {
              setProcessing(true);
              if (store.model.state === values.state && store.model.objective === values.objective) return;
              await setValues({
                ...values,
                updated: false
              });
              if (store.model.state === 'created') return;
              toggleConfirmation();
              setProcessing(false);
            };
            const onSubmit = async () => {
              try {
                if (processing) return;
                await onCofirmed();
                if (saved && store.model.state === 'created') {
                  togglePathway();
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
            return React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement("div", {
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
            }))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/suggestions/action
      ***********************************************/

      ims.set('./views/form/suggestions/action', {
        hash: 3198889568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function SuggestionsAction({}) {
            const {
              texts: {
                actions: textActions,
                ...texts
              },
              store,
              values,
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
              const response2 = await store.getObjectiveImprovements({
                objective: values.objective
              });
              setShowCoinsModal(false);
              return response2;
            };
            if (store.improvements) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.AIButton, {
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

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 4200118861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 44071750,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _overview = require("@aimpact/ailearn-app/modules/management/overview.code");
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _context = require("./context");
          var _form = require("./form");
          var _confirmationModal = require("./form/confirmation-modal");
          var _pathway = require("./pathway");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [fetching, setFetching] = React.useState(store.fetching);
            const [isFetching, setIsFetching] = React.useState(false);
            const [activePanel] = React.useState(0);
            const [, setUpdated] = React.useState({});
            const [current, setCurrent] = React.useState(0);
            const [values, setValues] = React.useState({
              ...store.values
            });
            const [error, setError] = React.useState();
            const [showPathway, setShowPathway] = React.useState(false);
            const [showConfirmation, setShowConfirmation] = React.useState(false);
            const togglePathway = () => setShowPathway(!showPathway);
            const toggleConfirmation = () => setShowConfirmation(!showConfirmation);
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              setFetching(store?.fetching);
            });
            if (!store.ready) return null; // TODO: add preload screen (or not
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
              texts: store.texts,
              activePanel,
              current,
              setCurrent,
              improvements: store.improvements,
              error,
              ensureCredits: _mainLayout.LayoutBroker.ensureCredits,
              setError,
              fetching: fetching || isFetching,
              setIsFetching,
              togglePathway,
              saved: store.saved,
              values,
              setValues,
              toggleConfirmation
            };
            return React.createElement(React.Fragment, null, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              ternary: true,
              condition: store.view,
              options: {
                overview: React.createElement(_overview.ModuleOverview, {
                  store: store,
                  uri: uri,
                  fetching: fetching
                }),
                setup: React.createElement(_form.DraftForm, null),
                activity: React.createElement(_activity.ModuleActivityForm, {
                  store: store,
                  activity: store.activitySelected
                })
              }
            })), React.createElement(_confirmationModal.ConfirmationModal, {
              store: store,
              values: values,
              show: showConfirmation,
              onClose: toggleConfirmation
            }), React.createElement(_pathway.PathwayGeneration, {
              show: showPathway,
              setValues: setValues,
              store: store,
              values: values,
              onClose: togglePathway
            }));
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
        hash: 1285627280,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationForm = ConfirmationForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _context = require("./context");
          var _animations = require("./animations");
          function ConfirmationForm() {
            const {
              texts,
              setView,
              onClose
            } = (0, _context.usePathwayContext)();
            const onConfirm = async () => setView('selection');
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
        hash: 4158332328,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePathwayContext = exports.PathwayContext = void 0;
          var _react = require("react");
          const PathwayContext = exports.PathwayContext = _react.default.createContext({});
          const usePathwayContext = () => _react.default.useContext(PathwayContext);
          exports.usePathwayContext = usePathwayContext;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/pathway/examples
      ****************************************/

      ims.set('./views/pathway/examples', {
        hash: 739492676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionExamples = SuggestionExamples;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _context = require("./context");
          var _framerMotion = require("framer-motion");
          var _animations = require("./animations");
          function SuggestionExamples() {
            const {
              texts,
              setView,
              setNotes
            } = (0, _context.usePathwayContext)();
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
        hash: 256904138,
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
          var _context = require("../context");
          var _totalActivities = require("./total-activities");
          var _animations = require("../animations");
          function AIGenerationForm({}) {
            const {
              store,
              texts,
              values,
              setValues,
              setView,
              notes,
              setNotes
            } = (0, _context.usePathwayContext)();
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
        hash: 3138892140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DecistionType = DecistionType;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _animations = require("../animations");
          function DecistionType({}) {
            const {
              texts,
              store,
              onClose
            } = (0, _context.usePathwayContext)();
            const formTexts = texts.setup.generation;
            const actions = texts.setup.actions;
            const [valueSelected, setValueSelected] = _react.default.useState();
            const {
              setView
            } = (0, _context.usePathwayContext)();
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
        hash: 2605583051,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualForm = ManualForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _framerMotion = require("framer-motion");
          var _animations = require("../animations");
          function ManualForm({}) {
            let {
              texts,
              store,
              values,
              setValues
            } = (0, _context.usePathwayContext)();
            const formTexts = texts.setup.generation;
            const actions = store.globalTexts.actions;
            const {
              setView
            } = (0, _context.usePathwayContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [formValues, setFormValues] = _react.default.useState({
              title: '',
              description: ''
            });
            const onCancel = () => setView('selection');
            texts = texts.pathway;
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
        hash: 1417463122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalActivities = TotalActivities;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function TotalActivities() {
            let {
              texts,
              values,
              setValues
            } = (0, _context.usePathwayContext)();
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
        hash: 3795477996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PathwayGeneration = PathwayGeneration;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _examples = require("./examples");
          var _alert = require("../components/alert");
          var _confirmation = require("./confirmation");
          var _decisionType = require("./forms/decision-type");
          var _framerMotion = require("framer-motion");
          var _manual = require("./forms/manual");
          var _aiForm = require("./forms/ai-form");
          var _requestCredits = require("./request-credits");
          function PathwayGeneration({
            store,
            values,
            show,
            setValues,
            onClose
          }) {
            // const { texts, store, values, improvements } = useModuleContext();
            const {
              texts,
              improvements
            } = store;
            const [fetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [view, setView] = _react.default.useState();
            const [error, setError] = _react.default.useState('');
            if (!show) return null;
            const onSave = async () => {
              try {
                const {
                  status
                } = await store.update({
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
            }), _react.default.createElement(_context.PathwayContext.Provider, {
              value: {
                view,
                texts: store.texts,
                values,
                store,
                setValues,
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
        hash: 1946450603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsContainer = RequestCreditsContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          function RequestCreditsContainer() {
            const {
              store,
              onClose,
              setView
            } = (0, _context.usePathwayContext)();
            const texts = {
              ...store.globalTexts
            };
            const onCancel = () => setView('selection');
            const onSuccess = () => setView('ai');
            texts.actions.cancel = store.globalTexts.actions.back;
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
        "im": "./views/form/confirmation-modal",
        "from": "ConfirmationModal",
        "name": "ConfirmationModal"
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
        (require || prop === 'ConfirmationModal') && _export("ConfirmationModal", ConfirmationModal = require ? require('./views/form/confirmation-modal').ConfirmationModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsImFsZXJ0IiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsImN1cnJlbnRQcm9jZXNzIiwidmlldyIsInZhbHVlIiwidHJpZ2dlckV2ZW50Iiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJpZCIsImxhYmVsIiwiZGlzcGxheU5hbWUiLCJtYXAiLCJpdGVtIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJhY3Rpdml0eVNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJvYmplY3RpdmUiLCJ0b3RhbEFjdGl2aXRpZXMiLCJsYW5ndWFnZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImVkaXRBY3Rpdml0eSIsImFjdGl2aXR5IiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJzdGF0ZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY3Rpdml0eUlkIiwiRHJhZnQiLCJkYXRhIiwiYWN0aXZpdGllcyIsImhhcyIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImxvZyIsImdlbmVyYXRlT2JqZWN0aXZlIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiZmluZCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInR5cGUiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpb24iLCJjb2lucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJhY3Rpb25zIiwiY29uZmlybSIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIl9hbGVydCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFsZXJ0IiwiQWxlcnRSZW5kZXJlciIsInRpbWUiLCJyZW1vdmUiLCJzZXRSZW1vdmUiLCJ0aW1lciIsInNldFRpbWVyIiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9jb21wb25lbnRzIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJvdXRwdXQiLCJpbmRleCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJfaW1hZ2UiLCJfdHJpbSIsIkNvbmZpcm1hdGlvbk1vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsYXN0SXRlbSIsInNldHVwIiwibWVzc2FnZXMiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0VmFsdWVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkZyYWdtZW50IiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsInNldFByb2Nlc3NpbmciLCJzZXRTZWxlY3RlZCIsInN1cHBvcnRpbmdUZXh0Iiwic2V0U3VwcG9ydGluZ1RleHQiLCJjb250ZW50IiwiZGVmYXVsdE9wdGlvbiIsImFkbWluaXN0cmF0b3IiLCJhdHRycyIsIm1vZHVsZXMiLCJjb3VudCIsImFsZXJ0cyIsImF2YWlsYWJsZSIsInVuYXZhaWxhYmxlIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2F1ZGllbmNlIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfbGFuZ3VhZ2UiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiX2hvb2tzIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInJlZiIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsImludmFsaWRGb3JtIiwidXNlQmluZGVyIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsImNsc0NvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsIm9uQ29uc3VtZSIsInJlc3BvbnNlIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiQUlCdXR0b24iLCJlbnN1cmUiLCJhbmFseXNlIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiaXJyZWxldmFudCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJfb3ZlcnZpZXciLCJfYWN0aXZpdHkiLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzaG93UGF0aHdheSIsInNldFNob3dQYXRod2F5Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJlbnN1cmVDcmVkaXRzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJ0ZXJuYXJ5IiwiY29uZGl0aW9uIiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwib25HZW5lcmF0ZSIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZmxvYXRpbmciLCJnZW5lcmF0ZSIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjaGVja2VkIiwiYWkiLCJtYW51YWxseSIsIk1hbnVhbEZvcm0iLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsIm1hbnVhbCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIm9uU2F2ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9zdXBwb3J0aW5nLXRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFB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