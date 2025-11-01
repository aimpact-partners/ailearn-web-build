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
        hash: 2162214117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJnZXQiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsImFjdGl2aXR5RGF0YSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwicmVhZHkiLCJwcm9wZXJ0aWVzIiwiZ2xvYmFsVGhpcyIsInNldEN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlSWQiLCJmaW5kIiwiaGlkZSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwibGFuZ3VhZ2VzIiwiZ2xvYmFsIiwiZmV0Y2giLCJsb2FkQXVkaWVuY2VzIiwiY2F0ZWdvcnkiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJhY3Rpdml0aWVzIiwiaGFzIiwiZWRpdEFjdGl2aXR5IiwidGl0bGUiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwibmV3RHJhZnQiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwiY29uc29sZSIsImVycm9yIiwidHJpZ2dlciIsImFjdGl2aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImFjdGl2aXR5VGl0bGUiLCJ0eXBlcyIsImZvcmNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImJhY2siLCJ1cGRhdGUiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJyZXNwb25zZSIsImxvYWRBdWRpZW5jZSIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJjbGVhbiIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwidGV4dHMiLCJzdWdnZXN0aW9ucyIsInBvc2l0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImNsZWFyQWxlcnQiLCJnZXRBY3Rpdml0eURldGFpbCIsInRlc3RBY3Rpdml0eSIsImZldGNoaW5nIiwicHJvdmlkZXIiLCJpbXBvcnRzIiwiZGViYXRlIiwiZXhlcmNpc2UiLCJFcnJvciIsIlN0b3JlIiwiQWN0aXZpdHlWaWV3IiwiYmltcG9ydCIsImNoYXQiLCJ0aGVuIiwiciIsImNoYXRJZCIsImFzc2lnbm1lbnRJZCIsInRlc3RpbmciLCJ0ZXN0QXNzZXNzbWVudEFjdGl2aXR5Iiwid3JpdHRlbiIsInNwb2tlbiIsImxvYWRUZXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvc3RvcmUvYWN0aXZpdHktdGVzdC50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsZUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBREE7O1VBSU0sTUFBT0Usb0JBQXFCLFNBQVFELEtBQUEsQ0FBQUUsZ0JBQWdCO1lBQ3pEQyxPQUFPO1lBaUJQLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7WUFDOUM7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsTUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEVBQUU7Y0FDM0MsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFRLEVBQUU7Y0FDbkMsT0FBTztnQkFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxPQUFPO2dCQUN6QkMsSUFBSSxFQUFFLElBQUksQ0FBQ04sS0FBSyxDQUFDTSxJQUFJO2dCQUNyQkMsV0FBVyxFQUFFLElB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