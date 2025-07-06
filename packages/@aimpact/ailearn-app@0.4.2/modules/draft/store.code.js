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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.3"]]);
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
        hash: 1764350068,
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
              const activity = this.#activitySelected;
              if (!activity) return;
              const response = await this.model.provider.testActivity(this.#model.id, activityId);
              const imports = {
                'content-theory': '@aimpact/ailearn-app/assignments/content-theory.widget',
                'free-conversation': '@aimpact/ailearn-app/assignments/free-conversation.widget',
                debate: '@aimpact/ailearn-app/assignments/debate.widget',
                'character-talk': '@aimpact/ailearn-app/assignments/character-talk.widget',
                exercise: '@aimpact/ailearn-app/assignments/exercise.widget'
              };
              if (!imports?.[activity.type]) {
                throw new Error(`Activity type ${activity.type} not found`);
              }
              const {
                StoreManager: Store,
                ActivityView
              } = await bimport(imports[activity.type]);
              const store = new Store();
              this.#activityStore = store;
              store.load(this.#model.id, response.activity.id, response.activity.chat.id, true).then(r => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsImFjdGl2aXR5RGF0YSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJyZWFkeSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwidGV4dFJlYWR5IiwibG9hZEF1ZGllbmNlcyIsImNhdGVnb3J5Iiwib24iLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiYWN0aXZpdGllcyIsImhhcyIsImVkaXRBY3Rpdml0eSIsImdldCIsInRpdGxlIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsIm5ld0RyYWZ0Iiwic2V0Iiwib3ZlcmxheSIsImJhY2tMaW5rIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjdGl2aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImFjdGl2aXR5VGl0bGUiLCJ0eXBlcyIsImZvcmNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImJhY2siLCJ1cGRhdGUiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJyZXNwb25zZSIsImxvYWRBdWRpZW5jZSIsInRyaWdnZXIiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwiaXJyZWxldmFudCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInRleHRzIiwic3VnZ2VzdGlvbnMiLCJwb3NpdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImdldEFkbWluaXN0cmF0b3IiLCJvcmciLCJjbGVhckFsZXJ0IiwiZ2V0QWN0aXZpdHlEZXRhaWwiLCJ0ZXN0QWN0aXZpdHkiLCJmZXRjaGluZyIsInByb3ZpZGVyIiwiaW1wb3J0cyIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiRXJyb3IiLCJTdG9yZSIsIkFjdGl2aXR5VmlldyIsImJpbXBvcnQiLCJjaGF0IiwidGhlbiIsInIiLCJjaGF0SWQiLCJhc3NpZ25tZW50SWQiLCJ0ZXN0aW5nIiwidGVzdEFzc2Vzc21lbnRBY3Rpdml0eSIsIndyaXR0ZW4iLCJzcG9rZW4iLCJsb2FkVGVzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL3N0b3JlL2FjdGl2aXR5LXRlc3QudHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLGVBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQURBOztVQUlNLE1BQU9FLG9CQUFxQixTQUFRRCxLQUFBLENBQUFFLGdCQUFnQjtZQUN6REMsT0FBTztZQWlCUCxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO1lBQzlDO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE1BQU1DLFNBQVMsR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxFQUFFO2NBQzNDLE1BQU1DLEtBQUssR0FBRyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBUSxFQUFFO2NBQ25DLE9BQU87Z0JBQ05DLEtBQUssRUFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssT0FBTztnQkFDekJDLElBQUksRUFBRSxJQUFJLENBQUNOLEtBQUssQ0FBQ00sSUFBSTtnQkFDckJDLFdBQVcsRUFBRSxJQUFJLENBQUNQLEtBQUssQ0FBQ08sV0FBVztnQkFDbkMsR0FBR1IsU0FBUztnQkFDWixHQUFHRztlQUNIO1lBQ0Y7WUFDQU0sWUFBQTtjQUNDLEtBQUssQ0FBQ2pCLGVBQUEsQ0FBQWtCLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3hCOztVQUNBQyxPQUFBLENBQUFqQixvQkFBQSxHQUFBQSxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0QsSUFBQWtCLFdBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsV0FBQSxHQUFBckIsT0FBQTtVQUVBLElBQUFzQixnQkFBQSxHQUFBdEIsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF1QixRQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLFFBQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBRCxlQUFBLEdBQUFDLE9BQUE7VUFlTyxXQXJCUDs7VUFFQTs7VUFtQmlCLE1BQU95QixZQUFhLFNBQVF4QixLQUFBLENBQUF5QixvQkFBb0I7WUFPaEUsQ0FBQUMsS0FBTTtZQUVOLElBQUlDLEdBQUdBLENBQUE7Y0FDTixPQUFPLDBCQUEwQkMsS0FBSyxDQUFDckIsS0FBSyxDQUFDc0IsRUFBRSxFQUFFO1lBQ2xEO1lBQ0EsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQTs7O1lBR0EsQ0FBQUksS0FBTSxHQUFHLEtBQUs7WUFDZCxJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUF2QixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJd0IsTUFBTUEsQ0FBQTtjQUNULE9BQU9aLFdBQUEsQ0FBQWEsWUFBWTtZQUNwQjtZQUNBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBM0IsS0FBTSxDQUFDNEIsT0FBTyxFQUFFQyxLQUFLLEdBQUcsQ0FBQztZQUN0QztZQUNBLENBQUFDLG9CQUFxQixHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNqQyxJQUFJRCxvQkFBb0JBLENBQUE7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsb0JBQXFCO1lBQ2xDO1lBRUEsSUFBSUUsSUFBSUEsQ0FBQTtjQUNQLE9BQU9qQixRQUFBLENBQUFrQixjQUFjLENBQUNELElBQUk7WUFDM0I7WUFFQSxDQUFBRSxhQUFjO1lBQ2QsSUFBSUEsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBQ0EsQ0FBQUMscUJBQXNCO1lBQ3RCLElBQUlBLHFCQUFxQkEsQ0FBQTtjQUN4QixPQUFPLElBQUksQ0FBQyxDQUFBQSxxQkFBc0I7WUFDbkM7WUFDQSxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBT3hCLFdBQUEsQ0FBQXlCLGVBQWUsQ0FBQ0QsVUFBVTtZQUNsQztZQUNBLENBQUFFLGNBQWU7WUFDZixJQUFJQSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxDQUFBQyxZQUFhLEdBQVksS0FBSztZQUM5QixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLElBQUlBLFlBQVlBLENBQUNDLEtBQWM7Y0FDOUIsSUFBSSxDQUFDLENBQUFELFlBQWEsR0FBR0MsS0FBSztjQUMxQixJQUFJLENBQUNDLFlBQVksQ0FBQyxlQUFlLENBQUM7WUFDbkM7WUFDQSxDQUFBQyxJQUFLLEdBQXVCLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLElBQUlBLElBQUlBLENBQUE7Y0FDUCxJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLEtBQUssVUFBVSxFQUFFLE9BQU8sVUFBVTtjQUNoRCxPQUFPLElBQUksQ0FBQyxDQUFBM0MsS0FBTSxFQUFFNEMsS0FBSyxLQUFLLFdBQVcsR0FBRyxVQUFVLEdBQUcsT0FBTztZQUNqRTtZQUNBLElBQUlELElBQUlBLENBQUNGLEtBQXlCO2NBQ2pDLElBQUksSUFBSSxDQUFDLENBQUFFLElBQUssS0FBS0YsS0FBSyxFQUFFO2NBQzFCLElBQUksQ0FBQyxDQUFBRSxJQUFLLEdBQUdGLEtBQUs7Y0FDbEIsSUFBSSxDQUFDQyxZQUFZLEVBQUU7WUFDcEI7WUFDQSxJQUFJRyxVQUFVQSxDQUFBO2NBQ2IsTUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQ2QsSUFBSSxDQUFDZSxhQUFhLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFHLElBQUksQ0FBQ2pCLElBQUksQ0FBQ2UsYUFBYSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtjQUV2RixPQUFPLENBQ047Z0JBQUVQLEtBQUssRUFBRSxJQUFJLENBQUNULElBQUksQ0FBQ1YsRUFBRTtnQkFBRTRCLEtBQUssRUFBRSxJQUFJLENBQUNsQixJQUFJLENBQUNtQjtjQUFXLENBQUUsRUFDckQsR0FBR0wsSUFBSSxDQUFDTSxHQUFHLENBQUVDLElBQVMsS0FBTTtnQkFBRVosS0FBSyxFQUFFWSxJQUFJLENBQUMvQixFQUFFO2dCQUFFNEIsS0FBSyxFQUFFRyxJQUFJLENBQUNDO2NBQUksQ0FBRSxDQUFDLENBQUMsQ0FDbEU7WUFDRjtZQUVBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxJQUFJLElBQUksQ0FBQ3ZELEtBQUssQ0FBQ3dELEtBQUssRUFBRTtnQkFDckIsT0FBTztrQkFBRWYsS0FBSyxFQUFFLElBQUksQ0FBQ3pDLEtBQUssQ0FBQ3dELEtBQUssQ0FBQ2xDLEVBQUU7a0JBQUU0QixLQUFLLEVBQUUsSUFBSSxDQUFDbEQsS0FBSyxDQUFDd0QsS0FBSyxDQUFDRjtnQkFBSSxDQUFFOztZQUVyRTtZQUVBLENBQUFHLGdCQUFpQjtZQUNqQixJQUFJQSxnQkFBZ0JBLENBQUE7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCO1lBQzlCO1lBQ0EsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPO2dCQUNOQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLFNBQVMsRUFBRSxFQUFFO2dCQUNiQyxlQUFlLEVBQUUsQ0FBQztnQkFDbEJDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQS9ELEtBQU0sQ0FBQytEO2VBQ3RCO1lBQ0Y7WUFFQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQXpDLEtBQU0sR0FBRyxJQUFJLENBQUN2QixLQUFLLEVBQUVpRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUNQLGFBQWE7WUFDdEU7WUFFQSxDQUFBUSxTQUFVLEdBQWdCLEVBQUU7WUFDNUIsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxDQUFBQyxlQUFnQjtZQUNoQixJQUFJQSxlQUFlQSxDQUFBO2NBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGVBQWdCO1lBQzdCO1lBQ0EsSUFBSUMsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBRCxlQUFnQixFQUFFRSxNQUFNLElBQUksRUFBRTtZQUMzQztZQUVBLENBQUFDLG1CQUFvQixHQUFHLElBQUlDLEdBQUcsRUFBa0I7WUFFaEQvRCxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUNMRSxTQUFTLEVBQUVuQixlQUFBLENBQUFrQixNQUFNLENBQUNDO2VBQ2xCLENBQUM7Y0FFRDhELFVBQWtCLENBQUNuRCxLQUFLLEdBQUcsSUFBVztjQUN2QyxJQUFJLENBQUNvRCxhQUFhLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzVDO1lBRUFDLGtCQUFrQkEsQ0FBQ0MsVUFBa0I7Y0FDcEMsSUFBSSxDQUFDLENBQUFSLGVBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUFELFNBQVUsQ0FBQ1UsSUFBSSxDQUFDdkIsSUFBSSxJQUFJQSxJQUFJLENBQUMvQixFQUFFLEtBQUtxRCxVQUFVLENBQUM7Y0FDNUUsSUFBSSxDQUFDakMsWUFBWSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RDO1lBRUFtQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxJQUFJLENBQUMsQ0FBQTdFLEtBQU0sR0FBRyxJQUFJO2NBQ2xCLEtBQUssQ0FBQzhFLEtBQUssR0FBRyxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBWCxlQUFnQixHQUFHWSxTQUFTO2NBQ2pDLElBQUksQ0FBQyxDQUFBckQsWUFBYSxHQUFHcUQsU0FBUztjQUM5QixJQUFJLENBQUMsQ0FBQXBDLElBQUssR0FBRyxPQUFPO2NBQ3BCLElBQUksQ0FBQ0QsWUFBWSxFQUFFO2NBQ25COUIsV0FBQSxDQUFBYSxZQUFZLENBQUN1RCxLQUFLLEVBQUU7WUFDckI7WUFFQUMsaUJBQWlCQSxDQUFBO2NBQ2hCLElBQUksQ0FBQyxDQUFBdkQsWUFBYSxHQUFHcUQsU0FBUztjQUM5QixJQUFJLENBQUNyQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRUEsTUFBTXdDLElBQUlBLENBQUM1RCxFQUFXLEVBQUU2RCxVQUFtQjtjQUMxQyxJQUFJO2dCQUNILElBQUk3RCxFQUFFLElBQUksSUFBSSxDQUFDLENBQUF0QixLQUFNLEVBQUVzQixFQUFFLEtBQUtBLEVBQUUsRUFBRTtrQkFDakM7O2dCQUdELElBQUksQ0FBQyxDQUFBdEIsS0FBTSxHQUFHLElBQUljLGdCQUFBLENBQUFzRSxLQUFLLENBQUM7a0JBQUU5RCxFQUFFO2tCQUFFaEIsSUFBSSxFQUFFO2dCQUFPLENBQUUsQ0FBQztnQkFDOUMsTUFBTSxJQUFJLENBQUMrRSxTQUFTO2dCQUVwQixJQUFJL0QsRUFBRSxFQUFFO2tCQUNQLE1BQU0sSUFBSSxDQUFDLENBQUF0QixLQUFNLENBQUNrRixJQUFJLEVBQUU7O2dCQUd6QixJQUFJLElBQUksQ0FBQyxDQUFBbEYsS0FBTSxDQUFDK0QsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFBL0QsS0FBTSxDQUFDNEMsS0FBSyxLQUFLLFNBQVMsRUFBRTtrQkFDNUQsTUFBTSxJQUFJLENBQUMwQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUF0RixLQUFNLENBQUMrRCxRQUFRLENBQUM7a0JBQzlDLElBQUksQ0FBQyxDQUFBSSxlQUFnQixHQUFHLElBQUksQ0FBQyxDQUFBRCxTQUFVLENBQUNVLElBQUksQ0FBQ3ZCLElBQUksSUFBSUEsSUFBSSxDQUFDL0IsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFBdEIsS0FBTSxDQUFDMkQsUUFBUSxDQUFDNEIsUUFBUSxDQUFDOztnQkFHaEcsSUFBSSxDQUFDLENBQUF2RixLQUFNLENBQUN3RixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQzlDLFlBQVksQ0FBQztnQkFDM0MsSUFBSSxDQUFDLENBQUFuQixLQUFNLEdBQUcsQ0FBQyxDQUFDRCxFQUFFO2dCQUVsQlYsV0FBQSxDQUFBYSxZQUFZLENBQUNnRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUF6RixLQUFNLEVBQUUsSUFBSSxDQUFDO2dCQUN4Q1ksV0FBQSxDQUFBYSxZQUFZLENBQUNpRSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQW5FLEtBQU07Z0JBRTVDLElBQUk0RCxVQUFVLElBQUksSUFBSSxDQUFDLENBQUFuRixLQUFNLENBQUMyRixVQUFVLENBQUNDLEdBQUcsQ0FBQ1QsVUFBVSxDQUFDLEVBQUU7a0JBQ3pELElBQUksQ0FBQ1UsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBN0YsS0FBTSxDQUFDMkYsVUFBVSxDQUFDRyxHQUFHLENBQUNYLFVBQVUsQ0FBQyxDQUFDO2lCQUN6RCxNQUFNO2tCQUNOLE1BQU1ZLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQS9GLEtBQU0sQ0FBQytGLEtBQUssSUFBSSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO2tCQUNyRSxNQUFNN0QsVUFBVSxHQUFHLENBQUMsQ0FBQzBELEtBQUssQ0FBQyxDQUFDO2tCQUM1Qm5GLFdBQUEsQ0FBQWEsWUFBWSxDQUFDMEUsR0FBRyxDQUFDO29CQUNoQkMsT0FBTyxFQUFFLElBQUk7b0JBQ2IvRCxVQUFVO29CQUNWZ0UsUUFBUSxFQUFFO21CQUNWLENBQUM7O2dCQUVILEtBQUssQ0FBQ3ZCLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUNwQyxZQUFZLEVBQUU7ZUFDbkIsQ0FBQyxPQUFPNEQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjtZQUVBVCxZQUFZQSxDQUFDWSxRQUE4QjtjQUMxQyxJQUFJLENBQUMsQ0FBQWhELGdCQUFpQixHQUFHZ0QsUUFBUTtjQUNqQyxJQUFJLENBQUM5RCxJQUFJLEdBQUc4RCxRQUFRLEdBQUcsVUFBVSxHQUFHMUIsU0FBUztjQUU3QztjQUNBUCxVQUFVLENBQUNpQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFoRCxnQkFBaUI7Y0FFNUMsSUFBSWdELFFBQVEsRUFBRTtnQkFDYnpGLFFBQUEsQ0FBQTBGLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDBCQUEwQixJQUFJLENBQUMzRyxLQUFLLENBQUNzQixFQUFFLGVBQWVtRixRQUFRLENBQUNuRixFQUFFLEVBQUUsQ0FBQztnQkFFdEYsTUFBTXlFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQS9GLEtBQU0sQ0FBQytGLEtBQUssSUFBSSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO2dCQUNyRSxNQUFNVSxhQUFhLEdBQUdILFFBQVEsQ0FBQ1YsS0FBSyxJQUFJLElBQUksQ0FBQ0MsV0FBVyxDQUFDTCxVQUFVLENBQUNrQixLQUFLLENBQUNKLFFBQVEsQ0FBQ25HLElBQUksQ0FBQztnQkFDeEYsTUFBTStCLFVBQVUsR0FBRyxDQUFDLENBQUMwRCxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUNGLFlBQVksQ0FBQ2QsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDNkIsYUFBYSxDQUFDLENBQUM7Z0JBRWpGaEcsV0FBQSxDQUFBYSxZQUFZLENBQUMwRSxHQUFHLENBQUM7a0JBQ2hCQyxPQUFPLEVBQUUsSUFBSTtrQkFDYlUsS0FBSyxFQUFFLElBQUk7a0JBQ1hULFFBQVEsRUFBRVUsS0FBSyxJQUFHO29CQUNqQkEsS0FBSyxFQUFFQyxjQUFjLEVBQUU7b0JBQ3ZCRCxLQUFLLEVBQUVFLGVBQWUsRUFBRTtvQkFFeEIsSUFBSSxDQUFDcEIsWUFBWSxDQUFDZCxTQUFTLENBQUM7a0JBQzdCLENBQUM7a0JBQ0QxQztpQkFDQSxDQUFDO2VBQ0YsTUFBTTtnQkFDTixNQUFNMEQsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBL0YsS0FBTSxDQUFDK0YsS0FBSyxJQUFJLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxRQUFRLENBQUNDLFFBQVE7Z0JBRXJFbEYsUUFBQSxDQUFBMEYsT0FBTyxDQUFDUSxJQUFJLEVBQUU7Z0JBQ2QsTUFBTTdFLFVBQVUsR0FBRyxDQUFDLENBQUMwRCxLQUFLLENBQUMsQ0FBQztnQkFDNUJuRixXQUFBLENBQUFhLFlBQVksQ0FBQzBFLEdBQUcsQ0FBQztrQkFDaEJDLE9BQU8sRUFBRSxJQUFJO2tCQUNiQyxRQUFRLEVBQUUsMEJBQTBCO2tCQUNwQ2hFO2lCQUNBLENBQUM7O2NBRUgsSUFBSSxDQUFDSyxZQUFZLEVBQUU7WUFDcEI7WUFFQSxNQUFNeUUsTUFBTUEsQ0FBQ2pILEtBQTBCO2NBQ3RDLElBQUk7Z0JBQ0gsTUFBTTtrQkFBRWtIO2dCQUFNLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcEgsS0FBTSxDQUFDcUgsU0FBUyxDQUFDO2tCQUFFLEdBQUduSDtnQkFBSyxDQUFFLENBQUM7Z0JBQzVELElBQUksQ0FBQ3lDLElBQUksR0FBRyxPQUFPO2dCQUNuQixPQUFPO2tCQUFFeUU7Z0JBQU0sQ0FBRTtlQUNqQixDQUFDLE9BQU9kLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNaEIsYUFBYUEsQ0FBQ3ZCLFFBQWdCO2NBQ25DLElBQUksQ0FBQ3ZCLFlBQVksR0FBRyxJQUFJO2NBRXhCLE1BQU04RSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXRILEtBQU0sQ0FBQ3VILFlBQVksQ0FBQ3hELFFBQVEsQ0FBQztjQUV6RCxJQUFJLENBQUMsQ0FBQUcsU0FBVSxHQUFHb0QsUUFBUSxDQUFDdEUsS0FBSztjQUNoQyxJQUFJLElBQUksQ0FBQyxDQUFBbUIsZUFBZ0IsRUFBRTdDLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLENBQUE2QyxlQUFnQixHQUFHLElBQUksQ0FBQyxDQUFBRCxTQUFVLENBQUNVLElBQUksQ0FBQ3ZCLElBQUksSUFBSUEsSUFBSSxDQUFDL0IsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFBNkMsZUFBZ0IsRUFBRTdDLEVBQUUsQ0FBQztlQUMzRixNQUFNO2dCQUNOLElBQUksQ0FBQyxDQUFBNkMsZUFBZ0IsR0FBR1ksU0FBUzs7Y0FHbEMsSUFBSSxDQUFDdkMsWUFBWSxHQUFHLEtBQUs7Y0FFekIsSUFBSSxDQUFDZ0YsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2NBQ2hDLE9BQU9GLFFBQVE7WUFDaEI7WUFDQUcsUUFBUUEsQ0FBQTtjQUNQO1lBQUE7WUFHRCxNQUFNQyxJQUFJQSxDQUFDeEgsS0FBMEI7Y0FDcEMsSUFBSSxDQUFDeUgsVUFBVSxHQUFHLElBQUk7Y0FDdEIvRyxXQUFBLENBQUFhLFlBQVksQ0FBQ2dFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQXpGLEtBQU0sRUFBRSxJQUFJLENBQUM7Y0FDeEM7Y0FFQSxNQUFNLElBQUksQ0FBQ0EsS0FBSyxDQUFDcUgsU0FBUyxDQUFDbkgsS0FBSyxDQUFDO2NBRWpDLElBQUksQ0FBQ3lILFVBQVUsR0FBRyxLQUFLO2NBQ3ZCLElBQUksQ0FBQyxDQUFBcEcsS0FBTSxHQUFHLElBQUk7Y0FDbEJYLFdBQUEsQ0FBQWEsWUFBWSxDQUFDaUUsaUJBQWlCLEdBQUcsSUFBSTtjQUNyQyxNQUFNSyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUEvRixLQUFNLENBQUMrRixLQUFLLElBQUksSUFBSSxDQUFDQyxXQUFXLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtjQUNyRXRGLFdBQUEsQ0FBQWEsWUFBWSxDQUFDMEUsR0FBRyxDQUFDO2dCQUNoQjlELFVBQVUsRUFBRSxDQUFDLENBQUMwRCxLQUFLLENBQUM7ZUFDcEIsQ0FBQztjQUVGLE9BQU8sSUFBSSxDQUFDLENBQUEvRixLQUFNO1lBQ25CO1lBRUEsTUFBTTRILEtBQUtBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQTVILEtBQU0sQ0FBQzJGLFVBQVUsQ0FBQ2lDLEtBQUssRUFBRTtjQUM5QixJQUFJLENBQUMsQ0FBQXJHLEtBQU0sR0FBR3dELFNBQVM7Y0FDdkIsSUFBSSxDQUFDeUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBOzs7Ozs7O1lBT0EsTUFBTUssd0JBQXdCQSxDQUFDO2NBQUVoRTtZQUFTLENBQXlCO2NBQ2xFLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUF0QixjQUFlLEdBQUcsV0FBVztnQkFDbEMsSUFBSSxDQUFDdUYsbUJBQW1CLEdBQUcsSUFBSTtnQkFDL0IsTUFBTWhJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ0UsS0FBSyxDQUFDNkgsd0JBQXdCLENBQUM7a0JBQUVoRTtnQkFBUyxDQUFFLENBQUM7Z0JBRXJFLElBQUksQ0FBQyxDQUFBbkMsWUFBYSxHQUFHNUIsSUFBSTtnQkFDekIsSUFBSUEsSUFBSSxDQUFDaUksVUFBVSxFQUFFO2tCQUNwQixJQUFJLENBQUNDLFFBQVEsQ0FBQztvQkFBRUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUNKLFVBQVU7b0JBQUV6SCxJQUFJLEVBQUUsU0FBUztvQkFBRThILFFBQVEsRUFBRTtrQkFBVyxDQUFFLENBQUM7O2dCQUV0RyxJQUFJLENBQUMxRixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUMzQjtnQkFDQSxPQUFPO2tCQUFFMEUsTUFBTSxFQUFFLElBQUk7a0JBQUUsR0FBR3RIO2dCQUFJLENBQUU7ZUFDaEMsQ0FBQyxPQUFPd0csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUEvRCxjQUFlLEdBQUd3QyxTQUFTO2dCQUNoQyxJQUFJLENBQUMrQyxtQkFBbUIsR0FBRyxLQUFLOztZQUVsQztZQUVBLE1BQU1PLGlCQUFpQkEsQ0FBQztjQUFFeEUsU0FBUztjQUFFbkM7WUFBWSxDQUFpRDtjQUNqRyxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBYSxjQUFlLEdBQUcsbUJBQW1CO2dCQUMxQyxJQUFJLENBQUN1RixtQkFBbUIsR0FBRyxJQUFJO2dCQUUvQixNQUFNaEksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDRSxLQUFLLENBQUNxSSxpQkFBaUIsQ0FBQztrQkFBRXhFLFNBQVM7a0JBQUVuQztnQkFBWSxDQUFFLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxDQUFBNEMsbUJBQW9CLENBQUM2QixHQUFHLENBQUN0QyxTQUFTLEVBQUUvRCxJQUFJLENBQUMrRCxTQUFTLENBQUM7Z0JBQ3hEO2dCQUNBLElBQUksQ0FBQyxDQUFBN0QsS0FBTSxDQUFDbUcsR0FBRyxDQUFDO2tCQUFFdEMsU0FBUyxFQUFFL0QsSUFBSSxDQUFDK0Q7Z0JBQVMsQ0FBRSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsQ0FBQW5DLFlBQWEsR0FBR3FELFNBQVM7Z0JBQzlCO2dCQUNBLElBQUksQ0FBQyxDQUFBakQsb0JBQXFCLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUNXLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUExQyxLQUFNLENBQUM2RCxTQUFTO2VBQzVCLENBQUMsT0FBT3lDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBL0QsY0FBZSxHQUFHd0MsU0FBUztnQkFDaEMsSUFBSSxDQUFDK0MsbUJBQW1CLEdBQUcsS0FBSzs7WUFFbEM7WUFFQSxNQUFNUSx3QkFBd0JBLENBQUNwSSxLQUEwQjtjQUN4RCxJQUFJLENBQUMsQ0FBQXFDLGNBQWUsR0FBRyxpQkFBaUI7Y0FFeEMsT0FBTyxJQUFJLENBQUN2QyxLQUFLLENBQUN1SSxtQkFBbUIsQ0FBQztnQkFBRSxHQUFHckk7Y0FBSyxDQUFFLENBQUM7WUFDcEQ7WUFFQSxNQUFNc0ksZ0JBQWdCQSxDQUFDbEgsRUFBVTtjQUNoQyxJQUFJLElBQUksQ0FBQ1UsSUFBSSxDQUFDVixFQUFFLEtBQUtBLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUNVLElBQUk7O2NBRWpCLE1BQU15RyxHQUFHLEdBQUcsSUFBSSxDQUFDekcsSUFBSSxDQUFDZSxhQUFhLENBQUNDLEtBQUssQ0FBQzRCLElBQUksQ0FBRXZCLElBQVMsSUFBS0EsSUFBSSxDQUFDL0IsRUFBRSxLQUFLQSxFQUFFLENBQUM7Y0FFN0UsT0FBT21ILEdBQUc7WUFDWDtZQUVBVCxRQUFRQSxDQUFDO2NBQUVDLE9BQU87Y0FBRTNILElBQUk7Y0FBRThILFFBQVEsR0FBRztZQUFLLENBQXlCO2NBQ2xFLElBQUksQ0FBQyxDQUFBakgsS0FBTSxHQUFHO2dCQUFFOEcsT0FBTztnQkFBRTNILElBQUk7Z0JBQUU4SDtjQUFRLENBQUU7Y0FFekMsSUFBSSxDQUFDWixPQUFPLENBQUMsZUFBZSxDQUFDO1lBQzlCO1lBQ0FrQixVQUFVQSxDQUFBO2NBQ1QsSUFBSSxDQUFDLENBQUF2SCxLQUFNLEdBQUc0RCxTQUFTO2NBQ3ZCLElBQUksQ0FBQ3lDLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDOUI7WUFFQW1CLGlCQUFpQkEsQ0FBQ2xDLFFBQVE7Y0FDekIsSUFBSSxDQUFDQSxRQUFRLEVBQUU7Y0FDZixJQUFJQSxRQUFRLENBQUNWLEtBQUssRUFBRSxPQUFPVSxRQUFRLENBQUNWLEtBQUs7Y0FDekMsT0FBT1UsUUFBUSxDQUFDNUMsU0FBUztZQUMxQjtZQUVBLE1BQU0rRSxZQUFZQSxDQUFDekQsVUFBa0I7Y0FDcEMsSUFBSSxDQUFDMEQsUUFBUSxHQUFHLElBQUk7Y0FDcEIsSUFBSSxDQUFDLENBQUF6RyxZQUFhLEdBQUcyQyxTQUFTO2NBQzlCLElBQUksQ0FBQyxDQUFBN0MsYUFBYyxHQUFHNkMsU0FBUztjQUMvQixNQUFNMEIsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBaEQsZ0JBQWlCO2NBQ3ZDLElBQUksQ0FBQ2dELFFBQVEsRUFBRTtjQUNmLE1BQU1hLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3RILEtBQUssQ0FBQzhJLFFBQVEsQ0FBQ0YsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBNUksS0FBTSxDQUFDc0IsRUFBRSxFQUFFNkQsVUFBVSxDQUFDO2NBRW5GLE1BQU00RCxPQUFPLEdBQUc7Z0JBQ2YsZ0JBQWdCLEVBQUUsd0RBQXdEO2dCQUMxRSxtQkFBbUIsRUFBRSwyREFBMkQ7Z0JBQ2hGQyxNQUFNLEVBQUUsZ0RBQWdEO2dCQUN4RCxnQkFBZ0IsRUFBRSx3REFBd0Q7Z0JBQzFFQyxRQUFRLEVBQUU7ZUFDVjtjQUVELElBQUksQ0FBQ0YsT0FBTyxHQUFHdEMsUUFBUSxDQUFDbkcsSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSTRJLEtBQUssQ0FBQyxpQkFBaUJ6QyxRQUFRLENBQUNuRyxJQUFJLFlBQVksQ0FBQzs7Y0FHNUQsTUFBTTtnQkFBRVcsWUFBWSxFQUFFa0ksS0FBSztnQkFBRUM7Y0FBWSxDQUFFLEdBQUcsTUFBTUMsT0FBTyxDQUFDTixPQUFPLENBQUN0QyxRQUFRLENBQUNuRyxJQUFJLENBQUMsQ0FBQztjQUVuRixNQUFNZSxLQUFLLEdBQUcsSUFBSThILEtBQUssRUFBRTtjQUN6QixJQUFJLENBQUMsQ0FBQWpILGFBQWMsR0FBR2IsS0FBSztjQUMzQkEsS0FBSyxDQUFDNkQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBbEYsS0FBTSxDQUFDc0IsRUFBRSxFQUFFZ0csUUFBUSxDQUFDYixRQUFRLENBQUNuRixFQUFFLEVBQUVnRyxRQUFRLENBQUNiLFFBQVEsQ0FBQzZDLElBQUksQ0FBQ2hJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQ2lJLElBQUksQ0FBQ0MsQ0FBQyxJQUFHO2dCQUMxRixJQUFJLENBQUMsQ0FBQXBILFlBQWEsR0FBRztrQkFDcEJxSCxNQUFNLEVBQUVuQyxRQUFRLENBQUNiLFFBQVEsQ0FBQzZDLElBQUksQ0FBQ2hJLEVBQUU7a0JBQ2pDNkQsVUFBVSxFQUFFbUMsUUFBUSxDQUFDYixRQUFRLENBQUNuRixFQUFFO2tCQUNoQ29JLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTFKLEtBQU0sQ0FBQ3NCLEVBQUU7a0JBQzVCcUksT0FBTyxFQUFFO2lCQUNUO2dCQUNELElBQUksQ0FBQ2QsUUFBUSxHQUFHLEtBQUs7Z0JBRXJCLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztjQUN0QyxDQUFDLENBQUM7Y0FFRixPQUFPO2dCQUFFRixRQUFRO2dCQUFFakc7Y0FBSyxDQUFFO1lBQzNCO1lBRUEsTUFBTXVJLHNCQUFzQkEsQ0FBQ3pFLFVBQWtCO2NBQzlDLElBQUksQ0FBQzBELFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQyxDQUFBekcsWUFBYSxHQUFHMkMsU0FBUztjQUM5QixJQUFJLENBQUMsQ0FBQTdDLGFBQWMsR0FBRzZDLFNBQVM7Y0FDL0IsTUFBTTBCLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQWhELGdCQUFpQjtjQUV2QyxJQUFJLENBQUNnRCxRQUFRLEVBQUU7Y0FDZixJQUFJcEYsS0FBSztjQUVULE1BQU0wSCxPQUFPLEdBQUc7Z0JBQ2YsY0FBYyxFQUFFLHNEQUFzRDtnQkFDdEVjLE9BQU8sRUFBRSxpREFBaUQ7Z0JBQzFEQyxNQUFNLEVBQUU7ZUFDUjtjQUVELElBQUksQ0FBQ2YsT0FBTyxHQUFHdEMsUUFBUSxDQUFDbkcsSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSTRJLEtBQUssQ0FBQyxpQkFBaUJ6QyxRQUFRLENBQUNuRyxJQUFJLFlBQVksQ0FBQzs7Y0FHNUQsTUFBTTtnQkFBRVcsWUFBWSxFQUFFa0ksS0FBSztnQkFBRUM7Y0FBWSxDQUFFLEdBQUcsTUFBTUMsT0FBTyxDQUFDTixPQUFPLENBQUN0QyxRQUFRLENBQUNuRyxJQUFJLENBQUMsQ0FBQztjQUVuRmUsS0FBSyxHQUFHLElBQUk4SCxLQUFLLENBQUM7Z0JBQUVRLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztjQUVwQyxJQUFJLENBQUMsQ0FBQXpILGFBQWMsR0FBR2IsS0FBSztjQUMzQixJQUFJLENBQUMsQ0FBQWMscUJBQXNCLEdBQUdpSCxZQUFZO2NBRTFDL0gsS0FBSyxDQUFDMEksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBL0osS0FBTSxDQUFDc0IsRUFBRSxFQUFFNkQsVUFBVSxDQUFDLENBQUNvRSxJQUFJLENBQUMsTUFBSztnQkFDcEQsSUFBSSxDQUFDVixRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDckIsT0FBTyxDQUFDLHVCQUF1QixDQUFDO2NBQ3RDLENBQUMsQ0FBQztjQUVGLE9BQU87Z0JBQUVuRztjQUFLLENBQUU7WUFDakI7O1VBQ0FWLE9BQUEsQ0FBQU0sWUFBQSxHQUFBQSxZQUFBO1VBRU07VUFBVyxNQUFNSSxLQUFLLEdBQUFWLE9BQUEsQ0FBQVUsS0FBQSxHQUFHLElBQUlKLFlBQVksRUFBRTs7Ozs7Ozs7Ozs7VUMvZGxEOztVQUVBK0ksTUFBQSxDQUFBQyxjQUFBLENBQUF0SixPQUFBO1lBQ0E4QixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=