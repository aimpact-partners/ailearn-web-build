System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "zod@3.23.8", "@aimpact/chat-sdk@1.3.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, Credits, LearningModules, LearningModule, Draft, IActivityDraftData, ISuggestionResponse, ILearningModuleDraft, IOwnerData, ICreditsConsumptionsData, ActivityType, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    ActivityTypes: void 0,
    Credits: void 0,
    LearningModules: void 0,
    LearningModule: void 0,
    Draft: void 0,
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
        hash: 548247337,
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
            get valid() {
              return this.items.every(item => item.state === 'completed');
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
                order: this.items.length,
                language: this.#learningModule.language
              });
              this.#map.set(activity.id, activity);
              await this.#learningModule.saveDraft();
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
        hash: 1293539183,
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
          var _factory = require("./specs/factory");
          /*bundle*/
          class Activity extends _item.Item {
            #api;
            #suggestions;
            get state() {
              return this.specs.valid ? 'completed' : 'processing';
            }
            get prepared() {
              return this.specs.objective && this.title && this.description;
            }
            #learningModule;
            constructor(learningModule, args = {}) {
              super({
                ...args,
                entity: 'LearningModuleActivity',
                properties: ['id', 'type', 'title', 'description', 'order', 'types', 'duration', {
                  name: 'materials',
                  value: _materials.ActivityMaterials
                }, {
                  name: 'specs',
                  value: _factory.ActivitySpecsFactory.get(args.type)
                }, 'picture', 'language', 'pictureSuggestions', 'type']
              });
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.initialize(args);
              this.specs?.setParents(this, this.#learningModule);
              this.specs.on('properties.changed', () => {
                this.triggerEvent('properties.changed');
              });
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                if (property === 'specs') {
                  output[property] = this[property].getData();
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            set(data) {
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
              // await this.specs.clear();
              await this.materials?.clear();
              await this.#learningModule.saveDraft();
            }
            async save(specs) {
              if (specs) await this.set(specs);
              super.save(this.getProperties());
              const response = await this.#learningModule.saveDraft();
              this.trigger('activity.saved');
              return response;
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
        hash: 2206785813,
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

      /***************************************
      INTERNAL MODULE: ./activities/specs/base
      ***************************************/

      ims.set('./activities/specs/base', {
        hash: 2141602017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _suggestions = require("../../suggestions");
          class ActivitySpecs extends _model.ReactiveModel {
            get structure() {
              return {};
            }
            #learningModule;
            #parent;
            #suggestions;
            get suggestions() {
              return this.#suggestions;
            }
            get valid() {
              const isArrayValid = (array, fields) => Array.isArray(array) && array.length > 0 && array.every(item => Object.keys(fields).every(field => item[field]));
              return Object.entries(this.structure).every(([property, config]) => {
                if (config.type === 'array') {
                  return isArrayValid(this[property], config.fields);
                } else if (config.optional) {
                  return true;
                }
                return !!this[property];
              });
            }
            constructor(args = {
              properties: []
            }) {
              super({
                ...args,
                properties: ['objective', ...args.properties]
              });
              this.#suggestions = new _suggestions.Suggestions();
            }
            empty() {
              const elements = this.properties.find(prop => {
                return prop !== 'objective' && [undefined, null, ''].includes(this[prop]);
              });
              return !!(elements && elements.length >= 0);
            }
            setParents(parent, learningModule) {
              this.#parent = parent;
              this.#learningModule = learningModule;
            }
            set(properties) {
              super.set(properties);
              this.trigger('properties.changed');
              return {
                updated: true
              };
            }
            async clear() {
              this.properties.forEach(property => {
                if (property === 'objective') return;
                this[property] = undefined;
              });
              this.trigger('specs.cleaned');
            }
            async generate(notes, specs) {
              this.fetching = true;
              try {
                const data = await this.suggestions.generate({
                  type: 'specifications',
                  id: this.#learningModule.id,
                  activityId: this.#parent.id,
                  activity: this.#parent.type,
                  // todo: in some place the notes is a string, in others it's an object
                  // we need to standardize this
                  notes: typeof notes === 'string' ? notes : notes?.notes,
                  ...specs
                });
                await this.set(data);
                this.#parent.save();
                this.trigger('specs.generated');
                return data;
              } catch (e) {
                this.fetching = false;
                throw e;
              }
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/character-talk
      *************************************************/

      ims.set('./activities/specs/character-talk', {
        hash: 4214139210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivitySpecs = void 0;
          var _base = require("./base");
          class CharacterTalkActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                role: 'input',
                task: 'textarea',
                assessment: 'textarea',
                objectives: {
                  type: 'array',
                  fields: {
                    name: 'input',
                    objective: 'textarea'
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'assessment']
              });
            }
          }
          exports.CharacterTalkActivitySpecs = CharacterTalkActivitySpecs;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/chat
      ***************************************/

      ims.set('./activities/specs/chat', {
        hash: 3437788342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatActivitySpecs = void 0;
          var _base = require("./base");
          class ChatActivitySpecs extends _base.ActivitySpecs {
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'objectives']
              });
            }
          }
          exports.ChatActivitySpecs = ChatActivitySpecs;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/content-theory
      *************************************************/

      ims.set('./activities/specs/content-theory', {
        hash: 4292214338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivitySpecs = void 0;
          var _base = require("./base");
          class ContentTheoryActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                task: 'textarea',
                assessment: 'textarea',
                objectives: {
                  type: 'array',
                  fields: {
                    name: 'input',
                    objective: 'textarea'
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'assessment']
              });
            }
          }
          exports.ContentTheoryActivitySpecs = ContentTheoryActivitySpecs;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/debate
      *****************************************/

      ims.set('./activities/specs/debate', {
        hash: 1779215609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivitySpecs = void 0;
          var _base = require("./base");
          class DebateActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                task: 'textarea',
                assessment: {
                  type: 'textarea',
                  optional: true
                },
                subject: 'textarea',
                objectives: {
                  type: 'array',
                  fields: {
                    name: 'input',
                    objective: 'textarea'
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'subject', 'objectives', 'task', 'assessment']
              });
            }
          }
          exports.DebateActivitySpecs = DebateActivitySpecs;
        }
      });

      /******************************************
      INTERNAL MODULE: ./activities/specs/factory
      ******************************************/

      ims.set('./activities/specs/factory', {
        hash: 3925601858,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecsFactory = void 0;
          var _characterTalk = require("./character-talk");
          var _chat = require("./chat");
          var _contentTheory = require("./content-theory");
          var _debate = require("./debate");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ActivitySpecsFactory {
            static registry = new Map();
            static register(type, ctor) {
              this.registry.set(type, ctor);
            }
            static create(type) {
              const instance = this.registry.get(type);
              if (!instance) {
                throw new Error(`Activity type "${type}" is not registered.`);
              }
              return new instance();
            }
            static get(type) {
              if (!this.registry.has(type)) {
                console.warn(`the activity type passed is not registered, type: ${type}`);
              }
              return this.registry.get(type);
            }
          }
          // Registering the activity types
          exports.ActivitySpecsFactory = ActivitySpecsFactory;
          ActivitySpecsFactory.register('chat', _chat.ChatActivitySpecs);
          ActivitySpecsFactory.register('debate', _debate.DebateActivitySpecs);
          ActivitySpecsFactory.register('character-talk', _characterTalk.CharacterTalkActivitySpecs);
          ActivitySpecsFactory.register('content-theory', _contentTheory.ContentTheoryActivitySpecs);
          ActivitySpecsFactory.register('multiple-choice', _multipleChoice.MultipleChoiceActivitySpecs);
          ActivitySpecsFactory.register('spoken', _spoken.SpokenActivitySpecs);
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/multiple-choice
      **************************************************/

      ims.set('./activities/specs/multiple-choice', {
        hash: 1371525273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _base = require("./base");
          class MultipleChoiceActivitySpecs extends _base.ActivitySpecs {
            constructor(args = {}) {
              super({
                ...args,
                properties: ['questions']
              });
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/spoken
      *****************************************/

      ims.set('./activities/specs/spoken', {
        hash: 3033807269,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivitySpecs = void 0;
          var _base = require("./base");
          class SpokenActivitySpecs extends _base.ActivitySpecs {
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
          exports.SpokenActivitySpecs = SpokenActivitySpecs;
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
        hash: 3529047913,
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
            // #credits: Credits;
            // get credits(): ICredit {
            // 	return { ...(this.#credits.getProperties() as ICredit), available: this.#credits.available };
            // }
            // set credits(data: Partial<ICredit>) {
            // 	if (!data) return;
            // 	this.#credits.set(data);
            // }
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
                properties: [{
                  name: 'credits',
                  value: _coins.Credits
                }],
                ...args
              });
              this.#suggestions = new _suggestions.Suggestions();
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
              this.#activities = new _collection.Activities(this);
              this.#activities.on('change', this.triggerEvent);
              // this.#credits = new Credits();
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
              await this.set(data);
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
              if (data?.activities) {
                this.#activities.set(data?.activities);
              }
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
                this.set(saveResponse.data);
                // await this.#credits.set(saveResponse.data.credits);
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
        hash: 1030789735,
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
            get valid() {
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            get completed() {
              return this.valid && this.activities.valid;
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              properties,
              type = 'module',
              ...args
            }) {
              super({
                id,
                entity: 'LearningModule',
                dataProvider: _provider.ModuleProvider,
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually]
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
        hash: 2813416681,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIl9hY3Rpdml0eVR5cGVzIiwiQWN0aXZpdGllcyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJsZWFybmluZ01vZHVsZSIsIm1hcCIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwic2F2ZVRpbWVvdXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImFyZ3MiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJnZXRJdGVtcyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJnZXRQcm9wZXJ0aWVzIiwidmFsaWQiLCJldmVyeSIsInN0YXRlIiwiY2xlYXIiLCJ0cmlnZ2VyIiwiYXZhaWxhYmxlVHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsImNvbnNvbGUiLCJ0cmFjZSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsIm9yZGVyIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsIndhcm4iLCJkZWxldGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfbWF0ZXJpYWxzIiwiX3N1Z2dlc3Rpb25zIiwiX3Nlc3Npb24iLCJfZmFjdG9yeSIsIkl0ZW0iLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW50aXR5IiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJTdWdnZXN0aW9ucyIsImluaXRpYWxpemUiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZXREYXRhIiwib3V0cHV0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsImUiLCJFcnJvciIsIm1lc3NhZ2UiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJjcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0Iiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsIm1hdGVyaWFscyIsInNhdmUiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJtb2R1bGUiLCJnZW5lcmF0ZUNvbnRlbnQiLCJQcm9taXNlIiwiYWxsIiwiQWN0aXZpdHlTcGVjcyIsInN0cnVjdHVyZSIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwiZW50cmllcyIsImNvbmZpZyIsIm9wdGlvbmFsIiwiZW1wdHkiLCJlbGVtZW50cyIsImZpbmQiLCJwcm9wIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwicm9sZSIsInRhc2siLCJhc3Nlc3NtZW50Iiwib2JqZWN0aXZlcyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiX3pvZCIsIkFzc2lnbm1lbnQiLCJzY2hlbWEiLCJ6Iiwib2JqZWN0Iiwic3RyaW5nIiwiQ3JlZGl0cyIsImF2YWlsYWJsZSIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkxlYXJuaW5nTW9kdWxlcyIsIl9jb2lucyIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImFjdGl2aXRpZXMiLCJkYXRhUHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJsb2FkIiwiRHJhZnQiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb21wbGV0ZWQiLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwiY2xvbmUiLCJtb2R1bGVJZCIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInJlYWN0aXZlUHJvcHMiLCJ0ZXh0Iiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jb2lucy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9kcmFmdC50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyL2luZGV4LnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7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