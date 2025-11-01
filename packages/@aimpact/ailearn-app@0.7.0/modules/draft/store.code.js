System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.7.0/entities/assignments/activities/base", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-app@0.7.0/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnApp070EntitiesAssignmentsActivitiesBase) {
      dependency_1 = _aimpactAilearnApp070EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_aimpactAilearnApp070WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp070WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_5 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0114Routing) {
      dependency_7 = _beyondJsKernel0114Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/draft/store",
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
        hash: 3342792709,
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
              return this.#model.credits.get()?.total > 0;
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
            #ready = false;
            get ready() {
              return this.#ready && super.ready;
            }
            constructor() {
              super(_beyond_context.module.specifier, {
                properties: ['draft', 'fetchingSuggestions']
              });
              globalThis.store = this;
            }
            setCurrentAudience(audienceId) {
              this.#currentAudience = this.#audiences.find(item => item.id === audienceId);
              this.triggerEvent('audience.changed');
            }
            hide() {
              this.#ready = false;
              this.#model = null;
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
                //@ts-ignore
                await this.languages().global.fetch();
                //@ts-ignore
                await this.languages().module.fetch();
                if (id) await this.#model.load();
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
              } catch (e) {
                console.error(e);
              } finally {
                this.#ready = true;
                this.trigger('load.ready');
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
            async save(specs, queue = true) {
              this.processing = true;
              _mainLayout.LayoutBroker.addModel(this.#model, true);
              //hardcoded for now
              await this.model.saveDraft(specs, queue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJnZXQiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsImFjdGl2aXR5RGF0YSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwicmVhZHkiLCJwcm9wZXJ0aWVzIiwiZ2xvYmFsVGhpcyIsInNldEN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlSWQiLCJmaW5kIiwiaGlkZSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwibGFuZ3VhZ2VzIiwiZ2xvYmFsIiwiZmV0Y2giLCJsb2FkQXVkaWVuY2VzIiwiY2F0ZWdvcnkiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJhY3Rpdml0aWVzIiwiaGFzIiwiZWRpdEFjdGl2aXR5IiwidGl0bGUiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwibmV3RHJhZnQiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwiY29uc29sZSIsImVycm9yIiwidHJpZ2dlciIsImFjdGl2aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImFjdGl2aXR5VGl0bGUiLCJ0eXBlcyIsImZvcmNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImJhY2siLCJ1cGRhdGUiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJyZXNwb25zZSIsImxvYWRBdWRpZW5jZSIsImxpc3RlbmVyIiwic2F2ZSIsInF1ZXVlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImlycmVsZXZhbnQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJ0ZXh0cyIsInN1Z2dlc3Rpb25zIiwicG9zaXRpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiY2xlYXJBbGVydCIsImdldEFjdGl2aXR5RGV0YWlsIiwidGVzdEFjdGl2aXR5IiwiZmV0Y2hpbmciLCJwcm92aWRlciIsImltcG9ydHMiLCJkZWJhdGUiLCJleGVyY2lzZSIsIkVycm9yIiwiU3RvcmUiLCJBY3Rpdml0eVZpZXciLCJiaW1wb3J0IiwiY2hhdCIsInRoZW4iLCJyIiwiY2hhdElkIiwiYXNzaWdubWVudElkIiwidGVzdGluZyIsInRlc3RBc3Nlc3NtZW50QWN0aXZpdHkiLCJ3cml0dGVuIiwic3Bva2VuIiwibG9hZFRlc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9zdG9yZS9hY3Rpdml0eS10ZXN0LnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFEQTs7VUFJTSxNQUFPRSxvQkFBcUIsU0FBUUQsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDekRDLE9BQU87WUFpQlAsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztZQUM5QztZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxNQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBRTtjQUMzQyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNHLFFBQVEsRUFBRTtjQUNuQyxPQUFPO2dCQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDSixLQUFLLENBQUNLLE9BQU87Z0JBQ3pCQyxJQUFJLEVBQUUsSUFBSSxDQUFDTixLQUFLLENBQUNNLElBQUk7Z0JBQ3JCQyxXQUFX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