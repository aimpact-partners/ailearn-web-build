System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "zod@3.23.8", "@aimpact/chat-sdk@1.3.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, Credits, LearningModules, LearningModule, Draft, IActivities, IActivityDraftData, ISuggestionResponse, ILearningModuleDraft, IOwnerData, ICreditsConsumptionsData, ActivityType, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    ActivityTypes: void 0,
    Credits: void 0,
    LearningModules: void 0,
    LearningModule: void 0,
    Draft: void 0,
    IActivities: void 0,
    IActivityDraftData: void 0,
    ISuggestionResponse: void 0,
    ILearningModuleDraft: void 0,
    IOwnerData: void 0,
    ICreditsConsumptionsData: void 0,
    ActivityType: void 0,
    IActivityObjective: void 0,
    IActivityBase: void 0,
    IContentTheoryActivity: void 0,
    ICharacterTalkActivity: void 0,
    IDebateActivity: void 0,
    IMultipleChoiceActivity: void 0,
    ISpokenActivity: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactHttpSuite001Api) {
      dependency_1 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesCollection) {
      dependency_2 = _aimpactAilearnSdk100ReactiveEntitiesCollection;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_3 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_4 = _aimpactAilearnSdk100Config;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_5 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }, function (_zod2) {
      dependency_6 = _zod2;
    }, function (_aimpactChatSdk130Session) {
      dependency_7 = _aimpactChatSdk130Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/http-suite/api', dependency_1], ['@aimpact/ailearn-sdk/reactive/entities/collection', dependency_2], ['@aimpact/ailearn-sdk/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['zod', dependency_6], ['@aimpact/chat-sdk/session', dependency_7]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/
      ims.set('./activities/collection', {
        hash: 1226410591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _item = require("./item");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _activityTypes = require("../activity-types");
          /**
           * type
           *
           * 1. Contenido/Teoría (ID: content-theory)
           * 2. Conversación (ID: conversation)
           * 3. Multiple-Choice (ID: multiple-choice):
           * 4. Hablado (ID: spoken)
           * 5. Escrito (ID: written) # Esta no la vamos a usar hasta que implementemos la pantalla de assignments
           */
          class Activities extends _model.ReactiveModel {
            #api;
            #learningModule;
            #map = new Map();
            get items() {
              return [...this.#map.values()];
            }
            #saveTimeout;
            constructor(parent, args) {
              // super({
              // 	entity: 'LearningModuleActivity',
              // 	item: Activity
              // });
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#learningModule = parent;
            }
            getItems() {
              const data = [];
              this.#map.forEach(item => data.push(item.getProperties()));
              return data;
            }
            clear() {
              this.#map.clear();
              this.trigger('change');
            }
            get availableTypes() {
              return _activityTypes.ActivityTypes.items;
            }
            setItems(data) {
              data.forEach((activity, index) => {
                if (this.#map.has(activity.id)) {
                  const item = this.#map.get(activity.id);
                  item.set(activity);
                  return;
                }
                const instance = new _item.Activity(this.#learningModule, {
                  ...activity,
                  index
                });
                this.#map.set(instance.id, instance);
              });
              return {
                updated: true
              };
            }
            set(data) {
              if (Array.isArray(data)) {
                return this.setItems(data);
              }
              if (!data) {
                console.trace('what', data);
              }
              const response = super.set(data);
              // this.types = data.types;
              return response;
            }
            /**
             * Add a new activity to the learning module when it is a Draft
             *
             * @param type
             * @param manual
             * @returns
             */
            async add(type, manual = false) {
              const activity = new _item.Activity(this.#learningModule, {
                type,
                manual,
                learningModule: this.#learningModule,
                order: this.items.length,
                language: this.#learningModule.language
              });
              this.#map.set(activity.id, activity);
              this.#learningModule.saveDraft();
              this.#learningModule.triggerEvent();
              return activity;
            }
            /**
             * TODO: Validate this method
             * @param items
             */
            async reorder(items) {
              items.forEach((item, index) => {
                item.order = index;
              });
              // Clear existing timeout if there is one
              if (this.#saveTimeout) {
                clearTimeout(this.#saveTimeout);
              }
              this.#saveTimeout = setTimeout(() => this.#learningModule.saveDraft(), 500);
              // await this.#parent.saveDraft();
            }
            async remove(id) {
              if (!this.#map.has(id)) {
                console.warn('The activity', id, 'does not exist in the collection');
                return;
              }
              this.#map.delete(id);
              await this.#learningModule.saveDraft();
              this.trigger('change');
            }
            clean() {
              // TODO: Implement this method
            }
            get(id) {
              return this.#map.get(id);
            }
            has(id) {
              return this.#map.has(id);
            }
          }
          exports.Activities = Activities;
        }
      });

      /*********************************
      INTERNAL MODULE: ./activities/item
      *********************************/

      ims.set('./activities/item', {
        hash: 3092270092,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          var _materials = require("./materials");
          var _suggestions = require("../suggestions");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _specs = require("./specs");
          /*bundle*/
          class Activity extends _item.Item {
            #api;
            #suggestions;
            // protected schema = z.object({
            // 	id: z.string(),
            // 	name: z.string(),
            // 	description: z.string().optional()
            // });
            #materials;
            get materials() {
              return this.#materials;
            }
            set materials(value) {
              this.#materials.set(value);
            }
            #specs;
            get specs() {
              return this.#specs;
            }
            set specs(value) {
              this.#specs.set(value);
            }
            #learningModule;
            constructor(learningModule, args = {}) {
              super({
                ...args,
                entity: 'LearningModuleActivity',
                properties: ['id', 'type', 'title', 'description', 'order', 'objective', 'types', 'duration', 'materials', {
                  name: 'specs',
                  object: _specs.ActivitySpecs
                }, 'picture', 'language', 'pictureSuggestions', 'type']
              });
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
              this.#materials = new _materials.ActivityMaterials(this, learningModule);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.initialize(args);
              this.#specs = new _specs.ActivitySpecs();
              console.log(200);
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                if (property === 'specs') {
                  output[property] = this[property].getData();
                  return;
                }
                if (property === 'materials') {
                  if (typeof this.materials?.getData === 'function') {
                    output[property] = this[property]?.getData();
                  }
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            set(data) {
              if (data.materials) {
                this.#materials.set(data.materials);
              }
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                if (property === 'activities' && !data[property]) {
                  return;
                }
                this[property] = data[property];
              });
              this.triggerEvent('properties.changed');
              return {
                updated: true
              };
            }
            async generate(notes) {
              try {
                this.fetching = true;
                const data = await this.#getSuggestions({
                  type: 'activity',
                  id: this.#learningModule.id,
                  activity: this.type,
                  activityId: this.id,
                  language: this.language,
                  notes
                });
                await this.set(data);
                this.#learningModule.saveDraft();
                return data;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.#learningModule.set({
                credits: data.credits
              });
              return data;
            }
            /**
             *
             * @param observations
             */
            async generatePicture(prompt = '') {
              if (!prompt) {
                throw new Error('Prompt is required to generate a picture for the activity.');
              }
              const stringFormat = {
                es: {
                  prefix: 'Ilustación:',
                  sufix: 'genera la imagen en formato 16:9.'
                },
                en: {
                  prefix: 'Illustration:',
                  sufix: 'generate the image in 16:9 format.'
                },
                de: {
                  prefix: 'Illustration:',
                  sufix: 'generieren Sie das Bild im 16:9-Format.'
                }
              };
              const format = stringFormat[this.language] ?? stringFormat.en;
              prompt = `${format.prefix} ${prompt} ${format.sufix}`;
              const {
                url
              } = await this.#suggestions.image({
                prompt,
                size: '1792x1024',
                format: 'url'
              });
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoint = `/modules/drafts/${this.#learningModule.id}/activities/${this.id}/image`;
              const saveResponse = await this.#api.post(endpoint, {
                url
              });
              this.#learningModule.set({
                credits: saveResponse.data.credits
              });
              this.#learningModule.trigger('credits.change');
              this.picture = saveResponse.data.picture;
              this.triggerEvent('image.generated');
              if (!saveResponse.status) {
                throw new Error(saveResponse.error);
              }
              return this.picture;
            }
            async clearContent() {
              await this.specs.clear();
              await this.materials.clear();
              await this.#learningModule.saveDraft();
            }
            async save(specs) {
              await this.set(specs);
              return this.#learningModule.saveDraft();
            }
            remove(id) {
              // TODO: Implement this method
            }
          }
          exports.Activity = Activity;
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/materials/index
      ********************************************/

      ims.set('./activities/materials/index', {
        hash: 346519748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ActivityMaterials extends _model.ReactiveModel {
            #api;
            #parent;
            #learningModule;
            #emptyData = {
              article: '',
              synthesis: '',
              introduction: '',
              dyslexia: '',
              flashcard: {}
            };
            constructor(parent, module) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
              this.#learningModule = module;
            }
            getData() {
              return this.getProperties();
            }
            clear() {
              this.set(this.#emptyData);
            }
            async generateContent(notes) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/article`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  objective: this.#parent.specs.objective,
                  notes
                });
                await this.#learningModule.set({
                  credits: data.credits
                });
                this.#learningModule.trigger('credits.change');
                if (!status) {
                  throw new Error('error generating article material');
                }
                this.set(data);
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generate(name, notes) {
              try {
                this.fetching = true;
                if (name === 'article') return this.generateContent(notes);
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/LearningModules/${this.#learningModule.id}/activities/${this.#parent.id}/materials`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  type: this.#parent.type,
                  description: this.#parent.description,
                  article: this.article,
                  language: this.#parent.language,
                  objective: this.#parent.specs.objective,
                  notes
                });
                if (!status) {
                  throw new Error('error generating materials');
                }
                await Promise.all([this.set(data), this.#learningModule.saveDraft(), this.#learningModule.set({
                  credits: data.credits
                })]);
                this.#learningModule.trigger('credits.change');
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/specs
      **********************************/

      ims.set('./activities/specs', {
        hash: 3739784254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          class ActivitySpecs extends _model.ReactiveModel {
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'instructions', 'objectives', 'questions', 'role', 'subject', 'task', 'assessment', 'criteria']
              });
            }
            empty() {
              return true;
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /********************************
      INTERNAL MODULE: ./activity-types
      ********************************/

      ims.set('./activity-types', {
        hash: 2374617754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityTypes = void 0;
          var _moduleActivities = require("./types/module-activities");
          class Types {
            #types = [{
              id: _moduleActivities.ActivityType.ContentTheory,
              name: 'Content/Theory',
              specs: ['objective'],
              aiContent: ['title', 'description', 'objective'],
              materials: [{
                name: 'article'
              }, {
                dependencies: 'article',
                name: 'synthesis'
              }, {
                dependencies: 'article',
                name: 'dyslexia'
              }, {
                dependencies: ['article'],
                name: 'audios'
              }],
              fields: ['language']
            }, {
              id: _moduleActivities.ActivityType.Debate,
              name: 'Debate',
              specs: ['objective', 'subject'],
              aiContent: ['title', 'description', 'objective']
            }, {
              id: _moduleActivities.ActivityType.CharacterTalk,
              name: 'Character Talk',
              specs: ['objective', 'role'],
              aiContent: ['title', 'description', 'objective', 'role'],
              fields: ['language']
            }, {
              id: _moduleActivities.ActivityType.MultipleChoice,
              name: 'Multiple-Choice',
              //specs: ['objective', 'related'],
              specs: ['questions'],
              materials: [],
              suggestions: 'questions',
              fields: ['questions', 'language']
            },
            // { id: 'written/spoken', name: 'Spoken' },
            {
              id: _moduleActivities.ActivityType.Spoken,
              name: 'Spoken',
              aiContent: ['title', 'description', 'objective'],
              fields: ['language'],
              specs: ['objective', 'assessment', 'task', {
                name: 'criteria',
                fields: ['name', 'subject']
              }]
            }];
            get items() {
              return this.#types;
            }
            #map = new Map();
            get entries() {
              return this.#map;
            }
            constructor() {
              this.#types.forEach(type => {
                this.#map.set(type.id, type.id);
              });
            }
            get(id) {
              return this.#map.get(id);
            }
          }
          /*bundle*/
          const ActivityTypes = exports.ActivityTypes = new Types();
        }
      });

      /****************************************
      INTERNAL MODULE: ./assignments/collection
      ****************************************/

      ims.set('./assignments/collection', {
        hash: 2151746492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@aimpact/ailearn-sdk/reactive/entities/collection");
          class Assignments extends _collection.Collection {
            constructor(args) {
              super(args);
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 1059948364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          var _zod = require("zod");
          class Assignment extends _item.Item {
            schema = _zod.z.object({
              id: _zod.z.string(),
              name: _zod.z.string(),
              description: _zod.z.string().optional()
            });
            constructor(args = {}) {
              super({
                ...args,
                properties: []
              });
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /*****************************
      INTERNAL MODULE: ./coins/index
      *****************************/

      ims.set('./coins/index', {
        hash: 2098827924,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            get available() {
              return this.total - this.consumed || 0;
            }
            constructor(...args) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /*****************************
      INTERNAL MODULE: ./coins/types
      *****************************/

      ims.set('./coins/types', {
        hash: 2037358772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./collection
      ****************************/

      ims.set('./collection', {
        hash: 2666864610,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _collection = require("@aimpact/ailearn-sdk/reactive/entities/collection");
          /*bundle*/ //your code here
          class LearningModules extends _collection.Collection {
            constructor(args) {
              super({
                entity: 'LearningModule',
                ...args
              });
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /***************************
      INTERNAL MODULE: ./community
      ***************************/

      ims.set('./community', {
        hash: 2259507323,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          var _suggestions = require("./suggestions");
          var _collection = require("./activities/collection");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _coins = require("./coins");
          var _provider = require("./provider");
          /*bundle */ //your code here
          class LearningModule extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
            #api;
            #assignments;
            #credits;
            get credits() {
              return {
                ...this.#credits.getProperties(),
                available: this.#credits.available
              };
            }
            set credits(data) {
              if (!data) return;
              this.#credits.set(data);
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              type = 'module',
              ...args
            }) {
              super({
                id,
                entity: 'LearningModule',
                dataProvider: _provider.ModuleProvider,
                properties: ['id', 'title', 'description', 'status', 'userId', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually]
                ]
              }); // super call ends.
              this.#credits = new _coins.Credits();
              this.#suggestions = new _suggestions.Suggestions();
              this.#credits = new _coins.Credits();
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
              this.#activities = new _collection.Activities(this);
              this.#activities.on('change', this.triggerEvent);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.initialize({
                ...args
              });
            }
            set(data) {
              const response = super.set(data);
              if (data.assignments) {
                this.#assignments.set(data.assignments);
              }
              // if (!this.owner) this.owner = this.creator;
              this.credits = data.credits;
              if (data.activities) {
                this.#activities.set(data.activities);
              }
              return response;
            }
            async saveDraft(specs = {}) {
              const data = {
                ...this.getProperties(),
                ...specs,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.#saved = true;
              const response = super.publish(data);
              LearningModule.instances.set(this.id, this);
              return response;
            }
            /**
             *
             * This method generates the suggestions for the module and saves the draft
             * @param values
             */
            async getModuleSuggestion(values) {
              try {
                this.fetchingDraft = true;
                this.set(values);
                const data = await this.#getSuggestions({
                  id: this.id,
                  objective: this.objective,
                  type: 'module',
                  observations: values.notes,
                  notes: values.notes
                  // test: true
                });
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                await this.set({
                  ...data,
                  id: data.id,
                  state: 'mudule-generated'
                });
                await this.saveDraft({
                  state: 'confirmed'
                });
                this.fetchingDraft = false;
                this.triggerEvent('activities.generated');
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetchingDraft = false;
              }
            }
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.#credits.set(data.credits);
              this.trigger('credits.change');
              return data;
            }
            async load() {
              const data = await this.dataProvider.load();
              this.set(data);
              this.activities.setItems(data.activities);
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /***********************
      INTERNAL MODULE: ./draft
      ***********************/

      ims.set('./draft', {
        hash: 2515652358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Draft = void 0;
          var _suggestions = require("./suggestions");
          var _collection = require("./activities/collection");
          var _coins = require("./coins");
          var _item = require("./item");
          /*bundle */ //your code here
          class Draft extends _item.LearningModule {
            #suggestions;
            #saved;
            #assignments;
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            #credits;
            get credits() {
              return {
                ...this.#credits.getProperties(),
                available: this.#credits.available
              };
            }
            set credits(data) {
              if (!data) return;
              this.#credits.set(data);
            }
            get valid() {
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              type = 'module',
              ...args
            }) {
              super({
                id,
                type,
                ...args
              });
              this.#suggestions = new _suggestions.Suggestions();
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
              this.#activities = new _collection.Activities(this);
              this.#activities.on('change', this.triggerEvent);
              this.#credits = new _coins.Credits();
              this.initialize({
                ...args
              });
            }
            async saveDraft(specs = {}) {
              const data = {
                ...this.getProperties(),
                ...specs,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.#saved = true;
              const response = super.publish(data);
              return response;
            }
            /**
             *
             * This method generates the suggestions for the module and saves the draft
             * @param values
             */
            async getModuleSuggestion(values) {
              try {
                this.fetchingDraft = true;
                this.set(values);
                const data = await this.#getSuggestions({
                  id: this.id,
                  objective: this.objective,
                  type: 'module',
                  observations: values.notes,
                  notes: values.notes
                  // test: true
                });
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                await this.set({
                  ...data,
                  id: data.id,
                  state: 'mudule-generated'
                });
                await this.saveDraft({
                  state: 'confirmed'
                });
                this.fetchingDraft = false;
                this.triggerEvent('activities.generated');
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetchingDraft = false;
              }
            }
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.#credits.set(data.credits);
              this.trigger('credits.change');
              return data;
            }
            async load() {
              const data = await this.dataProvider.load();
              this.set(data);
              this.activities.setItems(data.activities);
            }
            consumeCoins = async () => {
              const response = await this.dataProvider.consumeCoins();
              if (!response.status) {
                return response;
              }
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            };
            set(data) {
              const response = super.set(data);
              if (data.assignments) {
                this.#assignments.set(data.assignments);
              }
              // if (!this.owner) this.owner = this.creator;
              this.credits = data.credits;
              return response;
            }
            /**
             * Returns a list of suggestions to be applied to the module
            
             */
            async getObjectiveImprovements({
              objective
            }) {
              try {
                this.fetching = true;
                const data = await this.#getSuggestions({
                  type: 'objective',
                  id: this.id,
                  objective
                });
                /**
                 * the IDraftImprovement interface is a new structure, so now we need to adapt the response to the new structure
                 */
                return data;
                // return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * Generates a refined objective based on the improvements
             * @param objective The original objective
             * @param improvements The improvements to be applied (array of strings)
             * @returns
             */
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.fetching = true;
                const data = await this.#getSuggestions({
                  type: 'objective-refinements',
                  improvements,
                  id: this.id,
                  objective
                });
                return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
            async generatePicture(prompt = '') {
              try {
                if (!prompt) {
                  throw new Error('Prompt is required');
                }
                const stringFormat = {
                  es: {
                    prefix: 'Ilustación:',
                    sufix: 'genera la imagen en formato 16:9.'
                  },
                  en: {
                    prefix: 'Illustration:',
                    sufix: 'generate the image in 16:9 format.'
                  },
                  de: {
                    prefix: 'Illustration:',
                    sufix: 'generieren Sie das Bild im 16:9-Format.'
                  }
                };
                const format = stringFormat[this.language] ?? stringFormat.en;
                prompt = `${format.prefix} ${prompt} ${format.sufix}`;
                const response = await this.#suggestions.image({
                  prompt,
                  size: '1792x1024',
                  format: 'url'
                });
                const saveResponse = await this.dataProvider.savePicture(response.url);
                await this.#credits.set(saveResponse.data.credits);
                this.trigger('credits.change');
                this.picture = `${saveResponse.data.picture}?${performance.now()}`;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
                return this.picture;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Draft = Draft;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 3208751576,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          var _suggestions = require("./suggestions");
          var _collection = require("./activities/collection");
          var _provider = require("./provider");
          /*bundle */ //your code here
          class LearningModule extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
            #assignments;
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              type = 'module',
              ...args
            }) {
              super({
                id,
                entity: 'LearningModule',
                dataProvider: _provider.ModuleProvider,
                properties: ['id', 'title', 'description', 'status', 'userId', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually]
                ]
              }); // super call ends.
              this.#suggestions = new _suggestions.Suggestions();
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
              this.#activities = new _collection.Activities(this);
              this.#activities.on('change', this.triggerEvent);
              this.initialize({
                ...args
              });
            }
            set(data) {
              const response = super.set(data);
              if (data.activities) {
                this.#activities.set(data.activities);
              }
              return response;
            }
            async saveDraft(specs = {}) {
              const data = {
                ...this.getProperties(),
                ...specs,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.#saved = true;
              const response = super.publish(data);
              LearningModule.instances.set(this.id, this);
              return response;
            }
            async load() {
              const data = await this.dataProvider.load();
              this.set(data);
              this.activities.setItems(data.activities);
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /********************************
      INTERNAL MODULE: ./provider/index
      ********************************/

      ims.set('./provider/index', {
        hash: 3075280971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModuleProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            } //
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading module');
              }
              return data;
            };
            list = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${this.#parent.id}`);
              return {
                status,
                data
              };
            };
            async getDraft(id) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${id}`);
              if (!status) {
                throw new Error('error getting module draft');
              }
              return data;
            }
            async delete() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const data = await this.#api.delete(`/modules/drafts/${this.#parent.id}`);
              return data;
            }
            async deleteItem() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const data = await this.#api.delete(`/modules/${this.#parent.id}`);
              return data;
            }
            async publish(specs = {}) {
              if (specs.type === 'draft') return this.saveDraft(specs);
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
            }
            async saveDraft(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/modules/drafts`, specs);
              if (!response.status) {
                //throw new Error('error saving module draft');
              }
              return response;
            }
            async consumeCoins() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              // return this.#api.post(`/assignments/${this.#parent.id}/coins/consume`, {});
              return this.#api.post(`/modules/drafts/${this.#parent.id}/coins/consume`, {});
            }
            async clone({
              moduleId,
              ownerId,
              entity,
              type
            }) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoints = {
                community: `/community/modules/${moduleId}/clone`,
                module: `/modules/${moduleId}/clone`
              };
              const endpoint = endpoints[type] ?? endpoints.module;
              if (_session.sessionWrapper.user.id === ownerId || entity === 'user') {
                return this.#api.post(endpoint, {});
              }
              return this.#api.post(endpoint, {
                organizationId: ownerId,
                entity
              });
            }
            async savePicture(url) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/modules/drafts/${this.#parent.id}/image`, {
                url
              });
              return response;
            }
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /***********************************
      INTERNAL MODULE: ./suggestions/index
      ***********************************/

      ims.set('./suggestions/index', {
        hash: 3772059283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class Suggestions extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.reactiveProps(['type', 'content']);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async generate(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post('/suggestions', {
                  ...specs
                });
                if (!response.status) {
                  let {
                    error: {
                      text: error
                    }
                  } = response;
                  if (error.includes('The related activity')) {
                    return {
                      error: 'NO_RELATED_ACTIVITY'
                    };
                  }
                  if (error.includes('The draft does not have the following parameters to process the suggestion:')) {
                    return {
                      error: 'INCOMPLETE_MODULE',
                      fields: error.split(':')[1]
                    };
                  }
                  return {
                    error
                  };
                }
                return response.data;
              } catch (e) {
                throw new Error(e.message);
              }
            }
            async image(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/images/generate', {
                language: 'es',
                ...specs
              });
              if (!response.status) throw new Error(response.error.code);
              /**
               * openai response return an array, the current model (dalle-3) generates always a unique
               * image, so we return always the first element of the array
               */
              return response.data[0];
            }
          }
          exports.Suggestions = Suggestions;
        }
      });

      /**********************************
      INTERNAL MODULE: ./types/activities
      **********************************/

      ims.set('./types/activities', {
        hash: 4174211568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************
      INTERNAL MODULE: ./types/draft-improvements
      ******************************************/

      ims.set('./types/draft-improvements', {
        hash: 2979653217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./types/drafts
      ******************************/

      ims.set('./types/drafts', {
        hash: 1841187194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 1067830134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./types/interfaces
      **********************************/

      ims.set('./types/interfaces', {
        hash: 3371199714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./types/learning-module
      ***************************************/

      ims.set('./types/learning-module', {
        hash: 3158504342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************
      INTERNAL MODULE: ./types/module-activities
      *****************************************/

      ims.set('./types/module-activities', {
        hash: 70447942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityType = void 0;
          /*bundle*/
          var ActivityType;
          (function (ActivityType) {
            ActivityType["Spoken"] = "spoken";
            ActivityType["MultipleChoice"] = "multiple-choice";
            ActivityType["CharacterTalk"] = "character-talk";
            ActivityType["ContentTheory"] = "content-theory";
            ActivityType["Debate"] = "debate";
            ActivityType["Written"] = "written";
          })(ActivityType || (exports.ActivityType = ActivityType = {}));
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/item",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./activity-types",
        "from": "ActivityTypes",
        "name": "ActivityTypes"
      }, {
        "im": "./coins/index",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./collection",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./community",
        "from": "LearningModule",
        "name": "LearningModule"
      }, {
        "im": "./draft",
        "from": "Draft",
        "name": "Draft"
      }, {
        "im": "./item",
        "from": "LearningModule",
        "name": "LearningModule"
      }, {
        "im": "./types/activities",
        "from": "IActivities",
        "name": "IActivities"
      }, {
        "im": "./types/drafts",
        "from": "IActivityDraftData",
        "name": "IActivityDraftData"
      }, {
        "im": "./types/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
      }, {
        "im": "./types/learning-module",
        "from": "ILearningModuleDraft",
        "name": "ILearningModuleDraft"
      }, {
        "im": "./types/learning-module",
        "from": "IOwnerData",
        "name": "IOwnerData"
      }, {
        "im": "./types/learning-module",
        "from": "ICreditsConsumptionsData",
        "name": "ICreditsConsumptionsData"
      }, {
        "im": "./types/module-activities",
        "from": "ActivityType",
        "name": "ActivityType"
      }, {
        "im": "./types/module-activities",
        "from": "IActivityObjective",
        "name": "IActivityObjective"
      }, {
        "im": "./types/module-activities",
        "from": "IActivityBase",
        "name": "IActivityBase"
      }, {
        "im": "./types/module-activities",
        "from": "IContentTheoryActivity",
        "name": "IContentTheoryActivity"
      }, {
        "im": "./types/module-activities",
        "from": "ICharacterTalkActivity",
        "name": "ICharacterTalkActivity"
      }, {
        "im": "./types/module-activities",
        "from": "IDebateActivity",
        "name": "IDebateActivity"
      }, {
        "im": "./types/module-activities",
        "from": "IMultipleChoiceActivity",
        "name": "IMultipleChoiceActivity"
      }, {
        "im": "./types/module-activities",
        "from": "ISpokenActivity",
        "name": "ISpokenActivity"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./activities/item').Activity : value);
        (require || prop === 'ActivityTypes') && _export("ActivityTypes", ActivityTypes = require ? require('./activity-types').ActivityTypes : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./coins/index').Credits : value);
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./collection').LearningModules : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./community').LearningModule : value);
        (require || prop === 'Draft') && _export("Draft", Draft = require ? require('./draft').Draft : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./item').LearningModule : value);
        (require || prop === 'IActivities') && _export("IActivities", IActivities = require ? require('./types/activities').IActivities : value);
        (require || prop === 'IActivityDraftData') && _export("IActivityDraftData", IActivityDraftData = require ? require('./types/drafts').IActivityDraftData : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./types/index').ISuggestionResponse : value);
        (require || prop === 'ILearningModuleDraft') && _export("ILearningModuleDraft", ILearningModuleDraft = require ? require('./types/learning-module').ILearningModuleDraft : value);
        (require || prop === 'IOwnerData') && _export("IOwnerData", IOwnerData = require ? require('./types/learning-module').IOwnerData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./types/learning-module').ICreditsConsumptionsData : value);
        (require || prop === 'ActivityType') && _export("ActivityType", ActivityType = require ? require('./types/module-activities').ActivityType : value);
        (require || prop === 'IActivityObjective') && _export("IActivityObjective", IActivityObjective = require ? require('./types/module-activities').IActivityObjective : value);
        (require || prop === 'IActivityBase') && _export("IActivityBase", IActivityBase = require ? require('./types/module-activities').IActivityBase : value);
        (require || prop === 'IContentTheoryActivity') && _export("IContentTheoryActivity", IContentTheoryActivity = require ? require('./types/module-activities').IContentTheoryActivity : value);
        (require || prop === 'ICharacterTalkActivity') && _export("ICharacterTalkActivity", ICharacterTalkActivity = require ? require('./types/module-activities').ICharacterTalkActivity : value);
        (require || prop === 'IDebateActivity') && _export("IDebateActivity", IDebateActivity = require ? require('./types/module-activities').IDebateActivity : value);
        (require || prop === 'IMultipleChoiceActivity') && _export("IMultipleChoiceActivity", IMultipleChoiceActivity = require ? require('./types/module-activities').IMultipleChoiceActivity : value);
        (require || prop === 'ISpokenActivity') && _export("ISpokenActivity", ISpokenActivity = require ? require('./types/module-activities').ISpokenActivity : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIl9hY3Rpdml0eVR5cGVzIiwiQWN0aXZpdGllcyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJsZWFybmluZ01vZHVsZSIsIm1hcCIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwic2F2ZVRpbWVvdXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImFyZ3MiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJnZXRJdGVtcyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJnZXRQcm9wZXJ0aWVzIiwiY2xlYXIiLCJ0cmlnZ2VyIiwiYXZhaWxhYmxlVHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsImNvbnNvbGUiLCJ0cmFjZSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsIm9yZGVyIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJ0cmlnZ2VyRXZlbnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsIndhcm4iLCJkZWxldGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfbWF0ZXJpYWxzIiwiX3N1Z2dlc3Rpb25zIiwiX3Nlc3Npb24iLCJfc3BlY3MiLCJJdGVtIiwic3VnZ2VzdGlvbnMiLCJtYXRlcmlhbHMiLCJ2YWx1ZSIsInNwZWNzIiwiZW50aXR5IiwicHJvcGVydGllcyIsIm5hbWUiLCJvYmplY3QiLCJBY3Rpdml0eVNwZWNzIiwiU3VnZ2VzdGlvbnMiLCJBY3Rpdml0eU1hdGVyaWFscyIsImluaXRpYWxpemUiLCJsb2ciLCJnZXREYXRhIiwib3V0cHV0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsImUiLCJFcnJvciIsIm1lc3NhZ2UiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJjcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0Iiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsInNhdmUiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJtb2R1bGUiLCJnZW5lcmF0ZUNvbnRlbnQiLCJ0aXRsZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiUHJvbWlzZSIsImFsbCIsImVtcHR5IiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsImZpZWxkcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsImVudHJpZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIl96b2QiLCJBc3NpZ25tZW50Iiwic2NoZW1hIiwieiIsInN0cmluZyIsIm9wdGlvbmFsIiwiQ3JlZGl0cyIsImF2YWlsYWJsZSIsInRvdGFsIiwiY29uc3VtZWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkxlYXJuaW5nTW9kdWxlcyIsIl9jb2lucyIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJkYXRhUHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJvbiIsInB1Ymxpc2giLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsInN0YXRlIiwibG9hZCIsIkRyYWZ0IiwidmFsaWQiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwiY2xvbmUiLCJtb2R1bGVJZCIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInJlYWN0aXZlUHJvcHMiLCJ0ZXh0IiwiaW5jbHVkZXMiLCJzcGxpdCIsImNvZGUiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jb2lucy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9kcmFmdC50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyL2luZGV4LnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUlBLElBQUFJLGNBQUEsR0FBQUosT0FBQTtVQUNBOzs7Ozs7Ozs7VUFTTSxNQUFPSyxVQUFXLFNBQVFKLE1BQUEsQ0FBQUssYUFBeUI7WUFDeEQsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUM7WUFDL0I7WUFDQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QjtjQUNBO2NBQ0E7Y0FDQTtjQUNBLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBVCxHQUFJLEdBQUcsSUFBSVIsSUFBQSxDQUFBa0IsR0FBRyxDQUFDZCxPQUFBLENBQUFlLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQWIsY0FBZSxHQUFHTyxNQUFNO1lBQzlCO1lBRUFPLFFBQVFBLENBQUE7Y0FDUCxNQUFNQyxJQUFJLEdBQTBCLEVBQUU7Y0FDdEMsSUFBSSxDQUFDLENBQUFkLEdBQUksQ0FBQ2UsT0FBTyxDQUFDQyxJQUFJ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