System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, DraftContainer, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    DraftContainer: void 0,
    Header: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_5 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Modal) {
      dependency_8 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Alert) {
      dependency_10 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_13 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_15 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011Form) {
      dependency_16 = _pragmateUi011Form;
    }, function (_pragmateUi011Icons) {
      dependency_17 = _pragmateUi011Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_19 = _pragmateUi011List;
    }, function (_pragmateUi011Chips) {
      dependency_20 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_21 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_22 = _aimpactAilearnApp0032Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/components', dependency_11], ['framer-motion', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/form/react-select', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/chips', dependency_20], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_21], ['@aimpact/ailearn-app/config', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management-ceate",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1626414526,
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
              this.#store = new _store.StoreManager();
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
        hash: 4178577295,
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
            return _react.default.createElement("div", null, _react.default.createElement("app-modules-management", {
              id: store.model.id,
              activityId: uri.qs.get('activityId')
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 87391802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
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
            #currentProcess;
            get currentProcess() {
              return this.#currentProcess;
            }
            get ownerships() {
              return [..._session.sessionWrapper.user.organizations.map(item => {
                return {
                  value: item.id,
                  label: item.name
                };
              })];
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
            #objectivesGenerated = new Map();
            constructor() {
              super();
              this.reactiveProps(['fetchingDraft']);
              globalThis.store = this;
            }
            hide() {
              this.#model = undefined;
              this.ready = false;
            }
            clearImprovements() {
              this.#improvements = undefined;
              this.triggerEvent('change');
            }
            async load(id, activityId) {
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
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            listener() {
              // console.log('cambio');
            }
            async save(specs) {
              this.fetching = true;
              await this.model.saveDraft(specs);
              this.fetching = false;
              this.triggerEvent();
              this.#saved = true;
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
                this.fetching = false;
                const data = await this.model.getObjectiveImprovements({
                  objective
                });
                this.#improvements = data;
                this.triggerEvent('change');
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetching = false;
              }
            }
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.#currentProcess = 'changingObjective';
                this.fetching = true;
                if (this.#objectivesGenerated.has(improvements)) return this.#objectivesGenerated.get(improvements);
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
                this.fetching = false;
              }
            }
            async generateModuleSuggestion(specs) {
              try {
                this.#currentProcess = 'generatingDraft';
                this.fetchingDraft = true;
                return await this.model.getModuleSuggestion(specs);
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetchingDraft = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
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

      /****************************************
      INTERNAL MODULE: ./views/components/error
      ****************************************/

      ims.set('./views/components/error', {
        hash: 3301282445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/footer
      *****************************************/

      ims.set('./views/components/footer', {
        hash: 836744112,
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
              className: "wizard-input",
              variant: "primary",
              bordered: true,
              onClick: () => setCurrent(current - 1)
            }, texts.actions.back), _react.default.createElement(_components.Button, {
              className: "wizard-input",
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
        hash: 2927306293,
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
        hash: 2099872162,
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
              className: "wizard__container",
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
        hash: 2273412363,
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
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _ = require("./");
          /*bundle*/
          function DraftContainer({
            store,
            uri
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
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
              setFetching(store?.model?.fetching);
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

      /*****************************************
      INTERNAL MODULE: ./views/form/fields/grade
      *****************************************/

      ims.set('./views/form/fields/grade', {
        hash: 1086093448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GradeField = GradeField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function GradeField() {
            const {
              texts,
              store,
              texts: {
                wizard: wTexts
              }
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values
            } = (0, _context.useModuleContext)();
            let selected = {
              value: '',
              label: wTexts.grades.select
            };
            const onChange = event => setValues(values => {
              return {
                ...values,
                audience: event.target.value
              };
            });
            const options = Object.keys(texts.grades).map(year => {
              selected = year === values.audience ? {
                value: year,
                label: texts.grades[year]
              } : selected;
              return {
                value: year,
                label: texts.grades[year]
              };
            });
            const disabled = {
              isDisabled: store.saved
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, wTexts.grades.label), _react.default.createElement(_reactSelect.ReactSelect, {
              defaultValue: selected,
              name: "audience",
              options: options,
              onChange: onChange,
              ...disabled
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/form/fields/language
      ********************************************/

      ims.set('./views/form/fields/language', {
        hash: 1201429201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageField = LanguageField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function LanguageField() {
            const {
              texts,
              store,
              texts: {
                wizard: wTexts
              },
              setValues
            } = (0, _context.useModuleContext)();
            const selected = {
              value: '',
              label: texts.languages.select.placeholder
            };
            const onChange = event => setValues(values => ({
              ...values,
              language: event.target.value
            }));
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const disabled = {
              isDisabled: store.saved
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              defaultValue: selected,
              value: store.model.language,
              name: "audience",
              options: options,
              onChange: onChange,
              ...disabled
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/form/fields/module-length
      *************************************************/

      ims.set('./views/form/fields/module-length', {
        hash: 317351525,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DurationField = DurationField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function DurationField() {
            const {
              store,
              texts,
              values,
              setValues
            } = (0, _context.useModuleContext)();
            const disabled = {
              isDisabled: store.saved
            };
            const options = [{
              value: 15,
              label: texts.duration.brief,
              totalActivities: 3
            }, {
              value: 45,
              label: texts.duration.standard,
              totalActivities: 5
            }, {
              value: 60,
              label: texts.duration.extended,
              totalActivities: 7
            }];
            const onChange = event => {
              const data = options.find(item => item.value === event.target.value);
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
            }, texts.wizard.duration.label), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.wizard.duration.placeholder,
              onChange: onChange,
              name: "duration",
              value: values.duration,
              ...disabled,
              options: options
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/objective
      *********************************************/

      ims.set('./views/form/fields/objective', {
        hash: 1366466996,
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
          var _icons = require("pragmate-ui/icons");
          function ObjectiveField({
            submitted
          }) {
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
            return _react.default.createElement("div", {
              className: "objective-field"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.objective,
              name: "objective",
              placeholder: texts.textArea,
              counter: true,
              maxLength: 500
            }), submitted && _react.default.createElement(_framerMotion.motion.div, {
              className: "success-text",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            }, messages.save, " ", _react.default.createElement(_icons.Icon, {
              icon: "check"
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/ownership
      *********************************************/

      ims.set('./views/form/fields/ownership', {
        hash: 2174441261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function OwnershipField() {
            const {
              texts: {
                wizard: wTexts
              },
              store: {
                ownerships
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values
            } = (0, _context.useModuleContext)();
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
              isDisabled: store.ownerships.length === 0 || store.saved
            };
            const onChange = event => {
              const owner = store.user.organizations.find(item => item.id === event.target.value);
              setValues(values => {
                return {
                  ...values,
                  owner
                };
              });
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, wTexts.schools.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: value,
              defaultOption: defaultOption,
              name: "owner",
              options: store.ownerships,
              onChange: onChange,
              ...attrs
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 362922468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftForm = DraftForm;
          var _react = require("react");
          var _animatedDiv = require("./animated-div");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _grade = require("./fields/grade");
          var _moduleLength = require("./fields/module-length");
          var _ownership = require("./fields/ownership");
          var _objective = require("./fields/objective");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _suggestions = require("./suggestions");
          var _error = require("../components/error");
          var _modalActivities = require("../modal-activities");
          var _language = require("./fields/language");
          function DraftForm() {
            const {
              values,
              error,
              setValues,
              store,
              texts,
              saved,
              fetching
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [submitted, setSubmitted] = _react.default.useState(false);
            const onClose = () => setShow(false);
            const isDisabled = !values.owner || !values.audience || !values.duration || !values.objective || !values.language;
            const label = store.model.state && saved ? texts.actions.continue : texts.actions.save;
            const processMessages = texts.hasOwnProperty(store.currentProcess) ? texts[store.currentProcess] : texts.objectiveSuggestions;
            const onSave = async () => {
              const finalValue = {
                ...values,
                state: 'confirmed'
              };
              setValues({
                ...finalValue
              });
              await store.save({
                ...finalValue
              });
            };
            const onSubmit = async () => {
              try {
                if (saved && store.model.state === 'created') {
                  setShow(true);
                  return;
                }
                await store.save({
                  ...values,
                  state: 'created'
                });
                _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
                setSubmitted(true);
              } catch (e) {
                console.error(e);
              }
            };
            return _react.default.createElement("form", {
              className: "form-wizard-container"
            }, _react.default.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts
            }), _react.default.createElement(_animatedDiv.AnimatedDiv, null, _react.default.createElement("section", {
              className: "form-body"
            }, _react.default.createElement("header", {
              className: "wizard-form-header"
            }, _react.default.createElement("h1", null, texts.wizard.introduction.title), _react.default.createElement("span", null, texts.wizard.introduction.subtitle)), _react.default.createElement("section", {
              className: "wizard-first-step-container"
            }, _react.default.createElement(_language.LanguageField, null), _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_grade.GradeField, null), _react.default.createElement(_moduleLength.DurationField, null)), _react.default.createElement("div", {
              className: "form-wizard__objective-section"
            }, _react.default.createElement(_objective.ObjectiveField, {
              submitted: submitted
            }))), _react.default.createElement(_suggestions.ObjectiveSuggestions, null), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              className: "wizard-input",
              type: "submit",
              block: true,
              disabled: isDisabled,
              variant: "primary",
              onClick: onSubmit
            }, label))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: processMessages
            })), _react.default.createElement(_modalActivities.ModalActivitiesGeneration, {
              show: show,
              onClose: onClose,
              onSave: onSave
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/suggestions/action
      ***********************************************/

      ims.set('./views/form/suggestions/action', {
        hash: 1975578637,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
          var _alert = require("pragmate-ui/alert");
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
            const generateImprovements = async () => {
              try {
                await store.getObjectiveImprovements({
                  objective: values.objective
                });
              } catch (e) {
                console.error(e);
              }
            };
            const onClick = () => ensureCredits(generateImprovements);
            return _react.default.createElement(_react.default.Fragment, null, store?.improvements?.irrelevant && _react.default.createElement(_alert.Alert, {
              className: "mb-30",
              type: "warning"
            }, texts.suggestions.irrelevant), _react.default.createElement("div", {
              className: "flex-container flex-center flex-05"
            }, _react.default.createElement(_ui.AIButton, {
              disabled: !saved,
              onClick: onClick,
              variant: "primary",
              bordered: true
            }, textActions.analyse)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/form/suggestions/index
      **********************************************/

      ims.set('./views/form/suggestions/index', {
        hash: 3766540706,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _context = require("../../context");
          var _objective = require("./objective");
          var _action = require("./action");
          var _list = require("./list");
          function ObjectiveSuggestions() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [improvedObjective, setImprovedObjective] = _react.default.useState(false);
            // if there are no improvements, show the action to generate suggestions
            if (!store.improvements || store.improvements.irrelevant) return _react.default.createElement(_action.SuggestionsAction, null);
            const contextValue = {
              improvedObjective,
              setImprovedObjective
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
        hash: 2482970037,
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
              setValues(values => ({
                ...values,
                objective: store.model.objective
              }));
            };
            const onCancel = () => {
              setSelected(new Set());
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
              className: "flex-container flex-space-between flex-05 flex-vertical-center"
            }, _react.default.createElement("div", null, _react.default.createElement("span", null, texts.total, ": ", selected.size)), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              ...disabled,
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
        hash: 4075705557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestionsItem = ObjectiveSuggestionsItem;
          var _react = require("react");
          var _context = require("../../../context");
          function ObjectiveSuggestionsItem({
            index,
            item,
            specs: {
              block,
              selected,
              setSelected
            }
          }) {
            const {
              values,
              setValues,
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
              'data-index': index,
              onClick: undefined
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
        hash: 3128993891,
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
              irrelevant,
              improved
            } = improvements;
            if (!improvements || improvedObjective) return null;
            const onClick = async event => {
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
            };
            return _react.default.createElement("div", {
              className: "objective-suggestion"
            }, _react.default.createElement("h3", null, improved), _react.default.createElement("div", {
              className: "flex-container  flex-vertical-center  flex-space-between mt-30"
            }, _react.default.createElement("span", {
              className: "primary-text"
            }, texts.label), _react.default.createElement("div", {
              className: "actions flex-container flex-space-between flex-05"
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

      /*********************************************
      INTERNAL MODULE: ./views/header/animated-label
      *********************************************/

      ims.set('./views/header/animated-label', {
        hash: 2096490113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedLabel = AnimatedLabel;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedLabel({
            children
          }) {
            const [show, setShow] = _react.default.useState(!!children);
            _react.default.useEffect(() => {
              setShow(children);
              globalThis.setTimeout(() => {
                setShow(false);
              }, 2000);
            }, [children]);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_framerMotion.motion.span, {
              layout: true,
              initial: {
                opacity: 0,
                width: '0'
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                },
                width: 'auto'
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/header/animated
      ***************************************/

      ims.set('./views/header/animated', {
        hash: 796986304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Animated = Animated;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function Animated({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/header/credits
      **************************************/

      ims.set('./views/header/credits', {
        hash: 3872875640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsContainer = CreditsContainer;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _chips = require("pragmate-ui/chips");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _animatedLabel = require("./animated-label");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function CreditsContainer() {
            const {
              store,
              toggleCoinsModal,
              texts: {
                coins: {
                  header: texts
                }
              }
            } = (0, _context.useDraftManagementContext)();
            const [message, setMessage] = _react.default.useState('');
            const [hasCredits, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container${!store.saved ? ' is-disabled' : ''}`;
            const Control = store.hasCredits ? _chips.Chip : _components.Button;
            const attrs = {
              className: 'credits-action',
              onClick: undefined,
              variant: store.hasCredits ? 'success' : 'primary',
              disabled: !store.saved
            };
            (0, _hooks.useBinder)([store.model], type => {
              ref.current.classList.add('success--container');
              setMessage(texts.messages[type]);
              setHasCredits(store.hasCredits);
            }, 'credits.change');
            if (!hasCredits) {
              attrs.onClick = toggleCoinsModal;
            } else {
              attrs.className = 'success--chip';
            }
            if (!store.saved) return null;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), _react.default.createElement(_ui.Battery, {
              percent: 100
            }), _react.default.createElement(Control, {
              ...attrs
            }, texts.actions.require));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 2537169126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("../context");
          var _config = require("@aimpact/ailearn-app/config");
          var _credits = require("./credits");
          var _notificationsBar = require("./notifications-bar");
          /*bundle*/
          function Header() {
            const {
              store,
              texts
            } = (0, _context.useDraftManagementContext)();
            const showBar = store.saved && !store.hasCredits;
            return _react.default.createElement("section", null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
            }, _react.default.createElement(_credits.CreditsContainer, null)), showBar && _react.default.createElement(_notificationsBar.NotificationsBar, null, texts.notifications.credits));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/header/notifications-bar
      ************************************************/

      ims.set('./views/header/notifications-bar', {
        hash: 2599925302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotificationsBar = NotificationsBar;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _animated = require("./animated");
          var _framerMotion = require("framer-motion");
          function NotificationsBar({
            children
          }) {
            const {
              store,
              texts
            } = (0, _context.useDraftManagementContext)();
            const [close, setClose] = _react.default.useState(false);
            const [show, setShow] = _react.default.useState(true);
            const toggleModal = () => setClose(!close);
            const onClose = () => {
              setShow(false);
            };
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_animated.Animated, {
              as: "div",
              className: "notifications-bar center-items notifications--info"
            }, _react.default.createElement(_components.HtmlWrapper, null, children), _react.default.createElement(_icons.Icon, {
              className: "close-icon",
              icon: "close",
              onClick: onClose
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4247952926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _container = require("./form/container");
          var _management = require("../management");
          var _header = require("./header");
          var _context = require("./context");
          var _alert = require("./coins/alert");
          var _coinsModal = require("./coins/coins-modal");
          /*bundle*/
          function View(props) {
            const {
              store
            } = props;
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [, setFetching] = React.useState(store.fetching);
            const [, setUpdated] = React.useState({});
            const [showCoinsModal, setShowCoinsModal] = React.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = React.useState(false);
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            const ensureCredits = (callback, props) => {
              if (!store.hasCredits) {
                toggleCoinsAlert();
                return;
              }
              return callback(props);
            };
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              setFetching(store?.model?.fetching);
            });
            if (!textsReady || !store.ready) return null; // TODO: add preload screen (or not
            const Control = store.model.state === 'confirmed' ? _management.ActivitiesManagement : _container.DraftContainer;
            const value = {
              texts,
              ensureCredits,
              store,
              toggleCoinsModal
            };
            return React.createElement(React.Fragment, null, React.createElement(_context.DraftManagementContext.Provider, {
              value: value
            }, React.createElement("main", null, React.createElement(_header.Header, null), React.createElement(Control, {
              store: store,
              uri: props.uri
            }))), React.createElement(_alert.CoinsAlert, {
              texts: texts,
              show: showCoinsAlert,
              onClose: toggleCoinsAlert
            }), React.createElement(_coinsModal.CoinsModal, {
              store: store,
              texts: texts,
              show: showCoinsModal,
              onClose: toggleCoinsModal
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/modal-activities
      ****************************************/

      ims.set('./views/modal-activities', {
        hash: 616474441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivitiesGeneration = ModalActivitiesGeneration;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          function ModalActivitiesGeneration({
            show,
            onClose,
            onSave
          }) {
            const {
              texts,
              store,
              values,
              ensureCredits
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            if (!show) return null;
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.generateModuleSuggestion({
                  ...values
                });
                onSave();
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const onClick = () => ensureCredits(onGenerate);
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", {
              className: "modal__header"
            }, _react.default.createElement("h3", null, texts.wizard.modalSuggestions.title), _react.default.createElement("div", {
              className: "mt-30"
            }, _react.default.createElement("span", null, texts.wizard.modalSuggestions.description)), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onSave
            }, texts.wizard.modalSuggestions.buttons.manual), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: onClick
            }, texts.wizard.modalSuggestions.buttons.generate))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.wizard.generatingModule
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/form/container",
        "from": "DraftContainer",
        "name": "DraftContainer"
      }, {
        "im": "./views/header/index",
        "from": "Header",
        "name": "Header"
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
        (require || prop === 'DraftContainer') && _export("DraftContainer", DraftContainer = require ? require('./views/form/container').DraftContainer : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header/index').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwibW9kZWwiLCJhY3Rpdml0eUlkIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImNsZWFySW1wcm92ZW1lbnRzIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInRyaWdnZXIiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsIl9tb2RhbCIsIl91aSIsIkNvaW5zQWxlcnQiLCJvbkNsb3NlIiwidGV4dHMiLCJjb2lucyIsImFsZXJ0IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJCYXR0ZXJ5IiwicGVyY2VudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiQ29pbnNNb2RhbCIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2FsZXJ0IiwiQWxlcnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInN1Ym1pdFRleHQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYmFjayIsInNpemluZyIsIkh0bWxSZW5kZXIiLCJjaGlsZHJlbiIsInRhZyIsIkNvbnRyb2wiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJSZWFjdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfIiwiRHJhZnRDb250YWluZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldFVwZGF0ZWQiLCJzZXRWYWx1ZXMiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImVuc3VyZUNyZWRpdHMiLCJ1c2VCaW5kZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImxlbmd0aCIsIkRyYWZ0Rm9ybSIsIl9yZWFjdFNlbGVjdCIsIkdyYWRlRmllbGQiLCJ3aXphcmQiLCJ3VGV4dHMiLCJncmFkZXMiLCJzZWxlY3QiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJMYW5ndWFnZUZpZWxkIiwicGxhY2Vob2xkZXIiLCJEdXJhdGlvbkZpZWxkIiwiZmluZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwicGFyc2VJbnQiLCJfZm9ybSIsIl9pY29ucyIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJpY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsInN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsInN1Z2dlc3Rpb25zIiwiQUlCdXR0b24iLCJhbmFseXNlIiwiX2FjdGlvbiIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzZXRTZWxlY3RlZCIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJBbmltYXRlZExhYmVsIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIkFuaW1hdGVQcmVzZW5jZSIsInNwYW4iLCJsYXlvdXQiLCJ3aWR0aCIsIkFuaW1hdGVkIiwiYXMiLCJDb21wb25lbnQiLCJfY2hpcHMiLCJfYW5pbWF0ZWRMYWJlbCIsIkNyZWRpdHNDb250YWluZXIiLCJ0b2dnbGVDb2luc01vZGFsIiwiaGVhZGVyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwicmVmIiwidXNlUmVmIiwiQ2hpcCIsImNsYXNzTGlzdCIsIl9uYXZiYXJIZWFkZXIiLCJfY29uZmlnIiwiX2NyZWRpdHMiLCJfbm90aWZpY2F0aW9uc0JhciIsIkhlYWRlciIsInNob3dCYXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIk5vdGlmaWNhdGlvbnNCYXIiLCJub3RpZmljYXRpb25zIiwiX2FuaW1hdGVkIiwiY2xvc2UiLCJzZXRDbG9zZSIsInRvZ2dsZU1vZGFsIiwiSHRtbFdyYXBwZXIiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiLCJfaGVhZGVyIiwiX2NvaW5zTW9kYWwiLCJwcm9wcyIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0IiwidG9nZ2xlQ29pbnNBbGVydCIsImNhbGxiYWNrIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImJ1dHRvbnMiLCJtYW51YWwiLCJnZW5lcmF0ZSIsImdlbmVyYXRpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvZ3JhZGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NyZWRpdHMudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL25vdGlmaWNhdGlvbnMtYmFyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlB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