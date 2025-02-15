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
        hash: 4128963465,
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
                if (activityId && this.#model.activities.has(activityId)) {
                  this.editActivity(this.#model.activities.get(activityId));
                } else {
                  const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                  const breadcrumb = [[this.globalTexts.entities.drafts, '/modules/list?tab=drafts'], [title]];
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
                _mainLayout.LayoutBroker.backLink = () => this.editActivity(undefined);
                const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                const activityTitle = activity.title ?? this.globalTexts.activities.types[activity.type];
                const breadcrumb = [[this.globalTexts.entities.drafts, '/modules/list?tab=drafts'], [title, () => this.editActivity(undefined)], [activityTitle]];
                _mainLayout.LayoutBroker.set({
                  overlay: true,
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
                const breadcrumb = [[this.globalTexts.entities.drafts, '/modules/list?tab=drafts'], [title]];
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
                breadcrumb: [[this.globalTexts.entities.drafts, '/modules/list?tab=drafts'], [title]]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfYWN0aXZpdHlUZXN0IiwiU3RvcmVNYW5hZ2VyIiwiRm9ybUJhc2VTdG9yZU1hbmFnZXIiLCJhbGVydCIsInVybCIsInN0b3JlIiwiaWQiLCJzYXZlZCIsImJyb2tlciIsIkxheW91dEJyb2tlciIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJyZWFkeSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwidGV4dFJlYWR5IiwibG9hZEF1ZGllbmNlcyIsImNhdGVnb3J5Iiwib24iLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiYWN0aXZpdGllcyIsImhhcyIsImVkaXRBY3Rpdml0eSIsImdldCIsInRpdGxlIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsIm5ld0RyYWZ0IiwiZHJhZnRzIiwic2V0Iiwib3ZlcmxheSIsImJhY2tMaW5rIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjdGl2aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImFjdGl2aXR5VGl0bGUiLCJ0eXBlcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXBsYWNlU3RhdGUiLCJ1cGRhdGUiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJyZXNwb25zZSIsImxvYWRBdWRpZW5jZSIsInRyaWdnZXIiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwiaXJyZWxldmFudCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInRleHRzIiwic3VnZ2VzdGlvbnMiLCJwb3NpdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImdldEFkbWluaXN0cmF0b3IiLCJvcmciLCJjbGVhckFsZXJ0IiwiZ2V0QWN0aXZpdHlEZXRhaWwiLCJhY3Rpdml0eVN0b3JlIiwiYWN0aXZpdHlEYXRhIiwidGVzdEFjdGl2aXR5IiwiZmV0Y2hpbmciLCJwcm92aWRlciIsImNoYXQiLCJ0aGVuIiwiY2hhdElkIiwiYXNzaWdubWVudElkIiwidGVzdGluZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LXRlc3QudHMiLCIvdHMvc3RvcmUudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLGVBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQURBOztVQUlNLE1BQU9FLG9CQUFxQixTQUFRRCxLQUFBLENBQUFFLGdCQUFnQjtZQUN6REMsT0FBTztZQWlCUCxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO1lBQzlDO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE1BQU1DLFNBQVMsR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxFQUFFO2NBQzNDLE1BQU1DLEtBQUssR0FBRyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBUSxFQUFFO2NBQ25DLE9BQU87Z0JBQ05DLEtBQUssRUFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssT0FBTztnQkFDekJDLElBQUksRUFBRSxJQUFJLENBQUNOLEtBQUssQ0FBQ00sSUFBSTtnQkFDckJDLFdBQVcsRUFBRSxJQUFJLENBQUNQLEtBQUssQ0FBQ08sV0FBVztnQkFDbkMsR0FBR1IsU0FBUztnQkFDWixHQUFHRztlQUNIO1lBQ0Y7WUFDQU0sWUFBQTtjQUNDLEtBQUssQ0FBQ2pCLGVBQUEsQ0FBQWtCLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3hCOztVQUNBQyxPQUFBLENBQUFqQixvQkFBQSxHQUFB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WUFBWUEsQ0FBQzNELFVBQWtCO2NBQ3BDLElBQUksQ0FBQzRELFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQyxDQUFBRixZQUFhLEdBQUc5RCxTQUFTO2NBQzlCLElBQUksQ0FBQyxDQUFBNkQsYUFBYyxHQUFHN0QsU0FBUztjQUUvQixNQUFNdUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDbkgsS0FBSyxDQUFDNkksUUFBUSxDQUFDRixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUEzSSxLQUFNLENBQUN1QixFQUFFLEVBQUV5RCxVQUFVLENBQUM7Y0FFbkYsTUFBTTFELEtBQUssR0FBRyxJQUFJTCxhQUFBLENBQUF2QixvQkFBb0IsRUFBRTtjQUN4QyxJQUFJLENBQUMsQ0FBQStJLGFBQWMsR0FBR25ILEtBQUs7Y0FDM0JBLEtBQUssQ0FBQ3lELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQS9FLEtBQU0sQ0FBQ3VCLEVBQUUsRUFBRTRGLFFBQVEsQ0FBQ1osUUFBUSxDQUFDaEYsRUFBRSxFQUFFNEYsUUFBUSxDQUFDWixRQUFRLENBQUN1QyxJQUFJLENBQUN2SCxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUN3SCxJQUFJLENBQUMsTUFBSztnQkFDM0YsSUFBSSxDQUFDLENBQUFMLFlBQWEsR0FBRztrQkFDcEJNLE1BQU0sRUFBRTdCLFFBQVEsQ0FBQ1osUUFBUSxDQUFDdUMsSUFBSSxDQUFDdkgsRUFBRTtrQkFDakN5RCxVQUFVLEVBQUVtQyxRQUFRLENBQUNaLFFBQVEsQ0FBQ2hGLEVBQUU7a0JBQ2hDMEgsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBakosS0FBTSxDQUFDdUIsRUFBRTtrQkFDNUIySCxPQUFPLEVBQUU7aUJBQ1Q7Z0JBQ0QsSUFBSSxDQUFDTixRQUFRLEdBQUcsS0FBSztnQkFFckIsSUFBSSxDQUFDdkIsT0FBTyxDQUFDLHVCQUF1QixDQUFDO2NBQ3RDLENBQUMsQ0FBQztjQUVGLE9BQU87Z0JBQUVGLFFBQVE7Z0JBQUU3RjtjQUFLLENBQUU7WUFDM0I7O1VBQ0FYLE9BQUEsQ0FBQU8sWUFBQSxHQUFBQSxZQUFBO1VBRU07VUFBVyxNQUFNSSxLQUFLLEdBQUFYLE9BQUEsQ0FBQVcsS0FBQSxHQUFHLElBQUlKLFlBQVksRUFBRTs7Ozs7Ozs7Ozs7VUN0YWxEOztVQUVBaUksTUFBQSxDQUFBQyxjQUFBLENBQUF6SSxPQUFBO1lBQ0E0QixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=