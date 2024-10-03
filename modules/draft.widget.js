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
        hash: 3402261188,
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
              try {
                this.#currentProcess = 'generatingDraft';
                await this.model.getModuleSuggestion({
                  ...specs
                });
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
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
        hash: 3361661147,
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
                  ...values,
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
        hash: 473287978,
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
                totalActivities: data?.totalActivities || null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9sZWFybmluZ01vZHVsZXMiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsInVybCIsIm1vZGVsIiwiaWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwic2F2ZWQiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJ2aWV3Iiwic3RhdGUiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImVkaXRBY3Rpdml0eSIsImFjdGl2aXR5IiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwiZGF0YSIsImFjdGl2aXRpZXMiLCJoYXMiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJsb2ciLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiZmluZCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInR5cGUiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpb24iLCJjb2lucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJDb2luc01vZGFsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJhY3Rpb25zIiwiY29uZmlybSIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIl9hbGVydCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFsZXJ0IiwiQWxlcnRSZW5kZXJlciIsInRpbWUiLCJyZW1vdmUiLCJzZXRSZW1vdmUiLCJ0aW1lciIsInNldFRpbWVyIiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9jb21wb25lbnRzIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJvdXRwdXQiLCJpbmRleCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJfaW1hZ2UiLCJfdHJpbSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInNldHVwIiwibWVzc2FnZXMiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0VmFsdWVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkZyYWdtZW50IiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJUb3VyU3RlcCIsImFzIiwiU3VwcG9ydGluZ1RleHQiLCJ2YXJpYW50Q2xhc3NNYXAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJyZXN0IiwidmFyaWFudENsYXNzIiwiY29tYmluZWRDbGFzc05hbWUiLCJ0cmltIiwiX2ljb25zIiwicGhvdG9VcmwiLCJBcHBJY29uIiwiaWNvbiIsIkltYWdlIiwic3JjIiwiUmVhY3QiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9sYW5ndWFnZSIsIl9zdWdnZXN0aW9ucyIsIl9hY3Rpb24iLCJfaG9va3MiLCJEcmFmdEZvcm0iLCJ0b2dnbGVQYXRod2F5IiwidG9nZ2xlQ29uZmlybWF0aW9uIiwicmVmIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwidXNlQmluZGVyIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsImNsc0NvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsIm9uQ29uc3VtZSIsInJlc3BvbnNlIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiQUlCdXR0b24iLCJlbnN1cmUiLCJhbmFseXNlIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiaXJyZWxldmFudCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJfb3ZlcnZpZXciLCJfYWN0aXZpdHkiLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInNob3dQYXRod2F5Iiwic2V0U2hvd1BhdGh3YXkiLCJzaG93Q29uZmlybWF0aW9uIiwic2V0U2hvd0NvbmZpcm1hdGlvbiIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwib25HZW5lcmF0ZSIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZmxvYXRpbmciLCJnZW5lcmF0ZSIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjaGVja2VkIiwiYWkiLCJtYW51YWxseSIsIk1hbnVhbEZvcm0iLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsIm1hbnVhbCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIm9uU2F2ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9zdXBwb3J0aW5nLXRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFB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