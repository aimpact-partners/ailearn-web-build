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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
        hash: 2627692294,
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
              this.#map.forEach(item => {
                data.push(item.getProperties());
              });
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
        hash: 790939650,
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
              return this.specs.valid && this.title && this.description ? 'completed' : 'processing';
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
              super.save();
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
        hash: 2907943342,
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
                this.save();
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
            setCredits(credits) {
              this.#learningModule.set({
                credits
              });
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
        hash: 2377311788,
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
              question,
              index
            }) {
              this.fetching = true;
              const data = await this.suggestions.generate({
                type: 'answers',
                id: this.getLearningModule().id,
                question,
                notes
              });
              this.questions[index].options = data.options;
              this.questions[index].correctAnswer = data.correctAnswer;
              return this.questions[index];
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
        hash: 1237972298,
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
                provider: _provider.ModuleProvider,
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
              const data = await this.provider.load();
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
        hash: 3381932227,
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
            } = {
              type: 'module'
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
              // this.initialize({ ...args });
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
              const data = await this.provider.load();
              this.set(data);
              this.activities.setItems(data.activities);
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
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
                this.trigger('credits.change');
                this.credits.set(data.credits);
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
                const saveResponse = await this.provider.savePicture(response.url);
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
        hash: 3077712683,
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
                provider: _provider.ModuleProvider,
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually]
                ]
              }); // super call ends.
              this.#suggestions = new _suggestions.Suggestions();
              this.activities.setParent(this);
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
              // this.#activities = new Activities(this);
              // this.#activities.on('change', this.triggerEvent);
              // this.initialize({ ...args });
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
              const data = await this.provider.load();
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
        hash: 2613109093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModuleProvider {
            #api;
            #parent;
            constructor(parent) {
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
        hash: 402250074,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwibGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwic2F2ZVRpbWVvdXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImFyZ3MiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXRQYXJlbnQiLCJnZXRJdGVtcyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJnZXRQcm9wZXJ0aWVzIiwidmFsaWQiLCJldmVyeSIsInN0YXRlIiwiY2xlYXIiLCJ0cmlnZ2VyIiwiYXZhaWxhYmxlVHlwZXMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJ0eXBlIiwibWFudWFsIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ3YXJuIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiX2ZhY3RvcnkiLCJJdGVtIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJpbml0aWFsaXplIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsImNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlTcGVjcyIsInN0cnVjdHVyZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaXNBcnJheVZhbGlkIiwiYXJyYXkiLCJmaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwiZmllbGQiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsInNldENyZWRpdHMiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwicm9sZSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJvYmplY3RpdmVzIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJfY2hhcmFjdGVyVGFsayIsIl9jaGF0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsInJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJjdG9yIiwiY3JlYXRlIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImluY2x1ZGVzIiwicmVsYXRlZCIsImdlbmVyYXRlQW5zd2VycyIsImFzc2Vzc21lbnQiLCJjcml0ZXJpYSIsIl9tb2R1bGVBY3Rpdml0aWVzIiwiVHlwZXMiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZSIsIkNvbnRlbnRUaGVvcnkiLCJhaUNvbnRlbnQiLCJkZXBlbmRlbmNpZXMiLCJEZWJhdGUiLCJDaGFyYWN0ZXJUYWxrIiwiTXVsdGlwbGVDaG9pY2UiLCJTcG9rZW4iLCJBY3Rpdml0eVR5cGVzIiwiX2NvbGxlY3Rpb24iLCJBc3NpZ25tZW50cyIsIkNvbGxlY3Rpb24iLCJfem9kIiwiQXNzaWdubWVudCIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZXMiLCJfY3JlZGl0cyIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwiQ3JlZGl0cyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJsb2FkIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb21wbGV0ZWQiLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwiY2xvbmUiLCJtb2R1bGVJZCIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInJlYWN0aXZlUHJvcHMiLCJ0ZXh0Iiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIvaW5kZXgudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUtBOzs7Ozs7Ozs7VUFTTSxNQUFPSSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QjtjQUNBO2NBQ0E7Y0FDQTtjQUNBLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBYixHQUFJLEdBQUcsSUFBSVAsSUFBQSxDQUFBcUIsR0FBRyxDQUFDakIsT0FBQSxDQUFBa0IsT0FBTSxD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