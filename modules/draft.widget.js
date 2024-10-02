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
        hash: 3915186484,
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
            get url() {
              return `/modules/management?id=${store.model.id}`;
            }
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
            #view = 'setup'; // default view
            get view() {
              if (this.#view === 'activity') return 'activity';
              return this.#model?.state === 'confirmed' ? 'overview' : 'setup';
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
              return this.#saved ? this.model?.getProperties() : this.defaultValues;
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
              globalThis.store = this;
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
              this.view = activity ? 'activity' : null;
              this.triggerEvent();
            }
            async update(specs) {
              try {
                const {
                  status
                } = await this.#model.saveDraft({
                  ...specs
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
                }
                if (activityId && this.#model.activities.has(activityId)) {
                  this.#activitySelected = this.#model.activities.get(activityId);
                  globalThis.activity = this.#activitySelected;
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
        hash: 1919115792,
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
        hash: 1642631284,
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
          var _routing = require("@beyond-js/kernel/routing");
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
              _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
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
        hash: 1290580698,
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
        hash: 3974555255,
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
        hash: 143054715,
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
              setView,
              onClose
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
                await store.save({
                  ...values,
                  title: formValues.title,
                  description: formValues.description,
                  state: 'confirmed'
                });
                onClose();
                setValues({
                  ...values,
                  title: formValues.title,
                  description: formValues.description
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
        hash: 4243896678,
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
            })), _react.default.createElement(_ui.ProcessContainer, {
              key: "container",
              fetching: fetching
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsImFsZXJ0IiwidXJsIiwiaWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwic2F2ZWQiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJ2aWV3Iiwic3RhdGUiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImVkaXRBY3Rpdml0eSIsImFjdGl2aXR5IiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwiZGF0YSIsImFjdGl2aXRpZXMiLCJoYXMiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJsb2ciLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJ0eXBlIiwicG9zaXRpb24iLCJjbGVhckFsZXJ0IiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3JlYWN0IiwiX21vZGFsIiwiX3VpIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiQ29pbnNNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibW9kYWwiLCJnZXRDcmVkaXRzIiwiZXJyb3JzIiwibm9DcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJ2YXJpYW50IiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJvbkNhbmNlbCIsIkVycm9yUmVuZGVyZXIiLCJfYWxlcnQiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbGVydCIsIkFsZXJ0UmVuZGVyZXIiLCJ0aW1lIiwicmVtb3ZlIiwic2V0UmVtb3ZlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfY29tcG9uZW50cyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwib3V0cHV0IiwiaW5kZXgiLCJCdXR0b24iLCJvbkNsaWNrIiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwiX2ltYWdlIiwiX3RyaW0iLCJfcm91dGluZyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsYXN0SXRlbSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJzZXR1cCIsIm1lc3NhZ2VzIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJlbnRpdHkiLCJNb2RhbCIsInN1YnRpdGxlIiwiT3duZXJJbWFnZSIsIm93bmVyRGVzY3JpcHRpb24iLCJjb250aW51ZSIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJvYmplY3RpdmVUb3VyIiwidG91ciIsInNldFZhbHVlcyIsInNlbGVjdCIsImV2ZW50IiwidGFyZ2V0Iiwib3B0aW9ucyIsImtleXMiLCJhcmdlbnRpbmUiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJMYW5ndWFnZUZpZWxkIiwibGFuZ3VhZ2VzIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsImZvcm1UZXh0cyIsImZvcm0iLCJGcmFnbWVudCIsIlRleHRhcmVhIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiX3N1cHBvcnRpbmdUZXh0IiwiT3duZXJzaGlwRmllbGQiLCJ3VGV4dHMiLCJzZXRTZWxlY3RlZCIsInN1cHBvcnRpbmdUZXh0Iiwic2V0U3VwcG9ydGluZ1RleHQiLCJjb250ZW50IiwiZGVmYXVsdE9wdGlvbiIsImFkbWluaXN0cmF0b3IiLCJhdHRycyIsIm1vZHVsZXMiLCJjb3VudCIsImFsZXJ0cyIsImF2YWlsYWJsZSIsInVuYXZhaWxhYmxlIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2F1ZGllbmNlIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfbGFuZ3VhZ2UiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiX2hvb2tzIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInJlZiIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsInNldFByb2Nlc3NpbmciLCJpbnZhbGlkRm9ybSIsInVzZUJpbmRlciIsIm9uQ29maXJtZWQiLCJ1cGRhdGVkIiwib25TdWJtaXQiLCJjbHNDb250YWluZXIiLCJQYWdlQ29udGFpbmVyIiwiRm9ybSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJ0ZXh0QWN0aW9ucyIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiYW5hbHlzZSIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImlycmVsZXZhbnQiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiX292ZXJ2aWV3IiwiX2FjdGl2aXR5IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2hvd1BhdGh3YXkiLCJzZXRTaG93UGF0aHdheSIsInNob3dDb25maXJtYXRpb24iLCJzZXRTaG93Q29uZmlybWF0aW9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvdmVydmlldyIsIk1vZHVsZU92ZXJ2aWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiUGF0aHdheUdlbmVyYXRpb24iLCJhbmltYXRpb25zIiwic2xpZGVEb3duIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfYW5pbWF0aW9ucyIsIkNvbmZpcm1hdGlvbkZvcm0iLCJzZXRWaWV3IiwidXNlUGF0aHdheUNvbnRleHQiLCJyZWZpbmUiLCJQYXRod2F5Q29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwib25CYWNrIiwiSXRlbSIsImV4YW1wbGVzIiwiYmFjayIsIl90b3RhbEFjdGl2aXRpZXMiLCJBSUdlbmVyYXRpb25Gb3JtIiwibm90ZXMiLCJvbkdlbmVyYXRlIiwiZXZlbnRzIiwiVG90YWxBY3Rpdml0aWVzIiwidGV4dGFyZWEiLCJmbG9hdGluZyIsImdlbmVyYXRlIiwiRGVjaXN0aW9uVHlwZSIsImdlbmVyYXRpb24iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImNoZWNrZWQiLCJhaSIsIm1hbnVhbGx5IiwiTWFudWFsRm9ybSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwicGF0aHdheSIsIklucHV0IiwibWFudWFsIiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJfZXhhbXBsZXMiLCJfY29uZmlybWF0aW9uIiwiX2RlY2lzaW9uVHlwZSIsIl9tYW51YWwiLCJfYWlGb3JtIiwiX3JlcXVlc3RDcmVkaXRzIiwib25TYXZlIiwiY29udHJvbHMiLCJzZWxlY3Rpb24iLCJyZXF1ZXN0IiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJ2aWV3RGVmaW5lZCIsIkNvbnRyb2wiLCJoYW5kbGVDTG9zZSIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdHJpbS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL21hbnVhbC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHSixN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