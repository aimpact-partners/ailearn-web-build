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
        hash: 624133063,
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
            async loadAudiences() {
              this.fetchingData = true;
              const response = await this.#model.loadAudience();
              this.#audiences = response.items;
              this.fetchingData = false;
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
        hash: 3866635155,
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
              setOptions(items);
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
        hash: 887602468,
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
                language: event.target.value
              }));
              store.loadAudiences();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfYnJlYWRjcnVtYiIsIl9sZWFybmluZ01vZHVsZXMiLCJfYmFzZSIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImlzU3RvcmUiLCJhbGVydCIsInVybCIsIm1vZGVsIiwiaWQiLCJzYXZlZCIsImJyb2tlciIsIkxheW91dEJyb2tlciIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJtb2R1bGUiLCJnbG9iYWxUaGlzIiwicmVhY3RpdmVQcm9wcyIsInNldEN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlSWQiLCJmaW5kIiwidW5kZWZpbmVkIiwicmVhZHkiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwiZWRpdEFjdGl2aXR5IiwiYWN0aXZpdHkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZ2V0SXRlbSIsImxpbmsiLCJhZGRJdGVtIiwidGV4dHMiLCJhY3Rpdml0aWVzIiwidHlwZXMiLCJ0eXBlIiwiYmFjayIsInJlbW92ZUl0ZW0iLCJ1cGRhdGUiLCJzcGVjcyIsInN0YXR1cyIsInNhdmVEcmFmdCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY3Rpdml0eUlkIiwiRHJhZnQiLCJ0ZXh0UmVhZHkiLCJoYXMiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJsb2FkQXVkaWVuY2VzIiwicmVzcG9uc2UiLCJsb2FkQXVkaWVuY2UiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwic3VnZ2VzdGlvbnMiLCJwb3NpdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImdldEFkbWluaXN0cmF0b3IiLCJvcmciLCJjbGVhckFsZXJ0IiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3JlYWN0IiwiX21vZGFsIiwiX3VpIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwidmFyaWFudCIsIkZpeGVkQWxlcnQiLCJ0aW1lIiwidXNlTW9kdWxlQ29udGV4dCIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfY29tcG9uZW50cyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwiZmV0Y2hpbmciLCJvdXRwdXQiLCJpbmRleCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJfaW1hZ2UiLCJfdHJpbSIsIkNvbmZpcm1hdGlvbk1vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsYXN0SXRlbSIsInJlcGxhY2VTdGF0ZSIsInNldHVwIiwibWVzc2FnZXMiLCJnbG9iYWxUZXh0cyIsImNvbmZpcm1hdGlvbiIsImFjdGlvblRleHRzIiwiYWN0aW9ucyIsImVudGl0eSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJfaG9va3MiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwic2V0VmFsdWVzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VCaW5kZXIiLCJldmVudCIsInRhcmdldCIsImNhdGVnb3J5IiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsImxhbmd1YWdlcyIsIkZyYWdtZW50IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwibGV2ZWwiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIlRleHRhcmVhIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiX3N1cHBvcnRpbmdUZXh0IiwiT3duZXJzaGlwRmllbGQiLCJ3VGV4dHMiLCJvYmplY3RpdmVUb3VyIiwidG91ciIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwiZ2V0Q3JlZGl0cyIsIm1vZHVsZXMiLCJjb3VudCIsImFsZXJ0cyIsImF2YWlsYWJsZSIsInVuYXZhaWxhYmxlIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInNldFByb2Nlc3NpbmciLCJpbnZhbGlkRm9ybSIsIm9uQ29maXJtZWQiLCJ1cGRhdGVkIiwib25TdWJtaXQiLCJjbHNDb250YWluZXIiLCJQYWdlQ29udGFpbmVyIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsIkZvcm0iLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwidGV4dEFjdGlvbnMiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiY2xvc2VNb2RhbCIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiQUlCdXR0b24iLCJlbnN1cmUiLCJhbmFseXNlIiwiQ29pbnNNb2RhbCIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJvbkNhbmNlbCIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJjb25maXJtIiwiX2FjdGl2aXR5IiwiX292ZXJ2aWV3IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJzZXRGZXRjaGluZyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInNldEVycm9yIiwic2hvd1BhdGh3YXkiLCJzZXRTaG93UGF0aHdheSIsInNob3dDb25maXJtYXRpb24iLCJzZXRTaG93Q29uZmlybWF0aW9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvdmVydmlldyIsIk1vZHVsZU92ZXJ2aWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiUGF0aHdheUdlbmVyYXRpb24iLCJhbmltYXRpb25zIiwic2xpZGVEb3duIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfYW5pbWF0aW9ucyIsIkNvbmZpcm1hdGlvbkZvcm0iLCJzZXRWaWV3IiwidXNlUGF0aHdheUNvbnRleHQiLCJyZWZpbmUiLCJQYXRod2F5Q29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwib25CYWNrIiwiSXRlbSIsImV4YW1wbGVzIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsIm9uR2VuZXJhdGUiLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImZsb2F0aW5nIiwiZ2VuZXJhdGUiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY2hlY2tlZCIsImFpIiwibWFudWFsbHkiLCJNYW51YWxGb3JtIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJtYW51YWwiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX21hbnVhbCIsIl9haUZvcm0iLCJfcmVxdWVzdENyZWRpdHMiLCJvblNhdmUiLCJjb250cm9scyIsInNlbGVjdGlvbiIsInJlcXVlc3QiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZpZXdEZWZpbmVkIiwiQ29udHJvbCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsImVycm9ycyIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy90cmltLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9GaXhlZEFsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xldmVsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2ltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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