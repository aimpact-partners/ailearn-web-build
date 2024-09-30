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
        hash: 2345060969,
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
            #view = 'setup'; // default view
            get view() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsImFsZXJ0IiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsImN1cnJlbnRQcm9jZXNzIiwidmlldyIsInN0YXRlIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJvd25lcnNoaXBzIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImlkIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJ1bmRlZmluZWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwiZWRpdEFjdGl2aXR5IiwiYWN0aXZpdHkiLCJ1cGRhdGUiLCJzcGVjcyIsInN0YXR1cyIsInNhdmVEcmFmdCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY3Rpdml0eUlkIiwiRHJhZnQiLCJkYXRhIiwiYWN0aXZpdGllcyIsImhhcyIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImxvZyIsImdlbmVyYXRlT2JqZWN0aXZlIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiZmluZCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInR5cGUiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpb24iLCJjb2lucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJhY3Rpb25zIiwiY29uZmlybSIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIl9hbGVydCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFsZXJ0IiwiQWxlcnRSZW5kZXJlciIsInRpbWUiLCJyZW1vdmUiLCJzZXRSZW1vdmUiLCJ0aW1lciIsInNldFRpbWVyIiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9jb21wb25lbnRzIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJvdXRwdXQiLCJpbmRleCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJfaW1hZ2UiLCJfdHJpbSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInNldHVwIiwibWVzc2FnZXMiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0VmFsdWVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkZyYWdtZW50IiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJUb3VyU3RlcCIsImFzIiwiU3VwcG9ydGluZ1RleHQiLCJ2YXJpYW50Q2xhc3NNYXAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJyZXN0IiwidmFyaWFudENsYXNzIiwiY29tYmluZWRDbGFzc05hbWUiLCJ0cmltIiwiX2ljb25zIiwicGhvdG9VcmwiLCJBcHBJY29uIiwiaWNvbiIsIkltYWdlIiwic3JjIiwiUmVhY3QiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9sYW5ndWFnZSIsIl9zdWdnZXN0aW9ucyIsIl9hY3Rpb24iLCJfaG9va3MiLCJEcmFmdEZvcm0iLCJ0b2dnbGVQYXRod2F5IiwidG9nZ2xlQ29uZmlybWF0aW9uIiwicmVmIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwidXNlQmluZGVyIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsImNsc0NvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsIm9uQ29uc3VtZSIsInJlc3BvbnNlIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiQUlCdXR0b24iLCJlbnN1cmUiLCJhbmFseXNlIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiaXJyZWxldmFudCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJfb3ZlcnZpZXciLCJfYWN0aXZpdHkiLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzaG93UGF0aHdheSIsInNldFNob3dQYXRod2F5Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJlbnN1cmVDcmVkaXRzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJ0ZXJuYXJ5IiwiY29uZGl0aW9uIiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwib25HZW5lcmF0ZSIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZmxvYXRpbmciLCJnZW5lcmF0ZSIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjaGVja2VkIiwiYWkiLCJtYW51YWxseSIsIk1hbnVhbEZvcm0iLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsIm1hbnVhbCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIm9uU2F2ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9zdXBwb3J0aW5nLXRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0s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