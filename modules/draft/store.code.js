System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/ailearn-app@0.3.1/stores/base", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp031WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactAilearnApp031StoresBase) {
      dependency_5 = _aimpactAilearnApp031StoresBase;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/draft/store.code');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./store
      ***********************/
      ims.set('./store', {
        hash: 806814624,
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
                    breadcrumb
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
                  backLink: () => this.editActivity(undefined),
                  breadcrumb
                });
              } else {
                const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                _routing.routing.back();
                const breadcrumb = [[this.globalTexts.entities.drafts, '/modules/list?tab=drafts'], [title]];
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  backLink: () => this.editActivity(undefined),
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
              this.#currentAudience = undefined;
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
                this.model.save;
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
            async testActivity(activityId) {
              this.fetching = true;
              const response = await this.model.provider.testActivity(this.#model.id, activityId);
              this.fetching = false;
              return response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfYnJlYWRjcnVtYiIsIl9sZWFybmluZ01vZHVsZXMiLCJfYmFzZSIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJtb2RlbCIsImlkIiwic2F2ZWQiLCJicm9rZXIiLCJMYXlvdXRCcm9rZXIiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJmZXRjaGluZ0RhdGEiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInZpZXciLCJzdGF0ZSIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsImF1ZGllbmNlcyIsImN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlTGV2ZWxzIiwibGV2ZWxzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwibW9kdWxlIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJyZWFkeSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwidGV4dFJlYWR5IiwibG9hZEF1ZGllbmNlcyIsImNhdGVnb3J5Iiwib24iLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiYWN0aXZpdGllcyIsImhhcyIsImVkaXRBY3Rpdml0eSIsImdldCIsInRpdGxlIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsIm5ld0RyYWZ0IiwiZHJhZnRzIiwic2V0Iiwib3ZlcmxheSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY3Rpdml0eSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJiYWNrTGluayIsImFjdGl2aXR5VGl0bGUiLCJ0eXBlcyIsInR5cGUiLCJiYWNrIiwidXBkYXRlIiwic3BlY3MiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJyZXNwb25zZSIsImxvYWRBdWRpZW5jZSIsInRyaWdnZXIiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwiZGF0YSIsImlycmVsZXZhbnQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJ0ZXh0cyIsInN1Z2dlc3Rpb25zIiwicG9zaXRpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiY2xlYXJBbGVydCIsImdldEFjdGl2aXR5RGV0YWlsIiwidGVzdEFjdGl2aXR5IiwiZmV0Y2hpbmciLCJwcm92aWRlciIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFB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