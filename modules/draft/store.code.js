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
        hash: 3735242652,
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
            isStore = true;
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
            editActivity(activity) {
              this.#activitySelected = activity;
              this.view = activity ? 'activity' : null;
              //@ts-ignore
              globalThis.activity = this.#activitySelected;
              if (activity) {
                _mainLayout.LayoutBroker.overlay = true;
                _routing.routing.pushState(`/modules/management?id=${this.model.id}&activityId=${activity.id}`);
                _mainLayout.LayoutBroker.backLink = () => this.editActivity(undefined);
                // this.broker.breadcrumb.getItem('management').link = () => this.editActivity(undefined);
                // this.broker.breadcrumb.addItem('activity', {
                // 	label: this.texts.activities.types[activity.type]
                // });
              } else {
                _mainLayout.LayoutBroker.overlay = false;
                _routing.routing.back();
                this.broker.breadcrumb.getItem('management').link = undefined;
                this.broker.breadcrumb.removeItem('activity');
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
                if (activityId && this.#model.activities.has(activityId)) {
                  this.editActivity(this.#model.activities.get(activityId));
                }
                this.#model.on('change', this.triggerEvent);
                this.#saved = !!id;
                _mainLayout.LayoutBroker.addModel(this.#model, true);
                _mainLayout.LayoutBroker.canConsumeCredits = this.#saved;
                super.ready = true;
                this.triggerEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfYnJlYWRjcnVtYiIsIl9sZWFybmluZ01vZHVsZXMiLCJfYmFzZSIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX3JvdXRpbmciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImlzU3RvcmUiLCJhbGVydCIsInVybCIsInN0b3JlIiwibW9kZWwiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsImN1cnJlbnRQcm9jZXNzIiwiZmV0Y2hpbmdEYXRhIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJ2aWV3Iiwic3RhdGUiLCJvd25lcnNoaXBzIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImxhYmVsIiwiZGlzcGxheU5hbWUiLCJtYXAiLCJpdGVtIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJhY3Rpdml0eVNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJvYmplY3RpdmUiLCJ0b3RhbEFjdGl2aXRpZXMiLCJsYW5ndWFnZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJhdWRpZW5jZXMiLCJjdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUxldmVscyIsImxldmVscyIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsIm1vZHVsZSIsImdsb2JhbFRoaXMiLCJyZWFjdGl2ZVByb3BzIiwic2V0Q3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VJZCIsImZpbmQiLCJoaWRlIiwicmVhZHkiLCJ1bmRlZmluZWQiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwiZWRpdEFjdGl2aXR5IiwiYWN0aXZpdHkiLCJvdmVybGF5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImJhY2tMaW5rIiwiYmFjayIsImdldEl0ZW0iLCJsaW5rIiwicmVtb3ZlSXRlbSIsInVwZGF0ZSIsInNwZWNzIiwic3RhdHVzIiwic2F2ZURyYWZ0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxvYWQiLCJhY3Rpdml0eUlkIiwiRHJhZnQiLCJ0ZXh0UmVhZHkiLCJhY3Rpdml0aWVzIiwiaGFzIiwiZ2V0Iiwib24iLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwibG9hZEF1ZGllbmNlcyIsInJlc3BvbnNlIiwibG9hZEF1ZGllbmNlIiwidHJpZ2dlciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJjbGVhbiIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJkYXRhIiwiaXJyZWxldmFudCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInRleHRzIiwic3VnZ2VzdGlvbnMiLCJ0eXBlIiwicG9zaXRpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiY2xlYXJBbGVydCIsImdldEFjdGl2aXR5RGV0YWlsIiwidGl0bGUiLCJ0ZXN0QWN0aXZpdHkiLCJmZXRjaGluZyIsInByb3ZpZGVyIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL3N0b3JlLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEs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