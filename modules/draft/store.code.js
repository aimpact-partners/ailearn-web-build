System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-app@0.3.1/stores/base", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp031WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactAilearnApp031StoresBase) {
      dependency_5 = _aimpactAilearnApp031StoresBase;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/draft/store",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/draft/store.code');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./store
      ***********************/
      ims.set('./store', {
        hash: 1773723182,
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
          /*bundle*/ //@ts-ignore

          //@ts-ignore

          class StoreManager extends _base.FormBaseStoreManager {
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
              //@ts-ignore
              this.#model = null;
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
              this.view = activity ? 'activity' : undefined;
              //@ts-ignore
              globalThis.activity = this.#activitySelected;
              if (activity) {
                _mainLayout.LayoutBroker.overlay = true;
                _routing.routing.pushState(`/modules/management?id=${this.model.id}&activityId=${activity.id}`);
                _mainLayout.LayoutBroker.backLink = () => this.editActivity(undefined);
                // this.broker.breadcrumb.getItem('management').link = () => this.editActivity(undefined);
                // this.broker.breadcrumb.addItem('activity', {
                // 	label: this.texts.activities.types[activity.type]
                // });
              } else {
                _mainLayout.LayoutBroker.overlay = false;
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
                if (this.#model.language && this.#model.state === 'created') {
                  await this.loadAudiences(this.#model.language);
                  this.#currentAudience = this.#audiences.find(item => item.id === this.#model.audience.category);
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
            getActivityDetail(activity) {
              if (!activity) return;
              if (activity.title) return activity.title;
              return activity.objective;
            }
            async testActivity(activityId) {
              this.fetching = true;
              const response = await this.model.provider.testActivity(this.#model.id, activityId);
              this.fetching = false;
              return response;
            }
          }
          exports.StoreManager = StoreManager;
          /*bundle*/
          const store = exports.store = new StoreManager();
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
      __pkg.exports.descriptor = [{
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./store",
        "from": "store",
        "name": "store"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'store') && _export("store", store = require ? require('./store').store : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfYnJlYWRjcnVtYiIsIl9sZWFybmluZ01vZHVsZXMiLCJfYmFzZSIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJtb2RlbCIsImlkIiwic2F2ZWQiLCJicm9rZXIiLCJMYXlvdXRCcm9rZXIiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJmZXRjaGluZ0RhdGEiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInZpZXciLCJzdGF0ZSIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsImF1ZGllbmNlcyIsImN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlTGV2ZWxzIiwibGV2ZWxzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwibW9kdWxlIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJyZWFkeSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJlZGl0QWN0aXZpdHkiLCJhY3Rpdml0eSIsIm92ZXJsYXkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiYmFja0xpbmsiLCJiYWNrIiwiZ2V0SXRlbSIsImxpbmsiLCJyZW1vdmVJdGVtIiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwibG9hZCIsImFjdGl2aXR5SWQiLCJEcmFmdCIsInRleHRSZWFkeSIsImxvYWRBdWRpZW5jZXMiLCJjYXRlZ29yeSIsImFjdGl2aXRpZXMiLCJoYXMiLCJnZXQiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJyZXNwb25zZSIsImxvYWRBdWRpZW5jZSIsInRyaWdnZXIiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwiZGF0YSIsImlycmVsZXZhbnQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJ0ZXh0cyIsInN1Z2dlc3Rpb25zIiwidHlwZSIsInBvc2l0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJzZXQiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImNsZWFyQWxlcnQiLCJnZXRBY3Rpdml0eURldGFpbCIsInRpdGxlIiwidGVzdEFjdGl2aXR5IiwiZmV0Y2hpbmciLCJwcm92aWRlciIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFB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