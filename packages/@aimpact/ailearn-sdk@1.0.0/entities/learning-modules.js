System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "zod@3.23.8", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/reactive/model"], function (_export, _context) {
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
    }, function (_aimpactAilearnSdk100Config) {
      dependency_3 = _aimpactAilearnSdk100Config;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_4 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }, function (_zod2) {
      dependency_5 = _zod2;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_7 = _aimpactAilearnSdk100ReactiveModel;
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
      __pkg.dependencies.update([['@aimpact/http-suite/api', dependency_1], ['@aimpact/ailearn-sdk/reactive/entities/collection', dependency_2], ['@aimpact/ailearn-sdk/config', dependency_3], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_4], ['zod', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/reactive/model', dependency_7]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/
      ims.set('./activities/collection', {
        hash: 2229835211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _collection = require("@aimpact/ailearn-sdk/reactive/entities/collection");
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
          class Activities extends _collection.Collection {
            #api;
            #learningModule;
            #items = new Map();
            #saveTimeout;
            constructor(parent, args) {
              super({
                entity: 'LearningModuleActivity',
                item: _item.Activity
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#learningModule = parent;
            }
            getItems() {
              const data = [];
              this.#items.forEach(item => data.push(item.getData()));
              return data;
            }
            clear() {
              this.#items.clear();
              this.trigger('change');
            }
            get availableTypes() {
              return _activityTypes.ActivityTypes.items;
            }
            setItems(data) {
              data.forEach((activity, index) => {
                if (this.#items.has(activity.id)) {
                  const item = this.#items.get(activity.id);
                  item.set(activity);
                  return;
                }
                const instance = new _item.Activity(this.#learningModule, {
                  ...activity,
                  index
                });
                this.#items.set(instance.id, instance);
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
            async add(type, manual = false) {
              console.log(0.1, type);
              const activity = new _item.Activity(this.#learningModule, {
                type,
                manual,
                learningModule: this.#learningModule,
                order: this.items.length,
                language: this.#learningModule.language
              });
              this.#items.set(activity.id, activity);
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
            remove(id) {
              // TODO: Implement this method
            }
            clean() {
              // TODO: Implement this method
            }
            get(id) {
              return this.#items.get(id);
            }
            has(id) {
              return this.#items.has(id);
            }
          }
          exports.Activities = Activities;
        }
      });

      /*********************************
      INTERNAL MODULE: ./activities/item
      *********************************/

      ims.set('./activities/item', {
        hash: 3827890061,
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
            #learningModule;
            constructor(learningModule, args = {}) {
              super({
                ...args,
                entity: 'LearningModuleActivity',
                properties: ['id', 'type', 'title', 'description', 'order', 'objective', 'types', 'duration', 'materials', 'specs', 'picture', 'language', 'pictureSuggestions', 'type']
              });
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
              this.#materials = new _materials.ActivityMaterials(this, learningModule);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.initialize(args);
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
        hash: 2016134648,
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
              this.set(this.#emptyData, true);
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
        hash: 2320960941,
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
        hash: 1632592207,
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
        hash: 3754741454,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb2xsZWN0aW9uIiwiX2l0ZW0iLCJfY29uZmlnIiwiX2FjdGl2aXR5VHlwZXMiLCJBY3Rpdml0aWVzIiwiQ29sbGVjdGlvbiIsImFwaSIsImxlYXJuaW5nTW9kdWxlIiwiaXRlbXMiLCJNYXAiLCJzYXZlVGltZW91dCIsImNvbnN0cnVjdG9yIiwicGFyZW50IiwiYXJncyIsImVudGl0eSIsIml0ZW0iLCJBY3Rpdml0eSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImdldEl0ZW1zIiwiZGF0YSIsImZvckVhY2giLCJwdXNoIiwiZ2V0RGF0YSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInNldEl0ZW1zIiwiYWN0aXZpdHkiLCJpbmRleCIsImhhcyIsImlkIiwiZ2V0Iiwic2V0IiwiaW5zdGFuY2UiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc29sZSIsInRyYWNlIiwicmVzcG9uc2UiLCJhZGQiLCJ0eXBlIiwibWFudWFsIiwibG9nIiwib3JkZXIiLCJsZW5ndGgiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2F2ZURyYWZ0IiwicmVtb3ZlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiSXRlbSIsInN1Z2dlc3Rpb25zIiwibWF0ZXJpYWxzIiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiU3VnZ2VzdGlvbnMiLCJBY3Rpdml0eU1hdGVyaWFscyIsImluaXRpYWxpemUiLCJvdXRwdXQiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsInNwZWNzIiwiY3JlZGl0cyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsIm1vZHVsZSIsImdldFByb3BlcnRpZXMiLCJuYW1lIiwiZ2VuZXJhdGVDb250ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsIlByb21pc2UiLCJhbGwiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiZmllbGRzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwibWFwIiwiZW50cmllcyIsIkFzc2lnbm1lbnRzIiwiX3pvZCIsIkFzc2lnbm1lbnQiLCJzY2hlbWEiLCJ6Iiwib2JqZWN0Iiwic3RyaW5nIiwib3B0aW9uYWwiLCJDcmVkaXRzIiwiYXZhaWxhYmxlIiwidG90YWwiLCJjb25zdW1lZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiTGVhcm5pbmdNb2R1bGVzIiwiX2NvaW5zIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsImRhdGFQcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsIm9uIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJ2YWx1ZXMiLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwid2FybiIsInN0YXRlIiwibG9hZCIsIkRyYWZ0IiwidmFsaWQiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGUiLCJkZWxldGVJdGVtIiwiY2xvbmUiLCJtb2R1bGVJZCIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInJlYWN0aXZlUHJvcHMiLCJ0ZXh0IiwiaW5jbHVkZXMiLCJzcGxpdCIsImNvZGUiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY29pbnMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvZHJhZnQudHMiLCIvaXRlbS50cyIsIi9wcm92aWRlci9pbmRleC50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9kcmFmdHMudHMiLCIvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsSUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBSUEsSUFBQUksY0FBQSxHQUFBSixPQUFBO1VBQ0E7Ozs7Ozs7OztVQVNNLE1BQU9LLFVBQVcsU0FBUUosV0FBQSxDQUFBSyxVQUFvQjtZQUNuRCxDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsY0FBZTtZQUVmLENBQUFDLEtBQU0sR0FBbUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2xELENBQUFDLFdBQVk7WUFDWkMsWUFBWUMsTUFBTSxFQUFFQyxJQUFLO2NBQ3hCLEtBQUssQ0FBQztnQkFDTEMsTUFBTSxFQUFFLHdCQUF3QjtnQkFDaENDLElBQUksRUFBRWQsS0FBQSxDQUFBZTtlQUNOLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQVYsR0FBSSxHQUFHLElBQUlSLElBQUEsQ0FBQW1CLEdBQUcsQ0FBQ2YsT0FBQSxDQUFBZ0IsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBZCxjQUFlLEdBQUdLLE1BQU07WUFDOUI7WUFFQVUsUUFBUUEsQ0FBQTtjQUNQLE1BQU1DLElBQUksR0FBMEIsRUFBRTtjQUN0QyxJQUFJLENBQUMsQ0FBQWYsS0FBTSxDQUFDZ0IsT0FBTyxDQUFDVCxJQUFJLElBQUlRLElBQUksQ0FBQ0UsSUFBSSxDQUFDVixJQUFJLENBQUNXLE9BQU8sRUFBRSxDQUFDLENBQUM7Y0FDdEQsT0FBT0gsSUFBSTtZQUNaO1lBRUFJLEtBQUtBLENBQUE7Y0FDSixJ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