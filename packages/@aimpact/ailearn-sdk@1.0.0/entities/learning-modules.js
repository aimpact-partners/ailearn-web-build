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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.16"]]);
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
        hash: 842549818,
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
              console.log(0.2, this.#map);
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