System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/entities/assignments/activities/base", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-app@0.3.1/stores/base", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_aimpactAilearnApp031EntitiesAssignmentsActivitiesBase) {
      dependency_2 = _aimpactAilearnApp031EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031WidgetsBreadcrumbWidget) {
      dependency_4 = _aimpactAilearnApp031WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_5 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactAilearnApp031StoresBase) {
      dependency_6 = _aimpactAilearnApp031StoresBase;
    }, function (_aimpactChatSdk141Session) {
      dependency_7 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_4], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_5], ['@aimpact/ailearn-app/stores/base', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/routing', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/draft/store.code');
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./activity-test
      *******************************/
      ims.set('./activity-test', {
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1094616207,
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
                _routing.routing.replaceState({}, 'module-management', '/modules/management?id=' + this.model.id);
                //routing.back();
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
            #activityStore;
            get activityStore() {
              return this.#activityStore;
            }
            #activityData;
            get activityData() {
              return this.#activityData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfYWN0aXZpdHlUZXN0IiwiU3RvcmVNYW5hZ2VyIiwiRm9ybUJhc2VTdG9yZU1hbmFnZXIiLCJhbGVydCIsInVybCIsInN0b3JlIiwiaWQiLCJzYXZlZCIsImJyb2tlciIsIkxheW91dEJyb2tlciIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJyZWFkeSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwidGV4dFJlYWR5IiwibG9hZEF1ZGllbmNlcyIsImNhdGVnb3J5Iiwib24iLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiYWN0aXZpdGllcyIsImhhcyIsImVkaXRBY3Rpdml0eSIsImdldCIsInRpdGxlIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsIm5ld0RyYWZ0Iiwic2V0Iiwib3ZlcmxheSIsImJhY2tMaW5rIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjdGl2aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImFjdGl2aXR5VGl0bGUiLCJ0eXBlcyIsImZvcmNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlcGxhY2VTdGF0ZSIsInVwZGF0ZSIsInN0YXR1cyIsInNhdmVEcmFmdCIsInJlc3BvbnNlIiwibG9hZEF1ZGllbmNlIiwidHJpZ2dlciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJjbGVhbiIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwidGV4dHMiLCJzdWdnZXN0aW9ucyIsInBvc2l0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImNsZWFyQWxlcnQiLCJnZXRBY3Rpdml0eURldGFpbCIsImFjdGl2aXR5U3RvcmUiLCJhY3Rpdml0eURhdGEiLCJ0ZXN0QWN0aXZpdHkiLCJmZXRjaGluZyIsInByb3ZpZGVyIiwiY2hhdCIsInRoZW4iLCJjaGF0SWQiLCJhc3NpZ25tZW50SWQiLCJ0ZXN0aW5nIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHktdGVzdC50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsZUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBREE7O1VBSU0sTUFBT0Usb0JBQXFCLFNBQVFELEtBQUEsQ0FBQUUsZ0JBQWdCO1lBQ3pEQyxPQUFPO1lBaUJQLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7WUFDOUM7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsTUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEVBQUU7Y0FDM0MsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFRLEVBQUU7Y0FDbkMsT0FBTztnQkFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxPQUFPO2dCQUN6QkMsSUFBSSxFQUFFLElBQUksQ0FBQ04sS0FBSyxDQUFDTSxJQUFJO2dCQUNyQkMsV0FBVyxFQUFFLElBQUksQ0FBQ1AsS0FBSyxDQUFDTyxXQUFXO2dCQUNuQyxHQUFHUixTQUFTO2dCQUNaLEdBQUdHO2VBQ0g7WUFDRjtZQUNBTSxZQUFBO2NBQ0MsS0FBSyxDQUFDakIsZUFBQSxDQUFBa0IsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDeEI7O1VBQ0FDLE9BQUEsQ0FBQWpCLG9CQUFBLEdBQUFB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