System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.6.1/entities/assignments/activities/base", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-app@0.6.1/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
    }, function (_beyondJsKernel0112Routing) {
      dependency_7 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
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
        hash: 3784672205,
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
              super(_beyond_context.module.specifier);
              globalThis.store = this;
              this.reactiveProps(['fetchingSuggestions']);
            }
            setCurrentAudience(audienceId) {
              this.#currentAudience = this.#audiences.find(item => item.id === audienceId);
              this.triggerEvent('audience.changed');
            }
            hide() {
              //@ts-ignore
              super.ready = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5Q29tcG9uZW50VmlldyIsImFjdGl2aXR5RGF0YSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJyZWFkeSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwidGV4dFJlYWR5IiwibG9hZEF1ZGllbmNlcyIsImNhdGVnb3J5Iiwib24iLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiYWN0aXZpdGllcyIsImhhcyIsImVkaXRBY3Rpdml0eSIsImdldCIsInRpdGxlIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsIm5ld0RyYWZ0Iiwic2V0Iiwib3ZlcmxheSIsImJhY2tMaW5rIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjdGl2aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImFjdGl2aXR5VGl0bGUiLCJ0eXBlcyIsImZvcmNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImJhY2siLCJ1cGRhdGUiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJyZXNwb25zZSIsImxvYWRBdWRpZW5jZSIsInRyaWdnZXIiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwiaXJyZWxldmFudCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInRleHRzIiwic3VnZ2VzdGlvbnMiLCJwb3NpdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImdldEFkbWluaXN0cmF0b3IiLCJvcmciLCJjbGVhckFsZXJ0IiwiZ2V0QWN0aXZpdHlEZXRhaWwiLCJ0ZXN0QWN0aXZpdHkiLCJmZXRjaGluZyIsInByb3ZpZGVyIiwiaW1wb3J0cyIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiRXJyb3IiLCJTdG9yZSIsIkFjdGl2aXR5VmlldyIsImJpbXBvcnQiLCJjaGF0IiwidGhlbiIsInIiLCJjaGF0SWQiLCJhc3NpZ25tZW50SWQiLCJ0ZXN0aW5nIiwidGVzdEFzc2Vzc21lbnRBY3Rpdml0eSIsIndyaXR0ZW4iLCJzcG9rZW4iLCJsb2FkVGVzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy90cy9zdG9yZS9hY3Rpdml0eS10ZXN0LnRzIiwiLy90cy9zdG9yZS9pbmRleC50cyIsIi8vdHlwZXMudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFEQTs7VUFJTSxNQUFPRSxvQkFBcUIsU0FBUUQsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDekRDLE9BQU87WUFpQlAsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztZQUM5QztZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxNQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBRTtjQUMzQyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNHLFFBQVEsRUFBRTtjQUNuQyxPQUFPO2dCQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDSixLQUFLLENBQUNLLE9BQU87Z0JBQ3pCQyxJQUFJLEVBQUUsSUFBSSxDQUFDTixLQUFLLENBQUNNLElBQUk7Z0JBQ3JCQyxXQUFXLEVBQUUsSUFBSSxDQUFDUCxL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