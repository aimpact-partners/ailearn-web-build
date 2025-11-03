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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
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
        hash: 1608167909,
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
                this.fetchingSuggestions = false;
                return data;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetchingSuggestions = false;
              }
            }
            async generateObjective({
              objective,
              improvements
            }) {
              try {
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
                this.fetchingSuggestions = false;
              }
            }
            async generateModuleSuggestion(specs) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJnZXQiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsImFjdGl2aXR5RGF0YSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJmZXRjaGluZ0RhdGEiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInZpZXciLCJzdGF0ZSIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGVuZ3RoIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsImF1ZGllbmNlcyIsImN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlTGV2ZWxzIiwibGV2ZWxzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsInJlYWR5IiwicHJvcGVydGllcyIsImdsb2JhbFRoaXMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJ1bmRlZmluZWQiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwibG9hZCIsImFjdGl2aXR5SWQiLCJEcmFmdCIsImxhbmd1YWdlcyIsImdsb2JhbCIsImZldGNoIiwibG9hZEF1ZGllbmNlcyIsImNhdGVnb3J5Iiwib24iLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiYWN0aXZpdGllcyIsImhhcyIsImVkaXRBY3Rpdml0eSIsInRpdGxlIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsIm5ld0RyYWZ0Iiwic2V0Iiwib3ZlcmxheSIsImJhY2tMaW5rIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInRyaWdnZXIiLCJhY3Rpdml0eSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJhY3Rpdml0eVRpdGxlIiwidHlwZXMiLCJmb3JjZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJiYWNrIiwidXBkYXRlIiwic3RhdHVzIiwic2F2ZURyYWZ0IiwicmVzcG9uc2UiLCJsb2FkQXVkaWVuY2UiLCJsaXN0ZW5lciIsInNhdmUiLCJxdWV1ZSIsInByb2Nlc3NpbmciLCJjbGVhbiIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwidGV4dHMiLCJzdWdnZXN0aW9ucyIsInBvc2l0aW9uIiwiRXJyb3IiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiY2xlYXJBbGVydCIsImdldEFjdGl2aXR5RGV0YWlsIiwidGVzdEFjdGl2aXR5IiwiZmV0Y2hpbmciLCJwcm92aWRlciIsImltcG9ydHMiLCJkZWJhdGUiLCJleGVyY2lzZSIsIlN0b3JlIiwiQWN0aXZpdHlWaWV3IiwiYmltcG9ydCIsImNoYXQiLCJ0aGVuIiwiciIsImNoYXRJZCIsImFzc2lnbm1lbnRJZCIsInRlc3RpbmciLCJ0ZXN0QXNzZXNzbWVudEFjdGl2aXR5Iiwid3JpdHRlbiIsInNwb2tlbiIsImxvYWRUZXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvc3RvcmUvYWN0aXZpdHktdGVzdC50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsZUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBREE7O1VBSU0sTUFBT0Usb0JBQXFCLFNBQVFELEtBQUEsQ0FBQUUsZ0JBQWdCO1lBQ3pEQyxPQUFPO1lBaUJQLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7WUFDOUM7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsTUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEVBQUU7Y0FDM0MsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFRLEVBQUU7Y0FDbkMsT0FBTztnQkFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxPQUFPO2dCQUN6QkMsSUFBSSxFQUFFLElBQUksQ0FBQ04sS0FBSyxDQUFDTSxJQUFJO2dCQUNyQkMsV0FBVyxFQUFFLElBQUksQ0FBQ1As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