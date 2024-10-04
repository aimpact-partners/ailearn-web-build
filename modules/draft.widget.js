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
        hash: 1648286361,
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
        hash: 2390474408,
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
            const {
              ref: mainRef
            } = (0, _ui.useDriverTour)('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsInVybCIsIm1vZGVsIiwiaWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwic2F2ZWQiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJ2aWV3Iiwic3RhdGUiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImVkaXRBY3Rpdml0eSIsImFjdGl2aXR5IiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwiZGF0YSIsImFjdGl2aXRpZXMiLCJoYXMiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJsb2ciLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiZmluZCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInR5cGUiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpb24iLCJjb2lucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJhY3Rpb25zIiwiY29uZmlybSIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIl9hbGVydCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFsZXJ0IiwiQWxlcnRSZW5kZXJlciIsInRpbWUiLCJyZW1vdmUiLCJzZXRSZW1vdmUiLCJ0aW1lciIsInNldFRpbWVyIiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9jb21wb25lbnRzIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJvdXRwdXQiLCJpbmRleCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJfaW1hZ2UiLCJfdHJpbSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInNldHVwIiwibWVzc2FnZXMiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0VmFsdWVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkZyYWdtZW50IiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJUb3VyU3RlcCIsImFzIiwiU3VwcG9ydGluZ1RleHQiLCJ2YXJpYW50Q2xhc3NNYXAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJyZXN0IiwidmFyaWFudENsYXNzIiwiY29tYmluZWRDbGFzc05hbWUiLCJ0cmltIiwiX2ljb25zIiwicGhvdG9VcmwiLCJBcHBJY29uIiwiaWNvbiIsIkltYWdlIiwic3JjIiwiUmVhY3QiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9sYW5ndWFnZSIsIl9zdWdnZXN0aW9ucyIsIl9hY3Rpb24iLCJfaG9va3MiLCJEcmFmdEZvcm0iLCJ0b2dnbGVQYXRod2F5IiwidG9nZ2xlQ29uZmlybWF0aW9uIiwicmVmIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwidXNlQmluZGVyIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsImNsc0NvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsIm9uQ29uc3VtZSIsInJlc3BvbnNlIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiQUlCdXR0b24iLCJlbnN1cmUiLCJhbmFseXNlIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiaXJyZWxldmFudCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJfb3ZlcnZpZXciLCJfYWN0aXZpdHkiLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInNob3dQYXRod2F5Iiwic2V0U2hvd1BhdGh3YXkiLCJzaG93Q29uZmlybWF0aW9uIiwic2V0U2hvd0NvbmZpcm1hdGlvbiIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwib25HZW5lcmF0ZSIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZmxvYXRpbmciLCJnZW5lcmF0ZSIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjaGVja2VkIiwiYWkiLCJtYW51YWxseSIsIk1hbnVhbEZvcm0iLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsIm1hbnVhbCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIm9uU2F2ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9zdXBwb3J0aW5nLXRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBT0wsTUFBQSxDQUFBTSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDUyxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBYSxNQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsV0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLGVBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsZ0JBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsV0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixLQUFBLEdBQUF2QixPQUFBO1VBVU0sTUFBT3dCLFlBQWEsU0FBUVIsTUFBQSxDQUFBUyxhQUEyQjtZQUM1REMsT0FBTyxHQUFHLElBQUk7WUFHZCxDQUFBQyxLQUFNO1lBRU4sSUFBSUMsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sMEJBQTBCdkIsS0FBSyxDQUFDd0IsS0FBSyxDQUFDQyxFQUFFLEVBQUU7WUFDbEQ7WUFDQSxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlJLFdBQVdBLENBQUE7Y0FDZCxPQUFPUixLQUFBLENBQUFRLFdBQVcsQ0FBQ0MsS0FBSztZQUN6QjtZQUVBOzs7WUFHQSxDQUFBQyxLQUFNLEdBQUcsS0FBSztZQUNkLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUosS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUssWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ08sT0FBTyxFQUFFQyxLQUFLLEdBQUcsQ0FBQztZQUN0QztZQUNBLENBQUFDLG9CQUFxQixHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNqQyxJQUFJRCxvQkFBb0JBLENBQUE7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsb0JBQXFCO1lBQ2xDO1lBRUEsSUFBSUUsSUFBSUEsQ0FBQTtjQUNQLE9BQU92QixRQUFBLENBQUF3QixjQUFjLENBQUNELElBQUk7WUFDM0I7WUFFQSxJQUFJRSxVQUFVQSxDQUFBO2NBQ2IsT0FBT3BCLFdBQUEsQ0FBQXFCLGVBQWUsQ0FBQ0QsVUFBVTtZQUNsQztZQUNBLENBQUFFLGNBQWU7WUFDZixJQUFJQSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxDQUFBQyxJQUFLLEdBQVcsT0FBTyxDQUFDLENBQUM7WUFDekIsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLElBQUksSUFBSSxDQUFDLENBQUFBLElBQUssS0FBSyxVQUFVLEVBQUUsT0FBTyxVQUFVO2NBQ2hELE9BQU8sSUFBSSxDQUFDLENBQUFoQixLQUFNLEVBQUVpQixLQUFLLEtBQUssV0FBVyxHQUFHLFVBQVUsR0FBRyxPQUFPO1lBQ2pFO1lBQ0EsSUFBSUQsSUFBSUEsQ0FBQ0UsS0FBYTtjQUNyQixJQUFJLElBQUksQ0FBQyxDQUFBRixJQUFLLEtBQUtFLEtBQUssRUFBRTtjQUMxQixJQUFJLENBQUMsQ0FBQUYsSUFBSyxHQUFHRSxLQUFLO2NBQ2xCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCO1lBQ0EsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE1BQU1DLElBQUksR0FBRyxJQUFJLENBQUNWLElBQUksQ0FBQ1csYUFBYSxDQUFDQyxLQUFLO2NBRTFDLE9BQU8sQ0FDTjtnQkFBRUwsS0FBSyxFQUFFLElBQUksQ0FBQ1AsSUFBSSxDQUFDVixFQUFFO2dCQUFFdUIsS0FBSyxFQUFFLElBQUksQ0FBQ2IsSUFBSSxDQUFDYztjQUFXLENBQUUsRUFDckQsR0FBR0osSUFBSSxDQUFDSyxHQUFHLENBQUVDLElBQVMsS0FBTTtnQkFBRVQsS0FBSyxFQUFFUyxJQUFJLENBQUMxQixFQUFFO2dCQUFFdUIsS0FBSyxFQUFFRyxJQUFJLENBQUNDO2NBQUksQ0FBRSxDQUFDLENBQUMsQ0FDbEU7WUFDRjtZQUVBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxJQUFJLElBQUksQ0FBQzdCLEtBQUssQ0FBQzhCLEtBQUssRUFBRTtnQkFDckIsT0FBTztrQkFBRVosS0FBSyxFQUFFLElBQUksQ0FBQ2xCLEtBQUssQ0FBQzhCLEtBQUssQ0FBQzdCLEVBQUU7a0JBQUV1QixLQUFLLEVBQUUsSUFBSSxDQUFDeEIsS0FBSyxDQUFDOEIsS0FBSyxDQUFDRjtnQkFBSSxDQUFFOztZQUVyRTtZQUVBLENBQUFHLGdCQUFpQjtZQUNqQixJQUFJQSxnQkFBZ0JBLENBQUE7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCO1lBQzlCO1lBQ0EsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPO2dCQUNOQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLFNBQVMsRUFBRSxFQUFFO2dCQUNiQyxlQUFlLEVBQUUsQ0FBQztnQkFDbEJDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQXJDLEtBQU0sQ0FBQ3FDO2VBQ3RCO1lBQ0Y7WUFFQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQWxDLEtBQU0sR0FBRyxJQUFJLENBQUNKLEtBQUssRUFBRXVDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQ1AsYUFBYTtZQUN0RTtZQUNBLENBQUE3QixLQUFNLEdBQStCLElBQUliLE1BQUEsQ0FBQWtELFlBQVksQ0FBQ2pELGVBQUEsQ0FBQWtELE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUl2QyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFZSxLQUFLO1lBQzFCO1lBRUEsSUFBSXlCLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBeEMsS0FBTSxDQUFDd0MsS0FBSyxJQUFJakQsS0FBQSxDQUFBUSxXQUFXLENBQUN5QyxLQUFLO1lBQzdEO1lBQ0EsQ0FBQUMsbUJBQW9CLEdBQUcsSUFBSUMsR0FBRyxFQUFrQjtZQUVoREMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUVOQyxVQUFrQixDQUFDdkUsS0FBSyxHQUFHLElBQVc7Y0FDdkMsSUFBSSxDQUFDd0UsYUFBYSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztjQUMzQ3RELEtBQUEsQ0FBQVEsV0FBVyxDQUFDK0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM5QixZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1lBQzNDO1lBRUFBLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ2xCLElBQUksQ0FBQy9CLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUIsQ0FBQztZQUVEbEMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBZSxLQUFNLEdBQUdtRCxTQUFTO2NBQ3ZCLEtBQUssQ0FBQ1IsS0FBSyxHQUFHLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLENBQUF0QyxZQUFhLEdBQUc4QyxTQUFTO2NBQzlCLElBQUksQ0FBQ2hDLFlBQVksRUFBRTtjQUNuQjlCLFdBQUEsQ0FBQStELFlBQVksQ0FBQ0MsS0FBSyxFQUFFO1lBQ3JCO1lBRUFDLGlCQUFpQkEsQ0FBQTtjQUNoQixJQUFJLENBQUMsQ0FBQWpELFlBQWEsR0FBRzhDLFNBQVM7Y0FDOUIsSUFBSSxDQUFDaEMsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVBb0MsWUFBWUEsQ0FBQ0MsUUFBa0I7Y0FDOUIsSUFBSSxDQUFDLENBQUF6QixnQkFBaUIsR0FBR3lCLFFBQVE7Y0FDakMsSUFBSSxDQUFDeEMsSUFBSSxHQUFHd0MsUUFBUSxHQUFHLFVBQVUsR0FBRyxJQUFJO2NBRXhDLElBQUksQ0FBQ3JDLFlBQVksRUFBRTtZQUNwQjtZQUVBLE1BQU1zQyxNQUFNQSxDQUFDQyxLQUEwQjtjQUN0QyxJQUFJO2dCQUNILE1BQU07a0JBQUVDO2dCQUFNLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBM0QsS0FBTSxDQUFDNEQsU0FBUyxDQUFDO2tCQUFFLEdBQUdGO2dCQUFLLENBQUUsQ0FBQztnQkFDNUQsSUFBSSxDQUFDMUMsSUFBSSxHQUFHLE9BQU87Z0JBQ25CLE9BQU87a0JBQUUyQztnQkFBTSxDQUFFO2VBQ2pCLENBQUMsT0FBT0UsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjtZQUNBLE1BQU1oRixJQUFJQSxDQUFDb0IsRUFBVyxFQUFFK0QsVUFBbUI7Y0FDMUMsSUFBSTtnQkFDSCxJQUFJL0QsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBRCxLQUFNLEVBQUVDLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2tCQUNqQzs7Z0JBR0QsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJUixnQkFBQSxDQUFBeUUsS0FBSyxDQUFDO2tCQUFFaEU7Z0JBQUUsQ0FBRSxDQUFDO2dCQUUvQixJQUFJQSxFQUFFLEVBQUU7a0JBQ1AsTUFBTWlFLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbEUsS0FBTSxDQUFDbkIsSUFBSSxFQUFFOztnQkFHdEMsSUFBSW1GLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQWhFLEtBQU0sQ0FBQ21FLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDSixVQUFVLENBQUMsRUFBRTtrQkFDekQsSUFBSSxDQUFDLENBQUFqQyxnQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQS9CLEtBQU0sQ0FBQ21FLFVBQVUsQ0FBQ25GLEdBQUcsQ0FBQ2dGLFVBQVUsQ0FBQztrQkFDL0RqQixVQUFVLENBQUNTLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQXpCLGdCQUFpQjtrQkFDNUMsSUFBSSxDQUFDZixJQUFJLEdBQUcsVUFBVTs7Z0JBRXZCLElBQUksQ0FBQyxDQUFBaEIsS0FBTSxDQUFDaUQsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM5QixZQUFZLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxDQUFBZixLQUFNLEdBQUcsQ0FBQyxDQUFDSCxFQUFFO2dCQUVsQlosV0FBQSxDQUFBK0QsWUFBWSxDQUFDaUIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBckUsS0FBTSxFQUFFLElBQUksQ0FBQztnQkFDeENYLFdBQUEsQ0FBQStELFlBQVksQ0FBQ2tCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFBbEUsS0FBTTtnQkFFNUMsS0FBSyxDQUFDdUMsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ3hCLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU8wQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCO1lBRUFVLFFBQVFBLENBQUE7Y0FDUDtZQUFBO1lBR0QsTUFBTUMsSUFBSUEsQ0FBQ2QsS0FBMEI7Y0FDcEMsSUFBSSxDQUFDZSxVQUFVLEdBQUcsSUFBSTtjQUV0QnBGLFdBQUEsQ0FBQStELFlBQVksQ0FBQ2lCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQXJFLEtBQU0sRUFBRSxJQUFJLENBQUM7Y0FDeEMsTUFBTSxJQUFJLENBQUNBLEtBQUssQ0FBQzRELFNBQVMsQ0FBQ0YsS0FBSyxDQUFDO2NBRWpDLElBQUksQ0FBQ2UsVUFBVSxHQUFHLEtBQUs7Y0FDdkIsSUFBSSxDQUFDLENBQUFyRSxLQUFNLEdBQUcsSUFBSTtjQUNsQmYsV0FBQSxDQUFBK0QsWUFBWSxDQUFDa0IsaUJBQWlCLEdBQUcsSUFBSTtjQUVyQyxPQUFPLElBQUksQ0FBQyxDQUFBdEUsS0FBTTtZQUNuQjtZQUVBLE1BQU0wRSxLQUFLQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUExRSxLQUFNLENBQUNtRSxVQUFVLENBQUNPLEtBQUssRUFBRTtjQUM5QixJQUFJLENBQUMsQ0FBQXRFLEtBQU0sR0FBRytDLFNBQVM7Y0FDdkIsSUFBSSxDQUFDd0IsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBOzs7Ozs7O1lBT0EsTUFBTUMsd0JBQXdCQSxDQUFDO2NBQUV6QztZQUFTLENBQXlCO2NBQ2xFLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFwQixjQUFlLEdBQUcsV0FBVztnQkFDbEMsSUFBSSxDQUFDOEQsbUJBQW1CLEdBQUcsSUFBSTtnQkFDL0IsTUFBTVgsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDbEUsS0FBSyxDQUFDNEUsd0JBQXdCLENBQUM7a0JBQUV6QztnQkFBUyxDQUFFLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxDQUFBOUIsWUFBYSxHQUFHNkQsSUFBSTtnQkFFekIsSUFBSSxDQUFDL0MsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDM0I7Z0JBQ0EsT0FBTztrQkFBRXdDLE1BQU0sRUFBRSxJQUFJO2tCQUFFLEdBQUdPO2dCQUFJLENBQUU7ZUFDaEMsQ0FBQyxPQUFPTCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVEMsT0FBTyxDQUFDZ0IsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLENBQUEvRCxjQUFlLEdBQUdvQyxTQUFTO2dCQUNoQyxJQUFJLENBQUMwQixtQkFBbUIsR0FBRyxLQUFLOztZQUVsQztZQUVBLE1BQU1FLGlCQUFpQkEsQ0FBQztjQUFFNUMsU0FBUztjQUFFOUI7WUFBWSxDQUFpRDtjQUNqRyxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBVSxjQUFlLEdBQUcsbUJBQW1CO2dCQUMxQyxJQUFJLENBQUM4RCxtQkFBbUIsR0FBRyxJQUFJO2dCQUUvQixNQUFNWCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNsRSxLQUFLLENBQUMrRSxpQkFBaUIsQ0FBQztrQkFBRTVDLFNBQVM7a0JBQUU5QjtnQkFBWSxDQUFFLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxDQUFBdUMsbUJBQW9CLENBQUNvQyxHQUFHLENBQUM3QyxTQUFTLEVBQUUrQixJQUFJLENBQUMvQixTQUFTLENBQUM7Z0JBQ3hELElBQUksQ0FBQ25DLEtBQUssQ0FBQ3dFLElBQUk7Z0JBQ2YsSUFBSSxDQUFDLENBQUF4RSxLQUFNLENBQUNtQyxTQUFTLEdBQUcrQixJQUFJLENBQUMvQixTQUFTO2dCQUN0QyxJQUFJLENBQUMsQ0FBQTlCLFlBQWEsR0FBRzhDLFNBQVM7Z0JBQzlCO2dCQUNBLElBQUksQ0FBQyxDQUFBMUMsb0JBQXFCLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUNTLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUFuQixLQUFNLENBQUNtQyxTQUFTO2VBQzVCLENBQUMsT0FBTzBCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBOUMsY0FBZSxHQUFHb0MsU0FBUztnQkFDaEMsSUFBSSxDQUFDMEIsbUJBQW1CLEdBQUcsS0FBSzs7WUFFbEM7WUFFQSxNQUFNSSx3QkFBd0JBLENBQUN2QixLQUEwQjtjQUN4RCxJQUFJLENBQUMsQ0FBQTNDLGNBQWUsR0FBRyxpQkFBaUI7Y0FFeEMsT0FBTyxJQUFJLENBQUNmLEtBQUssQ0FBQ2tGLG1CQUFtQixDQUFDO2dCQUFFLEdBQUd4QjtjQUFLLENBQUUsQ0FBQztZQUNwRDtZQUVBLE1BQU15QixnQkFBZ0JBLENBQUNsRixFQUFVO2NBQ2hDLElBQUksSUFBSSxDQUFDVSxJQUFJLENBQUNWLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQ1UsSUFBSTs7Y0FFakIsTUFBTXlFLEdBQUcsR0FBRyxJQUFJLENBQUN6RSxJQUFJLENBQUNXLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDOEQsSUFBSSxDQUFFMUQsSUFBUyxJQUFLQSxJQUFJLENBQUMxQixFQUFFLEtBQUtBLEVBQUUsQ0FBQztjQUU3RSxPQUFPbUYsR0FBRztZQUNYO1lBRUFFLFFBQVFBLENBQUM7Y0FBRUMsT0FBTztjQUFFQyxJQUFJO2NBQUVDLFFBQVEsR0FBRztZQUFLLENBQXlCO2NBQ2xFLElBQUksQ0FBQyxDQUFBM0YsS0FBTSxHQUFHO2dCQUFFeUYsT0FBTztnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBUSxDQUFFO2NBRXpDLElBQUksQ0FBQ2QsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUM5QjtZQUNBZSxVQUFVQSxDQUFBO2NBQ1QsSUFBSSxDQUFDLENBQUE1RixLQUFNLEdBQUdxRCxTQUFTO2NBQ3ZCLElBQUksQ0FBQ3dCLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDOUI7O1VBQ0F6RixPQUFBLENBQUFTLFlBQUEsR0FBQUEsWUFBQTtVQUVNLE1BQU1uQixLQUFLLEdBQUFVLE9BQUEsQ0FBQVYsS0FBQSxHQUFHLElBQUltQixZQUFZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdFNqQyxTQUFVZ0csUUFBUUEsQ0FBQ0MsS0FBYSxFQUFFQyxTQUFpQjtZQUN4RCxJQUFJRCxLQUFLLENBQUNFLE1BQU0sSUFBSUQsU0FBUyxFQUFFLE9BQU9ELEtBQUs7WUFFM0MsSUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUNJLEtBQUssQ0FBQyxDQUFDLEVBQUVILFNBQVMsQ0FBQztZQUV2QztZQUNBLElBQUlELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUNJLElBQUksQ0FBQ0wsS0FBSyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxFQUFFO2NBQzVELE1BQU1LLFNBQVMsR0FBR04sS0FBSyxDQUFDSSxLQUFLLENBQUNILFNBQVMsQ0FBQztjQUN4QyxNQUFNTSxjQUFjLEdBQUdELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFdBQVcsQ0FBQztjQUNwREwsT0FBTyxJQUFJSSxjQUFjLEtBQUssQ0FBQyxDQUFDLEdBQUdELFNBQVMsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsRUFBRUcsY0FBYyxDQUFDLEdBQUdELFNBQVM7O1lBR2xGLE9BQU8sR0FBR0gsT0FBTyxLQUFLO1VBQ3ZCOzs7Ozs7Ozs7OztVQ2JBOztVQUVBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQXBILE9BQUE7WUFDQWdDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBcUYsTUFBQSxHQUFBcEksT0FBQTtVQUNBLElBQUFxSSxNQUFBLEdBQUFySSxPQUFBO1VBQ0EsSUFBQXNJLEdBQUEsR0FBQXRJLE9BQUE7VUFRTSxTQUFVdUksVUFBVUEsQ0FBQztZQUFFOUgsSUFBSTtZQUFFK0gsT0FBTztZQUFFeEc7VUFBSyxDQUFtQjtZQUNuRSxJQUFJLENBQUN2QixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU07Y0FBRWdJLEtBQUs7Y0FBRUMsV0FBVztjQUFFQztZQUFNLENBQUUsR0FBRzNHLEtBQUssQ0FBQzRHLEtBQUssQ0FBQ2pILEtBQUs7WUFFeEQsT0FDQ3lHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNULE1BQUEsQ0FBQVUsVUFBVTtjQUFDQyxXQUFXLEVBQUVMLE1BQU07Y0FBRU0sU0FBUyxFQUFFVCxPQUFPO2NBQUVBLE9BQU8sRUFBRUE7WUFBTyxHQUNwRUosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUtMLEtBQUssQ0FBTSxFQUNoQkwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsR0FBQSxDQUFBWSxPQUFPO2NBQUNDLE9BQU8sRUFBQyxLQUFLO2NBQUNDLFNBQVMsRUFBQztZQUFJLEVBQUcsRUFDeENoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSixXQUFXLENBQUssQ0FDWixDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFOLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBcUksTUFBQSxHQUFBckksT0FBQTtVQUNBLElBQUFzSSxHQUFBLEdBQUF0SSxPQUFBO1VBQ00sU0FBVXFKLFVBQVVBLENBQUM7WUFBRWhKLEtBQUs7WUFBRUksSUFBSTtZQUFFK0gsT0FBTztZQUFFeEc7VUFBSyxDQUFFO1lBQ3pELElBQUksQ0FBQ3ZCLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTSxDQUFDNkksUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25CLE1BQUEsQ0FBQVMsT0FBSyxDQUFDVyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzVELEtBQUssRUFBRTZELFFBQVEsQ0FBQyxHQUFHckIsTUFBQSxDQUFBUyxPQUFLLENBQUNXLFFBQVEsRUFBRTtZQUMxQ3hILEtBQUssR0FBR0EsS0FBSyxDQUFDNEcsS0FBSyxDQUFDYyxLQUFLO1lBRXpCLE1BQU1ULFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSE0sV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWxKLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQzhILFVBQVUsRUFBRTtnQkFDOUJuQixPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU85QyxDQUFDLEVBQUU7Z0JBQ1grRCxRQUFRLENBQUN6SCxLQUFLLENBQUM0SCxNQUFNLENBQUNDLFNBQVMsQ0FBQztlQUNoQyxTQUFTO2dCQUNUTixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsT0FDQ25CLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNULE1BQUEsQ0FBQXlCLFlBQVk7Y0FDWnJKLElBQUk7Y0FDSjJJLFNBQVMsRUFBQyxVQUFVO2NBQ3BCVyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtrQkFBRTNHLEtBQUssRUFBRXJCLEtBQUssQ0FBQytILE9BQU8sQ0FBQ0MsT0FBTztrQkFBRUMsT0FBTyxFQUFFO2dCQUFTLENBQUU7Z0JBQzdEQyxNQUFNLEVBQUU7a0JBQUU3RyxLQUFLLEVBQUVyQixLQUFLLENBQUMrSCxPQUFPLENBQUNHLE1BQU07a0JBQUVELE9BQU8sRUFBRSxTQUFTO2tCQUFFRSxRQUFRLEVBQUU7Z0JBQUk7ZUFDekU7Y0FDRGxCLFNBQVMsRUFBRUEsU0FBUztjQUNwQm1CLFFBQVEsRUFBRTVCLE9BQU87Y0FDakJBLE9BQU8sRUFBRUE7WUFBTyxHQUVoQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUs5RyxLQUFLLENBQUN5RyxLQUFLLENBQU0sRUFDdEJMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNSLEdBQUEsQ0FBQStCLGFBQWE7Y0FBQ3pFLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQy9Cd0MsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsR0FBQSxDQUFBWSxPQUFPO2NBQUNDLE9BQU8sRUFBQyxLQUFLO2NBQUNDLFNBQVMsRUFBQztZQUFJLEVBQUcsRUFDeENoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxZQUFJOUcsS0FBSyxDQUFDMEcsV0FBVyxDQUFLLENBQ2xCLENBQ0s7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBTixNQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQXNLLE1BQUEsR0FBQXRLLE9BQUE7VUFDQSxJQUFBdUssUUFBQSxHQUFBdkssT0FBQTtVQUVBLElBQUF3SyxhQUFBLEdBQUF4SyxPQUFBO1VBQ00sU0FBVXFLLGFBQWFBLENBQUM7WUFBRXJJLEtBQUs7WUFBRTREO1VBQUssQ0FBaUQ7WUFDNUY7WUFFQSxPQUFPd0MsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dCLE1BQUEsQ0FBQUcsS0FBSztjQUFDUixPQUFPLEVBQUM7WUFBTyxHQUFFakksS0FBSyxDQUFDNEQsS0FBSyxDQUFDLENBQVM7VUFDckQ7VUFFTSxTQUFVOEUsYUFBYUEsQ0FBQztZQUM3QnJELElBQUksR0FBRyxTQUFTO1lBQ2hCRCxPQUFPO1lBQ1BnQyxTQUFTO1lBQ1R1QixJQUFJLEdBQUcsSUFBSTtZQUNYbEssSUFBSSxHQUFHO1VBQUksQ0FPWDtZQUNBMkksU0FBUyxHQUFHLGdDQUFnQy9CLElBQUksR0FBRytCLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckYsTUFBTSxDQUFDd0IsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3pDLE1BQUEsQ0FBQVMsT0FBSyxDQUFDVyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0sQ0FBQ3NCLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUczQyxNQUFBLENBQUFTLE9BQUssQ0FBQ1csUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QyxNQUFNO2NBQUVuSjtZQUFLLENBQUUsR0FBRyxJQUFBa0ssUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNwQzVDLE1BQUEsQ0FBQVMsT0FBSyxDQUFDb0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDeEssSUFBSSxFQUFFO2dCQUNWc0ssUUFBUSxDQUFDL0YsU0FBUyxDQUFDO2dCQUNuQjZGLFNBQVMsQ0FBQzdGLFNBQVMsQ0FBQztnQkFDcEI7O2NBRUQsTUFBTThGLEtBQUssR0FBR0ksVUFBVSxDQUFDLE1BQUs7Z0JBQzdCLElBQUl6SyxJQUFJLEVBQUU7a0JBQ1RvSyxTQUFTLENBQUMsSUFBSSxDQUFDOztnQkFHaEJ4SyxLQUFLLENBQUNrSCxVQUFVLEVBQUU7Y0FDbkIsQ0FBQyxFQUFFb0QsSUFBSSxDQUFDO2NBQ1JJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2NBRWYsT0FBTyxNQUFNSyxZQUFZLENBQUNMLEtBQUssQ0FBQztZQUNqQyxDQUFDLEVBQUUsQ0FBQzFELE9BQU8sRUFBRTNHLElBQUksQ0FBQyxDQUFDO1lBRW5CLElBQUltSyxNQUFNLElBQUksQ0FBQ25LLElBQUksRUFBRSxPQUFPLElBQUk7WUFFaEMsT0FDQzJILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMwQixhQUFBLENBQUFZLE1BQU0sQ0FBQ0MsR0FBRztjQUNWQyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWDFILFFBQVEsRUFBRSxHQUFHO2tCQUNiMkgsS0FBSyxFQUFFO2lCQUNQO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWDFILFFBQVEsRUFBRTtpQkFDVjtnQkFDRHdILE9BQU8sRUFBRTtlQUNUO2NBQ0RuQyxTQUFTLEVBQUVBO1lBQVMsR0FFbkJoQyxPQUFPLENBQ0k7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUEsSUFBQWdCLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBNkwsV0FBQSxHQUFBN0wsT0FBQTtVQUNBLElBQUF1SyxRQUFBLEdBQUF2SyxPQUFBO1VBVU0sU0FBVThMLFdBQVdBLENBQUM7WUFBRXJJLElBQUk7WUFBRXNJLFFBQVE7WUFBRTFJLEtBQUs7WUFBRTJJLFFBQVEsR0FBRztVQUFDLENBQW9CO1lBQ3BGLE1BQU07Y0FBRWhLLEtBQUs7Y0FBRTNCO1lBQUssQ0FBRSxHQUFHLElBQUFrSyxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQzNDLE1BQU1pQixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFNUwsS0FBSyxDQUFDaUosUUFBUSxJQUFJakosS0FBSyxDQUFDd0IsS0FBSyxDQUFDeUg7WUFBUSxDQUFFO1lBQ3JFLE1BQU12RCxJQUFJLEdBQStCO2NBQ3hDakMsUUFBUSxFQUFFLEVBQUU7Y0FDWkMsUUFBUSxFQUFFLEVBQUU7Y0FDWkcsUUFBUSxFQUFFO2FBQ1Y7WUFFRCxNQUFNZ0ksTUFBTSxHQUNYbkcsSUFBSSxDQUFDdEMsSUFBSSxDQUFDLEVBQUVGLEdBQUcsQ0FBQyxDQUFDLENBQUNSLEtBQUssRUFBRU0sS0FBSyxDQUFDLEVBQUU4SSxLQUFLLEtBQ3JDL0QsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLFdBQUEsQ0FBQU8sTUFBTTtjQUNOM0ksSUFBSSxFQUFFQSxJQUFJO2NBQUEsR0FDTndJLFFBQVE7Y0FBQSxjQUNBRSxLQUFLO2NBQ2pCRSxPQUFPLEVBQUVBLENBQUEsS0FBTU4sUUFBUSxDQUFDaEosS0FBSyxDQUFDO2NBQzlCdUosR0FBRyxFQUFFSCxLQUFLO2NBQ1ZwSixLQUFLLEVBQUVBO1lBQUssR0FFWE0sS0FBSyxDQUVQLENBQUMsSUFBSSxFQUFFO1lBRVQsT0FDQytFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUF5QixHQUN2Q2hCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU95RCxPQUFPLEVBQUU5STtZQUFJLEdBQUdKLEtBQUssQ0FBUyxFQUNyQytFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFXLFdBQVc7Y0FBQ1IsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FBTUM7WUFBUSxHQUMzQ0MsTUFBTSxDQUNNLENBQ1Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQTlELE1BQUEsR0FBQXBJLE9BQUE7VUErQk8sTUFBTXlNLGFBQWEsR0FBQTFMLE9BQUEsQ0FBQTBMLGFBQUEsR0FBR3JFLE1BQUEsQ0FBQVMsT0FBSyxDQUFDNkQsYUFBYSxDQUFDLEVBQTRCLENBQUM7VUFDdkUsTUFBTTFCLGdCQUFnQixHQUFHQSxDQUFBLEtBQU01QyxNQUFBLENBQUFTLE9BQUssQ0FBQzhELFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUMxTCxPQUFBLENBQUFpSyxnQkFBQSxHQUFBQSxnQkFBQTtVQVMvRCxNQUFNNEIsc0JBQXNCLEdBQUE3TCxPQUFBLENBQUE2TCxzQkFBQSxHQUFHeEUsTUFBQSxDQUFBUyxPQUFLLENBQUM2RCxhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUM1RSxNQUFNRyx5QkFBeUIsR0FBR0EsQ0FBQSxLQUFNekUsTUFBQSxDQUFBUyxPQUFLLENBQUM4RCxVQUFVLENBQUNDLHNCQUFzQixDQUFDO1VBQUM3TCxPQUFBLENBQUE4TCx5QkFBQSxHQUFBQSx5QkFBQTtVQU9qRixNQUFNQyxrQkFBa0IsR0FBQS9MLE9BQUEsQ0FBQStMLGtCQUFBLEdBQUcxRSxNQUFBLENBQUFTLE9BQUssQ0FBQzZELGFBQWEsQ0FBQyxFQUEwQixDQUFDO1VBQzFFLE1BQU1LLHFCQUFxQixHQUFHQSxDQUFBLEtBQU0zRSxNQUFBLENBQUFTLE9BQUssQ0FBQzhELFVBQVUsQ0FBQ0csa0JBQWtCLENBQUM7VUFBQy9MLE9BQUEsQ0FBQWdNLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEaEYsSUFBQTNFLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBd0ssYUFBQSxHQUFBeEssT0FBQTtVQUVNLFNBQVVnTixXQUFXQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBRyxJQUF5QjtZQUFFRCxRQUFRLEVBQUUsSUFBSTtZQUFFQyxHQUFHLEVBQUU7VUFBRSxDQUFFO1lBQzlGLE9BQ0M5RSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEIsYUFBQSxDQUFBWSxNQUFNLENBQUNDLEdBQUc7Y0FDVmpDLFNBQVMsRUFBQyxzQkFBc0I7Y0FDaENrQyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWDFILFFBQVEsRUFBRSxHQUFHO2tCQUNiMkgsS0FBSyxFQUFFO2lCQUNQO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWDFILFFBQVEsRUFBRTtpQkFDVjtnQkFDRHdILE9BQU8sRUFBRTs7WUFDVCxHQUVBMEIsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUE3RSxNQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQXFJLE1BQUEsR0FBQXJJLE9BQUE7VUFDQSxJQUFBbU4sTUFBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUE2TCxXQUFBLEdBQUE3TCxPQUFBO1VBQ0EsSUFBQW9OLEtBQUEsR0FBQXBOLE9BQUE7VUFDQSxJQUFBcU4sUUFBQSxHQUFBck4sT0FBQTtVQVVPO1VBQVUsU0FBVXNOLGlCQUFpQkEsQ0FBQztZQUFFak4sS0FBSztZQUFFOEQsTUFBTTtZQUFFMUQsSUFBSTtZQUFFK0g7VUFBTyxDQUFVO1lBQ3BGLE1BQU07Y0FBRTdFO1lBQUssQ0FBRSxHQUFHUSxNQUFNO1lBQ3hCLE1BQU0sQ0FBQ29KLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdwRixNQUFBLENBQUFTLE9BQUssQ0FBQ1csUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxJQUFJLENBQUMvSSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCO1lBQ0EsTUFBTXdJLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUJ1RSxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ2hCLE1BQU1uTixLQUFLLENBQUNnRyxJQUFJLENBQUM7Z0JBQUUsR0FBR2xDLE1BQU07Z0JBQUVyQixLQUFLLEVBQUU7Y0FBUyxDQUFFLENBQUM7Y0FDakR6QyxLQUFLLENBQUNxQyxVQUFVLENBQUMrSyxRQUFRLENBQUNwSyxLQUFLLEdBQUcsSUFBQStKLEtBQUEsQ0FBQTVGLFFBQVEsRUFBQ25ILEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ21DLFNBQVMsRUFBRSxFQUFFLENBQUM7Y0FDckVxSixRQUFBLENBQUFLLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRTNJLFNBQVMsRUFBRSwwQkFBMEIzRSxLQUFLLENBQUN3QixLQUFLLENBQUNDLEVBQUUsRUFBRSxDQUFDO2NBQy9FMEcsT0FBTyxFQUFFO2NBQ1RuSSxLQUFLLENBQUM4RyxRQUFRLENBQUM7Z0JBQ2RDLE9BQU8sRUFBRS9HLEtBQUssQ0FBQzJCLEtBQUssQ0FBQzRMLEtBQUssQ0FBQ0MsUUFBUSxDQUFDeEgsSUFBSTtnQkFDeENpQixRQUFRLEVBQUU7ZUFDVixDQUFDO2NBQ0ZrRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2xCLENBQUM7WUFFRCxNQUFNO2NBQUV6TDtZQUFXLENBQUUsR0FBRzFCLEtBQUs7WUFDN0IsTUFBTTJCLEtBQUssR0FBRzNCLEtBQUssQ0FBQzJCLEtBQUssQ0FBQzRMLEtBQUssQ0FBQ0UsWUFBWTtZQUM1QyxNQUFNQyxXQUFXLEdBQUdoTSxXQUFXLENBQUNnSSxPQUFPO1lBQ3ZDLE1BQU10RyxJQUFJLEdBQUdFLEtBQUssQ0FBQ3FLLE1BQU0sS0FBSyxNQUFNLEdBQUdySyxLQUFLLENBQUNMLFdBQVcsR0FBR0ssS0FBSyxDQUFDRixJQUFJO1lBQ3JFLE9BQ0MyRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVCxNQUFBLENBQUE0RixLQUFLO2NBQUN4TixJQUFJO2NBQUMySSxTQUFTLEVBQUMseUJBQXlCO2NBQUNaLE9BQU8sRUFBRUE7WUFBTyxHQUMvREosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsY0FDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUs5RyxLQUFLLENBQUN5RyxLQUFLLENBQU0sRUFDdEJMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGVBQU85RyxLQUFLLENBQUNrTSxRQUFRLENBQVEsQ0FDckIsRUFDVDlGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFpQixHQUMvQmhCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNxRSxNQUFBLENBQUFnQixVQUFVO2NBQUN4SyxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM1QnlFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFZLEdBQzFCaEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS3JGLElBQUksQ0FBTSxFQUNmMkUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsZUFBTzlHLEtBQUssQ0FBQ29NLGdCQUFnQixDQUFRLENBQ2hDLENBQ0QsRUFDTmhHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUErQixHQUM3Q2hCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGVBQU85RyxLQUFLLENBQUMwRyxXQUFXLENBQVEsQ0FDM0IsRUFDTk4sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU00sU0FBUyxFQUFDO1lBQW9CLEdBQ3RDaEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLFdBQUEsQ0FBQU8sTUFBTTtjQUFDbkMsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDa0MsT0FBTyxFQUFFN0QsT0FBTztjQUFFeUQsUUFBUSxFQUFFc0I7WUFBTyxHQUNwRVEsV0FBVyxDQUFDN0QsTUFBTSxDQUNYLEVBQ1Q5QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsV0FBQSxDQUFBTyxNQUFNO2NBQUNuQyxPQUFPLEVBQUMsU0FBUztjQUFDb0MsT0FBTyxFQUFFcEQsU0FBUztjQUFFZ0QsUUFBUSxFQUFFc0I7WUFBTyxHQUM3RFEsV0FBVyxDQUFDTSxRQUFRLENBQ2IsQ0FDQSxDQUNMLENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRUEsSUFBQWpHLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBc08sWUFBQSxHQUFBdE8sT0FBQTtVQUNBLElBQUF1SyxRQUFBLEdBQUF2SyxPQUFBO1VBR00sU0FBVXVPLGFBQWFBLENBQUM7WUFBRXRDO1VBQVEsQ0FBRTtZQUN6QyxNQUFNO2NBQ0xqSyxLQUFLLEVBQUU7Z0JBQUU4QixRQUFRLEVBQUU5QjtjQUFLLENBQUU7Y0FDMUJBLEtBQUssRUFBRTtnQkFBRXdNLGFBQWEsRUFBRUM7Y0FBSSxDQUFFO2NBQzlCcE87WUFBSyxDQUNMLEdBQUcsSUFBQWtLLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFMEQsU0FBUztjQUFFdks7WUFBTSxDQUFFLEdBQUcsSUFBQW9HLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFaEQsSUFBSWdCLFFBQVEsR0FBRztjQUFFakosS0FBSyxFQUFFLEVBQUU7Y0FBRU0sS0FBSyxFQUFFckIsS0FBSyxDQUFDeUYsS0FBSyxDQUFDa0g7WUFBTSxDQUFFO1lBQ3ZELE1BQU01QyxRQUFRLEdBQUk2QyxLQUEyQyxJQUM1REYsU0FBUyxDQUFFdkssTUFBMkIsSUFBSTtjQUN6QyxPQUFPO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVMLFFBQVEsRUFBRThLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDOUw7Y0FBSyxDQUFFO1lBQ25ELENBQUMsQ0FBQztZQUNILE1BQU0rTCxPQUFPLEdBQUc1RyxNQUFNLENBQUM2RyxJQUFJLENBQUMvTSxLQUFLLENBQUNnTixTQUFTLENBQUMsQ0FBQ3pMLEdBQUcsQ0FBQzBMLElBQUksSUFBRztjQUN2RGpELFFBQVEsR0FBR2lELElBQUksS0FBSzlLLE1BQU0sQ0FBQ0wsUUFBUSxHQUFHO2dCQUFFZixLQUFLLEVBQUVrTSxJQUFJO2dCQUFFNUwsS0FBSyxFQUFFckIsS0FBSyxDQUFDZ04sU0FBUyxDQUFDQyxJQUFJO2NBQUMsQ0FBRSxHQUFHakQsUUFBUTtjQUM5RixPQUFPO2dCQUFFakosS0FBSyxFQUFFa00sSUFBSTtnQkFBRTVMLEtBQUssRUFBRXJCLEtBQUssQ0FBQ2dOLFNBQVMsQ0FBQ0MsSUFBSTtjQUFDLENBQUU7WUFDckQsQ0FBQyxDQUFDO1lBRUYsTUFBTUMsVUFBVSxHQUFHO2NBQUVBLFVBQVUsRUFBRTdPLEtBQUssQ0FBQzRCLEtBQUssSUFBSWdLO1lBQVEsQ0FBRTtZQUUxRCxPQUNDN0QsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsY0FDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBT3lELE9BQU8sRUFBQztZQUFFLEdBQUV2SyxLQUFLLENBQUN5RixLQUFLLENBQUNwRSxLQUFLLENBQVMsRUFDN0MrRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0YsWUFBQSxDQUFBYSxXQUFXO2NBQ1gxTCxJQUFJLEVBQUMsVUFBVTtjQUNmVixLQUFLLEVBQUVvQixNQUFNLENBQUNMLFFBQVE7Y0FDdEJzTCxXQUFXLEVBQUVwTixLQUFLLENBQUN5RixLQUFLLENBQUNrSCxNQUFNO2NBQy9CRyxPQUFPLEVBQUVBLE9BQU87Y0FDaEIvQyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkbUQ7WUFBVSxFQUNiLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQTlHLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBc08sWUFBQSxHQUFBdE8sT0FBQTtVQUNBLElBQUF1SyxRQUFBLEdBQUF2SyxPQUFBO1VBRU0sU0FBVXFQLGFBQWFBLENBQUM7WUFBRXBEO1VBQVEsQ0FBRTtZQUN6QyxNQUFNO2NBQUVqSyxLQUFLO2NBQUUzQixLQUFLO2NBQUVxTztZQUFTLENBQUUsR0FBRyxJQUFBbkUsUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUV0RCxNQUFNZSxRQUFRLEdBQUk2QyxLQUEyQyxJQUM1REYsU0FBUyxDQUFFdkssTUFBMkIsS0FBTTtjQUFFLEdBQUdBLE1BQU07Y0FBRUQsUUFBUSxFQUFFMEssS0FBSyxDQUFDQyxNQUFNLENBQUM5TDtZQUFLLENBQUUsQ0FBQyxDQUFDO1lBQzFGLE1BQU0rTCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUN2TCxHQUFHLENBQUNDLElBQUksS0FBSztjQUFFVCxLQUFLLEVBQUVTLElBQUk7Y0FBRUgsS0FBSyxFQUFFckIsS0FBSyxDQUFDc04sU0FBUyxDQUFDOUwsSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0wTCxVQUFVLEdBQUc7Y0FBRUEsVUFBVSxFQUFFN08sS0FBSyxDQUFDNEIsS0FBSyxJQUFJZ0s7WUFBUSxDQUFFO1lBRTFELE9BQ0M3RCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFPeUQsT0FBTyxFQUFDO1lBQUUsR0FBRXZLLEtBQUssQ0FBQ3NOLFNBQVMsQ0FBQ1gsTUFBTSxDQUFDdEwsS0FBSyxDQUFTLEVBQ3hEK0UsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dGLFlBQUEsQ0FBQWEsV0FBVztjQUNYQyxXQUFXLEVBQUVwTixLQUFLLENBQUNzTixTQUFTLENBQUNYLE1BQU0sQ0FBQ1MsV0FBVztjQUMvQ3JNLEtBQUssRUFBRTFDLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ3FDLFFBQVE7Y0FDM0JULElBQUksRUFBQyxVQUFVO2NBQ2ZxTCxPQUFPLEVBQUVBLE9BQU87Y0FDaEIvQyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkbUQ7WUFBVSxFQUNiLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQTlHLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBdVAsS0FBQSxHQUFBdlAsT0FBQTtVQUNBLElBQUF1SyxRQUFBLEdBQUF2SyxPQUFBO1VBRUEsSUFBQXNLLE1BQUEsR0FBQXRLLE9BQUE7VUFHTSxTQUFVd1AsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVyTCxNQUFNO2NBQUVuQyxLQUFLO2NBQUUrSixRQUFRO2NBQUUxTDtZQUFLLENBQUUsR0FBRyxJQUFBa0ssUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUU3RCxNQUFNeUUsU0FBUyxHQUFHek4sS0FBSyxDQUFDNEwsS0FBSyxDQUFDOEIsSUFBSTtZQUVsQyxPQUNDdEgsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQVYsTUFBQSxDQUFBUyxPQUFBLENBQUE4RyxRQUFBLFFBQ0N2SCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBa0IsR0FDaENoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsS0FBQSxDQUFBSyxRQUFRO2NBQ1I3RCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJoSixLQUFLLEVBQUVvQixNQUFNLENBQUNILFNBQVM7Y0FDdkJQLElBQUksRUFBQyxXQUFXO2NBQ2hCMkwsV0FBVyxFQUFFSyxTQUFTLENBQUN6TCxTQUFTLENBQUM2TCxRQUFRO2NBQ3pDQyxPQUFPO2NBQ1BDLFNBQVMsRUFBRTtZQUFHLEVBQ2IsRUFDRjNILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN3QixNQUFBLENBQUFJLGFBQWE7Y0FDYmpLLElBQUksRUFBRSxDQUFDLENBQUNKLEtBQUssQ0FBQ3NCLEtBQUssSUFBSXRCLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQzJGLFFBQVEsS0FBSyxXQUFXO2NBQzNERCxJQUFJLEVBQUMsU0FBUztjQUNkK0IsU0FBUyxFQUFDLGtEQUFrRDtjQUM1RGhDLE9BQU8sRUFBRXBGLEtBQUssQ0FBQzRMLEtBQUssQ0FBQ0MsUUFBUSxDQUFDeEg7WUFBSSxFQUNqQyxDQUNHLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQStCLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBc08sWUFBQSxHQUFBdE8sT0FBQTtVQUNBLElBQUF1SyxRQUFBLEdBQUF2SyxPQUFBO1VBQ0EsSUFBQXNJLEdBQUEsR0FBQXRJLE9BQUE7VUFDQSxJQUFBZ1EsZUFBQSxHQUFBaFEsT0FBQTtVQUNNLFNBQVVpUSxjQUFjQSxDQUFDO1lBQUVoRTtVQUFRLElBQTZCLEVBQUU7WUFDdkUsTUFBTTtjQUNMakssS0FBSyxFQUFFO2dCQUNONEwsS0FBSyxFQUFFO2tCQUFFOEIsSUFBSSxFQUFFUTtnQkFBTTtjQUFFLENBQ3ZCO2NBQ0RsTyxLQUFLLEVBQUU7Z0JBQUV3TSxhQUFhLEVBQUVDO2NBQUksQ0FBRTtjQUM5QnBPO1lBQUssQ0FDTCxHQUFHLElBQUFrSyxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRTBELFNBQVM7Y0FBRTFNO1lBQUssQ0FBRSxHQUFHLElBQUF1SSxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBRS9DLE1BQU0sQ0FBQ2dCLFFBQVEsRUFBRW1FLFdBQVcsQ0FBQyxHQUFHL0gsTUFBQSxDQUFBUyxPQUFLLENBQUNXLFFBQVEsQ0FBTSxJQUFJLENBQUM7WUFDekQsTUFBTSxDQUFDNEcsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHakksTUFBQSxDQUFBUyxPQUFLLENBQUNXLFFBQVEsQ0FBdUM7Y0FDaEc4RyxPQUFPLEVBQUUsRUFBRTtjQUNYckcsT0FBTyxFQUFFO2FBQ1QsQ0FBQztZQUVGLElBQUlzRyxhQUFhLEdBQUc7Y0FBRXhOLEtBQUssRUFBRSxFQUFFO2NBQUVNLEtBQUssRUFBRTZNLE1BQU0sQ0FBQ00sYUFBYSxDQUFDN0I7WUFBTSxDQUFFO1lBQ3JFLElBQUl0TyxLQUFLLENBQUN3QixLQUFLLENBQUM4QixLQUFLLEVBQUU7Y0FDdEI0TSxhQUFhLEdBQUc7Z0JBQUV4TixLQUFLLEVBQUUxQyxLQUFLLENBQUN3QixLQUFLLENBQUM4QixLQUFLLENBQUM3QixFQUFFO2dCQUFFdUIsS0FBSyxFQUFFaEQsS0FBSyxDQUFDd0IsS0FBSyxDQUFDOEIsS0FBSyxDQUFDRjtjQUFJLENBQUU7O1lBRy9FLE1BQU1WLEtBQUssR0FBRzFDLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQzhCLEtBQUssRUFBRTdCLEVBQUU7WUFDbkMsTUFBTTJPLEtBQUssR0FBRztjQUFFdkIsVUFBVSxFQUFFN08sS0FBSyxDQUFDNEMsVUFBVSxFQUFFMEUsTUFBTSxLQUFLLENBQUMsSUFBSXRILEtBQUssQ0FBQzRCLEtBQUssSUFBSWdLO1lBQVEsQ0FBRTtZQUV2RixNQUFNRixRQUFRLEdBQUcsTUFBTzZDLEtBQTBDLElBQUk7Y0FDckV5QixpQkFBaUIsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLEVBQUU7Z0JBQUVyRyxPQUFPLEVBQUU7Y0FBRSxDQUFFLENBQUM7Y0FFL0MsTUFBTXRHLEtBQUssR0FBRyxNQUFNdEQsS0FBSyxDQUFDMkcsZ0JBQWdCLENBQUM0SCxLQUFLLENBQUNDLE1BQU0sQ0FBQzlMLEtBQUssQ0FBQztjQUU5RCxJQUFJWSxLQUFLLENBQUNxSyxNQUFNLEtBQUssY0FBYyxFQUFFO2dCQUNwQyxNQUFNckssS0FBSyxDQUFDZ0csVUFBVSxFQUFFOztjQUV6QndHLFdBQVcsQ0FBQ3hNLEtBQUssQ0FBQztjQUVsQixJQUFJQSxLQUFLLENBQUNpRixLQUFLLEVBQUU4SCxPQUFPLEtBQUsxTCxTQUFTLEVBQUU7Z0JBQ3ZDVyxPQUFPLENBQUNDLEtBQUssQ0FBQywyRUFBMkUsQ0FBQztnQkFDMUY7O2NBRUQsTUFBTTtnQkFBRStLO2NBQUssQ0FBRSxHQUFHaE4sS0FBSyxDQUFDaUYsS0FBSyxDQUFDOEgsT0FBTztjQUNyQyxNQUFNN0MsUUFBUSxHQUFHN0wsS0FBSyxDQUFDNE8sTUFBTSxDQUFDaEksS0FBSztjQUNuQyxNQUFNeEIsT0FBTyxHQUFHdUosS0FBSyxHQUFHOUMsUUFBUSxDQUFDZ0QsU0FBUyxHQUFHaEQsUUFBUSxDQUFDaUQsV0FBVztjQUNqRSxNQUFNekosSUFBSSxHQUFHc0osS0FBSyxHQUFHLFNBQVMsR0FBRyxPQUFPO2NBQ3hDTixpQkFBaUIsQ0FBQztnQkFBRUMsT0FBTyxFQUFFbEosT0FBTztnQkFBRTZDLE9BQU8sRUFBRTVDO2NBQUksQ0FBRSxDQUFDO2NBRXREcUgsU0FBUyxDQUFFdkssTUFBVyxLQUFNO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVSO2NBQUssQ0FBRSxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUVELE9BQ0N5RSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVixNQUFBLENBQUFTLE9BQUEsQ0FBQThHLFFBQUEsUUFDQ3ZILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNSLEdBQUEsQ0FBQXlJLFFBQVE7Y0FBQy9PLEtBQUssRUFBRXlNLElBQUk7Y0FBRWhMLElBQUksRUFBQyxlQUFlO2NBQUN1TixFQUFFLEVBQUMsS0FBSztjQUFDNUgsU0FBUyxFQUFDO1lBQWUsR0FDN0VoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBaUIsR0FDL0JoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFPeUQsT0FBTyxFQUFDO1lBQUUsR0FBRTJELE1BQU0sQ0FBQ00sYUFBYSxDQUFDbk4sS0FBSyxDQUFTLEVBQ3REK0UsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dGLFlBQUEsQ0FBQWEsV0FBVztjQUNYcE0sS0FBSyxFQUFFQSxLQUFLO2NBQ1pxTSxXQUFXLEVBQUVjLE1BQU0sQ0FBQ00sYUFBYSxDQUFDN0IsTUFBTTtjQUN4Q2xMLElBQUksRUFBQyxPQUFPO2NBQ1pxTCxPQUFPLEVBQUV6TyxLQUFLLENBQUM0QyxVQUFVO2NBQ3pCOEksUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZDBFO1lBQUssRUFDUixFQUNGckksTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tILGVBQUEsQ0FBQWlCLGNBQWM7Y0FBQSxHQUFLYjtZQUFjLEVBQUksQ0FDakMsQ0FDSSxDQUNUO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVBLElBQUFoSSxNQUFBLEdBQUFwSSxPQUFBO1VBUUEsTUFBTWtSLGVBQWUsR0FBMkI7WUFDL0NDLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCQyxTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCQyxRQUFRLEVBQUUsZUFBZTtZQUN6QkMsT0FBTyxFQUFFLGNBQWM7WUFDdkJDLElBQUksRUFBRSxXQUFXO1lBQ2pCM0wsS0FBSyxFQUFFLFlBQVk7WUFDbkI0TCxPQUFPLEVBQUUsY0FBYztZQUN2QjNJLE9BQU8sRUFBRTtXQUNUO1VBRU07VUFBVSxTQUFVb0ksY0FBY0EsQ0FBQztZQUN6Q1gsT0FBTztZQUNQckcsT0FBTyxHQUFHLFNBQVM7WUFDbkJiLFNBQVMsR0FBRyxFQUFFO1lBQ2QsR0FBR3FJO1VBQUksQ0FDYztZQUNyQixJQUFJLENBQUNuQixPQUFPLEVBQUUsT0FBTyxJQUFJO1lBQ3pCLE1BQU1vQixZQUFZLEdBQUdSLGVBQWUsQ0FBQ2pILE9BQU8sQ0FBQyxJQUFJaUgsZUFBZSxDQUFDckksT0FBTztZQUN4RSxNQUFNOEksaUJBQWlCLEdBQUcsdUJBQXVCRCxZQUFZLElBQUl0SSxTQUFTLEVBQUUsQ0FBQ3dJLElBQUksRUFBRTtZQUVuRixPQUNDeEosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFFdUksaUJBQWlCO2NBQUEsR0FBTUY7WUFBSSxHQUMxQ3JKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGVBQU93SCxPQUFPLENBQVEsQ0FDakI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQWxJLE1BQUEsR0FBQXBJLE9BQUE7VUFFQSxJQUFBbU4sTUFBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUE2UixNQUFBLEdBQUE3UixPQUFBO1VBRU87VUFBVSxTQUFVbU8sVUFBVUEsQ0FBQztZQUFFeEs7VUFBSyxDQUFpRDtZQUM3RixJQUFJLENBQUNBLEtBQUssRUFBRW1PLFFBQVEsRUFBRTtjQUNyQixPQUFPMUosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytJLE1BQUEsQ0FBQUUsT0FBTztnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Z0JBQUM1SSxTQUFTLEVBQUM7Y0FBVyxFQUFHOztZQUV2RCxPQUFPaEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FFLE1BQUEsQ0FBQThFLEtBQUs7Y0FBQ0MsR0FBRyxFQUFFdk8sS0FBSyxDQUFDbU8sUUFBUTtjQUFFMUksU0FBUyxFQUFDO1lBQVEsRUFBRztVQUN6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBK0ksS0FBQSxHQUFBblMsT0FBQTtVQUNBLElBQUFvUyxZQUFBLEdBQUFwUyxPQUFBO1VBQ0EsSUFBQXVLLFFBQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBc0ksR0FBQSxHQUFBdEksT0FBQTtVQUNBLElBQUFxUyxTQUFBLEdBQUFyUyxPQUFBO1VBQ0EsSUFBQXNTLFVBQUEsR0FBQXRTLE9BQUE7VUFDQSxJQUFBdVMsVUFBQSxHQUFBdlMsT0FBQTtVQUNBLElBQUF3UyxTQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQTZMLFdBQUEsR0FBQTdMLE9BQUE7VUFDQSxJQUFBdVAsS0FBQSxHQUFBdlAsT0FBQTtVQUNBLElBQUF5UyxZQUFBLEdBQUF6UyxPQUFBO1VBQ0EsSUFBQXNLLE1BQUEsR0FBQXRLLE9BQUE7VUFDQSxJQUFBMFMsT0FBQSxHQUFBMVMsT0FBQTtVQUNBLElBQUEyUyxNQUFBLEdBQUEzUyxPQUFBO1VBRU0sU0FBVTRTLFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUFFek8sTUFBTTtjQUFFdUssU0FBUztjQUFFck8sS0FBSztjQUFFMkIsS0FBSztjQUFFQyxLQUFLO2NBQUVxSCxRQUFRO2NBQUV1SixhQUFhO2NBQUVDO1lBQWtCLENBQUUsR0FBRyxJQUFBdkksUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUNsSCxNQUFNM0gsS0FBSyxHQUFHaEQsS0FBSyxDQUFDd0IsS0FBSyxDQUFDaUIsS0FBSyxJQUFJYixLQUFLLEdBQUc1QixLQUFLLENBQUMwQixXQUFXLENBQUNnSSxPQUFPLENBQUNzRSxRQUFRLEdBQUdoTyxLQUFLLENBQUMwQixXQUFXLENBQUNnSSxPQUFPLENBQUMxRCxJQUFJO1lBQzlHLE1BQU07Y0FBRTBNLEdBQUcsRUFBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQTFLLEdBQUEsQ0FBQTJLLGFBQWEsRUFBQyxpQkFBaUIsRUFBRTVTLEtBQUssQ0FBQ21FLEtBQUssRUFBRXhDLEtBQUssRUFBRXdNLGFBQWEsRUFBRTBFLE9BQU8sQ0FBQztZQUNyRyxNQUFNLENBQUM1TSxVQUFVLEVBQUU2TSxhQUFhLENBQUMsR0FBR2hCLEtBQUssQ0FBQzNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTRKLFdBQVcsR0FBRyxDQUFDalAsTUFBTSxDQUFDUixLQUFLLElBQUksQ0FBQ1EsTUFBTSxDQUFDTCxRQUFRLElBQUksQ0FBQ0ssTUFBTSxDQUFDSCxTQUFTLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxRQUFRO1lBQzlGLE1BQU1nTCxVQUFVLEdBQUdrRSxXQUFXLElBQUk5TSxVQUFVLElBQUlqRyxLQUFLLENBQUNpRyxVQUFVO1lBRWhFLElBQUFxTSxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDaFQsS0FBSyxDQUFDLEVBQUUsTUFBTThTLGFBQWEsQ0FBQzlTLEtBQUssQ0FBQ3FHLG1CQUFtQixDQUFDLEVBQUUsNkJBQTZCLENBQUM7WUFFakcsTUFBTTRNLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0JILGFBQWEsQ0FBQyxJQUFJLENBQUM7Y0FFbkIsSUFBSTlTLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ2lCLEtBQUssS0FBS3FCLE1BQU0sQ0FBQ3JCLEtBQUssSUFBSXpDLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ21DLFNBQVMsS0FBS0csTUFBTSxDQUFDSCxTQUFTLEVBQUU7Y0FDdEYsTUFBTTBLLFNBQVMsQ0FBQztnQkFBRSxHQUFHdkssTUFBTTtnQkFBRW9QLE9BQU8sRUFBRTtjQUFLLENBQUUsQ0FBQztjQUU5QyxJQUFJbFQsS0FBSyxDQUFDd0IsS0FBSyxDQUFDaUIsS0FBSyxLQUFLLFNBQVMsRUFBRTtjQUNyQ2dRLGtCQUFrQixFQUFFO2NBQ3BCSyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNSyxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsSUFBSWxOLFVBQVUsRUFBRTtnQkFFaEIsTUFBTWdOLFVBQVUsRUFBRTtnQkFDbEIsSUFBSXJSLEtBQUssSUFBSTVCLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ2lCLEtBQUssS0FBSyxTQUFTLEVBQUU7a0JBQzdDK1AsYUFBYSxFQUFFO2tCQUNmOztlQUVELENBQUMsT0FBT25OLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUeU4sYUFBYSxDQUFDLEtBQUssQ0FBQzs7WUFFdEIsQ0FBQztZQUVELE1BQU1qRyxHQUFHLEdBQUcsZ0NBQWdDNUQsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFLElBQUloRCxVQUFVLEdBQUcsZUFBZSxHQUFHLEVBQUUsRUFBRTtZQUM3RyxNQUFNbU4sWUFBWSxHQUFHbk4sVUFBVSxHQUFHLGVBQWUsR0FBRyxFQUFFO1lBRXRELE9BQ0M2TCxLQUFBLENBQUFySixhQUFBLENBQUNSLEdBQUEsQ0FBQW9MLGFBQWE7Y0FBQ3RLLFNBQVMsRUFBRThELEdBQUc7Y0FBRTVELFFBQVEsRUFBRUEsUUFBUSxJQUFJLENBQUMsQ0FBQ2pKLEtBQUssQ0FBQ3dCLEtBQUssRUFBRW1FLFVBQVUsQ0FBQzVDLEtBQUssQ0FBQ3VFO1lBQU0sR0FDMUZ3SyxLQUFBLENBQUFySixhQUFBO2NBQUtpSyxHQUFHLEVBQUVDLE9BQU87Y0FBRTVKLFNBQVMsRUFBRXFLO1lBQVksR0FDekN0QixLQUFBLENBQUFySixhQUFBLENBQUN5RyxLQUFBLENBQUFvRSxJQUFJO2NBQUN2SyxTQUFTLEVBQUU4RCxHQUFHO2NBQUVzRyxRQUFRLEVBQUVBO1lBQVEsR0FDdkNyQixLQUFBLENBQUFySixhQUFBLENBQUNzSixZQUFBLENBQUFwRixXQUFXLFFBQ1htRixLQUFBLENBQUFySixhQUFBO2NBQVNNLFNBQVMsRUFBQztZQUFXLEdBQzdCK0ksS0FBQSxDQUFBckosYUFBQTtjQUFRTSxTQUFTLEVBQUM7WUFBbUIsR0FDcEMrSSxLQUFBLENBQUFySixhQUFBLGFBQUs5RyxLQUFLLENBQUM0TCxLQUFLLENBQUNuRixLQUFLLENBQU0sQ0FDcEIsRUFDVDBKLEtBQUEsQ0FBQXJKLGFBQUEsQ0FBQ3dCLE1BQUEsQ0FBQUksYUFBYTtjQUNickQsSUFBSSxFQUFFaEgsS0FBSyxDQUFDc0IsS0FBSyxFQUFFMEYsSUFBSTtjQUN2QkQsT0FBTyxFQUFFL0csS0FBSyxDQUFDc0IsS0FBSyxFQUFFeUYsT0FBTztjQUM3QjNHLElBQUksRUFBRSxDQUFDLENBQUNKLEtBQUssQ0FBQ3NCLEtBQUssSUFBSXRCLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQzJGLFFBQVEsS0FBSyxLQUFLO2NBQ3JEOEIsU0FBUyxFQUFDO1lBQWMsRUFDdkIsRUFDRitJLEtBQUEsQ0FBQXJKLGFBQUE7Y0FBU00sU0FBUyxFQUFDO1lBQTZCLEdBQy9DK0ksS0FBQSxDQUFBckosYUFBQSxDQUFDd0osVUFBQSxDQUFBckMsY0FBYztjQUFDaEUsUUFBUSxFQUFFM0Y7WUFBVSxFQUFJLEVBQ3hDNkwsS0FBQSxDQUFBckosYUFBQSxDQUFDUixHQUFBLENBQUF5SSxRQUFRO2NBQ1IvTyxLQUFLLEVBQUVBLEtBQUssQ0FBQ3dNLGFBQWE7Y0FDMUIvSyxJQUFJLEVBQUMsWUFBWTtjQUNqQnVOLEVBQUUsRUFBQyxLQUFLO2NBQ1I1SCxTQUFTLEVBQUM7WUFBc0IsR0FFaEMrSSxLQUFBLENBQUFySixhQUFBLENBQUMwSixTQUFBLENBQUFuRCxhQUFhO2NBQUNwRCxRQUFRLEVBQUUzRjtZQUFVLEVBQUksRUFDdkM2TCxLQUFBLENBQUFySixhQUFBLENBQUN1SixTQUFBLENBQUE5RCxhQUFhO2NBQUN0QyxRQUFRLEVBQUUzRjtZQUFVLEVBQUksQ0FDN0IsQ0FDRixFQUVWNkwsS0FBQSxDQUFBckosYUFBQSxDQUFDUixHQUFBLENBQUF5SSxRQUFRO2NBQ1JDLEVBQUUsRUFBQyxTQUFTO2NBQ1poUCxLQUFLLEVBQUVBLEtBQUssQ0FBQ3dNLGFBQWE7Y0FDMUIvSyxJQUFJLEVBQUMsV0FBVztjQUNoQjJGLFNBQVMsRUFBQztZQUFtRCxHQUU3RCtJLEtBQUEsQ0FBQXJKLGFBQUEsQ0FBQ3lKLFVBQUEsQ0FBQS9DLGNBQWMsT0FBRyxDQUNSLENBQ0YsRUFDVjJDLEtBQUEsQ0FBQXJKLGFBQUEsQ0FBQzJKLFlBQUEsQ0FBQW1CLG9CQUFvQjtjQUFDVCxhQUFhLEVBQUVBLGFBQWE7Y0FBRTdNLFVBQVUsRUFBRUE7WUFBVSxFQUFJLEVBQzlFNkwsS0FBQSxDQUFBckosYUFBQSxpQkFDQ3FKLEtBQUEsQ0FBQXJKLGFBQUEsQ0FBQzRKLE9BQUEsQ0FBQW1CLGlCQUFpQixPQUFHLEVBQ3JCMUIsS0FBQSxDQUFBckosYUFBQSxDQUFDUixHQUFBLENBQUF5SSxRQUFRO2NBQUMvTyxLQUFLLEVBQUVBLEtBQUssQ0FBQ3dNLGFBQWE7Y0FBRS9LLElBQUksRUFBQyxNQUFNO2NBQUMyRixTQUFTLEVBQUM7WUFBd0IsR0FDbkYrSSxLQUFBLENBQUFySixhQUFBLENBQUMrQyxXQUFBLENBQUFPLE1BQU07Y0FBQy9FLElBQUksRUFBQyxRQUFRO2NBQUN5TSxLQUFLO2NBQUM3SCxRQUFRLEVBQUVpRCxVQUFVO2NBQUVqRixPQUFPLEVBQUM7WUFBUyxHQUNqRTVHLEtBQUssQ0FDRSxDQUNDLENBQ0gsQ0FDSSxFQUNkOE8sS0FBQSxDQUFBckosYUFBQSxDQUFDUixHQUFBLENBQUF5TCxnQkFBZ0I7Y0FBQ3pLLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2xDLENBQ0YsQ0FDUztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzR0EsSUFBQWxCLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBdUssUUFBQSxHQUFBdkssT0FBQTtVQUNBLElBQUFzSSxHQUFBLEdBQUF0SSxPQUFBO1VBR00sU0FBVTZULGlCQUFpQkEsQ0FBQyxFQUFFO1lBQ25DLE1BQU07Y0FDTHhULEtBQUssRUFBRTtnQkFDTjBCLFdBQVcsRUFBRTtrQkFBRWdJLE9BQU8sRUFBRWlLO2dCQUFXO2NBQUUsQ0FDckM7Y0FDRDNULEtBQUs7Y0FDTDhELE1BQU07Y0FDTmxDO1lBQUssQ0FDTCxHQUFHLElBQUFzSSxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU0sQ0FBQ2lKLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBRzlMLE1BQUEsQ0FBQVMsT0FBSyxDQUFDVyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU0ySyxVQUFVLEdBQUdBLENBQUEsS0FBTUQsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU1FLG9CQUFvQixHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN2QyxJQUFJO2dCQUNILElBQUksQ0FBQy9ULEtBQUssQ0FBQzhCLFVBQVUsRUFBRTtrQkFDdEIrUixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7a0JBQ3ZCOztnQkFFRCxNQUFNN1QsS0FBSyxDQUFDb0csd0JBQXdCLENBQUM7a0JBQUV6QyxTQUFTLEVBQUVHLE1BQU0sQ0FBQ0g7Z0JBQVMsQ0FBRSxDQUFDO2VBQ3JFLENBQUMsT0FBTzBCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVELE1BQU0yTyxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLE1BQU1DLFFBQVEsR0FBRyxNQUFNalUsS0FBSyxDQUFDd0IsS0FBSyxDQUFDMFMsWUFBWSxFQUFFO2NBQ2pELElBQUlELFFBQVEsQ0FBQzFPLEtBQUssRUFBRSxPQUFPME8sUUFBUTtjQUVuQyxNQUFNRSxTQUFTLEdBQUcsTUFBTW5VLEtBQUssQ0FBQ29HLHdCQUF3QixDQUFDO2dCQUFFekMsU0FBUyxFQUFFRyxNQUFNLENBQUNIO2NBQVMsQ0FBRSxDQUFDO2NBQ3ZGa1EsaUJBQWlCLENBQUMsS0FBSyxDQUFDO2NBQ3hCLE9BQU9NLFNBQVM7WUFDakIsQ0FBQztZQUVELElBQUluVSxLQUFLLENBQUM2QixZQUFZLEVBQUUsT0FBTyxJQUFJO1lBRW5DLE9BQ0NrRyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVixNQUFBLENBQUFTLE9BQUEsQ0FBQThHLFFBQUEsUUFDQ3ZILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNSLEdBQUEsQ0FBQW1NLFFBQVE7Y0FBQ3hJLFFBQVEsRUFBRSxDQUFDaEssS0FBSztjQUFFeVMsTUFBTSxFQUFFLEtBQUs7Y0FBRXJJLE9BQU8sRUFBRStILG9CQUFvQjtjQUFFbkssT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtZQUFBLEdBQ2xHNkosV0FBVyxDQUFDVyxPQUFPLENBQ1YsRUFDVlYsY0FBYyxJQUNkN0wsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsR0FBQSxDQUFBZSxVQUFVO2NBQ1YxRixLQUFLLEVBQUV0RCxLQUFLLENBQUN3QixLQUFLLEVBQUU4QixLQUFLO2NBQ3pCbEQsSUFBSSxFQUFFd1QsY0FBYztjQUNwQnpMLE9BQU8sRUFBRTJMLFVBQVU7Y0FDbkJwUyxXQUFXLEVBQUUxQixLQUFLLENBQUMwQixXQUFXO2NBQzlCc1MsU0FBUyxFQUFFQTtZQUFTLEVBRXJCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2REEsSUFBQWpNLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBdUssUUFBQSxHQUFBdkssT0FBQTtVQUNBLElBQUF1UyxVQUFBLEdBQUF2UyxPQUFBO1VBRUEsSUFBQTRVLEtBQUEsR0FBQTVVLE9BQUE7VUFFTSxTQUFVNFQsb0JBQW9CQSxDQUFDO1lBQ3BDdE4sVUFBVTtZQUNWNk07VUFBYSxDQUliO1lBQ0EsTUFBTTtjQUFFOVM7WUFBSyxDQUFFLEdBQUcsSUFBQWtLLFFBQUEsQ0FBQVMsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTSxDQUFDNkosaUJBQWlCLEVBQUVDLG9CQUFvQixDQUFDLEdBQUcxTSxNQUFBLENBQUFTLE9BQUssQ0FBQ1csUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RTtZQUNBLElBQUksQ0FBQ25KLEtBQUssQ0FBQzZCLFlBQVksSUFBSTdCLEtBQUssQ0FBQzZCLFlBQVksQ0FBQzZTLFVBQVUsRUFBRSxPQUFPLElBQUk7WUFDckUsTUFBTUMsWUFBWSxHQUFHO2NBQUVILGlCQUFpQjtjQUFFQyxvQkFBb0I7Y0FBRXhPLFVBQVU7Y0FBRTZNO1lBQWEsQ0FBRTtZQUMzRixPQUNDL0ssTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lCLFFBQUEsQ0FBQXVDLGtCQUFrQixDQUFDbUksUUFBUTtjQUFDbFMsS0FBSyxFQUFFaVM7WUFBWSxHQUMvQzVNLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN5SixVQUFBLENBQUEyQyxpQkFBaUIsT0FBRyxFQUNyQjlNLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUM4TCxLQUFBLENBQUFPLGVBQWU7Y0FBQ3JCLEtBQUssRUFBRSxDQUFDZTtZQUFpQixFQUFJLENBQ2pCO1VBRWhDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBek0sTUFBQSxHQUFBcEksT0FBQTtVQUVBLElBQUE2TCxXQUFBLEdBQUE3TCxPQUFBO1VBQ0EsSUFBQTRVLEtBQUEsR0FBQTVVLE9BQUE7VUFDQSxJQUFBdUssUUFBQSxHQUFBdkssT0FBQTtVQUNBLElBQUFvVixLQUFBLEdBQUFwVixPQUFBO1VBRU0sU0FBVW1WLGVBQWVBLENBQUM7WUFBRXJCO1VBQUssQ0FBRTtZQUN4QyxNQUFNO2NBQ0w5UixLQUFLLEVBQUU7Z0JBQUVxVCxXQUFXLEVBQUVyVDtjQUFLLENBQUU7Y0FDN0IzQixLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFDTjBCLFdBQVcsRUFBRTtrQkFBRWdJLE9BQU8sRUFBRWlLO2dCQUFXO2NBQUUsQ0FDckM7Y0FDRDdQLE1BQU07Y0FDTmxDLEtBQUs7Y0FDTHlNO1lBQVMsQ0FDVCxHQUFHLElBQUFuRSxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRThKO1lBQW9CLENBQUUsR0FBRyxJQUFBdkssUUFBQSxDQUFBd0MscUJBQXFCLEdBQUU7WUFDeEQsTUFBTSxDQUFDZixRQUFRLEVBQUVtRSxXQUFXLENBQUMsR0FBRy9ILE1BQUEsQ0FBQVMsT0FBSyxDQUFDVyxRQUFRLENBQUMsSUFBSWpILEdBQUcsRUFBRSxDQUFDO1lBRXpELElBQUksQ0FBQ2xDLEtBQUssQ0FBQzZCLFlBQVksRUFBRSxPQUFPLElBQUk7WUFDcEMsTUFBTTtjQUFFbVQ7WUFBVyxDQUFFLEdBQUdoVixLQUFLLENBQUM2QixZQUFZO1lBRTFDLE1BQU1vVCxLQUFLLEdBQUcsTUFBTzFHLEtBQTBDLElBQUk7Y0FDbEUsTUFBTXJKLEtBQUssR0FBRztnQkFDYnZCLFNBQVMsRUFBRUcsTUFBTSxDQUFDSCxTQUFTO2dCQUMzQjlCLFlBQVksRUFBRXFULEtBQUssQ0FBQ0MsSUFBSSxDQUFDeEosUUFBUSxDQUFDLENBQUN6SSxHQUFHLENBQUVrUyxDQUFTLElBQUtwVixLQUFLLENBQUM2QixZQUFZLENBQUNtVCxXQUFXLENBQUNJLENBQUMsQ0FBQyxDQUFDQyxVQUFVO2VBQ2xHO2NBRUQsTUFBTXJWLEtBQUssQ0FBQ3VHLGlCQUFpQixDQUFDckIsS0FBSyxDQUFDO2NBQ3BDdVAsb0JBQW9CLENBQUMsS0FBSyxDQUFDO2NBQzNCcEcsU0FBUyxDQUFFdkssTUFBMkIsS0FBTTtnQkFBRSxHQUFHQSxNQUFNO2dCQUFFSCxTQUFTLEVBQUUzRCxLQUFLLENBQUN3QixLQUFLLENBQUNtQztjQUFTLENBQUUsQ0FBQyxDQUFDO1lBQzlGLENBQUM7WUFFRCxNQUFNb0csUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIrRixXQUFXLENBQUMsSUFBSTVOLEdBQUcsRUFBRSxDQUFDO2NBQ3RCdVMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO2NBQzNCelUsS0FBSyxDQUFDOEUsaUJBQWlCLEVBQUU7WUFDMUIsQ0FBQztZQUNELE1BQU04RyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUNELFFBQVEsQ0FBQzJKLElBQUksSUFBSTdCO1lBQUssQ0FBRTtZQUN0RCxNQUFNNUcsR0FBRyxHQUFHLG1DQUFtQzRHLEtBQUssR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRTVFLE9BQ0MxTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTSxTQUFTLEVBQUU4RDtZQUFHLEdBQ3RCOUUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzhMLEtBQUEsQ0FBQWdCLElBQUk7Y0FDSnhNLFNBQVMsRUFBQyw2QkFBNkI7Y0FDdkM3RCxLQUFLLEVBQUU7Z0JBQUV5RyxRQUFRO2dCQUFFbUUsV0FBVztnQkFBRTJEO2NBQUssQ0FBRTtjQUN2QytCLE9BQU8sRUFBRVQsS0FBQSxDQUFBVSx3QkFBd0I7Y0FDakMxUyxLQUFLLEVBQUVpUztZQUFXLEVBQ2pCLEVBRUZqTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBa0IsR0FDaENoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxlQUNFOUcsS0FBSyxDQUFDSyxLQUFLLEUsTUFBSTJKLFFBQVEsQ0FBQzJKLElBQUksQ0FDdkIsRUFDUHZOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFrQixHQUNoQ2hCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFPLE1BQU07Y0FBQ0gsUUFBUSxFQUFFNkgsS0FBSztjQUFFekgsT0FBTyxFQUFFakMsUUFBUTtjQUFFSCxPQUFPLEVBQUMsU0FBUztjQUFDRSxRQUFRO1lBQUEsR0FDcEU2SixXQUFXLENBQUMrQixpQkFBaUIsQ0FDdEIsRUFDVDNOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFPLE1BQU07Y0FBQSxHQUFLSCxRQUFRO2NBQUVoQyxPQUFPLEVBQUMsU0FBUztjQUFDb0MsT0FBTyxFQUFFaUo7WUFBSyxHQUNwRHRCLFdBQVcsQ0FBQ2dDLGdCQUFnQixDQUNyQixDQUNKLENBQ0QsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25FQSxJQUFBNU4sTUFBQSxHQUFBcEksT0FBQTtVQUNBLElBQUF1SyxRQUFBLEdBQUF2SyxPQUFBO1VBU00sU0FBVThWLHdCQUF3QkEsQ0FBQ0csS0FBQSxHQUFnQixFQUFFO1lBQzFELE1BQU07Y0FBRTlKLEtBQUs7Y0FBRTNJLElBQUk7Y0FBRXNRLEtBQUs7Y0FBRTlILFFBQVE7Y0FBRW1FO1lBQVcsQ0FBRSxHQUFHOEYsS0FBSztZQUMzRCxNQUFNO2NBQ0w1VixLQUFLO2NBQ0wyQixLQUFLLEVBQUU7Z0JBQUVxVCxXQUFXLEVBQUVyVDtjQUFLO1lBQUUsQ0FDN0IsR0FBRyxJQUFBdUksUUFBQSxDQUFBUyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNa0wsUUFBUSxHQUFJdEgsS0FBb0MsSUFBSTtjQUN6REEsS0FBSyxDQUFDdUgsZUFBZSxFQUFFO2NBQ3ZCLE1BQU1oSyxLQUFLLEdBQUdpSyxRQUFRLENBQUN4SCxLQUFLLENBQUN5SCxhQUFhLENBQUNDLE9BQU8sQ0FBQ25LLEtBQUssQ0FBQztjQUN6RCxNQUFNb0ssUUFBUSxHQUFHdkssUUFBUTtjQUN6QnVLLFFBQVEsQ0FBQ3RRLEdBQUcsQ0FBQ2tHLEtBQUssQ0FBQyxHQUFHb0ssUUFBUSxDQUFDQyxNQUFNLENBQUNySyxLQUFLLENBQUMsR0FBR29LLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDdEssS0FBSyxDQUFDO2NBQ2xFOUwsS0FBSyxDQUFDaUMsb0JBQW9CLENBQUNtVSxHQUFHLENBQUN0SyxLQUFLLENBQUM7Y0FDckNnRSxXQUFXLENBQUMsSUFBSTVOLEdBQUcsQ0FBQ2dVLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLENBQUM7WUFFRCxNQUFNckosR0FBRyxHQUFHLG1CQUFtQmxCLFFBQVEsQ0FBQy9GLEdBQUcsQ0FBQ2tHLEtBQUssQ0FBQyxHQUFHLFdBQVcsR0FBRyxFQUFFLEVBQUU7WUFDdkUsTUFBTXNFLEtBQUssR0FBb0M7Y0FBRXJILFNBQVMsRUFBRThELEdBQUc7Y0FBRSxZQUFZLEVBQUVmO1lBQUssQ0FBRTtZQUV0RixJQUFJLENBQUMySCxLQUFLLEVBQUVyRCxLQUFLLENBQUNwRSxPQUFPLEdBQUc2SixRQUFRO1lBRXBDLE9BQ0M5TixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUU4RCxHQUFHO2NBQUEsY0FBY2YsS0FBSztjQUFBLEdBQU1zRTtZQUFLLEdBQ2hEckksTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU1NLFNBQVMsRUFBQztZQUFrQixHQUFFcEgsS0FBSyxDQUFDMFUsTUFBTSxDQUFRLEVBQ3hEdE8sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU0sU0FBUyxFQUFDO1lBQXNCLEdBQUU1RixJQUFJLENBQUNtVCxTQUFTLENBQVEsQ0FDdEQsRUFDVHZPLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFlLEdBQzdCaEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU1NLFNBQVMsRUFBQztZQUFrQixHQUFFcEgsS0FBSyxDQUFDcUIsS0FBSyxDQUFRLENBQy9DLEVBQ1JHLElBQUksQ0FBQ2tTLFVBQVUsQ0FDWCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUF0TixNQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQXVLLFFBQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBNkwsV0FBQSxHQUFBN0wsT0FBQTtVQUNNLFNBQVVrVixpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUNMbFQsS0FBSyxFQUFFO2dCQUNOd00sYUFBYSxFQUFFQyxJQUFJO2dCQUNuQjRHLFdBQVcsRUFBRTtrQkFDWnJSLFNBQVMsRUFBRTtvQkFBRStGLE9BQU8sRUFBRS9IO2tCQUFLO2dCQUFFO2NBQzdCLENBQ0Q7Y0FDRDNCLEtBQUs7Y0FDTHFPLFNBQVM7Y0FDVHZLLE1BQU07Y0FDTjlELEtBQUssRUFBRTtnQkFBRTZCO2NBQVk7WUFBRSxDQUN2QixHQUFHLElBQUFxSSxRQUFBLENBQUFTLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRTZKLGlCQUFpQjtjQUFFQztZQUFvQixDQUFFLEdBQUcsSUFBQXZLLFFBQUEsQ0FBQXdDLHFCQUFxQixHQUFFO1lBQzNFLE1BQU07Y0FBRTZKO1lBQVEsQ0FBRSxHQUFHMVUsWUFBWTtZQUNqQyxNQUFNLENBQUMyVSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHMU8sTUFBQSxDQUFBUyxPQUFLLENBQUNXLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsSUFBSSxDQUFDdEgsWUFBWSxJQUFJMlMsaUJBQWlCLEVBQUUsT0FBTyxJQUFJO1lBRW5ELE1BQU14SSxPQUFPLEdBQUcsTUFBT3VDLEtBQTBDLElBQUk7Y0FDcEVrSSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLElBQUlsSSxLQUFLLENBQUN5SCxhQUFhLENBQUN0VCxLQUFLLEtBQUssTUFBTSxFQUFFO2dCQUN6QyxNQUFNMUMsS0FBSyxDQUFDZ0csSUFBSSxDQUFDO2tCQUFFckMsU0FBUyxFQUFFNFM7Z0JBQVEsQ0FBRSxDQUFDO2dCQUN6Q2xJLFNBQVMsQ0FBQztrQkFBRSxHQUFHdkssTUFBTTtrQkFBRUgsU0FBUyxFQUFFNFM7Z0JBQVEsQ0FBRSxDQUFDOztjQUc5QzlCLG9CQUFvQixDQUFDLElBQUksQ0FBQztjQUUxQmdDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUVELE1BQU01SixHQUFHLEdBQUcsd0JBQXdCMkosUUFBUSxHQUFHLGVBQWUsR0FBRyxFQUFFLEVBQUU7WUFFckUsT0FDQ3pPLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBRThEO1lBQUcsR0FDbEI5RSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLOE4sUUFBUSxDQUFNLEVBQ25CeE8sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQStCLEdBQzdDaEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU0sU0FBUyxFQUFDO1lBQWMsR0FBRXBILEtBQUssQ0FBQ3FCLEtBQUssQ0FBUSxFQUNuRCtFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFrQixHQUNoQ2hCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFPLE1BQU07Y0FBQ25DLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQ3BILEtBQUssRUFBQyxPQUFPO2NBQUNzSixPQUFPLEVBQUVBO1lBQU8sR0FDL0RySyxLQUFLLENBQUNrSSxNQUFNLENBQ0wsRUFDVDlCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFPLE1BQU07Y0FBQ25DLE9BQU8sRUFBQyxTQUFTO2NBQUNsSCxLQUFLLEVBQUMsTUFBTTtjQUFDc0osT0FBTyxFQUFFQTtZQUFPLEdBQ3JEckssS0FBSyxDQUFDZ0ksT0FBTyxDQUNOLENBQ0osQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7O1VDbkRBOztVQUVBOUIsTUFBQSxDQUFBQyxjQUFBLENBQUFwSCxPQUFBO1lBQ0FnQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQW9QLEtBQUEsR0FBQW5TLE9BQUE7VUFDQSxJQUFBMlMsTUFBQSxHQUFBM1MsT0FBQTtVQUNBLElBQUErVyxTQUFBLEdBQUEvVyxPQUFBO1VBQ0EsSUFBQWdYLFNBQUEsR0FBQWhYLE9BQUE7VUFFQSxJQUFBdUssUUFBQSxHQUFBdkssT0FBQTtVQUVBLElBQUF1UCxLQUFBLEdBQUF2UCxPQUFBO1VBQ0EsSUFBQWlYLGtCQUFBLEdBQUFqWCxPQUFBO1VBQ0EsSUFBQWtYLFFBQUEsR0FBQWxYLE9BQUE7VUFDQSxJQUFBNkwsV0FBQSxHQUFBN0wsT0FBQTtVQUVPO1VBQVUsU0FDUlEsSUFBSUEsQ0FBQztZQUFFSCxLQUFLO1lBQUVNO1VBQUcsQ0FBcUM7WUFDOUQsTUFBTSxDQUFDMkksUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzRJLEtBQUssQ0FBQzNJLFFBQVEsQ0FBQ25KLEtBQUssQ0FBQ2lKLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUM2TixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHakYsS0FBSyxDQUFDM0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV6RCxNQUFNLENBQUM2TixXQUFXLENBQUMsR0FBR2xGLEtBQUssQ0FBQzNJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFdkMsTUFBTSxDQUFDOE4sT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3BGLEtBQUssQ0FBQzNJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDckYsTUFBTSxFQUFFdUssU0FBUyxDQUFDLEdBQUd5RCxLQUFLLENBQUMzSSxRQUFRLENBQXNCO2NBQUUsR0FBR25KLEtBQUssQ0FBQ3dCLEtBQUssRUFBRXVDLGFBQWE7WUFBRSxDQUFFLENBQUM7WUFDcEcsTUFBTSxDQUFDd0IsS0FBSyxFQUFFNkQsUUFBUSxDQUFDLEdBQUcwSSxLQUFLLENBQUMzSSxRQUFRLEVBQVU7WUFDbEQsTUFBTSxDQUFDZ08sV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR3RGLEtBQUssQ0FBQzNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDM0QsTUFBTSxDQUFDa08sZ0JBQWdCLEVBQUVDLG1CQUFtQixDQUFDLEdBQUd4RixLQUFLLENBQUMzSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJFLE1BQU1xSixhQUFhLEdBQUdBLENBQUEsS0FBTTRFLGNBQWMsQ0FBQyxDQUFDRCxXQUFXLENBQUM7WUFDeEQsTUFBTTFFLGtCQUFrQixHQUFHQSxDQUFBLEtBQU02RSxtQkFBbUIsQ0FBQyxDQUFDRCxnQkFBZ0IsQ0FBQztZQUN2RSxJQUFBL0UsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ2hULEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJxTyxTQUFTLENBQUM7Z0JBQUUsR0FBR3JPLEtBQUssQ0FBQ3dCLEtBQUssRUFBRXVDLGFBQWE7Y0FBRSxDQUFFLENBQUM7Y0FDOUNtRixXQUFXLENBQUNsSixLQUFLLEVBQUVpSixRQUFRLENBQUM7WUFDN0IsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDakosS0FBSyxDQUFDbUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDL0IsTUFBTXVILFFBQVEsR0FBSTZDLEtBQTBDLElBQUk7Y0FDL0RGLFNBQVMsQ0FBQztnQkFBRSxHQUFHdkssTUFBTTtnQkFBRSxDQUFDeUssS0FBSyxDQUFDeUgsYUFBYSxDQUFDNVMsSUFBSSxHQUFHbUwsS0FBSyxDQUFDeUgsYUFBYSxDQUFDdFQsS0FBSztnQkFBRXdRLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUMvRixDQUFDO1lBRUQsTUFBTXhRLEtBQUssR0FBRztjQUNiMUMsS0FBSztjQUNMMEwsUUFBUTtjQUNSL0osS0FBSyxFQUFFM0IsS0FBSyxDQUFDMkIsS0FBSztjQUNsQnFWLFdBQVc7Y0FDWEMsT0FBTztjQUNQQyxVQUFVO2NBQ1ZyVixZQUFZLEVBQUU3QixLQUFLLENBQUM2QixZQUFZO2NBQ2hDMEQsS0FBSztjQUNMNkQsUUFBUTtjQUNSSCxRQUFRLEVBQUVBLFFBQVEsSUFBSTZOLFVBQVU7Y0FDaENDLGFBQWE7Y0FDYnZFLGFBQWE7Y0FDYjVRLEtBQUssRUFBRTVCLEtBQUssQ0FBQzRCLEtBQUs7Y0FDbEJrQyxNQUFNO2NBQ051SyxTQUFTO2NBQ1RvRTthQUNBO1lBRUQsT0FDQ1gsS0FBQSxDQUFBckosYUFBQSxDQUFBcUosS0FBQSxDQUFBeEMsUUFBQSxRQUNDd0MsS0FBQSxDQUFBckosYUFBQSxDQUFDeUIsUUFBQSxDQUFBa0MsYUFBYSxDQUFDd0ksUUFBUTtjQUFDbFMsS0FBSyxFQUFFQTtZQUFLLEdBQ25Db1AsS0FBQSxDQUFBckosYUFBQSxDQUFDK0MsV0FBQSxDQUFBK0wsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUV4WCxLQUFLLENBQUN3QyxJQUFJO2NBQ3JCaU0sT0FBTyxFQUFFO2dCQUNSZ0osUUFBUSxFQUFFM0YsS0FBQSxDQUFBckosYUFBQSxDQUFDaU8sU0FBQSxDQUFBZ0IsY0FBYztrQkFBQzFYLEtBQUssRUFBRUEsS0FBSztrQkFBRU0sR0FBRyxFQUFFQSxHQUFHO2tCQUFFMkksUUFBUSxFQUFFQTtnQkFBUSxFQUFJO2dCQUN4RXNFLEtBQUssRUFBRXVFLEtBQUEsQ0FBQXJKLGFBQUEsQ0FBQ3lHLEtBQUEsQ0FBQXFELFNBQVMsT0FBRztnQkFDcEJ2TixRQUFRLEVBQUU4TSxLQUFBLENBQUFySixhQUFBLENBQUNrTyxTQUFBLENBQUFnQixrQkFBa0I7a0JBQUMzWCxLQUFLLEVBQUVBLEtBQUs7a0JBQUVnRixRQUFRLEVBQUVoRixLQUFLLENBQUN1RDtnQkFBZ0I7O1lBQzVFLEVBQ0EsQ0FDc0IsRUFDekJ1TyxLQUFBLENBQUFySixhQUFBLENBQUNtTyxrQkFBQSxDQUFBM0osaUJBQWlCO2NBQUNqTixLQUFLLEVBQUVBLEtBQUs7Y0FBRThELE1BQU0sRUFBRUEsTUFBTTtjQUFFMUQsSUFBSSxFQUFFaVgsZ0JBQWdCO2NBQUVsUCxPQUFPLEVBQUVzSztZQUFrQixFQUFJLEVBQ3hHWCxLQUFBLENBQUFySixhQUFBLENBQUNvTyxRQUFBLENBQUFlLGlCQUFpQjtjQUNqQnhYLElBQUksRUFBRStXLFdBQVc7Y0FDakI5SSxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJyTyxLQUFLLEVBQUVBLEtBQUs7Y0FDWjhELE1BQU0sRUFBRUEsTUFBTTtjQUNkcUUsT0FBTyxFQUFFcUs7WUFBYSxFQUNyQixDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUVPLE1BQU1xRixVQUFVLEdBQUFuWCxPQUFBLENBQUFtWCxVQUFBLEdBQUc7WUFDekJDLFNBQVMsRUFBRTtjQUNWN00sT0FBTyxFQUFFO2dCQUFFSyxDQUFDLEVBQUUsTUFBTTtnQkFBRUosT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0MsT0FBTyxFQUFFO2dCQUFFRyxDQUFDLEVBQUUsQ0FBQztnQkFBRUosT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRTFILFFBQVEsRUFBRTtnQkFBRztjQUFFLENBQUU7Y0FDNUQ2SCxJQUFJLEVBQUU7Z0JBQUVELENBQUMsRUFBRSxLQUFLO2dCQUFFSixPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFMUgsUUFBUSxFQUFFO2dCQUFHO2NBQUU7YUFDM0Q7WUFFRDhFLE9BQU8sRUFBRTtjQUNSeUMsT0FBTyxFQUFFO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3ZCQyxPQUFPLEVBQUU7Z0JBQUVHLENBQUMsRUFBRSxDQUFDO2dCQUFFSixPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFMUgsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1RDZILElBQUksRUFBRTtnQkFBRUQsQ0FBQyxFQUFFLEtBQUs7Z0JBQUVKLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUUxSCxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNEcVUsbUJBQW1CLEVBQUU7Y0FDcEI5TSxPQUFPLEVBQUU7Z0JBQUVLLENBQUMsRUFBRSxNQUFNO2dCQUFFSixPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2xDQyxPQUFPLEVBQUU7Z0JBQUVHLENBQUMsRUFBRSxDQUFDO2dCQUFFSixPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFMUgsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1RDZILElBQUksRUFBRTtnQkFBRXlNLENBQUMsRUFBRSxLQUFLO2dCQUFFOU0sT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRTFILFFBQVEsRUFBRTtnQkFBRztjQUFFOztXQUU1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQsSUFBQXFFLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBNkwsV0FBQSxHQUFBN0wsT0FBQTtVQUNBLElBQUF3SyxhQUFBLEdBQUF4SyxPQUFBO1VBQ0EsSUFBQXVLLFFBQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBc1ksV0FBQSxHQUFBdFksT0FBQTtVQUVNLFNBQVV1WSxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUFFdlcsS0FBSztjQUFFd1csT0FBTztjQUFFaFE7WUFBTyxDQUFFLEdBQUcsSUFBQStCLFFBQUEsQ0FBQWtPLGlCQUFpQixHQUFFO1lBQ3ZELE1BQU14UCxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFZdVAsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUVsRCxPQUNDcFEsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBCLGFBQUEsQ0FBQVksTUFBTSxDQUFDQyxHQUFHO2NBQUEsR0FBS2lOLFdBQUEsQ0FBQUosVUFBVSxDQUFDclAsT0FBTztjQUFFTyxTQUFTLEVBQUM7WUFBb0IsR0FDakVoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTSxTQUFTLEVBQUM7WUFBZSxHQUNoQ2hCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUs5RyxLQUFLLENBQUMwVyxNQUFNLENBQUMxTyxPQUFPLENBQUN2QixLQUFLLENBQU0sQ0FDN0IsRUFDVEwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQXNCLEdBQ3BDaEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsZUFBTzlHLEtBQUssQ0FBQzBXLE1BQU0sQ0FBQzFPLE9BQU8sQ0FBQ3RCLFdBQVcsQ0FBUSxDQUMxQyxFQUNOTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTSxTQUFTLEVBQUM7WUFBMEMsR0FDM0RoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsV0FBQSxDQUFBTyxNQUFNO2NBQUNuQyxPQUFPLEVBQUMsU0FBUztjQUFDRSxRQUFRO2NBQUNrQyxPQUFPLEVBQUU3RDtZQUFPLEdBQ2pEeEcsS0FBSyxDQUFDK0gsT0FBTyxDQUFDRyxNQUFNLENBQ2IsRUFDVDlCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFPLE1BQU07Y0FBQ25DLE9BQU8sRUFBQyxTQUFTO2NBQUNvQyxPQUFPLEVBQUVwRDtZQUFTLEdBQzFDakgsS0FBSyxDQUFDK0gsT0FBTyxDQUFDQyxPQUFPLENBQ2QsQ0FDRCxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUE1QixNQUFBLEdBQUFwSSxPQUFBO1VBYU8sTUFBTTJZLGNBQWMsR0FBQTVYLE9BQUEsQ0FBQTRYLGNBQUEsR0FBR3ZRLE1BQUEsQ0FBQVMsT0FBSyxDQUFDNkQsYUFBYSxDQUFDLEVBQW1DLENBQUM7VUFDL0UsTUFBTStMLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1yUSxNQUFBLENBQUFTLE9BQUssQ0FBQzhELFVBQVUsQ0FBQ2dNLGNBQWMsQ0FBQztVQUFDNVgsT0FBQSxDQUFBMFgsaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZHhFLElBQUFyUSxNQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQTZMLFdBQUEsR0FBQTdMLE9BQUE7VUFDQSxJQUFBNFUsS0FBQSxHQUFBNVUsT0FBQTtVQUNBLElBQUF1SyxRQUFBLEdBQUF2SyxPQUFBO1VBQ0EsSUFBQXdLLGFBQUEsR0FBQXhLLE9BQUE7VUFDQSxJQUFBc1ksV0FBQSxHQUFBdFksT0FBQTtVQUVNLFNBQVU0WSxrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFNVcsS0FBSztjQUFFd1csT0FBTztjQUFFSztZQUFRLENBQUUsR0FBRyxJQUFBdE8sUUFBQSxDQUFBa08saUJBQWlCLEdBQUU7WUFFeEQsTUFBTUssTUFBTSxHQUFHQSxDQUFBLEtBQU1OLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDekMsTUFBTU8sSUFBSSxHQUFHQSxDQUFDO2NBQUV2VjtZQUFJLENBQUUsS0FBSTtjQUN6QixNQUFNNkksT0FBTyxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3BCd00sUUFBUSxDQUFDclYsSUFBSSxDQUFDO2dCQUNkZ1YsT0FBTyxDQUFDLGFBQWEsQ0FBQztjQUN2QixDQUFDO2NBQ0QsT0FDQ3BRLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2dCQUFJTSxTQUFTLEVBQUM7Y0FBWSxHQUN6QmhCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGVBQU90RixJQUFJLENBQVEsRUFDbkI0RSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsV0FBQSxDQUFBTyxNQUFNO2dCQUFDakMsUUFBUTtnQkFBQ0YsT0FBTyxFQUFDLFNBQVM7Z0JBQUNvQyxPQUFPLEVBQUVBO2NBQU8sR0FDakRySyxLQUFLLENBQUMwVyxNQUFNLENBQUNNLFFBQVEsQ0FBQ2pQLE9BQU8sQ0FBQzRFLE1BQU0sQ0FDN0IsQ0FDSixDQUNGO1lBRVAsQ0FBQztZQUVELE9BQ0N2RyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVixNQUFBLENBQUFTLE9BQUEsQ0FBQThHLFFBQUEsUUFDQ3ZILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMwQixhQUFBLENBQUFZLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLEdBQUtpTixXQUFBLENBQUFKLFVBQVUsQ0FBQ3JQLE9BQU87Y0FBRU8sU0FBUyxFQUFDO1lBQTJCLEdBQ3hFaEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBSzlHLEtBQUssQ0FBQzBXLE1BQU0sQ0FBQ00sUUFBUSxDQUFDdlEsS0FBSyxDQUFNLEVBQ3RDTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEwsS0FBQSxDQUFBZ0IsSUFBSTtjQUFDeE0sU0FBUyxFQUFDLGdDQUFnQztjQUFDaEcsS0FBSyxFQUFFcEIsS0FBSyxDQUFDMFcsTUFBTSxDQUFDTSxRQUFRLENBQUM1VixLQUFLO2NBQUV5UyxPQUFPLEVBQUVrRDtZQUFJLEVBQUksRUFFdEczUSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBK0IsR0FDN0NoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsV0FBQSxDQUFBTyxNQUFNO2NBQUNuQyxPQUFPLEVBQUMsU0FBUztjQUFDb0MsT0FBTyxFQUFFeU07WUFBTSxHQUN2QzlXLEtBQUssQ0FBQzBXLE1BQU0sQ0FBQ00sUUFBUSxDQUFDalAsT0FBTyxDQUFDa1AsSUFBSSxDQUMzQixDQUNKLENBQ0QsQ0FDTSxDQUNYO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUE3USxNQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQXVQLEtBQUEsR0FBQXZQLE9BQUE7VUFDQSxJQUFBc0ksR0FBQSxHQUFBdEksT0FBQTtVQUNBLElBQUE2TCxXQUFBLEdBQUE3TCxPQUFBO1VBRUEsSUFBQXdLLGFBQUEsR0FBQXhLLE9BQUE7VUFDQSxJQUFBdUssUUFBQSxHQUFBdkssT0FBQTtVQUVBLElBQUFrWixnQkFBQSxHQUFBbFosT0FBQTtVQUNBLElBQUFzWSxXQUFBLEdBQUF0WSxPQUFBO1VBRU0sU0FBVW1aLGdCQUFnQkEsQ0FBQyxFQUFFO1lBQ2xDLE1BQU07Y0FBRTlZLEtBQUs7Y0FBRTJCLEtBQUs7Y0FBRW1DLE1BQU07Y0FBRXFVLE9BQU87Y0FBRVksS0FBSztjQUFFUCxRQUFRO2NBQUVyUTtZQUFPLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBa08saUJBQWlCLEdBQUU7WUFDdkYsTUFBTSxDQUFDblAsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25CLE1BQUEsQ0FBQVMsT0FBSyxDQUFDVyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU02UCxVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCLElBQUk7Z0JBQ0g5UCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNbEosS0FBSyxDQUFDeUcsd0JBQXdCLENBQUM7a0JBQUUsR0FBR3pHLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ3VDLGFBQWEsRUFBRTtrQkFBRWdWO2dCQUFLLENBQUUsQ0FBQztnQkFDL0U1USxPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU85QyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVDZELFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxNQUFNK1AsTUFBTSxHQUFHO2NBQ2R2TixRQUFRLEVBQUc2QyxLQUE2QyxJQUFJO2dCQUMzRGlLLFFBQVEsQ0FBQ2pLLEtBQUssQ0FBQ3lILGFBQWEsQ0FBQ3RULEtBQUssQ0FBQztjQUNwQyxDQUFDO2NBQ0RzSixPQUFPLEVBQUVnTixVQUFVO2NBQ25CYixPQUFPLEVBQUVBLENBQUEsS0FBTUEsT0FBTyxDQUFDLFVBQVUsQ0FBQztjQUNsQ00sTUFBTSxFQUFFQSxDQUFBLEtBQU1OLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDO1lBRUQsT0FDQ3BRLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMwQixhQUFBLENBQUFZLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLEdBQUtpTixXQUFBLENBQUFKLFVBQVUsQ0FBQ3JQLE9BQU87Y0FBRU8sU0FBUyxFQUFDO1lBQWEsR0FDMURoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsS0FBQSxDQUFBb0UsSUFBSTtjQUFDSCxRQUFRLEVBQUU4RixNQUFNLENBQUNqTjtZQUFPLEdBQzdCakUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUs5RyxLQUFLLENBQUMwVyxNQUFNLENBQUMxUyxVQUFVLENBQUN5QyxLQUFLLENBQU0sQ0FDaEMsRUFDVEwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29RLGdCQUFBLENBQUFLLGVBQWUsT0FBRyxFQUNuQm5SLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN5RyxLQUFBLENBQUFLLFFBQVE7Y0FDUnZNLEtBQUssRUFBRXJCLEtBQUssQ0FBQzBXLE1BQU0sQ0FBQ2MsUUFBUSxDQUFDblcsS0FBSztjQUNsQ0ksSUFBSSxFQUFDLGNBQWM7Y0FDbkJWLEtBQUssRUFBRXFXLEtBQUs7Y0FDWkssUUFBUTtjQUNSMU4sUUFBUSxFQUFFdU4sTUFBTSxDQUFDdk4sUUFBUTtjQUN6QnFELFdBQVcsRUFBRXBOLEtBQUssQ0FBQzBXLE1BQU0sQ0FBQ2MsUUFBUSxDQUFDcEs7WUFBVyxFQUM3QyxDQUNJLEVBQ1BoSCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLFdBQUEsQ0FBQU8sTUFBTTtjQUFDbkMsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDa0MsT0FBTyxFQUFFaU4sTUFBTSxDQUFDUjtZQUFNLEdBQ3ZEelksS0FBSyxDQUFDMEIsV0FBVyxDQUFDZ0ksT0FBTyxDQUFDa1AsSUFBSSxDQUN2QixFQUNUN1EsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLFdBQUEsQ0FBQU8sTUFBTTtjQUFDbkMsT0FBTyxFQUFDLFNBQVM7Y0FBQ29DLE9BQU8sRUFBRWlOLE1BQU0sQ0FBQ2pOLE9BQU87Y0FBRUosUUFBUSxFQUFFM0MsUUFBUSxJQUFJLENBQUNuRixNQUFNLENBQUNKO1lBQVEsR0FDdkYxRCxLQUFLLENBQUMwQixXQUFXLENBQUNnSSxPQUFPLENBQUMyUCxRQUFRLENBQzNCLENBQ0QsRUFFVHRSLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNSLEdBQUEsQ0FBQXlMLGdCQUFnQjtjQUFDekssUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDNUI7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRUEsSUFBQWxCLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBd0ssYUFBQSxHQUFBeEssT0FBQTtVQUNBLElBQUE2TCxXQUFBLEdBQUE3TCxPQUFBO1VBQ0EsSUFBQXVLLFFBQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBc0ksR0FBQSxHQUFBdEksT0FBQTtVQUNBLElBQUFzWSxXQUFBLEdBQUF0WSxPQUFBO1VBRU0sU0FBVTJaLGFBQWFBLENBQUMsRUFBRTtZQUMvQixNQUFNO2NBQUUzWCxLQUFLO2NBQUUzQixLQUFLO2NBQUVtSTtZQUFPLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBa08saUJBQWlCLEdBQUU7WUFDckQsTUFBTWhKLFNBQVMsR0FBR3pOLEtBQUssQ0FBQzRMLEtBQUssQ0FBQ2dNLFVBQVU7WUFDeEMsTUFBTTdQLE9BQU8sR0FBRy9ILEtBQUssQ0FBQzRMLEtBQUssQ0FBQzdELE9BQU87WUFDbkMsTUFBTSxDQUFDOFAsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHMVIsTUFBQSxDQUFBUyxPQUFLLENBQUNXLFFBQVEsRUFBc0I7WUFDOUUsTUFBTTtjQUFFZ1A7WUFBTyxDQUFFLEdBQUcsSUFBQWpPLFFBQUEsQ0FBQWtPLGlCQUFpQixHQUFFO1lBRXZDLE1BQU0xTSxRQUFRLEdBQUk2QyxLQUEwQyxJQUFJO2NBQy9ELE1BQU07Z0JBQUU3TDtjQUFLLENBQUUsR0FBRzZMLEtBQUssQ0FBQ3lILGFBQWE7Y0FDckN5RCxnQkFBZ0IsQ0FBQy9XLEtBQUssQ0FBQztZQUN4QixDQUFDO1lBQ0QsTUFBTXNKLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCLElBQUl3TixhQUFhLEtBQUssS0FBSyxJQUFJLENBQUN4WixLQUFLLENBQUN3QixLQUFLLENBQUNPLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO2dCQUMxRG1XLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ2xCOztjQUdEQSxPQUFPLENBQUNxQixhQUFhLEtBQUssS0FBSyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUM7WUFDbkQsQ0FBQztZQUVELE9BQ0N6UixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEIsYUFBQSxDQUFBWSxNQUFNLENBQUNDLEdBQUc7Y0FBQSxHQUFLaU4sV0FBQSxDQUFBSixVQUFVLENBQUNyUCxPQUFPO2NBQUVPLFNBQVMsRUFBQztZQUFhLEdBQzFEaEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUsyRyxTQUFTLENBQUNoSCxLQUFLLENBQU0sRUFDMUJMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFzQixHQUNwQ2hCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGVBQU8yRyxTQUFTLENBQUN2QixRQUFRLENBQVEsQ0FDNUIsQ0FDRSxFQUVUOUYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsR0FBQSxDQUFBd0QsV0FBVztjQUNYaU8sT0FBTyxFQUFFRixhQUFhLEtBQUssS0FBSztjQUNoQzlOLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjFJLEtBQUssRUFBRW9NLFNBQVMsQ0FBQ1gsT0FBTyxDQUFDa0wsRUFBRTtjQUMzQmpYLEtBQUssRUFBQyxLQUFLO2NBQ1hVLElBQUksRUFBQztZQUFlLEVBQ25CLEVBRUYyRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixHQUFBLENBQUF3RCxXQUFXO2NBQ1hpTyxPQUFPLEVBQUVGLGFBQWEsS0FBSyxVQUFVO2NBQ3JDOU4sUUFBUSxFQUFFQSxRQUFRO2NBQ2xCMUksS0FBSyxFQUFFb00sU0FBUyxDQUFDWCxPQUFPLENBQUNtTCxRQUFRO2NBQ2pDbFgsS0FBSyxFQUFDLFVBQVU7Y0FDaEJVLElBQUksRUFBQztZQUFlLEVBQ25CLEVBRUYyRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLFdBQUEsQ0FBQU8sTUFBTTtjQUFDbkMsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDa0MsT0FBTyxFQUFFN0Q7WUFBTyxHQUNqRHVCLE9BQU8sQ0FBQ0csTUFBTSxDQUNQLEVBQ1Q5QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0MsV0FBQSxDQUFBTyxNQUFNO2NBQUNuQyxPQUFPLEVBQUMsU0FBUztjQUFDZ0MsUUFBUSxFQUFFLENBQUM0TixhQUFhO2NBQUV4TixPQUFPLEVBQUVBO1lBQU8sR0FDbEV0QyxPQUFPLENBQUNzRSxRQUFRLENBQ1QsQ0FDRCxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBLElBQUFqRyxNQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQTZMLFdBQUEsR0FBQTdMLE9BQUE7VUFDQSxJQUFBdUssUUFBQSxHQUFBdkssT0FBQTtVQUNBLElBQUF1UCxLQUFBLEdBQUF2UCxPQUFBO1VBQ0EsSUFBQXdLLGFBQUEsR0FBQXhLLE9BQUE7VUFDQSxJQUFBc1ksV0FBQSxHQUFBdFksT0FBQTtVQUVNLFNBQVVrYSxVQUFVQSxDQUFDLEVBQUU7WUFDNUIsSUFBSTtjQUFFbFksS0FBSztjQUFFM0IsS0FBSztjQUFFOEQsTUFBTTtjQUFFdUs7WUFBUyxDQUFFLEdBQUcsSUFBQW5FLFFBQUEsQ0FBQWtPLGlCQUFpQixHQUFFO1lBQzdELE1BQU1oSixTQUFTLEdBQUd6TixLQUFLLENBQUM0TCxLQUFLLENBQUNnTSxVQUFVO1lBQ3hDLE1BQU03UCxPQUFPLEdBQUcxSixLQUFLLENBQUMwQixXQUFXLENBQUNnSSxPQUFPO1lBQ3pDLE1BQU07Y0FBRXlPLE9BQU87Y0FBRWhRO1lBQU8sQ0FBRSxHQUFHLElBQUErQixRQUFBLENBQUFrTyxpQkFBaUIsR0FBRTtZQUNoRCxNQUFNLENBQUNuUCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbkIsTUFBQSxDQUFBUyxPQUFLLENBQUNXLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDMlEsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2hTLE1BQUEsQ0FBQVMsT0FBSyxDQUFDVyxRQUFRLENBQUM7Y0FBRWYsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsV0FBVyxFQUFFO1lBQUUsQ0FBRSxDQUFDO1lBQ2xGLE1BQU0wQixRQUFRLEdBQUdBLENBQUEsS0FBTW9PLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDM0N4VyxLQUFLLEdBQUdBLEtBQUssQ0FBQ3FZLE9BQU87WUFFckIsTUFBTTdHLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSGpLLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU1sSixLQUFLLENBQUNnRyxJQUFJLENBQUM7a0JBQ2hCLEdBQUdsQyxNQUFNO2tCQUNUc0UsS0FBSyxFQUFFMFIsVUFBVSxDQUFDMVIsS0FBSztrQkFDdkJDLFdBQVcsRUFBRXlSLFVBQVUsQ0FBQ3pSLFdBQVc7a0JBQ25DNUYsS0FBSyxFQUFFO2lCQUNQLENBQUM7Z0JBQ0YwRixPQUFPLEVBQUU7Z0JBQ1RrRyxTQUFTLENBQUM7a0JBQUUsR0FBR3ZLLE1BQU07a0JBQUVzRSxLQUFLLEVBQUUwUixVQUFVLENBQUMxUixLQUFLO2tCQUFFQyxXQUFXLEVBQUV5UixVQUFVLENBQUN6UjtnQkFBVyxDQUFFLENBQUM7ZUFDdEYsQ0FBQyxPQUFPaEQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1Q2RCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTXdDLFFBQVEsR0FBSTZDLEtBQWdFLElBQUk7Y0FDckYsTUFBTTtnQkFBRTdMLEtBQUs7Z0JBQUVVO2NBQUksQ0FBRSxHQUFHbUwsS0FBSyxDQUFDeUgsYUFBYTtjQUMzQytELGFBQWEsQ0FBQztnQkFBRSxHQUFHRCxVQUFVO2dCQUFFLENBQUMxVyxJQUFJLEdBQUdWO2NBQUssQ0FBRSxDQUFDO1lBQ2hELENBQUM7WUFFRCxPQUNDcUYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBCLGFBQUEsQ0FBQVksTUFBTSxDQUFDQyxHQUFHO2NBQUEsR0FBS2lOLFdBQUEsQ0FBQUosVUFBVSxDQUFDclAsT0FBTztjQUFFTyxTQUFTLEVBQUM7WUFBYSxHQUMxRGhCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGlCQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLMkcsU0FBUyxDQUFDaEgsS0FBSyxDQUFNLEVBQzFCTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBc0IsR0FDcENoQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxlQUFPMkcsU0FBUyxDQUFDdkIsUUFBUSxDQUFRLENBQzVCLENBQ0UsRUFDVDlGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN5RyxLQUFBLENBQUFvRSxJQUFJO2NBQUNILFFBQVEsRUFBRUE7WUFBUSxHQUN2QnBMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN5RyxLQUFBLENBQUErSyxLQUFLO2NBQ0xqWCxLQUFLLEVBQUVyQixLQUFLLENBQUN1WSxNQUFNLENBQUM5UixLQUFLLENBQUNwRixLQUFLO2NBQy9CMEksUUFBUSxFQUFFQSxRQUFRO2NBQ2xCaEosS0FBSyxFQUFFb1gsVUFBVSxDQUFDMVIsS0FBSyxJQUFJLEVBQUU7Y0FDN0JoRixJQUFJLEVBQUM7WUFBTyxFQUNYLEVBQ0YyRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsS0FBQSxDQUFBSyxRQUFRO2NBQ1J2TSxLQUFLLEVBQUVyQixLQUFLLENBQUN1WSxNQUFNLENBQUM3UixXQUFXLENBQUNyRixLQUFLO2NBQ3JDSSxJQUFJLEVBQUMsYUFBYTtjQUNsQndHLE9BQU8sRUFBQyxVQUFVO2NBQ2xCOEIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCaEosS0FBSyxFQUFFb1gsVUFBVSxDQUFDelIsV0FBVyxJQUFJO1lBQUUsRUFDbEMsRUFDRk4sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxXQUFBLENBQUFPLE1BQU07Y0FBQ25DLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQ2tDLE9BQU8sRUFBRWpDO1lBQVEsR0FDbERMLE9BQU8sQ0FBQ2tQLElBQUksQ0FDTCxFQUNUN1EsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLFdBQUEsQ0FBQU8sTUFBTTtjQUNObkMsT0FBTyxFQUFDLFNBQVM7Y0FDakJnQyxRQUFRLEVBQUUsQ0FBQ2tPLFVBQVUsQ0FBQ3pSLFdBQVcsSUFBSSxDQUFDeVIsVUFBVSxDQUFDMVIsS0FBSztjQUN0RDRELE9BQU8sRUFBRW1IO1lBQVEsR0FFaEJ6SixPQUFPLENBQUNzRSxRQUFRLENBQ1QsQ0FDRCxDQUNILENBQ0s7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RUEsSUFBQWpHLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBc08sWUFBQSxHQUFBdE8sT0FBQTtVQUdBLElBQUF1SyxRQUFBLEdBQUF2SyxPQUFBO1VBQ00sU0FBVXVaLGVBQWVBLENBQUE7WUFDOUIsSUFBSTtjQUFFdlgsS0FBSztjQUFFbUMsTUFBTTtjQUFFOUQsS0FBSztjQUFFcU87WUFBUyxDQUFFLEdBQUcsSUFBQW5FLFFBQUEsQ0FBQWtPLGlCQUFpQixHQUFFO1lBQzdEO1lBQ0F6VyxLQUFLLEdBQUdBLEtBQUssQ0FBQ3FZLE9BQU8sQ0FBQ0wsRUFBRTtZQUN4QixNQUFNL04sUUFBUSxHQUFHLEVBQUU7WUFDbkIsTUFBTTtjQUFFdU8sS0FBSztjQUFFQyxRQUFRO2NBQUVDO1lBQVEsQ0FBRSxHQUFHMVksS0FBSyxDQUFDME4sSUFBSSxDQUFDaUcsSUFBSSxDQUFDdlMsS0FBSztZQUMzRCxNQUFNMEwsT0FBTyxHQUFHLENBQ2Y7Y0FBRS9MLEtBQUssRUFBRSxFQUFFO2NBQUVNLEtBQUssRUFBRW1YLEtBQUs7Y0FBRXZXLGVBQWUsRUFBRTtZQUFDLENBQUUsRUFDL0M7Y0FBRWxCLEtBQUssRUFBRSxFQUFFO2NBQUVNLEtBQUssRUFBRW9YLFFBQVE7Y0FBRXhXLGVBQWUsRUFBRTtZQUFDLENBQUUsRUFDbEQ7Y0FBRWxCLEtBQUssRUFBRSxFQUFFO2NBQUVNLEtBQUssRUFBRXFYLFFBQVE7Y0FBRXpXLGVBQWUsRUFBRTtZQUFDLENBQUUsQ0FDbEQ7WUFFRCxNQUFNOEgsUUFBUSxHQUFJNkMsS0FBMkMsSUFBSTtjQUNoRSxNQUFNN0ksSUFBSSxHQUFHK0ksT0FBTyxDQUFDNUgsSUFBSSxDQUFDMUQsSUFBSSxJQUFJQSxJQUFJLENBQUNULEtBQUssS0FBS3FULFFBQVEsQ0FBQ3hILEtBQUssQ0FBQ0MsTUFBTSxDQUFDOUwsS0FBSyxDQUFDLENBQUM7Y0FDOUUsTUFBTXdDLEtBQUssR0FBRztnQkFDYixHQUFHcEIsTUFBTTtnQkFDVEosUUFBUSxFQUFFNkssS0FBSyxDQUFDQyxNQUFNLENBQUM5TCxLQUFLO2dCQUM1QmtCLGVBQWUsRUFBRThCLElBQUksRUFBRTlCLGVBQWUsSUFBSTtlQUMxQztjQUVEeUssU0FBUyxDQUFDbkosS0FBSyxDQUFDO2NBQ2hCbEYsS0FBSyxDQUFDd0IsS0FBSyxDQUFDZ0YsR0FBRyxDQUFDdEIsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFFRCxJQUFJb1YsYUFBYSxHQUFXLENBQUM7WUFDN0IsSUFBSTNPLFFBQVEsR0FBVyxDQUFDO1lBRXhCLElBQUk3SCxNQUFNLEVBQUV5VyxhQUFhLEVBQUVELGFBQWEsR0FBR3ZFLFFBQVEsQ0FBQ2pTLE1BQU0sQ0FBQ0osUUFBUSxDQUFDO1lBQ3BFLElBQUlJLE1BQU0sRUFBRUosUUFBUSxFQUFFb0ksS0FBSyxFQUFFSCxRQUFRLEdBQUdvSyxRQUFRLENBQUNqUyxNQUFNLENBQUNKLFFBQVEsQ0FBQ29JLEtBQUssQ0FBQztZQUV2RSxJQUFJbUwsT0FBTyxHQUFHLEVBQUU7WUFDaEIsSUFBSW5ULE1BQU0sQ0FBQ0osUUFBUSxFQUFFO2NBQ3BCdVQsT0FBTyxHQUFHeEksT0FBTyxDQUFDNUgsSUFBSSxDQUFDMUQsSUFBSSxJQUFJQSxJQUFJLENBQUNULEtBQUssS0FBS29CLE1BQU0sQ0FBQ0osUUFBUSxDQUFDOztZQUcvRCxPQUNDcUUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsY0FDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBT3lELE9BQU8sRUFBQztZQUFFLEdBQUV2SyxLQUFLLENBQUMwTixJQUFJLENBQUNpRyxJQUFJLENBQUN2RyxXQUFXLENBQVMsRUFDdkRoSCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0YsWUFBQSxDQUFBYSxXQUFXO2NBQ1hDLFdBQVcsRUFBRXBOLEtBQUssQ0FBQzBOLElBQUksQ0FBQ2lHLElBQUksQ0FBQ3ZHLFdBQVc7Y0FDeENyRCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJ0SSxJQUFJLEVBQUMsVUFBVTtjQUNmVixLQUFLLEVBQUVvQixNQUFNLENBQUNKLFFBQVE7Y0FBQSxHQUNsQmtJLFFBQVE7Y0FDWjZDLE9BQU8sRUFBRUE7WUFBTyxFQUNmLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQTFHLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBcUksTUFBQSxHQUFBckksT0FBQTtVQUNBLElBQUFzSSxHQUFBLEdBQUF0SSxPQUFBO1VBQ0EsSUFBQXVLLFFBQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBNmEsU0FBQSxHQUFBN2EsT0FBQTtVQUNBLElBQUFzSyxNQUFBLEdBQUF0SyxPQUFBO1VBQ0EsSUFBQThhLGFBQUEsR0FBQTlhLE9BQUE7VUFDQSxJQUFBK2EsYUFBQSxHQUFBL2EsT0FBQTtVQUNBLElBQUF3SyxhQUFBLEdBQUF4SyxPQUFBO1VBQ0EsSUFBQWdiLE9BQUEsR0FBQWhiLE9BQUE7VUFDQSxJQUFBaWIsT0FBQSxHQUFBamIsT0FBQTtVQUNBLElBQUFrYixlQUFBLEdBQUFsYixPQUFBO1VBR00sU0FBVWlZLGlCQUFpQkEsQ0FBQztZQUNqQzVYLEtBQUs7WUFDTDhELE1BQU07WUFDTjFELElBQUk7WUFDSmlPLFNBQVM7WUFDVGxHO1VBQU8sQ0FPUDtZQUNBO1lBQ0EsTUFBTTtjQUFFeEcsS0FBSztjQUFFRTtZQUFZLENBQUUsR0FBRzdCLEtBQUs7WUFDckMsTUFBTSxDQUFDaUosUUFBUSxDQUFDLEdBQUdsQixNQUFBLENBQUFTLE9BQUssQ0FBQ1csUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN4QyxNQUFNLENBQUM0UCxLQUFLLEVBQUVQLFFBQVEsQ0FBQyxHQUFHelEsTUFBQSxDQUFBUyxPQUFLLENBQUNXLFFBQVEsQ0FBUyxFQUFFLENBQUM7WUFDcEQsTUFBTSxDQUFDM0csSUFBSSxFQUFFMlYsT0FBTyxDQUFDLEdBQUdwUSxNQUFBLENBQUFTLE9BQUssQ0FBQ1csUUFBUSxFQUFzQjtZQUM1RCxNQUFNLENBQUM1RCxLQUFLLEVBQUU2RCxRQUFRLENBQUMsR0FBR3JCLE1BQUEsQ0FBQVMsT0FBSyxDQUFDVyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBRXBELElBQUksQ0FBQy9JLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTTBhLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekIsSUFBSTtnQkFDSCxNQUFNO2tCQUFFM1Y7Z0JBQU0sQ0FBRSxHQUFHLE1BQU1uRixLQUFLLENBQUNpRixNQUFNLENBQUM7a0JBQUV4QyxLQUFLLEVBQUU7Z0JBQVcsQ0FBRSxDQUFDO2dCQUU3RCxJQUFJLENBQUMwQyxNQUFNLEVBQUU7a0JBQ1ppRSxRQUFRLENBQUMsU0FBUyxDQUFDO2tCQUNuQjs7Z0JBR0RqQixPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU85QyxDQUFDLEVBQUU7Z0JBQ1grRCxRQUFRLENBQUMsU0FBUyxDQUFDOztZQUVyQixDQUFDO1lBRUQsTUFBTTJSLFFBQVEsR0FBc0M7Y0FDbkRwUixPQUFPLEVBQUU4USxhQUFBLENBQUF2QyxnQkFBZ0I7Y0FDekI4QyxTQUFTLEVBQUVOLGFBQUEsQ0FBQXBCLGFBQWE7Y0FDeEJLLEVBQUUsRUFBRWlCLE9BQUEsQ0FBQTlCLGdCQUFnQjtjQUNwQm9CLE1BQU0sRUFBRVMsT0FBQSxDQUFBZCxVQUFVO2NBQ2xCbEIsUUFBUSxFQUFFNkIsU0FBQSxDQUFBakMsa0JBQWtCO2NBQzVCMEMsT0FBTyxFQUFFSixlQUFBLENBQUFLO2FBQ1Q7WUFFRCxNQUFNQyxXQUFXLEdBQVcsQ0FBQyxDQUFDdFosWUFBWSxJQUFJLENBQUNXLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQ0EsSUFBSSxHQUFHLFdBQVcsR0FBR0EsSUFBSTtZQUM1RixNQUFNNFksT0FBTyxHQUFHTCxRQUFRLENBQUNJLFdBQVcsQ0FBQztZQUNyQyxNQUFNRSxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4QjdDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FDWkwsT0FBTyxDQUFDeFQsU0FBUyxDQUFDO2NBQ2xCd0QsT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUVELE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNULE1BQUEsQ0FBQTRGLEtBQUs7Y0FBQzdFLFNBQVMsRUFBQyxxQkFBcUI7Y0FBQzNJLElBQUk7Y0FBQytILE9BQU8sRUFBRWtULFdBQVc7Y0FBRUMsYUFBYSxFQUFFO1lBQUssR0FDckZ2VCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsTUFBQSxDQUFBRCxhQUFhO2NBQUN6RSxLQUFLLEVBQUVBLEtBQUs7Y0FBRTVELEtBQUssRUFBRUEsS0FBSyxDQUFDMFcsTUFBTSxDQUFDOU87WUFBTSxFQUFJLEVBQzNEeEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lCLFFBQUEsQ0FBQW9PLGNBQWMsQ0FBQzFELFFBQVE7Y0FDdkJsUyxLQUFLLEVBQUU7Z0JBQ05GLElBQUk7Z0JBQ0piLEtBQUssRUFBRTNCLEtBQUssQ0FBQzJCLEtBQUs7Z0JBQ2xCbUMsTUFBTTtnQkFDTjlELEtBQUs7Z0JBQ0xxTyxTQUFTO2dCQUNUbEcsT0FBTyxFQUFFQSxDQUFBLEtBQUs7a0JBQ2JxUSxRQUFRLENBQUMsRUFBRSxDQUFDO2tCQUNaTCxPQUFPLENBQUN4VCxTQUFTLENBQUM7a0JBQ2xCd0QsT0FBTyxFQUFFO2dCQUNWLENBQUM7Z0JBRURnUSxPQUFPO2dCQUNQWSxLQUFLO2dCQUNMUDs7WUFDQSxHQUVEelEsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBCLGFBQUEsQ0FBQW9SLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sR0FDM0J6VCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlMsT0FBTztjQUFDTixNQUFNLEVBQUVBLE1BQU07Y0FBRTdPLEdBQUcsRUFBQztZQUFTLEVBQUcsQ0FDeEIsRUFDbEJsRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixHQUFBLENBQUF5TCxnQkFBZ0I7Y0FBQ3pILEdBQUcsRUFBQyxXQUFXO2NBQUNoRCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUMvQixDQUNuQjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hHQSxJQUFBbEIsTUFBQSxHQUFBcEksT0FBQTtVQUNBLElBQUFzSSxHQUFBLEdBQUF0SSxPQUFBO1VBQ0EsSUFBQXVLLFFBQUEsR0FBQXZLLE9BQUE7VUFHTSxTQUFVdWIsdUJBQXVCQSxDQUFBO1lBQ3RDLE1BQU07Y0FBRWxiLEtBQUs7Y0FBRW1JLE9BQU87Y0FBRWdRO1lBQU8sQ0FBRSxHQUFHLElBQUFqTyxRQUFBLENBQUFrTyxpQkFBaUIsR0FBRTtZQUN2RCxNQUFNelcsS0FBSyxHQUFHO2NBQUUsR0FBRzNCLEtBQUssQ0FBQzBCO1lBQVcsQ0FBRTtZQUN0QyxNQUFNcUksUUFBUSxHQUFHQSxDQUFBLEtBQU1vTyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQzNDLE1BQU1zRCxTQUFTLEdBQUdBLENBQUEsS0FBTXRELE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDckN4VyxLQUFLLENBQUMrSCxPQUFPLENBQUNHLE1BQU0sR0FBRzdKLEtBQUssQ0FBQzBCLFdBQVcsQ0FBQ2dJLE9BQU8sQ0FBQ2tQLElBQUk7WUFFckQsT0FDQzdRLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUFWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBOEcsUUFBQSxRQUNDdkgsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsR0FBQSxDQUFBeVQsa0JBQWtCO2NBQ2xCMUgsU0FBUyxFQUFFaFUsS0FBSyxDQUFDd0IsS0FBSyxDQUFDMFMsWUFBWTtjQUNuQ3hTLFdBQVcsRUFBRUMsS0FBSztjQUNsQjJCLEtBQUssRUFBRXRELEtBQUssQ0FBQ3dCLEtBQUssQ0FBQzhCLEtBQUs7Y0FDeEI2RSxPQUFPLEVBQUVBLE9BQU87Y0FDaEI0QixRQUFRLEVBQUVBLFFBQVE7Y0FDbEIwUixTQUFTLEVBQUVBO1lBQVMsRUFDbkIsQ0FDQTtVQUVMIiwiaWdub3JlTGlzdCI6W119