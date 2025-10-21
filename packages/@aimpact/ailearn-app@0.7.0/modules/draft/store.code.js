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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
        hash: 479311754,
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
            #ready = false;
            get ready() {
              return this.#ready && super.ready;
            }
            constructor() {
              super(_beyond_context.module.specifier);
              globalThis.store = this;
              this.reactiveProps(['fetchingSuggestions']);
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
                this.#ready = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsImFjdGl2aXR5RGF0YSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwicmVhZHkiLCJnbG9iYWxUaGlzIiwicmVhY3RpdmVQcm9wcyIsInNldEN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlSWQiLCJmaW5kIiwiaGlkZSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwibGFuZ3VhZ2VzIiwiZ2xvYmFsIiwiZmV0Y2giLCJsb2FkQXVkaWVuY2VzIiwiY2F0ZWdvcnkiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJhY3Rpdml0aWVzIiwiaGFzIiwiZWRpdEFjdGl2aXR5IiwiZ2V0IiwidGl0bGUiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwibmV3RHJhZnQiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiYWN0aXZpdHlUaXRsZSIsInR5cGVzIiwiZm9yY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmFjayIsInVwZGF0ZSIsInN0YXR1cyIsInNhdmVEcmFmdCIsInJlc3BvbnNlIiwibG9hZEF1ZGllbmNlIiwidHJpZ2dlciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJjbGVhbiIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwidGV4dHMiLCJzdWdnZXN0aW9ucyIsInBvc2l0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImNsZWFyQWxlcnQiLCJnZXRBY3Rpdml0eURldGFpbCIsInRlc3RBY3Rpdml0eSIsImZldGNoaW5nIiwicHJvdmlkZXIiLCJpbXBvcnRzIiwiZGViYXRlIiwiZXhlcmNpc2UiLCJFcnJvciIsIlN0b3JlIiwiQWN0aXZpdHlWaWV3IiwiYmltcG9ydCIsImNoYXQiLCJ0aGVuIiwiciIsImNoYXRJZCIsImFzc2lnbm1lbnRJZCIsInRlc3RpbmciLCJ0ZXN0QXNzZXNzbWVudEFjdGl2aXR5Iiwid3JpdHRlbiIsInNwb2tlbiIsImxvYWRUZXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvc3RvcmUvYWN0aXZpdHktdGVzdC50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsZUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBREE7O1VBSU0sTUFBT0Usb0JBQXFCLFNBQVFELEtBQUEsQ0FBQUUsZ0JBQWdCO1lBQ3pEQyxPQUFPO1lBaUJQLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7WUFDOUM7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsTUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEVBQUU7Y0FDM0MsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFRLEVBQUU7Y0FDbkMsT0FBTztnQkFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxPQUFPO2dCQUN6QkMsSUFBSSxFQUFFLElBQUksQ0FBQ04sS0FBSyxDQUFDTSxJQUFJO2dCQUNyQkMsV0FBVyxFQUFF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