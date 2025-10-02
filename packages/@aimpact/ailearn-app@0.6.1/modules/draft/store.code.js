System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.6.1/entities/assignments/activities/base", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-app@0.6.1/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnApp061EntitiesAssignmentsActivitiesBase) {
      dependency_1 = _aimpactAilearnApp061EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_aimpactAilearnApp061WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp061WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_5 = _aimpactAilearnApp061StoresBase;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0114Routing) {
      dependency_7 = _beyondJsKernel0114Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/modules/draft/store",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsImFjdGl2aXR5RGF0YSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwicmVhZHkiLCJnbG9iYWxUaGlzIiwicmVhY3RpdmVQcm9wcyIsInNldEN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlSWQiLCJmaW5kIiwiaGlkZSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwibGFuZ3VhZ2VzIiwiZ2xvYmFsIiwiZmV0Y2giLCJsb2FkQXVkaWVuY2VzIiwiY2F0ZWdvcnkiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJhY3Rpdml0aWVzIiwiaGFzIiwiZWRpdEFjdGl2aXR5IiwiZ2V0IiwidGl0bGUiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwibmV3RHJhZnQiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiYWN0aXZpdHlUaXRsZSIsInR5cGVzIiwiZm9yY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmFjayIsInVwZGF0ZSIsInN0YXR1cyIsInNhdmVEcmFmdCIsInJlc3BvbnNlIiwibG9hZEF1ZGllbmNlIiwidHJpZ2dlciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJjbGVhbiIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwidGV4dHMiLCJzdWdnZXN0aW9ucyIsInBvc2l0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImNsZWFyQWxlcnQiLCJnZXRBY3Rpdml0eURldGFpbCIsInRlc3RBY3Rpdml0eSIsImZldGNoaW5nIiwicHJvdmlkZXIiLCJpbXBvcnRzIiwiZGViYXRlIiwiZXhlcmNpc2UiLCJFcnJvciIsIlN0b3JlIiwiQWN0aXZpdHlWaWV3IiwiYmltcG9ydCIsImNoYXQiLCJ0aGVuIiwiciIsImNoYXRJZCIsImFzc2lnbm1lbnRJZCIsInRlc3RpbmciLCJ0ZXN0QXNzZXNzbWVudEFjdGl2aXR5Iiwid3JpdHRlbiIsInNwb2tlbiIsImxvYWRUZXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvL3RzL3N0b3JlL2FjdGl2aXR5LXRlc3QudHMiLCIvL3RzL3N0b3JlL2luZGV4LnRzIiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLGVBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQURBOztVQUlNLE1BQU9FLG9CQUFxQixTQUFRRCxLQUFBLENBQUFFLGdCQUFnQjtZQUN6REMsT0FBTztZQWlCUCxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO1lBQzlDO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE1BQU1DLFNBQVMsR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxFQUFFO2NBQzNDLE1BQU1DLEtBQUssR0FBRyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBUSxFQUFFO2NBQ25DLE9BQU87Z0JBQ05DLEtBQUssRUFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssT0FBTztnQkFDekJDLElBQUksRUFBRSxJQUFJLENBQUNOLEtBQUssQ0FBQ00sSUFBSTtnQkFDckJDLFdBQVcs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