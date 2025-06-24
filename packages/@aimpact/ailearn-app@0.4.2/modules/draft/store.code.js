System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@aimpact/ailearn-app@0.4.2/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.4.2/stores/base", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp042EntitiesAssignmentsActivitiesBase) {
      dependency_1 = _aimpactAilearnApp042EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_aimpactAilearnApp042WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp042WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnApp042StoresBase) {
      dependency_5 = _aimpactAilearnApp042StoresBase;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_7 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/modules/draft/store",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./store/activity-test
      *************************************/
      ims.set('./store/activity-test', {
        hash: 4218318605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityStoreManager = void 0;
          var _beyond_context = require("beyond_context");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          //@ts-ignore

          class ActivityStoreManager extends _base.BaseStoreManager {
            isStore;
            get tabs() {
              return ['article', 'objectives', 'synthesis'];
            }
            get data() {
              const materials = this.model.getMaterials();
              const specs = this.model.getSpecs();
              return {
                image: this.model.picture,
                type: this.model.type,
                description: this.model.description,
                ...materials,
                ...specs
              };
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
          }
          exports.ActivityStoreManager = ActivityStoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2356710171,
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
          var _routing = require("@beyond-js/kernel/routing");
          var _beyond_context = require("beyond_context");
          var _activityTest = require("./activity-test");
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
            #activityStore;
            get activityStore() {
              return this.#activityStore;
            }
            #activityComponentView;
            get activityComponentView() {
              return this.#activityComponentView;
            }
            #activityData;
            get activityData() {
              return this.#activityData;
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
              const orgs = this.user.organizations.items?.length ? this.user.organizations.items : [];
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
              this.#currentAudience = undefined;
              this.#improvements = undefined;
              this.#view = 'setup';
              this.triggerEvent();
              _mainLayout.LayoutBroker.clear();
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
                this.#model = new _learningModules.Draft({
                  id,
                  type: 'draft'
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
                if (activityId && this.#model.activities.has(activityId)) {
                  this.editActivity(this.#model.activities.get(activityId));
                } else {
                  const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                  const breadcrumb = [[title]];
                  _mainLayout.LayoutBroker.set({
                    overlay: true,
                    breadcrumb,
                    backLink: `/modules/list?tab=drafts`
                  });
                }
                super.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            editActivity(activity) {
              this.#activitySelected = activity;
              this.view = activity ? 'activity' : undefined;
              //@ts-ignore
              globalThis.activity = this.#activitySelected;
              if (activity) {
                _routing.routing.pushState(`/modules/management?id=${this.model.id}&activityId=${activity.id}`);
                const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                const activityTitle = activity.title ?? this.globalTexts.activities.types[activity.type];
                const breadcrumb = [[title, () => this.editActivity(undefined)], [activityTitle]];
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  force: true,
                  backLink: event => {
                    event?.preventDefault();
                    event?.stopPropagation();
                    this.editActivity(undefined);
                  },
                  breadcrumb
                });
              } else {
                const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                _routing.routing.back();
                const breadcrumb = [[title]];
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  backLink: `/modules/list?tab=drafts`,
                  breadcrumb
                });
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
            async loadAudiences(language) {
              this.fetchingData = true;
              const response = await this.#model.loadAudience(language);
              this.#audiences = response.items;
              if (this.#currentAudience?.id) {
                this.#currentAudience = this.#audiences.find(item => item.id === this.#currentAudience?.id);
              } else {
                this.#currentAudience = undefined;
              }
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
              //hardcoded for now
              await this.model.saveDraft(specs);
              this.processing = false;
              this.#saved = true;
              _mainLayout.LayoutBroker.canConsumeCredits = true;
              const title = this.#model.title ?? this.globalTexts.entities.newDraft;
              _mainLayout.LayoutBroker.set({
                breadcrumb: [[title]]
              });
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
                // this.model.save();
                this.#model.set({
                  objective: data.objective
                });
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
              this.#activityData = undefined;
              this.#activityStore = undefined;
              const response = await this.model.provider.testActivity(this.#model.id, activityId);
              const store = new _activityTest.ActivityStoreManager();
              this.#activityStore = store;
              store.load(this.#model.id, response.activity.id, response.activity.chat.id, true).then(() => {
                this.#activityData = {
                  chatId: response.activity.chat.id,
                  activityId: response.activity.id,
                  assignmentId: this.#model.id,
                  testing: true
                };
                this.fetching = false;
                this.trigger('test.activity.changed');
              });
              return {
                response,
                store
              };
            }
            async testAssessmentActivity(activityId) {
              this.fetching = true;
              this.#activityData = undefined;
              this.#activityStore = undefined;
              const activity = this.#activitySelected;
              if (!activity) return;
              let store;
              const imports = {
                'hand-written': '@aimpact/ailearn-app/assignments/hand-written.widget',
                written: '@aimpact/ailearn-app/assignments/written.widget',
                spoken: '@aimpact/ailearn-app/assignments/spoken.widget'
              };
              if (!imports?.[activity.type]) {
                throw new Error(`Activity type ${activity.type} not found`);
              }
              const {
                StoreManager: Store,
                ActivityView
              } = await bimport(imports[activity.type]);
              store = new Store({
                testing: true
              });
              this.#activityStore = store;
              this.#activityComponentView = ActivityView;
              store.loadTest(this.#model.id, activityId).then(() => {
                this.fetching = false;
                this.trigger('test.activity.changed');
              });
              return {
                store
              };
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
        "im": "./store/index",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./store/index",
        "from": "store",
        "name": "store"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store/index').StoreManager : value);
        (require || prop === 'store') && _export("store", store = require ? require('./store/index').store : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfYWN0aXZpdHlUZXN0IiwiU3RvcmVNYW5hZ2VyIiwiRm9ybUJhc2VTdG9yZU1hbmFnZXIiLCJhbGVydCIsInVybCIsInN0b3JlIiwiaWQiLCJzYXZlZCIsImJyb2tlciIsIkxheW91dEJyb2tlciIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImFjdGl2aXR5U3RvcmUiLCJhY3Rpdml0eUNvbXBvbmVudFZpZXciLCJhY3Rpdml0eURhdGEiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJmZXRjaGluZ0RhdGEiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInZpZXciLCJzdGF0ZSIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGVuZ3RoIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsImF1ZGllbmNlcyIsImN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlTGV2ZWxzIiwibGV2ZWxzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImdsb2JhbFRoaXMiLCJyZWFjdGl2ZVByb3BzIiwic2V0Q3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VJZCIsImZpbmQiLCJoaWRlIiwicmVhZHkiLCJ1bmRlZmluZWQiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwibG9hZCIsImFjdGl2aXR5SWQiLCJEcmFmdCIsInRleHRSZWFkeSIsImxvYWRBdWRpZW5jZXMiLCJjYXRlZ29yeSIsIm9uIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImFjdGl2aXRpZXMiLCJoYXMiLCJlZGl0QWN0aXZpdHkiLCJnZXQiLCJ0aXRsZSIsImdsb2JhbFRleHRzIiwiZW50aXRpZXMiLCJuZXdEcmFmdCIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY3Rpdml0eSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJhY3Rpdml0eVRpdGxlIiwidHlwZXMiLCJmb3JjZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJiYWNrIiwidXBkYXRlIiwic3RhdHVzIiwic2F2ZURyYWZ0IiwicmVzcG9uc2UiLCJsb2FkQXVkaWVuY2UiLCJ0cmlnZ2VyIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImlycmVsZXZhbnQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJ0ZXh0cyIsInN1Z2dlc3Rpb25zIiwicG9zaXRpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiY2xlYXJBbGVydCIsImdldEFjdGl2aXR5RGV0YWlsIiwidGVzdEFjdGl2aXR5IiwiZmV0Y2hpbmciLCJwcm92aWRlciIsImNoYXQiLCJ0aGVuIiwiY2hhdElkIiwiYXNzaWdubWVudElkIiwidGVzdGluZyIsInRlc3RBc3Nlc3NtZW50QWN0aXZpdHkiLCJpbXBvcnRzIiwid3JpdHRlbiIsInNwb2tlbiIsIkVycm9yIiwiU3RvcmUiLCJBY3Rpdml0eVZpZXciLCJiaW1wb3J0IiwibG9hZFRlc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9zdG9yZS9hY3Rpdml0eS10ZXN0LnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFEQTs7VUFJTSxNQUFPRSxvQkFBcUIsU0FBUUQsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDekRDLE9BQU87WUFpQlAsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztZQUM5QztZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxNQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBRTtjQUMzQyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNHLFFBQVEsRUFBRTtjQUNuQyxPQUFPO2dCQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDSixLQUFLLENBQUNLLE9BQU87Z0JBQ3pCQyxJQUFJLEVBQUUsSUFBSSxDQUFDTixLQUFLLENBQUNNLElBQUk7Z0JBQ3JCQyxXQUFXLEVBQUUsSUFBSSxDQUFDUCxLQUFLLENBQUNPLFdB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Q0FBQ2pFLFVBQWtCO2NBQzlDLElBQUksQ0FBQzBELFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQyxDQUFBekcsWUFBYSxHQUFHMkMsU0FBUztjQUM5QixJQUFJLENBQUMsQ0FBQTdDLGFBQWMsR0FBRzZDLFNBQVM7Y0FDL0IsTUFBTTBCLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQWhELGdCQUFpQjtjQUV2QyxJQUFJLENBQUNnRCxRQUFRLEVBQUU7Y0FDZixJQUFJcEYsS0FBSztjQUVULE1BQU1nSSxPQUFPLEdBQUc7Z0JBQ2YsY0FBYyxFQUFFLHNEQUFzRDtnQkFDdEVDLE9BQU8sRUFBRSxpREFBaUQ7Z0JBQzFEQyxNQUFNLEVBQUU7ZUFDUjtjQUVELElBQUksQ0FBQ0YsT0FBTyxHQUFHNUMsUUFBUSxDQUFDcEcsSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSW1KLEtBQUssQ0FBQyxpQkFBaUIvQyxRQUFRLENBQUNwRyxJQUFJLFlBQVksQ0FBQzs7Y0FHNUQsTUFBTTtnQkFBRVksWUFBWSxFQUFFd0ksS0FBSztnQkFBRUM7Y0FBWSxDQUFFLEdBQUcsTUFBTUMsT0FBTyxDQUFDTixPQUFPLENBQUM1QyxRQUFRLENBQUNwRyxJQUFJLENBQUMsQ0FBQztjQUVuRmdCLEtBQUssR0FBRyxJQUFJb0ksS0FBSyxDQUFDO2dCQUFFTixPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7Y0FFcEMsSUFBSSxDQUFDLENBQUFqSCxhQUFjLEdBQUdiLEtBQUs7Y0FDM0IsSUFBSSxDQUFDLENBQUFjLHFCQUFzQixHQUFHdUgsWUFBWTtjQUUxQ3JJLEtBQUssQ0FBQ3VJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTdKLEtBQU0sQ0FBQ3VCLEVBQUUsRUFBRTZELFVBQVUsQ0FBQyxDQUFDNkQsSUFBSSxDQUFDLE1BQUs7Z0JBQ3BELElBQUksQ0FBQ0gsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztjQUN0QyxDQUFDLENBQUM7Y0FFRixPQUFPO2dCQUFFbkc7Y0FBSyxDQUFFO1lBQ2pCOztVQUNBWCxPQUFBLENBQUFPLFlBQUEsR0FBQUEsWUFBQTtVQUVNO1VBQVcsTUFBTUksS0FBSyxHQUFBWCxPQUFBLENBQUFXLEtBQUEsR0FBRyxJQUFJSixZQUFZLEVBQUU7Ozs7Ozs7Ozs7O1VDaGRsRDs7VUFFQTRJLE1BQUEsQ0FBQUMsY0FBQSxDQUFBcEosT0FBQTtZQUNBK0IsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119