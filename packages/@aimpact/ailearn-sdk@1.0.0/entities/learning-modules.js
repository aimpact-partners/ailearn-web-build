System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "zod@3.23.8", "@aimpact/chat-sdk@1.3.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, LearningModules, LearningModule, Credits, Draft, IActivityDraftData, ISuggestionResponse, ILearningModuleDraft, IOwnerData, ICreditsConsumptionsData, ActivityType, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    ActivityTypes: void 0,
    LearningModules: void 0,
    LearningModule: void 0,
    Credits: void 0,
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.1"]]);
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
        hash: 3637275068,
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
              return [...this.#map.values()].sort((a, b) => a.order - b.order);
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
            setParent(parent) {
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
              return ['content-theory', 'debate', 'multiple-choice', 'character-talk', 'spoken'];
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
              console.log('----');
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
        hash: 1452398887,
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
              this.materials.setParents(this, this.#learningModule);
              this.specs?.setParents(this, this.#learningModule);
              this.specs.on('properties.changed', () => {
                this.triggerEvent('properties.changed');
              });
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
              // await this.materials?.clear();
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
        hash: 1419147122,
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
            constructor() {
              super({
                properties: ['article', 'synthesis', 'introduction', 'dyslexia', 'flashcard', 'audios']
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            setParents = (parent, learningModule) => {
              this.#parent = parent;
              this.#learningModule = learningModule;
            };
            getData() {
              return this.getProperties();
            }
            clear() {
              this.set(this.#emptyData);
            }
            #audiosMap = new Map();
            get audiosMap() {
              return this.#audiosMap;
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
                this.set(data);
                await this.#learningModule.saveDraft({
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
              this.fetching = true;
              if (name === 'article') return this.generateContent(notes);
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/${name}`;
              const {
                status,
                data
              } = await this.#api.post(url, {
                notes
              });
              if (!status) {
                throw new Error('error generating materials');
              }
              this.set(data);
              await this.#learningModule.saveDraft(data);
              this.fetching = false;
              this.#learningModule.trigger('credits.change');
              return data;
            }
            async generateAudio(materials = []) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`;
              const specs = materials ? {
                materials
              } : {};
              const {
                status,
                data
              } = await this.#api.post(url, specs);
              if (!status) {
                throw new Error('error generating article material');
              }
              await Promise.all([this.#learningModule.set({
                credits: data.credits
              }), this.set({
                audios: {
                  ...this.audios,
                  ...data.audios
                }
              })]);
              this.#learningModule.trigger('credits.change');
              this.trigger('audios.changed');
              return data;
            }
            async deleteAudio(materials = []) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`;
              const specs = materials ? {
                materials
              } : {};
              const {
                status,
                data
              } = await this.#api.delete(url, specs);
              if (!status) {
                throw new Error('error generating article material');
              }
              await Promise.all([this.set({
                audios: data.audios
              })]);
              this.trigger('audios.changed');
              // this.#learningModule.trigger('credits.change');
              return data;
            }
            async deleteAudios() {
              this.set({
                audios: undefined
              });
              return await this.#learningModule.saveDraft();
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/base
      ***************************************/

      ims.set('./activities/specs/base', {
        hash: 1903898453,
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
            ignoredProperties = ['objective'];
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
              let isEmpty = true;
              let band = 0;
              while (isEmpty && band < this.properties.length) {
                if (this.properties[band] === 'objective') {
                  band++;
                  continue;
                }
                if (this[this.properties[band]]) {
                  isEmpty = false;
                }
                band++;
              }
              return isEmpty;
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
            getLearningModule() {
              return this.#learningModule;
            }
            getParent() {
              return this.#parent;
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/character-talk
      *************************************************/

      ims.set('./activities/specs/character-talk', {
        hash: 2769880414,
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
                instructions: {
                  type: 'textarea',
                  optional: true
                },
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
                properties: ['objective', 'role', 'objectives', 'task', 'instructions']
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
        hash: 867459663,
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
                topic: 'input',
                task: 'textarea',
                objectives: {
                  type: 'array',
                  fields: {
                    name: 'input',
                    objective: 'textarea'
                  }
                },
                instructions: {
                  type: 'textarea',
                  optional: true
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions', 'topic']
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
        hash: 2533423074,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivitySpecs = void 0;
          var _base = require("./base");
          class DebateActivitySpecs extends _base.ActivitySpecs {
            /**
             * Task, instructions and objectives are common fields for all content activities
             */
            get structure() {
              return {
                subject: 'input',
                role: 'textarea',
                task: 'textarea',
                instructions: {
                  type: 'textarea',
                  optional: true
                },
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
                properties: ['objective', 'role', 'instructions', 'subject', 'objectives', 'task']
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
        hash: 3776533273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _base = require("./base");
          class MultipleChoiceActivitySpecs extends _base.ActivitySpecs {
            ignoredProperties = ['objective', 'related'];
            get structure() {
              return {
                questions: {
                  type: 'array',
                  fields: {
                    question: 'input',
                    answers: {
                      type: 'array',
                      fields: {
                        answer: 'input',
                        correct: 'boolean'
                      }
                    }
                  }
                }
              };
            }
            /**
            * example structure
            * 'questions': [
            {
                "question": "Past of \"DO\"",
                "options": [
                    "did",
                    "doed",
                    "done",
                    "dood",
                    "does"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the past participle of 'take'?",
                "options": [
                    "took",
                    "taken",
                    "taking",
                    "takes"
                ],
                "correctAnswer": 0
            }
            ]
            *
            */
            get valid() {
              if (!this.questions || !this.questions.length) return false;
              return this.questions.every(question => {
                return question.question && question.options.length > 0 && question.correctAnswer >= 0 && question.correctAnswer < question.options.length;
              });
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['questions', 'related']
              });
            }
            empty() {
              let isEmpty = true;
              let band = 0;
              while (isEmpty && band < this.properties.length) {
                if (['objective', 'related'].includes(this.properties[band])) {
                  band++;
                  continue;
                }
                if (this[this.properties[band]]) {
                  isEmpty = false;
                }
                band++;
              }
              return isEmpty;
            }
            async generate(notes, {
              related
            }) {
              const data = await this.suggestions.generate({
                type: 'questions',
                id: this.getLearningModule().id,
                related,
                // todo: in some place the notes is a string, in others it's an object
                // we need to standardize this
                notes: typeof notes === 'string' ? notes : notes?.notes
              });
              if (data.error) {
                return data;
              }
              this.set(data);
              this.getLearningModule().saveDraft();
              this.trigger('specs.generated');
              return data;
            }
            async generateAnswers({
              notes,
              question
            }) {
              this.fetching = true;
              const data = await this.suggestions.generate({
                type: 'answers',
                id: this.getLearningModule().id,
                question,
                notes
              });
              return data.options;
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/spoken
      *****************************************/

      ims.set('./activities/specs/spoken', {
        hash: 990312585,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivitySpecs = void 0;
          var _base = require("./base");
          class SpokenActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                task: 'textarea',
                assessment: 'textarea',
                criteria: {
                  type: 'array',
                  fields: {
                    name: 'input',
                    subject: 'textarea'
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'task', 'assessment', 'criteria']
              });
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
        hash: 1076592687,
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
          var _credits = require("./credits");
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
              this.#credits = new _credits.Credits();
              this.#suggestions = new _suggestions.Suggestions();
              this.#credits = new _credits.Credits();
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

      /*******************************
      INTERNAL MODULE: ./credits/index
      *******************************/

      ims.set('./credits/index', {
        hash: 3358821034,
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
            constructor(args) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/types
      *******************************/

      ims.set('./credits/types', {
        hash: 2037358772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./draft
      ***********************/

      ims.set('./draft', {
        hash: 2812231193,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Draft = void 0;
          var _suggestions = require("./suggestions");
          var _collection = require("./activities/collection");
          var _credits = require("./credits");
          var _item = require("./item");
          /*bundle */ //your code here
          class Draft extends _item.LearningModule {
            #suggestions;
            #saved;
            #assignments;
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
                  value: _credits.Credits
                }, {
                  name: 'activities',
                  value: _collection.Activities
                }],
                ...args
              });
              this.#suggestions = new _suggestions.Suggestions();
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
              //this.#activities = new Activities(this);
              //this.#activities.on('change', this.triggerEvent);
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
                await this.saveDraft();
                const data = await this.#getSuggestions({
                  id: this.id,
                  objective: this.objective,
                  type: 'module',
                  observations: values.notes,
                  notes: values.notes,
                  totalActivities: values.totalActivities
                  // test: true
                });
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                setTimeout(async () => {
                  await this.saveDraft({
                    ...data,
                    state: 'confirmed'
                  });
                  this.fetchingDraft = false;
                  this.triggerEvent('activities.generated');
                }, 10);
                return data;
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
        hash: 1687928503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          var _suggestions = require("./suggestions");
          var _provider = require("./provider");
          /*bundle */ //your code here
          class LearningModule extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
            #assignments;
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
              this.activities.setParent(this);
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
              // this.#activities = new Activities(this);
              // this.#activities.on('change', this.triggerEvent);
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
              console.log(0.3);
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
        "im": "./collection",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./community",
        "from": "LearningModule",
        "name": "LearningModule"
      }, {
        "im": "./credits/index",
        "from": "Credits",
        "name": "Credits"
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
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./collection').LearningModules : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./community').LearningModule : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./credits/index').Credits : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwibGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwic2F2ZVRpbWVvdXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImFyZ3MiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXRQYXJlbnQiLCJnZXRJdGVtcyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJnZXRQcm9wZXJ0aWVzIiwidmFsaWQiLCJldmVyeSIsInN0YXRlIiwiY2xlYXIiLCJ0cmlnZ2VyIiwiYXZhaWxhYmxlVHlwZXMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJ0eXBlIiwibWFudWFsIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ3YXJuIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiX2ZhY3RvcnkiLCJJdGVtIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJpbml0aWFsaXplIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsImNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlTcGVjcyIsInN0cnVjdHVyZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaXNBcnJheVZhbGlkIiwiYXJyYXkiLCJmaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwiZmllbGQiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJyb2xlIiwidGFzayIsImluc3RydWN0aW9ucyIsIm9iamVjdGl2ZXMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyIiwiY29ycmVjdCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiaW5jbHVkZXMiLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIl96b2QiLCJBc3NpZ25tZW50Iiwic2NoZW1hIiwieiIsIm9iamVjdCIsInN0cmluZyIsIkxlYXJuaW5nTW9kdWxlcyIsIl9jcmVkaXRzIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsImRhdGFQcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwiQ3JlZGl0cyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJsb2FkIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb21wbGV0ZWQiLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwiY2xvbmUiLCJtb2R1bGVJZCIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInJlYWN0aXZlUHJvcHMiLCJ0ZXh0Iiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIvaW5kZXgudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUtBOzs7Ozs7Ozs7VUFTTSxNQUFPSSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QjtjQUNBO2NBQ0E7Y0FDQTtjQUNBLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBYixHQUFJLEdBQUcsSUFBSVAsSUFBQSxDQUFBcUIsR0FBRyxDQUFDakIsT0FBQSxDQUFBa0IsT0FBTSxDQUFDQyxNQUFN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