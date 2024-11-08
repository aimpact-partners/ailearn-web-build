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
        hash: 3631286273,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwibGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsIm9yZGVyIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNvbnNvbGUiLCJ3YXJuIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiX2ZhY3RvcnkiLCJJdGVtIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJpbml0aWFsaXplIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsImNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlTcGVjcyIsInN0cnVjdHVyZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaXNBcnJheVZhbGlkIiwiYXJyYXkiLCJmaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwiZmllbGQiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJyb2xlIiwidGFzayIsImluc3RydWN0aW9ucyIsIm9iamVjdGl2ZXMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyIiwiY29ycmVjdCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiaW5jbHVkZXMiLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIl96b2QiLCJBc3NpZ25tZW50Iiwic2NoZW1hIiwieiIsIm9iamVjdCIsInN0cmluZyIsIkxlYXJuaW5nTW9kdWxlcyIsIl9jcmVkaXRzIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsImRhdGFQcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwiQ3JlZGl0cyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJsb2FkIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb21wbGV0ZWQiLCJsb2ciLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwiY2xvbmUiLCJtb2R1bGVJZCIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInJlYWN0aXZlUHJvcHMiLCJ0ZXh0Iiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIvaW5kZXgudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUtBOzs7Ozs7Ozs7VUFTTSxNQUFPSSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUM7WUFDL0I7WUFDQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QjtjQUNBO2NBQ0E7Y0FDQTtjQUNBLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBVCxHQUFJLEdBQUcsSUFBSVAsSUFBQSxDQUFBaUIsR0FBRyxDQUFDYixPQUFBLENBQUFjLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUMsQ0FBQWIsY0FBZSxHQUFHTyxNQUFNO1lBQzlCO1lBRUFPLFNBQVNBLENBQUNQLE1BQU07Y0FDZixJQUFJ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