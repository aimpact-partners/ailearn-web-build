System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.1/main-layout.widget", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-app@0.2.1/i18n.ts", "@aimpact/ailearn-app@0.2.1/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.2.1/components/ui", "pragmate-ui@1.0.0-beta.6/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.2.1/components/icons", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.2.1/modules/management/overview.code", "@aimpact/ailearn-app@0.2.1/modules/management/activity.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp021I18nTs) {
      dependency_6 = _aimpactAilearnApp021I18nTs;
    }, function (_aimpactAilearnApp021WidgetsBreadcrumbWidget) {
      dependency_7 = _aimpactAilearnApp021WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_8 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_9 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactChatSdk130Session) {
      dependency_10 = _aimpactChatSdk130Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_11 = _beyondJsKernel019Texts;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/ailearn-app/i18n.ts', dependency_6], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_7], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_8], ['@aimpact/ailearn-sdk/reactive/model', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['react', dependency_13], ['pragmate-ui/modal', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/base', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/components/icons', dependency_24], ['pragmate-ui/icons', dependency_25], ['pragmate-ui/list', dependency_26], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_27], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_28]]);
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
        hash: 173247878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.store = exports.StoreManager = void 0;
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2kxOG4iLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsInVybCIsIm1vZGVsIiwiaWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwic2F2ZWQiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJ2aWV3Iiwic3RhdGUiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImVkaXRBY3Rpdml0eSIsImFjdGl2aXR5IiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwiZGF0YSIsImFjdGl2aXRpZXMiLCJoYXMiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiZmluZCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInR5cGUiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpb24iLCJjb2lucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJhY3Rpb25zIiwiY29uZmlybSIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIl9hbGVydCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFsZXJ0IiwiQWxlcnRSZW5kZXJlciIsInRpbWUiLCJyZW1vdmUiLCJzZXRSZW1vdmUiLCJ0aW1lciIsInNldFRpbWVyIiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9jb21wb25lbnRzIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJvdXRwdXQiLCJpbmRleCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJfaW1hZ2UiLCJfdHJpbSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInNldHVwIiwibWVzc2FnZXMiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0VmFsdWVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkZyYWdtZW50IiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJUb3VyU3RlcCIsImFzIiwiU3VwcG9ydGluZ1RleHQiLCJ2YXJpYW50Q2xhc3NNYXAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJyZXN0IiwidmFyaWFudENsYXNzIiwiY29tYmluZWRDbGFzc05hbWUiLCJ0cmltIiwiX2ljb25zIiwicGhvdG9VcmwiLCJBcHBJY29uIiwiaWNvbiIsIkltYWdlIiwic3JjIiwiUmVhY3QiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9sYW5ndWFnZSIsIl9zdWdnZXN0aW9ucyIsIl9hY3Rpb24iLCJfaG9va3MiLCJEcmFmdEZvcm0iLCJ0b2dnbGVQYXRod2F5IiwidG9nZ2xlQ29uZmlybWF0aW9uIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwidXNlQmluZGVyIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsImNsc0NvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJEcml2ZXJUb3VyQ29udGFpbmVyIiwiRm9ybSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJ0ZXh0QWN0aW9ucyIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiYW5hbHlzZSIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImlycmVsZXZhbnQiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiX292ZXJ2aWV3IiwiX2FjdGl2aXR5IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImFjdGl2ZVBhbmVsIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzaG93UGF0aHdheSIsInNldFNob3dQYXRod2F5Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm92ZXJ2aWV3IiwiTW9kdWxlT3ZlcnZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJQYXRod2F5R2VuZXJhdGlvbiIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9hbmltYXRpb25zIiwiQ29uZmlybWF0aW9uRm9ybSIsInNldFZpZXciLCJ1c2VQYXRod2F5Q29udGV4dCIsInJlZmluZSIsIlBhdGh3YXlDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJiYWNrIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsIm9uR2VuZXJhdGUiLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImZsb2F0aW5nIiwiZ2VuZXJhdGUiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY2hlY2tlZCIsImFpIiwibWFudWFsbHkiLCJNYW51YWxGb3JtIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJtYW51YWwiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX21hbnVhbCIsIl9haUZvcm0iLCJfcmVxdWVzdENyZWRpdHMiLCJvblNhdmUiLCJjb250cm9scyIsInNlbGVjdGlvbiIsInJlcXVlc3QiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZpZXdEZWZpbmVkIiwiQ29udHJvbCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy90cmltLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2ltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQUksS0FBSztjQUNuQixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lB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