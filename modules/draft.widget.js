System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.16/main-layout.widget", "@beyond-js/widgets@1.1.1/controller", "@aimpact/ailearn-app@0.2.16/i18n.ts", "@aimpact/ailearn-app@0.2.16/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.2.16/components/ui", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.2.16/components/icons", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.2.16/modules/management/overview.code", "@aimpact/ailearn-app@0.2.16/modules/management/activity.code"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0216MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0216MainLayoutWidget;
    }, function (_beyondJsWidgets111Controller) {
      dependency_5 = _beyondJsWidgets111Controller;
    }, function (_aimpactAilearnApp0216I18nTs) {
      dependency_6 = _aimpactAilearnApp0216I18nTs;
    }, function (_aimpactAilearnApp0216WidgetsBreadcrumbWidget) {
      dependency_7 = _aimpactAilearnApp0216WidgetsBreadcrumbWidget;
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
    }, function (_aimpactAilearnApp0216ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0216ComponentsUi;
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
    }, function (_aimpactAilearnApp0216ComponentsIcons) {
      dependency_24 = _aimpactAilearnApp0216ComponentsIcons;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_25 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_26 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0216ModulesManagementOverviewCode) {
      dependency_27 = _aimpactAilearnApp0216ModulesManagementOverviewCode;
    }, function (_aimpactAilearnApp0216ModulesManagementActivityCode) {
      dependency_28 = _aimpactAilearnApp0216ModulesManagementActivityCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.16"], ["@aimpact/ailearn-app", "0.2.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.16/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/ailearn-app/i18n.ts', dependency_6], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_7], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_8], ['@aimpact/ailearn-sdk/reactive/model', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['react', dependency_13], ['pragmate-ui/modal', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/alert', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/base', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/components/icons', dependency_24], ['pragmate-ui/icons', dependency_25], ['pragmate-ui/list', dependency_26], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_27], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.2.16/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.16/modules/draft.widget');
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
        hash: 2969067835,
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
              this.#view = 'setup';
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
                  //@ts-ignore
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