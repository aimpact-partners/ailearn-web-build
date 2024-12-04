System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "zod@3.23.8", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection"], function (_export, _context) {
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
    }, function (_aimpactAilearnSdk100Config) {
      dependency_1 = _aimpactAilearnSdk100Config;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_2 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactHttpSuite001Api) {
      dependency_3 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_4 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }, function (_zod2) {
      dependency_5 = _zod2;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesCollection) {
      dependency_7 = _aimpactAilearnSdk100ReactiveEntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.17"]]);
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
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/config', dependency_1], ['@aimpact/ailearn-sdk/reactive/model', dependency_2], ['@aimpact/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_4], ['zod', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/reactive/entities/collection', dependency_7]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/
      ims.set('./activities/collection', {
        hash: 811435962,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _item = require("./item");
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
            #learningModule;
            #map = new Map();
            get items() {
              return [...this.#map.values()].sort((a, b) => a.order - b.order);
            }
            #saveTimeout;
            constructor(parent, args) {
              super();
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
              this.#map.set(activity.instanceId, activity);
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
        hash: 2995902901,
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
            //@ts-ignore
            get id() {
              return this.instanceId;
            }
            get instanceId() {
              //@ts-ignore
              return super.id ?? this.__instanceId;
            }
            #learningModule;
            get parent() {
              return this.#learningModule;
            }
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
                this.#learningModule.setCredits(data.credits);
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
              if (specs?.credits) {
                this.#learningModule.setCredits(specs.credits);
              }
              super.save();
              const response = await this.#learningModule.saveDraft();
              this.trigger('activity.saved');
              return response;
            }
            remove(id) {
              // TODO: Implement this method
            }
            getProperties() {
              let properties = super.getProperties();
              if (!properties.id) properties.id = this.instanceId;
              return properties;
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
        hash: 2757996980,
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
            get parent() {
              return this.#parent;
            }
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
                  activityId: this.#parent.id ?? this.#parent.instanceId,
                  activity: this.#parent.type,
                  // todo: in some place the notes is a string, in others it's an object
                  // we need to standardize this
                  notes: typeof notes === 'string' ? notes : notes?.notes,
                  ...specs
                });
                await this.set(data);
                this.save();
                this.#parent.save(data);
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
        hash: 785044371,
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
              this.parent.save(data);
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
              this.parent.save(data);
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
        hash: 325789196,
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
                this.setCredits(data.credits);
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
            setCredits(data) {
              this.credits.set(data);
              this.trigger('credits.change');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsImxlbmd0aCIsImxhbmd1YWdlIiwiaW5zdGFuY2VJZCIsInNhdmVEcmFmdCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInJlbW92ZSIsIndhcm4iLCJkZWxldGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfYXBpIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9mYWN0b3J5IiwiSXRlbSIsImFwaSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInZhbHVlIiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIlN1Z2dlc3Rpb25zIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiaW5pdGlhbGl6ZSIsIm1hdGVyaWFscyIsInNldFBhcmVudHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwic3RydWN0dXJlIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImZpZWxkcyIsIk9iamVjdCIsImtleXMiLCJmaWVsZCIsImVudHJpZXMiLCJwcm9wZXJ0eSIsImNvbmZpZyIsIm9wdGlvbmFsIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50IiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInJvbGUiLCJ0YXNrIiwiaW5zdHJ1Y3Rpb25zIiwib2JqZWN0aXZlcyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJpbmNsdWRlcyIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiX3pvZCIsIkFzc2lnbm1lbnQiLCJzY2hlbWEiLCJ6Iiwib2JqZWN0Iiwic3RyaW5nIiwiTGVhcm5pbmdNb2R1bGVzIiwiX2NyZWRpdHMiLCJfcHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwicHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsIkNyZWRpdHMiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwibG9hZCIsIm1vZHVsZSIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwidG90YWxBY3Rpdml0aWVzIiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJzYXZlUGljdHVyZSIsInBlcmZvcm1hbmNlIiwibm93IiwiY29tcGxldGVkIiwibGlzdCIsImdldERyYWZ0IiwiZGVsZXRlSXRlbSIsImNsb25lIiwibW9kdWxlSWQiLCJvd25lcklkIiwiZW5kcG9pbnRzIiwiY29tbXVuaXR5Iiwib3JnYW5pemF0aW9uSWQiLCJyZWFjdGl2ZVByb3BzIiwidGV4dCIsInNwbGl0IiwiY29kZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyL2luZGV4LnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QixLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUMsQ0FBQVosY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFFLFNBQVNBLENBQUNGLE1BQU07Y0FDZixJQUFJLENBQUMsQ0FBQVgsY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFHLFFBQVFBLENBQUE7Y0FDUCxNQUFNQyxJQUFJ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