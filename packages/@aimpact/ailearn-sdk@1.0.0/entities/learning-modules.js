System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/entities/collection", "zod@3.23.8"], function (_export, _context) {
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
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
    }, function (_aimpactHttpSuite001Api) {
      dependency_3 = _aimpactHttpSuite001Api;
    }, function (_aimpactChatSdk141Session) {
      dependency_4 = _aimpactChatSdk141Session;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_5 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_6 = _aimpactReactive001EntitiesCollection;
    }, function (_zod2) {
      dependency_7 = _zod2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/config', dependency_1], ['@aimpact/reactive/model', dependency_2], ['@aimpact/http-suite/api', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['@aimpact/reactive/entities/collection', dependency_6], ['zod', dependency_7]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/
      ims.set('./activities/collection', {
        hash: 3079257362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@aimpact/reactive/model");
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
        hash: 549036881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _item = require("@aimpact/reactive/entities/item");
          var _suggestions = require("../suggestions");
          var _materials = require("./materials");
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
            get objective() {
              return this.specs?.objective;
            }
            get structure() {
              return {};
            }
            get unpublished() {
              return super.unpublished || this.specs.unpublished;
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
              this.materials.setParents(this, this.#learningModule);
              this.specs?.setParents(this, this.#learningModule);
              this.specs.on('properties.changed', () => {
                this.triggerEvent('properties.changed');
              });
            }
            async generate({
              notes,
              objective
            }) {
              this.fetching = true;
              const data = await this.#getSuggestions({
                type: 'activities',
                id: this.#learningModule.id,
                activity: this.type,
                objective,
                activityId: this.id,
                language: this.language,
                notes
              });
              await this.set(data);
              await this.specs.set(data);
              this.#learningModule.setCredits(data.credits);
              this.#learningModule.saveDraft();
              return data;
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
              if (!this.unpublished) return;
              // super.save();
              const response = await this.#learningModule.saveDraft();
              if (specs?.credits) {
                this.#learningModule.setCredits(specs.credits);
              }
              //  persist changes in memory
              this.specs.saveChanges();
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
        hash: 2537576161,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/reactive/model");
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
        hash: 3640824881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@aimpact/reactive/model");
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
              const validateStructure = structure => {
                return Object.entries(structure).every(([property, config]) => {
                  if (config.type === 'array') {
                    return isArrayValid(this[property], config.fields);
                  } else if (config.optional) {
                    return true;
                  }
                  return !!this[property];
                });
              };
              return validateStructure(this.structure.general) && validateStructure(this.structure.agent);
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
        hash: 2724274253,
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
                general: {
                  task: 'textarea'
                },
                agent: {
                  role: 'input',
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
        hash: 3616129902,
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
                general: {
                  task: 'textarea'
                },
                agent: {
                  topic: 'input',
                  objectives: {
                    advanced: true,
                    type: 'array',
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  instructions: {
                    advanced: true,
                    type: 'textarea',
                    optional: true
                  },
                  attachments: {
                    multiple: true
                  }
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
        hash: 1749633836,
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
                general: {
                  task: 'textarea'
                },
                agent: {
                  subject: 'input',
                  role: 'textarea',
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
        hash: 642594741,
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
                general: {
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
        hash: 2388494673,
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
                general: {
                  task: 'textarea'
                },
                agent: {
                  assessment: 'textarea',
                  criteria: {
                    type: 'array',
                    fields: {
                      name: 'input',
                      subject: 'textarea'
                    }
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
        hash: 329356415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
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
        hash: 4088824843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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

      /**************************
      INTERNAL MODULE: ./audience
      **************************/

      ims.set('./audience', {
        hash: 3132722335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleAudience = void 0;
          var _model = require("@aimpact/reactive/model");
          class LearningModuleAudience extends _model.ReactiveModel {
            constructor() {
              super({
                properties: ['category', 'level']
              });
            }
          }
          exports.LearningModuleAudience = LearningModuleAudience;
        }
      });

      /****************************
      INTERNAL MODULE: ./collection
      ****************************/

      ims.set('./collection', {
        hash: 1873337245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
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
        hash: 1796431218,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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
        hash: 2434357503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@aimpact/reactive/model");
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
        hash: 476759959,
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
            async loadAudience(language) {
              const audience = await this.provider.getAudience(language);
              return audience;
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
        hash: 344207321,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _suggestions = require("./suggestions");
          var _provider = require("./provider");
          var _audience = require("./audience");
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
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'duration', 'ia', {
                  name: 'audience',
                  value: _audience.LearningModuleAudience
                }, 'language', 'objective', 'duration', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually]
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
        hash: 2028665427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
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
            getAudience = async language => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/application/metadata/audience`, {
                language
              });
              if (!status) {
                throw new Error('error getting audience');
              }
              return data;
            };
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /***********************************
      INTERNAL MODULE: ./suggestions/index
      ***********************************/

      ims.set('./suggestions/index', {
        hash: 55219357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@aimpact/reactive/model");
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
                      text: errorText
                    },
                    error
                  } = response;
                  if (errorText.includes('The related activity')) {
                    return {
                      error: 'NO_RELATED_ACTIVITY'
                    };
                  }
                  if (errorText.includes('The draft does not have the following parameters to process the suggestion:')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsImxlbmd0aCIsImxhbmd1YWdlIiwiaW5zdGFuY2VJZCIsInNhdmVEcmFmdCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInJlbW92ZSIsIndhcm4iLCJkZWxldGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfYXBpIiwiX3N1Z2dlc3Rpb25zIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiSXRlbSIsImFwaSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJzdHJ1Y3R1cmUiLCJ1bnB1Ymxpc2hlZCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsIkVycm9yIiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzYXZlQ2hhbmdlcyIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJlIiwiZ2VuZXJhdGVBdWRpbyIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsInVuZGVmaW5lZCIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImdlbmVyYWwiLCJhZ2VudCIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicm9sZSIsImluc3RydWN0aW9ucyIsIm9iamVjdGl2ZXMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhZHZhbmNlZCIsImF0dGFjaG1lbnRzIiwibXVsdGlwbGUiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyIiwiY29ycmVjdCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiaW5jbHVkZXMiLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIl96b2QiLCJBc3NpZ25tZW50Iiwic2NoZW1hIiwieiIsIm9iamVjdCIsInN0cmluZyIsIkxlYXJuaW5nTW9kdWxlQXVkaWVuY2UiLCJMZWFybmluZ01vZHVsZXMiLCJfY3JlZGl0cyIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwiQ3JlZGl0cyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwibG9hZCIsIm1vZHVsZSIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwidG90YWxBY3Rpdml0aWVzIiwibG9hZEF1ZGllbmNlIiwiYXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIl9hdWRpZW5jZSIsImNvbXBsZXRlZCIsImxpc3QiLCJnZXREcmFmdCIsImRlbGV0ZUl0ZW0iLCJjbG9uZSIsIm1vZHVsZUlkIiwib3duZXJJZCIsImVuZHBvaW50cyIsImNvbW11bml0eSIsIm9yZ2FuaXphdGlvbklkIiwicmVhY3RpdmVQcm9wcyIsInRleHQiLCJlcnJvclRleHQiLCJzcGxpdCIsIm1lc3NhZ2UiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIvaW5kZXgudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRUE7Ozs7Ozs7OztVQVNNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0QsQ0FBQyxDQUFDRSxLQUFLLEdBQUdELENBQUMsQ0FBQ0MsS0FBSyxD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QyxLQUF1RDtjQUNsRSxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDK0MsTUFBTSxDQUFDckQsUUFBQSxDQUFBc0QsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNM0UsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF5QixHQUFJLENBQUNxRCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQUV6RSxRQUFRLEVBQUUsSUFBSTtnQkFBRSxHQUFHc0I7Y0FBSyxDQUFFLENBQUM7Y0FDdkYsSUFBSSxDQUFDM0IsUUFBUSxDQUFDZ0YsTUFBTSxFQUFFLE1BQU0sSUFBSW5CLEtBQUssQ0FBQzdELFFBQVEsQ0FBQ2lGLEtBQUssQ0FBQ3dKLElBQUksQ0FBQztjQUMxRDs7OztjQUlBLE9BQU96TyxRQUFRLENBQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCOztVQUNBd0MsT0FBQSxDQUFBd0IsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7OztVQ3RERDs7VUFFQWtFLE1BQUEsQ0FBQWlHLGNBQUEsQ0FBQTNMLE9BQUE7WUFDQXFCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQXFFLE1BQUEsQ0FBQWlHLGNBQUEsQ0FBQTNMLE9BQUE7WUFDQXFCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQXFFLE1BQUEsQ0FBQWlHLGNBQUEsQ0FBQTNMLE9BQUE7WUFDQXFCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQXFFLE1BQUEsQ0FBQWlHLGNBQUEsQ0FBQTNMLE9BQUE7WUFDQXFCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQXFFLE1BQUEsQ0FBQWlHLGNBQUEsQ0FBQTNMLE9BQUE7WUFDQXFCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQXFFLE1BQUEsQ0FBQWlHLGNBQUEsQ0FBQTNMLE9BQUE7WUFDQXFCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKTztVQUFQLElBQXVCNkgsWUFPdEI7VUFQRCxXQUF1QkEsWUFBWTtZQUNsQ0EsWUFBQSxxQkFBaUI7WUFDakJBLFlBQUEsc0NBQWtDO1lBQ2xDQSxZQUFBLG9DQUFnQztZQUNoQ0EsWUFBQSxvQ0FBZ0M7WUFDaENBLFlBQUEscUJBQWlCO1lBQ2pCQSxZQUFBLHVCQUFtQjtVQUNwQixDQUFDLEVBUHNCQSxZQUFZLEtBQUFsSixPQUFBLENBQUFrSixZQUFBLEdBQVpBLFlBQVkiLCJpZ25vcmVMaXN0IjpbXX0=