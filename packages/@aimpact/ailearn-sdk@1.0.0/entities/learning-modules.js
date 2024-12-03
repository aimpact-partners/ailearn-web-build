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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.15"]]);
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
        hash: 2752719587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _api = require("@aimpact/http-suite/api");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9hcGkiLCJfaXRlbSIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwibGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwic2F2ZVRpbWVvdXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImFyZ3MiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXRQYXJlbnQiLCJnZXRJdGVtcyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJnZXRQcm9wZXJ0aWVzIiwidmFsaWQiLCJldmVyeSIsInN0YXRlIiwiY2xlYXIiLCJ0cmlnZ2VyIiwiYXZhaWxhYmxlVHlwZXMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJ0eXBlIiwibWFudWFsIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJpbnN0YW5jZUlkIiwic2F2ZURyYWZ0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwid2FybiIsImRlbGV0ZSIsImNsZWFuIiwiZXhwb3J0cyIsIl9tYXRlcmlhbHMiLCJfc3VnZ2VzdGlvbnMiLCJfc2Vzc2lvbiIsIl9mYWN0b3J5IiwiSXRlbSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInZhbHVlIiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIlN1Z2dlc3Rpb25zIiwiaW5pdGlhbGl6ZSIsIm1hdGVyaWFscyIsInNldFBhcmVudHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwic3RydWN0dXJlIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImZpZWxkcyIsIk9iamVjdCIsImtleXMiLCJmaWVsZCIsImVudHJpZXMiLCJwcm9wZXJ0eSIsImNvbmZpZyIsIm9wdGlvbmFsIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50IiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInJvbGUiLCJ0YXNrIiwiaW5zdHJ1Y3Rpb25zIiwib2JqZWN0aXZlcyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJpbmNsdWRlcyIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiX3pvZCIsIkFzc2lnbm1lbnQiLCJzY2hlbWEiLCJ6Iiwib2JqZWN0Iiwic3RyaW5nIiwiTGVhcm5pbmdNb2R1bGVzIiwiX2NyZWRpdHMiLCJfcHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwicHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsIkNyZWRpdHMiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwibG9hZCIsIm1vZHVsZSIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwidG90YWxBY3Rpdml0aWVzIiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJzYXZlUGljdHVyZSIsInBlcmZvcm1hbmNlIiwibm93IiwiY29tcGxldGVkIiwibGlzdCIsImdldERyYWZ0IiwiZGVsZXRlSXRlbSIsImNsb25lIiwibW9kdWxlSWQiLCJvd25lcklkIiwiZW5kcG9pbnRzIiwiY29tbXVuaXR5Iiwib3JnYW5pemF0aW9uSWQiLCJyZWFjdGl2ZVByb3BzIiwidGV4dCIsInNwbGl0IiwiY29kZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyL2luZGV4LnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxJQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0ksVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLEdBQUk7WUFDSixDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0QsQ0FBQyxDQUFDRSxLQUFLLEdBQUdELENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1lBQ2pFO1lBRUEsQ0FBQUMsV0FBWTtZQUNaQyxZQUFZQyxNQUFNLEVBQUVDLElBQUs7Y0FDeEI7Y0FDQTtjQUNBO2NBQ0E7Y0FDQSxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWIsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQWtCLEdB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