System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.1/main-layout.widget", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-app@0.2.1/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.2.1/i18n.ts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.2.1/components/ui", "pragmate-ui@1.0.0-beta.6/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.2.1/components/icons", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.2.1/modules/management/overview.code", "@aimpact/ailearn-app@0.2.1/modules/management/activity.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp021MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp021MainLayoutWidget;
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
    }, function (_aimpactAilearnApp021WidgetsBreadcrumbWidget) {
      dependency_10 = _aimpactAilearnApp021WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp021I18nTs) {
      dependency_11 = _aimpactAilearnApp021I18nTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_13 = _react2;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_14 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp021ComponentsUi) {
      dependency_15 = _aimpactAilearnApp021ComponentsUi;
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
    }, function (_aimpactAilearnApp021ComponentsIcons) {
      dependency_24 = _aimpactAilearnApp021ComponentsIcons;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_25 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6List) {
      dependency_26 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp021ModulesManagementOverviewCode) {
      dependency_27 = _aimpactAilearnApp021ModulesManagementOverviewCode;
    }, function (_aimpactAilearnApp021ModulesManagementActivityCode) {
      dependency_28 = _aimpactAilearnApp021ModulesManagementActivityCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_9], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['react', dependency_13], ['pragmate-ui/modal', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/base', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/components/icons', dependency_24], ['pragmate-ui/icons', dependency_25], ['pragmate-ui/list', dependency_26], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_27], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.2.1/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.1/modules/draft.widget');
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
        hash: 945857023,
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
            #model;
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
              this.reactiveProps(['fetchingSuggestions']);
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
              this.#currentProcess = 'generatingDraft';
              return this.model.getModuleSuggestion({
                ...specs
              });
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
        hash: 1361142414,
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
            const label = store.model.state && saved ? store.globalTexts.actions.continue : store.globalTexts.actions.save;
            // const { ref: mainRef } = useDriverTour('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
            const [processing, setProcessing] = React.useState(false);
            const invalidForm = !values.owner || !values.audience || !values.objective || !values.language;
            const isDisabled = invalidForm || processing || store.processing;
            (0, _hooks.useBinder)([store], () => setProcessing(store.fetchingSuggestions), 'fetchingSuggestions.changed');
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
              fetching: fetching && !!store.model?.activities.items.length
            }, React.createElement(_ui.DriverTourContainer, {
              name: "moduleObjective",
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
        hash: 1061487778,
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
              store: {
                globalTexts: {
                  actions: textActions
                }
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
        hash: 3395067186,
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
                suggestions: texts
              },
              store,
              store: {
                globalTexts: {
                  actions: textActions
                }
              },
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
        hash: 497011968,
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
            const [current, setCurrent] = React.useState(0);
            const [values, setValues] = React.useState({
              ...store.model?.getProperties()
            });
            const [error, setError] = React.useState();
            const [showPathway, setShowPathway] = React.useState(false);
            const [showConfirmation, setShowConfirmation] = React.useState(false);
            const togglePathway = () => setShowPathway(!showPathway);
            const toggleConfirmation = () => setShowConfirmation(!showConfirmation);
            (0, _hooks.useBinder)([store], () => {
              setValues({
                ...store.model?.getProperties()
              });
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
        hash: 3901616995,
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
              onClose,
              store
            } = (0, _context.usePathwayContext)();
            const {
              globalTexts
            } = store;
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
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onConfirm
            }, globalTexts.actions.confirm)));
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
        hash: 1870286655,
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
              setView,
              notes,
              setNotes,
              onClose
            } = (0, _context.usePathwayContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.generateModuleSuggestion({
                  ...store.model.getProperties(),
                  notes
                });
                onClose();
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
            }, store.globalTexts.actions.back), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick,
              disabled: fetching || !values.duration
            }, store.globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
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
        hash: 3281900299,
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
              store,
              setValues
            } = (0, _context.usePathwayContext)();
            // access to the texts object from the context
            texts = texts.pathway.ai;
            const disabled = {};
            const {
              brief,
              standard,
              extended
            } = texts.form.size.items;
            const options = [{
              value: 15,
              label: brief,
              totalActivities: 3
            }, {
              value: 45,
              label: standard,
              totalActivities: 5
            }, {
              value: 60,
              label: extended,
              totalActivities: 7
            }];
            const onChange = event => {
              const data = options.find(item => item.value === parseInt(event.target.value));
              const specs = {
                ...values,
                duration: event.target.value,
                totalActivities: data?.totalActivities || null
              };
              setValues(specs);
              store.model.set(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsInVybCIsIm1vZGVsIiwiaWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwic2F2ZWQiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJ2aWV3Iiwic3RhdGUiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImVkaXRBY3Rpdml0eSIsImFjdGl2aXR5IiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwiZGF0YSIsImFjdGl2aXRpZXMiLCJoYXMiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiZmluZCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInR5cGUiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpb24iLCJjb2lucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJhY3Rpb25zIiwiY29uZmlybSIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIl9hbGVydCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFsZXJ0IiwiQWxlcnRSZW5kZXJlciIsInRpbWUiLCJyZW1vdmUiLCJzZXRSZW1vdmUiLCJ0aW1lciIsInNldFRpbWVyIiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9jb21wb25lbnRzIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJvdXRwdXQiLCJpbmRleCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJfaW1hZ2UiLCJfdHJpbSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInNldHVwIiwibWVzc2FnZXMiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0VmFsdWVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkZyYWdtZW50IiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJUb3VyU3RlcCIsImFzIiwiU3VwcG9ydGluZ1RleHQiLCJ2YXJpYW50Q2xhc3NNYXAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJyZXN0IiwidmFyaWFudENsYXNzIiwiY29tYmluZWRDbGFzc05hbWUiLCJ0cmltIiwiX2ljb25zIiwicGhvdG9VcmwiLCJBcHBJY29uIiwiaWNvbiIsIkltYWdlIiwic3JjIiwiUmVhY3QiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9sYW5ndWFnZSIsIl9zdWdnZXN0aW9ucyIsIl9hY3Rpb24iLCJfaG9va3MiLCJEcmFmdEZvcm0iLCJ0b2dnbGVQYXRod2F5IiwidG9nZ2xlQ29uZmlybWF0aW9uIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwidXNlQmluZGVyIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsImNsc0NvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJEcml2ZXJUb3VyQ29udGFpbmVyIiwiRm9ybSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJ0ZXh0QWN0aW9ucyIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiYW5hbHlzZSIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImlycmVsZXZhbnQiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiX292ZXJ2aWV3IiwiX2FjdGl2aXR5IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImFjdGl2ZVBhbmVsIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzaG93UGF0aHdheSIsInNldFNob3dQYXRod2F5Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm92ZXJ2aWV3IiwiTW9kdWxlT3ZlcnZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJQYXRod2F5R2VuZXJhdGlvbiIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9hbmltYXRpb25zIiwiQ29uZmlybWF0aW9uRm9ybSIsInNldFZpZXciLCJ1c2VQYXRod2F5Q29udGV4dCIsInJlZmluZSIsIlBhdGh3YXlDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJiYWNrIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsIm9uR2VuZXJhdGUiLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImZsb2F0aW5nIiwiZ2VuZXJhdGUiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY2hlY2tlZCIsImFpIiwibWFudWFsbHkiLCJNYW51YWxGb3JtIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJtYW51YWwiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX21hbnVhbCIsIl9haUZvcm0iLCJfcmVxdWVzdENyZWRpdHMiLCJvblNhdmUiLCJjb250cm9scyIsInNlbGVjdGlvbiIsInJlcXVlc3QiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZpZXdEZWZpbmVkIiwiQ29udHJvbCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy90cmltLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2ltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQUksS0FBSztjQUNuQixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lB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