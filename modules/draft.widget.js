System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-app@0.2.10/i18n.ts", "@aimpact/ailearn-app@0.2.10/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.2.10/modules/management/overview.code", "@aimpact/ailearn-app@0.2.10/modules/management/activity.code"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_beyondJsWidgets110Controller) {
      dependency_5 = _beyondJsWidgets110Controller;
    }, function (_aimpactAilearnApp0210I18nTs) {
      dependency_6 = _aimpactAilearnApp0210I18nTs;
    }, function (_aimpactAilearnApp0210WidgetsBreadcrumbWidget) {
      dependency_7 = _aimpactAilearnApp0210WidgetsBreadcrumbWidget;
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
    }, function (_pragmateUi100Beta7Modal) {
      dependency_14 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_16 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_19 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_20 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Form) {
      dependency_21 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Base) {
      dependency_22 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Image) {
      dependency_23 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_24 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_25 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_26 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0210ModulesManagementOverviewCode) {
      dependency_27 = _aimpactAilearnApp0210ModulesManagementOverviewCode;
    }, function (_aimpactAilearnApp0210ModulesManagementActivityCode) {
      dependency_28 = _aimpactAilearnApp0210ModulesManagementActivityCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/ailearn-app/i18n.ts', dependency_6], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_7], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_8], ['@aimpact/ailearn-sdk/reactive/model', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['react', dependency_13], ['pragmate-ui/modal', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/base', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/components/icons', dependency_24], ['pragmate-ui/icons', dependency_25], ['pragmate-ui/list', dependency_26], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_27], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/modules/draft.widget');
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
        hash: 1925681594,
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
                if (data.irrelevant) {
                  this.setAlert({
                    message: this.texts.suggestions.irrelevant,
                    type: 'warning',
                    position: 'objective'
                  });
                }
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
        hash: 767318504,
        creator: function (require, exports) {
          // import React from 'react';
          // import { ConfirmModal, Modal } from 'pragmate-ui/modal';
          // import { Battery, ErrorRenderer } from '@aimpact/ailearn-app/components/ui';
          // export function CoinsModal({ store, show, onClose, texts }) {
          // 	if (!show) return null;
          // 	const [fetching, setFetching] = React.useState(false);
          // 	const [error, setError] = React.useState();
          // 	texts = texts.coins.modal;
          // 	const onConfirm = async () => {
          // 		try {
          // 			setFetching(true);
          // 			await store.model.getCredits();
          // 			onClose();
          // 		} catch (e) {
          // 			setError(texts.errors.noCredits);
          // 		} finally {
          // 			setFetching(false);
          // 		}
          // 	};
          // 	return (
          // 		<ConfirmModal
          // 			show
          // 			className="modal-sm"
          // 			actions={{
          // 				confirm: { label: texts.actions.confirm, variant: 'primary' },
          // 				cancel: { label: texts.actions.cancel, variant: 'primary', bordered: true }
          // 			}}
          // 			onConfirm={onConfirm}
          // 			onCancel={onClose}
          // 			onClose={onClose}
          // 		>
          // 			<header>
          // 				<h3>{texts.title}</h3>
          // 				<ErrorRenderer error={error} />
          // 				<Battery percent="100" className="lg" />
          // 				<p>{texts.description}</p>
          // 			</header>
          // 		</ConfirmModal>
          // 	);
          // }
          "use strict";
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/FixedAlert
      *********************************************/

      ims.set('./views/components/FixedAlert', {
        hash: 1518437182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          exports.FixedAlert = FixedAlert;
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
          function FixedAlert({
            type = 'success',
            message,
            className,
            time = 3000,
            show = true
          }) {
            className = `alert-message alert-message--${type}${className ? ` ${className}` : ``}`;
            const {
              store
            } = (0, _context.useModuleContext)();
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
        hash: 2193772047,
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
            }, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, texts.ownerDescription, " "))), _react.default.createElement("div", {
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
        hash: 388578212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _alert = require("../../components/alert");
          var _context = require("../../context");
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
              type: store?.alert?.type,
              className: "alert-message alert-message--success alert-fixed",
              message: store?.alert?.message
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
        hash: 202180928,
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
              if (store.model.state && store.model.state === values.state && store.model.objective === values.objective) return;
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
        hash: 3949382729,
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
            if (store.improvements && !store.improvements.irrelevant) return null;
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
        hash: 399583266,
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
        hash: 1000263975,
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
              store.model.set({
                [event.currentTarget.name]: event.currentTarget.value
              });
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
                setup: React.createElement(_form.DraftForm, null),
                overview: React.createElement(_overview.ModuleOverview, {
                  store: store,
                  uri: uri,
                  fetching: fetching
                }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2kxOG4iLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsInVybCIsIm1vZGVsIiwiaWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwic2F2ZWQiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJ2aWV3Iiwic3RhdGUiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImVkaXRBY3Rpdml0eSIsImFjdGl2aXR5IiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwiZGF0YSIsImFjdGl2aXRpZXMiLCJoYXMiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwic3VnZ2VzdGlvbnMiLCJ0eXBlIiwicG9zaXRpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiZmluZCIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpb24iLCJjb2lucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJfYWxlcnQiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInRpbWUiLCJ1c2VNb2R1bGVDb250ZXh0IiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJBbGVydFJlbmRlcmVyIiwicmVtb3ZlIiwic2V0UmVtb3ZlIiwidXNlU3RhdGUiLCJ0aW1lciIsInNldFRpbWVyIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIl9jb21wb25lbnRzIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJmZXRjaGluZyIsIm91dHB1dCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl90cmltIiwiX3JvdXRpbmciLCJDb25maXJtYXRpb25Nb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibGFzdEl0ZW0iLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwic2V0dXAiLCJtZXNzYWdlcyIsImNvbmZpcm1hdGlvbiIsImFjdGlvblRleHRzIiwiYWN0aW9ucyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZXRWYWx1ZXMiLCJzZWxlY3QiLCJldmVudCIsInRhcmdldCIsIm9wdGlvbnMiLCJrZXlzIiwiYXJnZW50aW5lIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiTGFuZ3VhZ2VGaWVsZCIsImxhbmd1YWdlcyIsIl9mb3JtIiwiT2JqZWN0aXZlRmllbGQiLCJmb3JtVGV4dHMiLCJmb3JtIiwiRnJhZ21lbnQiLCJUZXh0YXJlYSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwic2V0U2VsZWN0ZWQiLCJzdXBwb3J0aW5nVGV4dCIsInNldFN1cHBvcnRpbmdUZXh0IiwiY29udGVudCIsImRlZmF1bHRPcHRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYXR0cnMiLCJnZXRDcmVkaXRzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJUb3VyU3RlcCIsImFzIiwiU3VwcG9ydGluZ1RleHQiLCJ2YXJpYW50Q2xhc3NNYXAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJyZXN0IiwidmFyaWFudENsYXNzIiwiY29tYmluZWRDbGFzc05hbWUiLCJ0cmltIiwiX2ljb25zIiwicGhvdG9VcmwiLCJBcHBJY29uIiwiaWNvbiIsIkltYWdlIiwic3JjIiwiUmVhY3QiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9sYW5ndWFnZSIsIl9zdWdnZXN0aW9ucyIsIl9hY3Rpb24iLCJfaG9va3MiLCJEcmFmdEZvcm0iLCJ0b2dnbGVQYXRod2F5IiwidG9nZ2xlQ29uZmlybWF0aW9uIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwidXNlQmluZGVyIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsImNsc0NvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJEcml2ZXJUb3VyQ29udGFpbmVyIiwiRm9ybSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJ0ZXh0QWN0aW9ucyIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiYW5hbHlzZSIsIkNvaW5zTW9kYWwiLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiY29uZmlybSIsIl9vdmVydmlldyIsIl9hY3Rpdml0eSIsIl9jb25maXJtYXRpb25Nb2RhbCIsIl9wYXRod2F5Iiwic2V0RmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImFjdGl2ZVBhbmVsIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzZXRFcnJvciIsInNob3dQYXRod2F5Iiwic2V0U2hvd1BhdGh3YXkiLCJzaG93Q29uZmlybWF0aW9uIiwic2V0U2hvd0NvbmZpcm1hdGlvbiIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwib25HZW5lcmF0ZSIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZmxvYXRpbmciLCJnZW5lcmF0ZSIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjaGVja2VkIiwiYWkiLCJtYW51YWxseSIsIk1hbnVhbEZvcm0iLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsIm1hbnVhbCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIm9uU2F2ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiZXJyb3JzIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL0ZpeGVkQWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL21hbnVhbC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQUksS0FBSztjQUNuQixPQUFPLElBQUksQ0FB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