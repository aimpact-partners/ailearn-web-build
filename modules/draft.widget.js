System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-app@0.3.1/stores/base", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/modules/management/activity.code", "@aimpact/ailearn-app@0.3.1/modules/management/overview.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, ConfirmationModal, SupportingText, OwnerImage, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031WidgetsBreadcrumbWidget) {
      dependency_5 = _aimpactAilearnApp031WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactAilearnApp031StoresBase) {
      dependency_7 = _aimpactAilearnApp031StoresBase;
    }, function (_aimpactChatSdk141Session) {
      dependency_8 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_11 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_16 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_17 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Form) {
      dependency_18 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Base) {
      dependency_19 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Image) {
      dependency_20 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_22 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_23 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp031ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp031ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp031ModulesManagementOverviewCode) {
      dependency_25 = _aimpactAilearnApp031ModulesManagementOverviewCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@aimpact/ailearn-app/stores/base', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['react', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['framer-motion', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/base', dependency_19], ['pragmate-ui/image', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/list', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/draft.widget');
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
        hash: 2297575019,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.store = exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          //@ts-ignore

          //@ts-ignore

          //@ts-ignore

          class StoreManager extends _base.FormBaseStoreManager {
            isStore = true;
            #alert;
            get url() {
              return `/modules/management?id=${store.model.id}`;
            }
            get alert() {
              return this.#alert;
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
            get broker() {
              return _mainLayout.LayoutBroker;
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
            #fetchingData = false;
            get fetchingData() {
              return this.#fetchingData;
            }
            set fetchingData(value) {
              this.#fetchingData = value;
              this.triggerEvent('fetching.data');
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
            #audiences = [];
            get audiences() {
              return this.#audiences;
            }
            #currentAudience;
            get currentAudience() {
              return this.#currentAudience;
            }
            get audienceLevels() {
              return this.#currentAudience?.levels ?? [];
            }
            #objectivesGenerated = new Map();
            constructor() {
              super({
                specifier: _beyond_context.module.specifier
              });
              globalThis.store = this;
              this.reactiveProps(['fetchingSuggestions']);
            }
            setCurrentAudience(audienceId) {
              this.#currentAudience = this.#audiences.find(item => item.id === audienceId);
              this.triggerEvent('audience.changed');
            }
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
              //@ts-ignore
              globalThis.activity = this.#activitySelected;
              if (activity) {
                _routing.routing.pushState(`/modules/management?id=${this.model.id}&activityId=${activity.id}`);
                this.broker.breadcrumb.getItem('management').link = () => this.editActivity(undefined);
                this.broker.breadcrumb.addItem('activity', {
                  label: this.texts.activities.types[activity.type]
                });
              } else {
                _routing.routing.back();
                this.broker.breadcrumb.getItem('management').link = undefined;
                this.broker.breadcrumb.removeItem('activity');
              }
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
                await this.textReady;
                if (id) {
                  await this.#model.load();
                }
                if (activityId && this.#model.activities.has(activityId)) {
                  this.editActivity(this.#model.activities.get(activityId));
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
            async loadAudiences(language) {
              this.fetchingData = true;
              const response = await this.#model.loadAudience(language);
              this.#audiences = response.items;
              this.#currentAudience = undefined;
              this.fetchingData = false;
              this.trigger('audiences.loaded');
              return response;
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
        hash: 209451526,
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
        hash: 3545406610,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
          function AudienceField({
            disabled
          }) {
            const {
              texts: {
                audience: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values
            } = (0, _context.useModuleContext)();
            const [options, setOptions] = _react.default.useState([]);
            (0, _hooks.useBinder)([store], () => {
              const items = store.audiences.map(audience => ({
                value: audience.id,
                label: audience.name
              }));
              setOptions([...items]);
            }, 'fetching.data');
            const onChange = async event => {
              store.setCurrentAudience(event.target.value);
              setValues(values => {
                return {
                  ...values,
                  audience: {
                    category: event.target.value
                  }
                };
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.label), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.select,
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
        hash: 928304762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageFields = LanguageFields;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          var _audience = require("./audience");
          var _level = require("./level");
          function LanguageFields({
            disabled
          }) {
            const {
              texts,
              store,
              setValues
            } = (0, _context.useModuleContext)();
            const onChange = async event => {
              setValues(values => ({
                ...values,
                audience: {},
                language: event.target.value
              }));
              store.loadAudiences(event.target.value);
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const isDisabled = {
              isDisabled: store.saved || disabled
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.languages.select.placeholder,
              value: store.model.language,
              name: "audience",
              options: options,
              onChange: onChange,
              ...isDisabled
            })), _react.default.createElement(_audience.AudienceField, {
              disabled: disabled
            }), _react.default.createElement(_level.AudienceLevelField, {
              disabled: disabled
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/fields/level
      *****************************************/

      ims.set('./views/form/fields/level', {
        hash: 4096297732,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceLevelField = AudienceLevelField;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
          function AudienceLevelField({
            disabled
          }) {
            const {
              texts: {
                level: texts
              },
              values,
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues
            } = (0, _context.useModuleContext)();
            const [options, setOptions] = _react.default.useState([]);
            (0, _hooks.useBinder)([store], () => {
              const items = store.audienceLevels.map(item => ({
                value: item.id,
                label: item.label
              }));
              setOptions(items);
            }, 'audience.changed');
            const onChange = event => {
              const audience = {
                category: values.audience.category,
                level: event.target.value
              };
              setValues(values => {
                return {
                  ...values,
                  audience
                };
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length || !values.audience?.category
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.label), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "level",
              placeholder: texts.select,
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
        hash: 736038050,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
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
        hash: 3618672557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftForm = DraftForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _alert = require("../components/alert");
          var _context = require("../context");
          var _animatedDiv = require("./animated-div");
          var _language = require("./fields/language");
          var _objective = require("./fields/objective");
          var _ownership = require("./fields/ownership");
          var _suggestions = require("./suggestions");
          var _action = require("./suggestions/action");
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
            (0, _hooks.useBinder)([store], () => setProcessing(store.fetchingSuggestions || store.fetching), ['fetchingSuggestions.changed', 'fetching.data']);
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
            }, React.createElement(_language.LanguageFields, {
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
        hash: 1741516377,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          var _overview = require("@aimpact/ailearn-app/modules/management/overview.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("./context");
          var _form = require("./form");
          var _confirmationModal = require("./form/confirmation-modal");
          var _pathway = require("./pathway");
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
        hash: 139855539,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfYnJlYWRjcnVtYiIsIl9sZWFybmluZ01vZHVsZXMiLCJfYmFzZSIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImlzU3RvcmUiLCJhbGVydCIsInVybCIsIm1vZGVsIiwiaWQiLCJzYXZlZCIsImJyb2tlciIsIkxheW91dEJyb2tlciIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJtb2R1bGUiLCJnbG9iYWxUaGlzIiwicmVhY3RpdmVQcm9wcyIsInNldEN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlSWQiLCJmaW5kIiwidW5kZWZpbmVkIiwicmVhZHkiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwiZWRpdEFjdGl2aXR5IiwiYWN0aXZpdHkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZ2V0SXRlbSIsImxpbmsiLCJhZGRJdGVtIiwidGV4dHMiLCJhY3Rpdml0aWVzIiwidHlwZXMiLCJ0eXBlIiwiYmFjayIsInJlbW92ZUl0ZW0iLCJ1cGRhdGUiLCJzcGVjcyIsInN0YXR1cyIsInNhdmVEcmFmdCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY3Rpdml0eUlkIiwiRHJhZnQiLCJ0ZXh0UmVhZHkiLCJoYXMiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJsb2FkQXVkaWVuY2VzIiwicmVzcG9uc2UiLCJsb2FkQXVkaWVuY2UiLCJ0cmlnZ2VyIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwic3VnZ2VzdGlvbnMiLCJwb3NpdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImdldEFkbWluaXN0cmF0b3IiLCJvcmciLCJjbGVhckFsZXJ0IiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3JlYWN0IiwiX21vZGFsIiwiX3VpIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwidmFyaWFudCIsIkZpeGVkQWxlcnQiLCJ0aW1lIiwidXNlTW9kdWxlQ29udGV4dCIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfY29tcG9uZW50cyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwiZmV0Y2hpbmciLCJvdXRwdXQiLCJpbmRleCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJfaW1hZ2UiLCJfdHJpbSIsIkNvbmZpcm1hdGlvbk1vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsYXN0SXRlbSIsInJlcGxhY2VTdGF0ZSIsInNldHVwIiwibWVzc2FnZXMiLCJnbG9iYWxUZXh0cyIsImNvbmZpcm1hdGlvbiIsImFjdGlvblRleHRzIiwiYWN0aW9ucyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJfaG9va3MiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwic2V0VmFsdWVzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VCaW5kZXIiLCJldmVudCIsInRhcmdldCIsImNhdGVnb3J5IiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsImxhbmd1YWdlcyIsIkZyYWdtZW50IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwibGV2ZWwiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIlRleHRhcmVhIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiX3N1cHBvcnRpbmdUZXh0IiwiT3duZXJzaGlwRmllbGQiLCJ3VGV4dHMiLCJvYmplY3RpdmVUb3VyIiwidG91ciIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwiZ2V0Q3JlZGl0cyIsIm1vZHVsZXMiLCJjb3VudCIsImFsZXJ0cyIsImF2YWlsYWJsZSIsInVuYXZhaWxhYmxlIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInNldFByb2Nlc3NpbmciLCJpbnZhbGlkRm9ybSIsIm9uQ29maXJtZWQiLCJ1cGRhdGVkIiwib25TdWJtaXQiLCJjbHNDb250YWluZXIiLCJQYWdlQ29udGFpbmVyIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsIkZvcm0iLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwidGV4dEFjdGlvbnMiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiY2xvc2VNb2RhbCIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiQUlCdXR0b24iLCJlbnN1cmUiLCJhbmFseXNlIiwiQ29pbnNNb2RhbCIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJvbkNhbmNlbCIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJjb25maXJtIiwiX2FjdGl2aXR5IiwiX292ZXJ2aWV3IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJzZXRGZXRjaGluZyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInNldEVycm9yIiwic2hvd1BhdGh3YXkiLCJzZXRTaG93UGF0aHdheSIsInNob3dDb25maXJtYXRpb24iLCJzZXRTaG93Q29uZmlybWF0aW9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvdmVydmlldyIsIk1vZHVsZU92ZXJ2aWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiUGF0aHdheUdlbmVyYXRpb24iLCJhbmltYXRpb25zIiwic2xpZGVEb3duIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfYW5pbWF0aW9ucyIsIkNvbmZpcm1hdGlvbkZvcm0iLCJzZXRWaWV3IiwidXNlUGF0aHdheUNvbnRleHQiLCJyZWZpbmUiLCJQYXRod2F5Q29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwib25CYWNrIiwiSXRlbSIsImV4YW1wbGVzIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsIm9uR2VuZXJhdGUiLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImZsb2F0aW5nIiwiZ2VuZXJhdGUiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY2hlY2tlZCIsImFpIiwibWFudWFsbHkiLCJNYW51YWxGb3JtIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJtYW51YWwiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX21hbnVhbCIsIl9haUZvcm0iLCJfcmVxdWVzdENyZWRpdHMiLCJvblNhdmUiLCJjb250cm9scyIsInNlbGVjdGlvbiIsInJlcXVlc3QiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZpZXdEZWZpbmVkIiwiQ29udHJvbCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsImVycm9ycyIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy90cmltLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9GaXhlZEFsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xldmVsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2ltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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