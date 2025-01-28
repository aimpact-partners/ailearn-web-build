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
        hash: 4279854600,
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
                _routing.routing.pushState(`/modules/management?id=${this.model.id}&activityId=${activity.id}`);
                _mainLayout.LayoutBroker.title = activity.title;
                _mainLayout.LayoutBroker.backLink = () => this.editActivity(undefined);
                // this.broker.breadcrumb.getItem('management').link = () => this.editActivity(undefined);
                // this.broker.breadcrumb.addItem('activity', {
                // 	label: this.texts.activities.types[activity.type]
                // });
              } else {
                _mainLayout.LayoutBroker.title = this.model.title;
                _routing.routing.back();
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
                this.#model.on('change', this.triggerEvent);
                this.#saved = !!id;
                _mainLayout.LayoutBroker.addModel(this.#model, true);
                _mainLayout.LayoutBroker.canConsumeCredits = this.#saved;
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.setTitle(this.model.title);
                if (activityId && this.#model.activities.has(activityId)) {
                  this.editActivity(this.#model.activities.get(activityId));
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfYnJlYWRjcnVtYiIsIl9sZWFybmluZ01vZHVsZXMiLCJfYmFzZSIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJtb2RlbCIsImlkIiwic2F2ZWQiLCJicm9rZXIiLCJMYXlvdXRCcm9rZXIiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJmZXRjaGluZ0RhdGEiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInZpZXciLCJzdGF0ZSIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsImF1ZGllbmNlcyIsImN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlTGV2ZWxzIiwibGV2ZWxzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwibW9kdWxlIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJyZWFkeSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJlZGl0QWN0aXZpdHkiLCJhY3Rpdml0eSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ0aXRsZSIsImJhY2tMaW5rIiwiYmFjayIsInVwZGF0ZSIsInNwZWNzIiwic3RhdHVzIiwic2F2ZURyYWZ0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxvYWQiLCJhY3Rpdml0eUlkIiwiRHJhZnQiLCJ0ZXh0UmVhZHkiLCJsb2FkQXVkaWVuY2VzIiwiY2F0ZWdvcnkiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJvdmVybGF5Iiwic2V0VGl0bGUiLCJhY3Rpdml0aWVzIiwiaGFzIiwiZ2V0IiwicmVzcG9uc2UiLCJsb2FkQXVkaWVuY2UiLCJ0cmlnZ2VyIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwidGV4dHMiLCJzdWdnZXN0aW9ucyIsInR5cGUiLCJwb3NpdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImdldEFkbWluaXN0cmF0b3IiLCJvcmciLCJjbGVhckFsZXJ0IiwiZ2V0QWN0aXZpdHlEZXRhaWwiLCJ0ZXN0QWN0aXZpdHkiLCJmZXRjaGluZyIsInByb3ZpZGVyIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL3N0b3JlLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUVBLElB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