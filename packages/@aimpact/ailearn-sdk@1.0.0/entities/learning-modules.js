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
        hash: 3913740031,
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
                console.log('actualizamos creditos');
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
        hash: 1167467107,
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
        hash: 3595484645,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwibGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwic2F2ZVRpbWVvdXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImFyZ3MiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXRQYXJlbnQiLCJnZXRJdGVtcyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJnZXRQcm9wZXJ0aWVzIiwidmFsaWQiLCJldmVyeSIsInN0YXRlIiwiY2xlYXIiLCJ0cmlnZ2VyIiwiYXZhaWxhYmxlVHlwZXMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJ0eXBlIiwibWFudWFsIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ3YXJuIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiX2ZhY3RvcnkiLCJJdGVtIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJpbml0aWFsaXplIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwiRXJyb3IiLCJtZXNzYWdlIiwiI2dldFN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0Iiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsInNhdmUiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZ2VuZXJhdGVBdWRpbyIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsInVuZGVmaW5lZCIsIkFjdGl2aXR5U3BlY3MiLCJzdHJ1Y3R1cmUiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwiZW50cmllcyIsInByb3BlcnR5IiwiY29uZmlnIiwib3B0aW9uYWwiLCJlbXB0eSIsImlzRW1wdHkiLCJiYW5kIiwiZ2V0TGVhcm5pbmdNb2R1bGUiLCJnZXRQYXJlbnQiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwicm9sZSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJvYmplY3RpdmVzIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJfY2hhcmFjdGVyVGFsayIsIl9jaGF0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsInJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJjdG9yIiwiY3JlYXRlIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImluY2x1ZGVzIiwicmVsYXRlZCIsImdlbmVyYXRlQW5zd2VycyIsImFzc2Vzc21lbnQiLCJjcml0ZXJpYSIsIl9tb2R1bGVBY3Rpdml0aWVzIiwiVHlwZXMiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZSIsIkNvbnRlbnRUaGVvcnkiLCJhaUNvbnRlbnQiLCJkZXBlbmRlbmNpZXMiLCJEZWJhdGUiLCJDaGFyYWN0ZXJUYWxrIiwiTXVsdGlwbGVDaG9pY2UiLCJTcG9rZW4iLCJBY3Rpdml0eVR5cGVzIiwiX2NvbGxlY3Rpb24iLCJBc3NpZ25tZW50cyIsIkNvbGxlY3Rpb24iLCJfem9kIiwiQXNzaWdubWVudCIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZXMiLCJfY3JlZGl0cyIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwiQ3JlZGl0cyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJsb2FkIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb21wbGV0ZWQiLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwiY2xvbmUiLCJtb2R1bGVJZCIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInJlYWN0aXZlUHJvcHMiLCJ0ZXh0Iiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIvaW5kZXgudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUtBOzs7Ozs7Ozs7VUFTTSxNQUFPSSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QjtjQUNBO2NBQ0E7Y0FDQTtjQUNBLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBYixHQUFJLEdBQUcsSUFBSVAsSUFBQSxDQUFBcUIsR0FBRyxDQUFDakIsT0FBQSxDQUFBa0IsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBRS9DLElBQUksQ0FBQyxDQUFBakIsY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFPLFNBQVNBLENBQUNQLE1BQU07Y0FDZixJQUFJLENBQUMsQ0FBQVgsY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFRLFFBQVFBLENBQUE7Y0FDUCxNQUFNQyxJQUFJLEdBQTBCLEVBQUU7Y0FFdEMsSUFBSSxDQUFDLENBQUFuQixHQUFJLENBQUNvQixPQUFPLENBQUNDLElBQUksSUFBRztnQkFDeEJGLElBQUksQ0FBQ0csSUFBSSxDQUFDRCxJQUFJLENBQUNFLGFBQWEsRUFBRSxDQUFDO2NBQ2hDLENBQUMsQ0FBQztjQUNGLE9BQU9KLElBQUk7WUFDWjtZQUVBLElBQUlLLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ3VCLEtBQUssQ0FBQ0osSUFBSSxJQUFJQSxJQUFJLENBQUNLLEtBQUssS0FBSyxXQUFXLENBQUM7WUFDNUQ7WUFDQUMsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBM0IsR0FBSSxDQUFDMkIsS0FBSyxFQUFFO2NBQ2pCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUNBLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUM7WUFDbkY7WUFDQUMsUUFBUUEsQ0FBQ1gsSUFBSTtjQUNaQSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDVyxRQUFRLEVBQUVDLEtBQUssS0FBSTtnQkFDaEMsSUFBSSxJQUFJLENBQUMsQ0FBQWhDLEdBQUksQ0FBQ2lDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDRyxFQUFFLENBQUMsRUFBRTtrQkFDL0IsTUFBTWIsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBckIsR0FBSSxDQUFDbUMsR0FBRyxDQUFDSixRQUFRLENBQUNHLEVBQUUsQ0FBRTtrQkFDeENiLElBQUksQ0FBQ2UsR0FBRyxDQUFDTCxRQUFRLENBQUM7a0JBQ2xCOztnQkFHRCxNQUFNTSxRQUFRLEdBQUcsSUFBSTNDLEtBQUEsQ0FBQTRDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQXZDLGNBQWUsRUFBRTtrQkFBRSxHQUFHZ0MsUUFBUTtrQkFBRUM7Z0JBQUssQ0FBRSxDQUFDO2dCQUMzRSxJQUFJLENBQUMsQ0FBQWhDLEdBQUksQ0FBQ29DLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDSCxFQUFFLEVBQUVHLFFBQVEsQ0FBQztjQUNyQyxDQUFDLENBQUM7Y0FDRixPQUFPO2dCQUFFRSxPQUFPLEVBQUU7Y0FBSSxDQUFFO1lBQ3pCO1lBRUFILEdBQUdBLENBQUNqQixJQUFTO2NBQ1osSUFBSXFCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdEIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDVyxRQUFRLENBQUNYLElBQUksQ0FBQzs7Y0FHM0IsTUFBTXVCLFFBQVEsR0FBRyxLQUFLLENBQUNOLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztjQUNoQztjQUNBLE9BQU91QixRQUFRO1lBQ2hCO1lBRUE7Ozs7Ozs7WUFPQSxNQUFNQyxHQUFHQSxDQUFDQyxJQUFJLEVBQUVDLE1BQU0sR0FBRyxLQUFLO2NBQzdCLE1BQU1kLFFBQVEsR0FBRyxJQUFJckMsS0FBQSxDQUFBNEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBdkMsY0FBZSxFQUFFO2dCQUNuRDZDLElBQUk7Z0JBQ0pyQyxLQUFLLEVBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUM0QyxNQUFNO2dCQUN4QkMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBaEQsY0FBZSxDQUFDZ0Q7ZUFDL0IsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBL0MsR0FBSSxDQUFDb0MsR0FBRyxDQUFDTCxRQUFRLENBQUNHLEVBQUUsRUFBRUgsUUFBUSxDQUFDO2NBRXBDLE1BQU0sSUFBSSxDQUFDLENBQUFoQyxjQUFlLENBQUNpRCxTQUFTLEVBQUU7Y0FFdEMsT0FBT2pCLFFBQVE7WUFDaEI7WUFFQTs7OztZQUlBLE1BQU1rQixPQUFPQSxDQUFDL0MsS0FBSztjQUNsQkEsS0FBSyxDQUFDa0IsT0FBTyxDQUFDLENBQUNDLElBQUksRUFBRVcsS0FBSyxLQUFJO2dCQUM3QlgsSUFBSSxDQUFDZCxLQUFLLEdBQUd5QixLQUFLO2NBQ25CLENBQUMsQ0FBQztjQUNGO2NBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQXhCLFdBQVksRUFBRTtnQkFDdEIwQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUExQyxXQUFZLENBQUM7O2NBRWhDMkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO2NBQ25CLElBQUksQ0FBQyxDQUFBNUMsV0FBWSxHQUFHNkMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUF0RCxjQUFlLENBQUNpRCxTQUFTLEVBQUUsRUFBRSxHQUFHLENBQUM7Y0FDM0U7WUFDRDtZQUVBLE1BQU1NLE1BQU1BLENBQUNwQixFQUFFO2NBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBbEMsR0FBSSxDQUFDaUMsR0FBRyxDQUFDQyxFQUFFLENBQUMsRUFBRTtnQkFDdkJpQixPQUFPLENBQUNJLElBQUksQ0FBQyxjQUFjLEVBQUVyQixFQUFFLEVBQUUsa0NBQWtDLENBQUM7Z0JBQ3BFOztjQUVELElBQUksQ0FBQyxDQUFBbEMsR0FBSSxDQUFDd0QsTUFBTSxDQUFDdEIsRUFBRSxDQUFDO2NBQ3BCLE1BQU0sSUFBSSxDQUFDLENBQUFuQyxjQUFlLENBQUNpRCxTQUFTLEVBQUU7Y0FDdEMsSUFBSSxDQUFDcEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBNkIsS0FBS0EsQ0FBQTtjQUNKO1lBQUE7WUFHRHRCLEdBQUdBLENBQUNELEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBbEMsR0FBSSxDQUFDbUMsR0FBRyxDQUFDRCxFQUFFLENBQUM7WUFDekI7WUFFQUQsR0FBR0EsQ0FBQ0MsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFsQyxHQUFJLENBQUNpQyxHQUFHLENBQUNDLEVBQUUsQ0FBQztZQUN6Qjs7VUFDQXdCLE9BQUEsQ0FBQTlELFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5SUQsSUFBQUwsSUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQW1FLFVBQUEsR0FBQW5FLE9BQUE7VUFFQSxJQUFBb0UsWUFBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFxRSxRQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQXNFLFFBQUEsR0FBQXRFLE9BQUE7VUFHTztVQUFVLE1BQU84QyxRQUFTLFNBQVE1QyxLQUFBLENBQUFxRSxJQUFJO1lBYTVDLENBQUFqRSxHQUFJO1lBQ0osQ0FBQWtFLFdBQVk7WUFFWixJQUFJdEMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDdUMsS0FBSyxDQUFDekMsS0FBSyxJQUFJLElBQUksQ0FBQzBDLEtBQUssSUFBSSxJQUFJLENBQUNDLFdBQVcsR0FBRyxXQUFXLEdBQUcsWUFBWTtZQUN2RjtZQUdBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxTQUFTLElBQUksSUFBSSxDQUFDSCxLQUFLLElBQUksSUFBSSxDQUFDQyxXQUFXO1lBQzlEO1lBQ0EsQ0FBQXBFLGNBQWU7WUFDZixJQUFJVyxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQVgsY0FBZTtZQUM1QjtZQUVBVSxZQUFZVixjQUFxQixFQUFFWSxJQUFBLEdBQWdDLEVBQUU7Y0FDcEUsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1AyRCxNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQ0MsVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLE1BQU0sRUFDTixPQUFPLEVBQ1AsYUFBYSxFQUNiLE9BQU8sRUFDUCxPQUFPLEVBQ1AsVUFBVSxFQUVWO2tCQUNDQyxJQUFJLEVBQUUsV0FBVztrQkFDakJDLEtBQUssRUFBRWQsVUFBQSxDQUFBZTtpQkFDUCxFQUNEO2tCQUNDRixJQUFJLEVBQUUsT0FBTztrQkFDYkMsS0FBSyxFQUFFWCxRQUFBLENBQUFhLG9CQUFvQixDQUFDeEMsR0FBRyxDQUFDeEIsSUFBSSxDQUFDaUMsSUFBSTtpQkFDekMsRUFDRCxTQUFTLEVBQ1QsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixNQUFNO2VBRVAsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBN0MsY0FBZSxHQUFHQSxjQUFjO2NBQ3JDLElBQUksQ0FBQyxDQUFBaUUsV0FBWSxHQUFHLElBQUlKLFlBQUEsQ0FBQWdCLFdBQVcsRUFBRTtjQUNyQyxJQUFJLENBQUMsQ0FBQTlFLEdBQUksR0FBRyxJQUFJUCxJQUFBLENBQUFxQixHQUFHLENBQUNqQixPQUFBLENBQUFrQixPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDNkQsVUFBVSxDQUFDbEUsSUFBSSxDQUFDO2NBQ3JCLElBQUksQ0FBQ21FLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQWhGLGNBQWUsQ0FBQztjQUNyRCxJQUFJLENBQUNrRSxLQUFLLEVBQUVjLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUFoRixjQUFlLENBQUM7Y0FDbEQsSUFBSSxDQUFDa0UsS0FBSyxDQUFDZSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsTUFBSztnQkFDeEMsSUFBSSxDQUFDQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7Y0FDeEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxNQUFNQyxRQUFRQSxDQUFDQyxLQUFLO2NBQ25CLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTWpFLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBa0UsY0FBZSxDQUFDO2tCQUN2Q3pDLElBQUksRUFBRSxVQUFVO2tCQUNoQlYsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBbkMsY0FBZSxDQUFDbUMsRUFBRTtrQkFDM0JILFFBQVEsRUFBRSxJQUFJLENBQUNhLElBQUk7a0JBQ25CMEMsVUFBVSxFQUFFLElBQUksQ0FBQ3BELEVBQUU7a0JBQ25CYSxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO2tCQUN2Qm9DO2lCQUNBLENBQUM7Z0JBRUYsTUFBTSxJQUFJLENBQUMvQyxHQUFHLENBQUNqQixJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBcEIsY0FBZSxDQUFDd0YsVUFBVSxDQUFDcEUsSUFBSSxDQUFDcUUsT0FBTyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsQ0FBQXpGLGNBQWUsQ0FBQ2lELFNBQVMsRUFBRTtnQkFDaEMsT0FBTzdCLElBQUk7ZUFDWCxDQUFDLE9BQU9zRSxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJQyxLQUFLLENBQUNELENBQUMsQ0FBQ0UsT0FBTyxDQUFDO2VBQzFCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUCxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNLENBQUFDLGNBQWVPLENBQUMzQixLQUFLO2NBQzFCLE1BQU05QyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTZDLFdBQVksQ0FBQ2tCLFFBQVEsQ0FBQ2pCLEtBQUssQ0FBQztjQUVwRCxNQUFNLElBQUksQ0FBQyxDQUFBbEUsY0FBZSxDQUFDcUMsR0FBRyxDQUFDO2dCQUFFb0QsT0FBTyxFQUFFckUsSUFBSSxDQUFDcUU7Y0FBTyxDQUFFLENBQUM7Y0FDekQsT0FBT3JFLElBQUk7WUFDWjtZQUVBOzs7O1lBSUEsTUFBTTBFLGVBQWVBLENBQUNDLE1BQU0sR0FBRyxFQUFFO2NBQ2hDLElBQUksQ0FBQ0EsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUosS0FBSyxDQUFDLDREQUE0RCxDQUFDOztjQUc5RSxNQUFNSyxZQUFZLEdBQUc7Z0JBQ3BCQyxFQUFFLEVBQUU7a0JBQ0hDLE1BQU0sRUFBRSxhQUFhO2tCQUNyQkMsS0FBSyxFQUFFO2lCQUNQO2dCQUNEQyxFQUFFLEVBQUU7a0JBQ0hGLE1BQU0sRUFBRSxlQUFlO2tCQUN2QkMsS0FBSyxFQUFFO2lCQUNQO2dCQUNERSxFQUFFLEVBQUU7a0JBQ0hILE1BQU0sRUFBRSxlQUFlO2tCQUN2QkMsS0FBSyxFQUFFOztlQUVSO2NBQ0QsTUFBTUcsTUFBTSxHQUFHTixZQUFZLENBQUMsSUFBSSxDQUFDaEQsUUFBUSxDQUFDLElBQUlnRCxZQUFZLENBQUNJLEVBQUU7Y0FDN0RMLE1BQU0sR0FBRyxHQUFHTyxNQUFNLENBQUNKLE1BQU0sSUFBSUgsTUFBTSxJQUFJTyxNQUFNLENBQUNILEtBQUssRUFBRTtjQUVyRCxNQUFNO2dCQUFFSTtjQUFHLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBdEMsV0FBWSxDQUFDdUMsS0FBSyxDQUFDO2dCQUFFVCxNQUFNO2dCQUFFVSxJQUFJLEVBQUUsV0FBVztnQkFBRUgsTUFBTSxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBRTNGLElBQUksQ0FBQyxDQUFBdkcsR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNQyxRQUFRLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxDQUFBOUcsY0FBZSxDQUFDbUMsRUFBRSxlQUFlLElBQUksQ0FBQ0EsRUFBRSxRQUFRO2NBQ3pGLE1BQU00RSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWhILEdBQUksQ0FBQ2lILElBQUksQ0FBQ0YsUUFBUSxFQUFFO2dCQUFFUDtjQUFHLENBQUUsQ0FBQztjQUM1RCxJQUFJLENBQUMsQ0FBQXZHLGNBQWUsQ0FBQ3FDLEdBQUcsQ0FBQztnQkFBRW9ELE9BQU8sRUFBRXNCLFlBQVksQ0FBQzNGLElBQUksQ0FBQ3FFO2NBQU8sQ0FBRSxDQUFDO2NBQ2hFLElBQUksQ0FBQyxDQUFBekYsY0FBZSxDQUFDNkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQzlDLElBQUksQ0FBQ29GLE9BQU8sR0FBR0YsWUFBWSxDQUFDM0YsSUFBSSxDQUFDNkYsT0FBTztjQUV4QyxJQUFJLENBQUMvQixZQUFZLENBQUMsaUJBQWlCLENBQUM7Y0FDcEMsSUFBSSxDQUFDNkIsWUFBWSxDQUFDRyxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSXZCLEtBQUssQ0FBQ29CLFlBQVksQ0FBQ0ksS0FBSyxDQUFDOztjQUVwQyxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNwQjtZQUVBLE1BQU1HLFlBQVlBLENBQUE7Y0FDakIsTUFBTSxJQUFJLENBQUNsRCxLQUFLLENBQUN0QyxLQUFLLEVBQUU7Y0FDeEI7Y0FDQSxNQUFNLElBQUksQ0FBQyxDQUFBNUIsY0FBZSxDQUFDaUQsU0FBUyxFQUFFO1lBQ3ZDO1lBRUEsTUFBTW9FLElBQUlBLENBQUNuRCxLQUFNO2NBQ2hCLElBQUlBLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQzdCLEdBQUcsQ0FBQzZCLEtBQUssQ0FBQztjQUNoQyxJQUFJQSxLQUFLLEVBQUV1QixPQUFPLEVBQUU7Z0JBQ25CckMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxDQUFBckQsY0FBZSxDQUFDd0YsVUFBVSxDQUFDdEIsS0FBSyxDQUFDdUIsT0FBTyxDQUFDOztjQUUvQyxLQUFLLENBQUM0QixJQUFJLEVBQUU7Y0FFWixNQUFNMUUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEzQyxjQUFlLENBQUNpRCxTQUFTLEVBQUU7Y0FDdkQsSUFBSSxDQUFDcEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQzlCLE9BQU9jLFFBQVE7WUFDaEI7WUFFQVksTUFBTUEsQ0FBQ3BCLEVBQUU7Y0FDUjtZQUFBOztVQUVEd0IsT0FBQSxDQUFBcEIsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hMRCxJQUFBL0MsSUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBR0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXFFLFFBQUEsR0FBQXJFLE9BQUE7VUFVTSxNQUFPa0YsaUJBQWtCLFNBQVFqRixNQUFBLENBQUFJLGFBQWlDO1lBR3ZFLENBQUFDLEdBQUk7WUFDSixDQUFBWSxNQUFPO1lBRVAsQ0FBQVgsY0FBZTtZQUVmLENBQUFzSCxTQUFVLEdBQUc7Y0FBRUMsT0FBTyxFQUFFLEVBQUU7Y0FBRUMsU0FBUyxFQUFFLEVBQUU7Y0FBRUMsWUFBWSxFQUFFLEVBQUU7Y0FBRUMsUUFBUSxFQUFFLEVBQUU7Y0FBRUMsU0FBUyxFQUFFO1lBQUUsQ0FBRTtZQUUxRmpILFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQ0w4RCxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVE7ZUFDdEYsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBekUsR0FBSSxHQUFHLElBQUlQLElBQUEsQ0FBQXFCLEdBQUcsQ0FBQ2pCLE9BQUEsQ0FBQWtCLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUNBK0QsVUFBVSxHQUFHQSxDQUFDckUsTUFBTSxFQUFFWCxjQUFjLEtBQUk7Y0FDdkMsSUFBSSxDQUFDLENBQUFXLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQVgsY0FBZSxHQUFHQSxjQUFjO1lBQ3RDLENBQUM7WUFFRDRILE9BQU9BLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQ3BHLGFBQWEsRUFBRTtZQUM1QjtZQUVBSSxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDUyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUFpRixTQUFVLENBQUM7WUFDMUI7WUFFQSxDQUFBTyxTQUFVLEdBQXFCLElBQUkzSCxHQUFHLEVBQUU7WUFDeEMsSUFBSTJILFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsTUFBTUMsZUFBZUEsQ0FBQzFDLEtBQUs7Y0FDMUIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQXJGLEdBQUksQ0FBQzJHLE1BQU0sQ0FBQzVDLFFBQUEsQ0FBQTZDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBRTNDLE1BQU1OLEdBQUcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUF2RyxjQUFlLENBQUNtQyxFQUFFLGVBQWUsSUFBSSxDQUFDLENBQUF4QixNQUFPLENBQUN3QixFQUFFLG9CQUFvQjtnQkFFeEcsTUFBTTtrQkFBRStFLE1BQU07a0JBQUU5RjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJCLEdBQUksQ0FBQ2lILElBQUksQ0FBQ1QsR0FBRyxFQUFFO2tCQUNsRHBDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQXhELE1BQU8sQ0FBQ3dELEtBQUs7a0JBQ3pCRyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUEzRCxNQUFPLENBQUN1RCxLQUFLLENBQUNJLFNBQVM7a0JBQ3ZDYztpQkFDQSxDQUFDO2dCQUVGLElBQUksQ0FBQy9DLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztnQkFFZCxNQUFNLElBQUksQ0FBQyxDQUFBcEIsY0FBZSxDQUFDaUQsU0FBUyxDQUFDO2tCQUFFd0MsT0FBTyxFQUFFckUsSUFBSSxDQUFDcUU7Z0JBQU8sQ0FBRSxDQUFDO2dCQUMvRCxJQUFJLENBQUMsQ0FBQXpGLGNBQWUsQ0FBQzZCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFFOUMsSUFBSSxDQUFDcUYsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSXZCLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQzs7Z0JBRXJELElBQUksQ0FBQ3RELEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztnQkFFZCxPQUFPQSxJQUFJO2VBQ1gsQ0FBQyxPQUFPc0UsQ0FBQyxFQUFFO2dCQUNYdEMsT0FBTyxDQUFDK0QsS0FBSyxDQUFDekIsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTCxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNRixRQUFRQSxDQUFDVixJQUFJLEVBQUVXLEtBQWE7Y0FDakMsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtjQUNwQixJQUFJWixJQUFJLEtBQUssU0FBUyxFQUFFLE9BQU8sSUFBSSxDQUFDcUQsZUFBZSxDQUFDMUMsS0FBSyxDQUFDO2NBRTFELElBQUksQ0FBQyxDQUFBckYsR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNTixHQUFHLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxDQUFBdkcsY0FBZSxDQUFDbUMsRUFBRSxlQUFlLElBQUksQ0FBQyxDQUFBeEIsTUFBTyxDQUFDd0IsRUFBRSxjQUFjc0MsSUFBSSxFQUFFO2NBQ3hHLE1BQU07Z0JBQUV5QyxNQUFNO2dCQUFFOUY7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJCLEdBQUksQ0FBQ2lILElBQUksQ0FBQ1QsR0FBRyxFQUFFO2dCQUNsRG5CO2VBQ0EsQ0FBQztjQUVGLElBQUksQ0FBQzhCLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUl2QixLQUFLLENBQUMsNEJBQTRCLENBQUM7O2NBRzlDLElBQUksQ0FBQ3RELEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztjQUNkLE1BQU0sSUFBSSxDQUFDLENBQUFwQixjQUFlLENBQUNpRCxTQUFTLENBQUM3QixJQUFJLENBQUM7Y0FDMUMsSUFBSSxDQUFDaUUsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDLENBQUFyRixjQUFlLENBQUM2QixPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FFOUMsT0FBT1QsSUFBSTtZQUNaO1lBRUEsTUFBTTJHLGFBQWFBLENBQUNoRCxTQUFTLEdBQUcsRUFBRTtjQUNqQyxJQUFJLENBQUMsQ0FBQWhGLEdBQUksQ0FBQzJHLE1BQU0sQ0FBQzVDLFFBQUEsQ0FBQTZDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsTUFBTU4sR0FBRyxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQXZHLGNBQWUsQ0FBQ21DLEVBQUUsZUFBZSxJQUFJLENBQUMsQ0FBQXhCLE1BQU8sQ0FBQ3dCLEVBQUUsa0JBQWtCO2NBQ3RHLE1BQU0rQixLQUFLLEdBQUdhLFNBQVMsR0FBRztnQkFBRUE7Y0FBUyxDQUFFLEdBQUcsRUFBRTtjQUM1QyxNQUFNO2dCQUFFbUMsTUFBTTtnQkFBRTlGO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFyQixHQUFJLENBQUNpSCxJQUFJLENBQUNULEdBQUcsRUFBRXJDLEtBQUssQ0FBQztjQUV6RCxJQUFJLENBQUNnRCxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJdkIsS0FBSyxDQUFDLG1DQUFtQyxDQUFDOztjQUVyRCxNQUFNcUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FDakIsSUFBSSxDQUFDLENBQUFqSSxjQUFlLENBQUNxQyxHQUFHLENBQUM7Z0JBQUVvRCxPQUFPLEVBQUVyRSxJQUFJLENBQUNxRTtjQUFPLENBQUUsQ0FBQyxFQUNuRCxJQUFJLENBQUNwRCxHQUFHLENBQUM7Z0JBQUU2RixNQUFNLEVBQUU7a0JBQUUsR0FBRyxJQUFJLENBQUNBLE1BQU07a0JBQUUsR0FBRzlHLElBQUksQ0FBQzhHO2dCQUFNO2NBQUUsQ0FBRSxDQUFDLENBQ3hELENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQWxJLGNBQWUsQ0FBQzZCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUM5QyxJQUFJLENBQUNBLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUM5QixPQUFPVCxJQUFJO1lBQ1o7WUFFQSxNQUFNK0csV0FBV0EsQ0FBQ3BELFNBQVMsR0FBRyxFQUFFO2NBQy9CLElBQUksQ0FBQyxDQUFBaEYsR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNTixHQUFHLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxDQUFBdkcsY0FBZSxDQUFDbUMsRUFBRSxlQUFlLElBQUksQ0FBQyxDQUFBeEIsTUFBTyxDQUFDd0IsRUFBRSxrQkFBa0I7Y0FDdEcsTUFBTStCLEtBQUssR0FBR2EsU0FBUyxHQUFHO2dCQUFFQTtjQUFTLENBQUUsR0FBRyxFQUFFO2NBQzVDLE1BQU07Z0JBQUVtQyxNQUFNO2dCQUFFOUY7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJCLEdBQUksQ0FBQzBELE1BQU0sQ0FBQzhDLEdBQUcsRUFBRXJDLEtBQUssQ0FBQztjQUUzRCxJQUFJLENBQUNnRCxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJdkIsS0FBSyxDQUFDLG1DQUFtQyxDQUFDOztjQUdyRCxNQUFNcUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM1RixHQUFHLENBQUM7Z0JBQUU2RixNQUFNLEVBQUU5RyxJQUFJLENBQUM4RztjQUFNLENBQUUsQ0FBQyxDQUFDLENBQUM7Y0FDdEQsSUFBSSxDQUFDckcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQzlCO2NBRUEsT0FBT1QsSUFBSTtZQUNaO1lBQ0EsTUFBTWdILFlBQVlBLENBQUE7Y0FDakIsSUFBSSxDQUFDL0YsR0FBRyxDQUFDO2dCQUFFNkYsTUFBTSxFQUFFRztjQUFTLENBQUUsQ0FBQztjQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFySSxjQUFlLENBQUNpRCxTQUFTLEVBQUU7WUFDOUM7O1VBQ0FVLE9BQUEsQ0FBQWdCLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlJRCxJQUFBakYsTUFBQSxHQUFBRCxPQUFBO1VBS0EsSUFBQW9FLFlBQUEsR0FBQXBFLE9BQUE7VUFFTSxNQUFPNkksYUFBYyxTQUFRNUksTUFBQSxDQUFBSSxhQUEwQztZQU81RSxJQUFJeUksU0FBU0EsQ0FBQTtjQUNaLE9BQU8sRUFBRTtZQUNWO1lBSUEsQ0FBQXZJLGNBQWU7WUFDZixDQUFBVyxNQUFPO1lBQ0c2SCxpQkFBaUIsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMzQyxDQUFBdkUsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsSUFBSXhDLEtBQUtBLENBQUE7Y0FDUixNQUFNZ0gsWUFBWSxHQUFHQSxDQUFDQyxLQUFZLEVBQUVDLE1BQTJCLEtBQzlEbEcsS0FBSyxDQUFDQyxPQUFPLENBQUNnRyxLQUFLLENBQUMsSUFDcEJBLEtBQUssQ0FBQzNGLE1BQU0sR0FBRyxDQUFDLElBQ2hCMkYsS0FBSyxDQUFDaEgsS0FBSyxDQUFDSixJQUFJLElBQUlzSCxNQUFNLENBQUNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDLENBQUNqSCxLQUFLLENBQUNvSCxLQUFLLElBQUl4SCxJQUFJLENBQUN3SCxLQUFLLENBQUMsQ0FBQyxDQUFDO2NBRXJFLE9BQU9GLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLElBQUksQ0FBQ1IsU0FBUyxDQUFDLENBQUM3RyxLQUFLLENBQUMsQ0FBQyxDQUFDc0gsUUFBUSxFQUFFQyxNQUFNLENBQUMsS0FBSTtnQkFDbEUsSUFBSUEsTUFBTSxDQUFDcEcsSUFBSSxLQUFLLE9BQU8sRUFBRTtrQkFDNUIsT0FBTzRGLFlBQVksQ0FBQyxJQUFJLENBQUNPLFFBQVEsQ0FBQyxFQUFFQyxNQUFNLENBQUNOLE1BQU0sQ0FBQztpQkFDbEQsTUFBTSxJQUFJTSxNQUFNLENBQUNDLFFBQVEsRUFBRTtrQkFDM0IsT0FBTyxJQUFJOztnQkFFWixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNGLFFBQVEsQ0FBQztjQUN4QixDQUFDLENBQUM7WUFDSDtZQUVBdEksWUFBWUUsSUFBSSxHQUFHO2NBQUU0RCxVQUFVLEVBQUU7WUFBRSxDQUFFO2NBQ3BDLEtBQUssQ0FBQztnQkFDTCxHQUFHNUQsSUFBSTtnQkFDUDRELFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHNUQsSUFBSSxDQUFDNEQsVUFBVTtlQUM1QyxDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUFQLFdBQVksR0FBRyxJQUFJSixZQUFBLENBQUFnQixXQUFXLEVBQUU7WUFDdEM7WUFFQXNFLEtBQUtBLENBQUE7Y0FDSixJQUFJQyxPQUFPLEdBQUcsSUFBSTtjQUNsQixJQUFJQyxJQUFJLEdBQUcsQ0FBQztjQUVaLE9BQU9ELE9BQU8sSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQzdFLFVBQVUsQ0FBQ3pCLE1BQU0sRUFBRTtnQkFDaEQsSUFBSSxJQUFJLENBQUN5QixVQUFVLENBQUM2RSxJQUFJLENBQUMsS0FBSyxXQUFXLEVBQUU7a0JBQzFDQSxJQUFJLEVBQUU7a0JBQ047O2dCQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQzdFLFVBQVUsQ0FBQzZFLElBQUksQ0FBQyxDQUFDLEVBQUU7a0JBQ2hDRCxPQUFPLEdBQUcsS0FBSzs7Z0JBRWhCQyxJQUFJLEVBQUU7O2NBRVAsT0FBT0QsT0FBTztZQUNmO1lBRUFwRSxVQUFVQSxDQUFDckUsTUFBZ0IsRUFBRVgsY0FBOEI7Y0FDMUQsSUFBSSxDQUFDLENBQUFXLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQVgsY0FBZSxHQUFHQSxjQUFjO1lBQ3RDO1lBRUFxQyxHQUFHQSxDQUFDbUMsVUFBZ0Q7Y0FDbkQsS0FBSyxDQUFDbkMsR0FBRyxDQUFDbUMsVUFBVSxDQUFDO2NBQ3JCLElBQUksQ0FBQzNDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztjQUNsQyxPQUFPO2dCQUNOVyxPQUFPLEVBQUU7ZUFDVDtZQUNGO1lBRUEsTUFBTVosS0FBS0EsQ0FBQTtjQUNWLElBQUksQ0FBQzRDLFVBQVUsQ0FBQ25ELE9BQU8sQ0FBQzJILFFBQVEsSUFBRztnQkFDbEMsSUFBSUEsUUFBUSxLQUFLLFdBQVcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBR1gsU0FBUztjQUMzQixDQUFDLENBQUM7Y0FDRixJQUFJLENBQUN4RyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQzlCO1lBRUEsTUFBTXNELFFBQVFBLENBQUNDLEtBQUssRUFBRWxCLEtBQUs7Y0FDMUIsSUFBSSxDQUFDbUIsUUFBUSxHQUFHLElBQUk7Y0FFcEIsSUFBSTtnQkFDSCxNQUFNakUsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDNkMsV0FBVyxDQUFDa0IsUUFBUSxDQUFDO2tCQUM1Q3RDLElBQUksRUFBRSxnQkFBZ0I7a0JBQ3RCVixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFuQyxjQUFlLENBQUNtQyxFQUFFO2tCQUMzQm9ELFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTVFLE1BQU8sQ0FBQ3dCLEVBQUU7a0JBQzNCSCxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFyQixNQUFPLENBQUNrQyxJQUFJO2tCQUMzQjtrQkFDQTtrQkFDQXVDLEtBQUssRUFBRSxPQUFPQSxLQUFLLEtBQUssUUFBUSxHQUFHQSxLQUFLLEdBQUdBLEtBQUssRUFBRUEsS0FBSztrQkFDdkQsR0FBR2xCO2lCQUNILENBQUM7Z0JBRUYsTUFBTSxJQUFJLENBQUM3QixHQUFHLENBQUNqQixJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQ2lHLElBQUksRUFBRTtnQkFDWCxJQUFJLENBQUMsQ0FBQTFHLE1BQU8sQ0FBQzBHLElBQUksQ0FBQ2pHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDUyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Z0JBQy9CLE9BQU9ULElBQUk7ZUFDWCxDQUFDLE9BQU9zRSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDTCxRQUFRLEdBQUcsS0FBSztnQkFDckIsTUFBTUssQ0FBQzs7WUFFVDtZQUVBNEQsaUJBQWlCQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUF0SixjQUFlO1lBQzVCO1lBRUF1SixTQUFTQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQTVJLE1BQU87WUFDcEI7WUFFVTZFLFVBQVVBLENBQUNDLE9BQVk7Y0FDaEMsSUFBSSxDQUFDLENBQUF6RixjQUFlLENBQUNxQyxHQUFHLENBQUM7Z0JBQUVvRDtjQUFPLENBQUUsQ0FBQztZQUN0Qzs7VUFDQTlCLE9BQUEsQ0FBQTJFLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvSEQsSUFBQWtCLEtBQUEsR0FBQS9KLE9BQUE7VUFFTSxNQUFPZ0ssMEJBQTJCLFNBQVFELEtBQUEsQ0FBQWxCLGFBQWE7WUFJNUQsSUFBSUMsU0FBU0EsQ0FBQTtjQUNaLE9BQU87Z0JBQ05tQixJQUFJLEVBQUUsT0FBTztnQkFDYkMsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCQyxZQUFZLEVBQUU7a0JBQ2IvRyxJQUFJLEVBQUUsVUFBVTtrQkFDaEJxRyxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RXLFVBQVUsRUFBRTtrQkFDWGhILElBQUksRUFBRSxPQUFPO2tCQUNiOEYsTUFBTSxFQUFFO29CQUNQbEUsSUFBSSxFQUFFLE9BQU87b0JBQ2JILFNBQVMsRUFBRTs7O2VBR2I7WUFDRjtZQUVBNUQsWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1A0RCxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsY0FBYztlQUN0RSxDQUFDO1lBQ0g7O1VBQ0FiLE9BQUEsQ0FBQThGLDBCQUFBLEdBQUFBLDBCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCRCxJQUFBRCxLQUFBLEdBQUEvSixPQUFBO1VBRU0sTUFBT3FLLGlCQUFrQixTQUFRTixLQUFBLENBQUFsQixhQUFhO1lBR25ENUgsWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1A0RCxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWTtlQUN0QyxDQUFDO1lBQ0g7O1VBQ0FiLE9BQUEsQ0FBQW1HLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hELElBQUFOLEtBQUEsR0FBQS9KLE9BQUE7VUFFTSxNQUFPc0ssMEJBQTJCLFNBQVFQLEtBQUEsQ0FBQWxCLGFBQWE7WUFJNUQsSUFBSUMsU0FBU0EsQ0FBQTtjQUNaLE9BQU87Z0JBQ055QixLQUFLLEVBQUUsT0FBTztnQkFDZEwsSUFBSSxFQUFFLFVBQVU7Z0JBRWhCRSxVQUFVLEVBQUU7a0JBQ1hoSCxJQUFJLEVBQUUsT0FBTztrQkFDYjhGLE1BQU0sRUFBRTtvQkFDUGxFLElBQUksRUFBRSxPQUFPO29CQUNiSCxTQUFTLEVBQUU7O2lCQUVaO2dCQUNEc0YsWUFBWSxFQUFFO2tCQUNiL0csSUFBSSxFQUFFLFVBQVU7a0JBQ2hCcUcsUUFBUSxFQUFFOztlQUVYO1lBQ0Y7WUFDQXhJLFlBQVlFLElBQUksR0FBRyxFQUFFO2NBQ3BCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQNEQsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxPQUFPO2VBQy9FLENBQUM7WUFDSDs7VUFDQWIsT0FBQSxDQUFBb0csMEJBQUEsR0FBQUEsMEJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJELElBQUFQLEtBQUEsR0FBQS9KLE9BQUE7VUFFTSxNQUFPd0ssbUJBQW9CLFNBQVFULEtBQUEsQ0FBQWxCLGFBQWE7WUFJckQ7OztZQUdBLElBQUlDLFNBQVNBLENBQUE7Y0FDWixPQUFPO2dCQUNOMkIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCUixJQUFJLEVBQUUsVUFBVTtnQkFDaEJDLElBQUksRUFBRSxVQUFVO2dCQUNoQkMsWUFBWSxFQUFFO2tCQUNiL0csSUFBSSxFQUFFLFVBQVU7a0JBQ2hCcUcsUUFBUSxFQUFFO2lCQUNWO2dCQUNEVyxVQUFVLEVBQUU7a0JBQ1hoSCxJQUFJLEVBQUUsT0FBTztrQkFDYjhGLE1BQU0sRUFBRTtvQkFDUGxFLElBQUksRUFBRSxPQUFPO29CQUNiSCxTQUFTLEVBQUU7OztlQUdiO1lBQ0Y7WUFFQTVELFlBQVlFLElBQUksR0FBRyxFQUFFO2NBQ3BCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQNEQsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNO2VBQ2pGLENBQUM7WUFDSDs7VUFDQWIsT0FBQSxDQUFBc0csbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENELElBQUFFLGNBQUEsR0FBQTFLLE9BQUE7VUFDQSxJQUFBMkssS0FBQSxHQUFBM0ssT0FBQTtVQUNBLElBQUE0SyxjQUFBLEdBQUE1SyxPQUFBO1VBQ0EsSUFBQTZLLE9BQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBOEssZUFBQSxHQUFBOUssT0FBQTtVQUNBLElBQUErSyxPQUFBLEdBQUEvSyxPQUFBO1VBSU0sTUFBT21GLG9CQUFvQjtZQUN4QixPQUFPNkYsUUFBUSxHQUFxQyxJQUFJdkssR0FBRyxFQUFFO1lBRXJFLE9BQU93SyxRQUFRQSxDQUFDN0gsSUFBWSxFQUFFOEgsSUFBeUI7Y0FDdEQsSUFBSSxDQUFDRixRQUFRLENBQUNwSSxHQUFHLENBQUNRLElBQUksRUFBRThILElBQUksQ0FBQztZQUM5QjtZQUVBLE9BQU9DLE1BQU1BLENBQUMvSCxJQUFZO2NBQ3pCLE1BQU1QLFFBQVEsR0FBRyxJQUFJLENBQUNtSSxRQUFRLENBQUNySSxHQUFHLENBQUNTLElBQUksQ0FBQztjQUN4QyxJQUFJLENBQUNQLFFBQVEsRUFBRTtnQkFDZCxNQUFNLElBQUlxRCxLQUFLLENBQUMsa0JBQWtCOUMsSUFBSSxzQkFBc0IsQ0FBQzs7Y0FFOUQsT0FBTyxJQUFJUCxRQUFRLEVBQUU7WUFDdEI7WUFFQSxPQUFPRixHQUFHQSxDQUFDUyxJQUFZO2NBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUM0SCxRQUFRLENBQUN2SSxHQUFHLENBQUNXLElBQUksQ0FBQyxFQUFFO2dCQUM3Qk8sT0FBTyxDQUFDSSxJQUFJLENBQUMscURBQXFEWCxJQUFJLEVBQUUsQ0FBQzs7Y0FFMUUsT0FBTyxJQUFJLENBQUM0SCxRQUFRLENBQUNySSxHQUFHLENBQUNTLElBQUksQ0FBQztZQUMvQjs7VUFHRDtVQUFBYyxPQUFBLENBQUFpQixvQkFBQSxHQUFBQSxvQkFBQTtVQUNBQSxvQkFBb0IsQ0FBQzhGLFFBQVEsQ0FBQyxNQUFNLEVBQUVOLEtBQUEsQ0FBQU4saUJBQWlCLENBQUM7VUFDeERsRixvQkFBb0IsQ0FBQzhGLFFBQVEsQ0FBQyxRQUFRLEVBQUVKLE9BQUEsQ0FBQUwsbUJBQW1CLENBQUM7VUFDNURyRixvQkFBb0IsQ0FBQzhGLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRVAsY0FBQSxDQUFBViwwQkFBMEIsQ0FBQztVQUMzRTdFLG9CQUFvQixDQUFDOEYsUUFBUSxDQUFDLGdCQUFnQixFQUFFTCxjQUFBLENBQUFOLDBCQUEwQixDQUFDO1VBQzNFbkYsb0JBQW9CLENBQUM4RixRQUFRLENBQUMsaUJBQWlCLEVBQUVILGVBQUEsQ0FBQU0sMkJBQTJCLENBQUM7VUFDN0VqRyxvQkFBb0IsQ0FBQzhGLFFBQVEsQ0FBQyxRQUFRLEVBQUVGLE9BQUEsQ0FBQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkM1RCxJQUFBdEIsS0FBQSxHQUFBL0osT0FBQTtVQU9NLE1BQU9vTCwyQkFBNEIsU0FBUXJCLEtBQUEsQ0FBQWxCLGFBQWE7WUFJbkRFLGlCQUFpQixHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztZQUV0RCxJQUFJRCxTQUFTQSxDQUFBO2NBQ1osT0FBTztnQkFDTndDLFNBQVMsRUFBRTtrQkFDVmxJLElBQUksRUFBRSxPQUFPO2tCQUNiOEYsTUFBTSxFQUFFO29CQUNQcUMsUUFBUSxFQUFFLE9BQU87b0JBQ2pCQyxPQUFPLEVBQUU7c0JBQ1JwSSxJQUFJLEVBQUUsT0FBTztzQkFDYjhGLE1BQU0sRUFBRTt3QkFDUHVDLE1BQU0sRUFBRSxPQUFPO3dCQUNmQyxPQUFPLEVBQUU7Ozs7O2VBS2I7WUFDRjtZQUVBLElBQUkxSixLQUFLQSxDQUFBO2NBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQ3NKLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQ0EsU0FBUyxDQUFDaEksTUFBTSxFQUFFLE9BQU8sS0FBSztjQUMzRCxPQUFPLElBQUksQ0FBQ2dJLFNBQVMsQ0FBQ3JKLEtBQUssQ0FBQ3NKLFFBQVEsSUFBRztnQkFDdEMsT0FDQ0EsUUFBUSxDQUFDQSxRQUFRLElBQ2pCQSxRQUFRLENBQUNJLE9BQU8sQ0FBQ3JJLE1BQU0sR0FBRyxDQUFDLElBQzNCaUksUUFBUSxDQUFDSyxhQUFhLElBQUksQ0FBQyxJQUMzQkwsUUFBUSxDQUFDSyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDckksTUFBTTtjQUVsRCxDQUFDLENBQUM7WUFDSDtZQUVBckMsWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1A0RCxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUztlQUNuQyxDQUFDO1lBQ0g7WUFFQTJFLEtBQUtBLENBQUE7Y0FDSixJQUFJQyxPQUFPLEdBQUcsSUFBSTtjQUNsQixJQUFJQyxJQUFJLEdBQUcsQ0FBQztjQUVaLE9BQU9ELE9BQU8sSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQzdFLFVBQVUsQ0FBQ3pCLE1BQU0sRUFBRTtnQkFDaEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQ3VJLFFBQVEsQ0FBQyxJQUFJLENBQUM5RyxVQUFVLENBQUM2RSxJQUFJLENBQUMsQ0FBQyxFQUFFO2tCQUM3REEsSUFBSSxFQUFFO2tCQUNOOztnQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM3RSxVQUFVLENBQUM2RSxJQUFJLENBQUMsQ0FBQyxFQUFFO2tCQUNoQ0QsT0FBTyxHQUFHLEtBQUs7O2dCQUVoQkMsSUFBSSxFQUFFOztjQUVQLE9BQU9ELE9BQU87WUFDZjtZQUVBLE1BQU1qRSxRQUFRQSxDQUFDQyxLQUFLLEVBQUU7Y0FBRW1HO1lBQU8sQ0FBRTtjQUNoQyxNQUFNbkssSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDNkMsV0FBVyxDQUFDa0IsUUFBUSxDQUFDO2dCQUM1Q3RDLElBQUksRUFBRSxXQUFXO2dCQUNqQlYsRUFBRSxFQUFFLElBQUksQ0FBQ21ILGlCQUFpQixFQUFFLENBQUNuSCxFQUFFO2dCQUMvQm9KLE9BQU87Z0JBQ1A7Z0JBQ0E7Z0JBQ0FuRyxLQUFLLEVBQUUsT0FBT0EsS0FBSyxLQUFLLFFBQVEsR0FBR0EsS0FBSyxHQUFHQSxLQUFLLEVBQUVBO2VBQ2xELENBQUM7Y0FFRixJQUFJaEUsSUFBSSxDQUFDK0YsS0FBSyxFQUFFO2dCQUNmLE9BQU8vRixJQUFJOztjQUdaLElBQUksQ0FBQ2lCLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztjQUNkLElBQUksQ0FBQ2tJLGlCQUFpQixFQUFFLENBQUNyRyxTQUFTLEVBQUU7Y0FDcEMsSUFBSSxDQUFDcEIsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2NBQy9CLE9BQU9ULElBQUk7WUFDWjtZQUVBLE1BQU1vSyxlQUFlQSxDQUFDO2NBQUVwRyxLQUFLO2NBQUU0RixRQUFRO2NBQUUvSTtZQUFLLENBQUU7Y0FDL0MsSUFBSSxDQUFDb0QsUUFBUSxHQUFHLElBQUk7Y0FFcEIsTUFBTWpFLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzZDLFdBQVcsQ0FBQ2tCLFFBQVEsQ0FBQztnQkFDNUN0QyxJQUFJLEVBQUUsU0FBUztnQkFDZlYsRUFBRSxFQUFFLElBQUksQ0FBQ21ILGlCQUFpQixFQUFFLENBQUNuSCxFQUFFO2dCQUMvQjZJLFFBQVE7Z0JBQ1I1RjtlQUNBLENBQUM7Y0FDRixJQUFJLENBQUMyRixTQUFTLENBQUM5SSxLQUFLLENBQUMsQ0FBQ21KLE9BQU8sR0FBR2hLLElBQUksQ0FBQ2dLLE9BQU87Y0FDNUMsSUFBSSxDQUFDTCxTQUFTLENBQUM5SSxLQUFLLENBQUMsQ0FBQ29KLGFBQWEsR0FBR2pLLElBQUksQ0FBQ2lLLGFBQWE7Y0FFeEQsT0FBTyxJQUFJLENBQUNOLFNBQVMsQ0FBQzlJLEtBQUssQ0FBQztZQUM3Qjs7VUFDQTBCLE9BQUEsQ0FBQWtILDJCQUFBLEdBQUFBLDJCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JHRCxJQUFBckIsS0FBQSxHQUFBL0osT0FBQTtVQUVNLE1BQU9xTCxtQkFBb0IsU0FBUXRCLEtBQUEsQ0FBQWxCLGFBQWE7WUFVckQsSUFBSUMsU0FBU0EsQ0FBQTtjQUNaLE9BQU87Z0JBQ05vQixJQUFJLEVBQUUsVUFBVTtnQkFDaEI4QixVQUFVLEVBQUUsVUFBVTtnQkFDdEJDLFFBQVEsRUFBRTtrQkFDVDdJLElBQUksRUFBRSxPQUFPO2tCQUNiOEYsTUFBTSxFQUFFO29CQUNQbEUsSUFBSSxFQUFFLE9BQU87b0JBQ2J5RixPQUFPLEVBQUU7OztlQUdYO1lBQ0Y7WUFDQXhKLFlBQVlFLElBQUksR0FBRyxFQUFFO2NBQ3BCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQNEQsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVTtlQUMxRCxDQUFDO1lBQ0g7O1VBQ0FiLE9BQUEsQ0FBQW1ILG1CQUFBLEdBQUFBLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDRCxJQUFBYSxpQkFBQSxHQUFBbE0sT0FBQTtVQXlCQSxNQUFNbU0sS0FBSztZQUNWLENBQUFDLEtBQU0sR0FBa0MsQ0FDdkM7Y0FDQzFKLEVBQUUsRUFBRXdKLGlCQUFBLENBQUFHLFlBQVksQ0FBQ0MsYUFBYTtjQUM5QnRILElBQUksRUFBRSxnQkFBZ0I7Y0FDdEJQLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQztjQUVwQjhILFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2NBQ2hEakgsU0FBUyxFQUFFLENBQ1Y7Z0JBQ0NOLElBQUksRUFBRTtlQUNOLEVBQ0Q7Z0JBQ0N3SCxZQUFZLEVBQUUsU0FBUztnQkFDdkJ4SCxJQUFJLEVBQUU7ZUFDTixFQUNEO2dCQUNDd0gsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCeEgsSUFBSSxFQUFFO2VBQ04sRUFFRDtnQkFDQ3dILFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDekJ4SCxJQUFJLEVBQUU7ZUFDTixDQUNEO2NBQ0RrRSxNQUFNLEVBQUUsQ0FBQyxVQUFVO2FBQ25CLEVBQ0Q7Y0FDQ3hHLEVBQUUsRUFBRXdKLGlCQUFBLENBQUFHLFlBQVksQ0FBQ0ksTUFBTTtjQUN2QnpILElBQUksRUFBRSxRQUFRO2NBQ2RQLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUM7Y0FDL0I4SCxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVc7YUFDL0MsRUFDRDtjQUNDN0osRUFBRSxFQUFFd0osaUJBQUEsQ0FBQUcsWUFBWSxDQUFDSyxhQUFhO2NBQzlCMUgsSUFBSSxFQUFFLGdCQUFnQjtjQUN0QlAsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztjQUM1QjhILFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztjQUN4RHJELE1BQU0sRUFBRSxDQUFDLFVBQVU7YUFDbkIsRUFDRDtjQUNDeEcsRUFBRSxFQUFFd0osaUJBQUEsQ0FBQUcsWUFBWSxDQUFDTSxjQUFjO2NBQy9CM0gsSUFBSSxFQUFFLGlCQUFpQjtjQUN2QjtjQUNBUCxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUM7Y0FDcEJhLFNBQVMsRUFBRSxFQUFFO2NBQ2JkLFdBQVcsRUFBRSxXQUFXO2NBQ3hCMEUsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVU7YUFDaEM7WUFDRDtZQUNBO2NBQ0N4RyxFQUFFLEVBQUV3SixpQkFBQSxDQUFBRyxZQUFZLENBQUNPLE1BQU07Y0FDdkI1SCxJQUFJLEVBQUUsUUFBUTtjQUNkdUgsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUM7Y0FDaERyRCxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7Y0FDcEJ6RSxLQUFLLEVBQUUsQ0FDTixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTjtnQkFDQ08sSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCa0UsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVM7ZUFDMUI7YUFFRixDQUNEO1lBRUQsSUFBSXhJLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBMEwsS0FBTTtZQUNuQjtZQUNBLENBQUE1TCxHQUFJLEdBQThCLElBQUlDLEdBQUcsRUFBRTtZQUMzQyxJQUFJNkksT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUE5SSxHQUFJO1lBQ2pCO1lBQ0FTLFlBQUE7Y0FDQyxJQUFJLENBQUMsQ0FBQW1MLEtBQU0sQ0FBQ3hLLE9BQU8sQ0FBRXdCLElBQXdCLElBQUk7Z0JBQ2hELElBQUksQ0FBQyxDQUFBNUMsR0FBSSxDQUFDb0MsR0FBRyxDQUFDUSxJQUFJLENBQUNWLEVBQUUsRUFBRVUsSUFBSSxDQUFDVixFQUFFLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQUMsR0FBR0EsQ0FBQ0QsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFsQyxHQUFJLENBQUNtQyxHQUFHLENBQUNELEVBQUUsQ0FBQztZQUN6Qjs7VUFHTTtVQUFXLE1BQU1tSyxhQUFhLEdBQUEzSSxPQUFBLENBQUEySSxhQUFBLEdBQUcsSUFBSVYsS0FBSyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9HbkQsSUFBQVcsV0FBQSxHQUFBOU0sT0FBQTtVQUdNLE1BQU8rTSxXQUFZLFNBQVFELFdBQUEsQ0FBQUUsVUFBc0I7WUFDdEQvTCxZQUFZRSxJQUFVO2NBQ3JCLEtBQUssQ0FBQ0EsSUFBSSxDQUFDO1lBQ1o7O1VBQ0ErQyxPQUFBLENBQUE2SSxXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEQsSUFBQTdNLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFpTixJQUFBLEdBQUFqTixPQUFBO1VBR00sTUFBT2tOLFVBQVcsU0FBUWhOLEtBQUEsQ0FBQXFFLElBQUk7WUFDekI0SSxNQUFNLEdBQUdGLElBQUEsQ0FBQUcsQ0FBQyxDQUFDQyxNQUFNLENBQUM7Y0FDM0IzSyxFQUFFLEVBQUV1SyxJQUFBLENBQUFHLENBQUMsQ0FBQ0UsTUFBTSxFQUFFO2NBQ2R0SSxJQUFJLEVBQUVpSSxJQUFBLENBQUFHLENBQUMsQ0FBQ0UsTUFBTSxFQUFFO2NBQ2hCM0ksV0FBVyxFQUFFc0ksSUFBQSxDQUFBRyxDQUFDLENBQUNFLE1BQU0sRUFBRSxDQUFDN0QsUUFBUTthQUNoQyxDQUFDO1lBRUZ4SSxZQUFZRSxJQUFJLEdBQUcsRUFBRTtjQUNwQixLQUFLLENBQUM7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRTRELFVBQVUsRUFBRTtjQUFFLENBQUUsQ0FBQztZQUNuQzs7VUFDQWIsT0FBQSxDQUFBZ0osVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFKLFdBQUEsR0FBQTlNLE9BQUE7VUFJTyxXQURQO1VBQ2lCLE1BQU91TixlQUFnQixTQUFRVCxXQUFBLENBQUFFLFVBQTBCO1lBQ3pFL0wsWUFBWUUsSUFBSTtjQUNmLEtBQUssQ0FBQztnQkFDTDJELE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLEdBQUczRDtlQUNILENBQUM7WUFDSDs7VUFDQStDLE9BQUEsQ0FBQXFKLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYRCxJQUFBck4sS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQW9FLFlBQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBOE0sV0FBQSxHQUFBOU0sT0FBQTtVQUNBLElBQUFELElBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUVBLElBQUF3TixRQUFBLEdBQUF4TixPQUFBO1VBR0EsSUFBQXlOLFNBQUEsR0FBQXpOLE9BQUE7VUFHTyxZQUZQO1VBRWtCLE1BQU8wTixjQUFlLFNBQVF4TixLQUFBLENBQUFxRSxJQUFvQjtZQUNuRSxDQUFBQyxXQUFZO1lBQ1osQ0FBQW1KLEtBQU07WUFLRSxPQUFPQyxTQUFTLEdBQUcsSUFBSW5OLEdBQUcsRUFBRTtZQUVwQyxDQUFBSCxHQUFJO1lBRUosQ0FBQXVOLFdBQVk7WUFFWixDQUFBN0gsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPO2dCQUFFLEdBQUksSUFBSSxDQUFDLENBQUFBLE9BQVEsQ0FBQ2pFLGFBQWEsRUFBYztnQkFBRStMLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTlILE9BQVEsQ0FBQzhIO2NBQVMsQ0FBRTtZQUM3RjtZQUNBLElBQUk5SCxPQUFPQSxDQUFDckUsSUFBc0I7Y0FDakMsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDWCxJQUFJLENBQUMsQ0FBQXFFLE9BQVEsQ0FBQ3BELEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztZQUN4QjtZQUVBLENBQUFvTSxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxJQUFJQSxVQUFVQSxDQUFDOUksS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQThJLFVBQVcsQ0FBQzVMLEtBQUssRUFBRTtjQUN4QixJQUFJLENBQUMsQ0FBQTRMLFVBQVcsQ0FBQ25MLEdBQUcsQ0FBQ3FDLEtBQUssQ0FBQztjQUMzQixJQUFJLENBQUNRLFlBQVksRUFBRTtZQUNwQjtZQUVBOzs7Ozs7WUFNQXhFLFlBQVk7Y0FBRXlCLEVBQUUsR0FBR2tHLFNBQVM7Y0FBRXhGLElBQUksR0FBRyxRQUFRO2NBQUUsR0FBR2pDO1lBQUksQ0FBRTtjQUN2RCxLQUFLLENBQUM7Z0JBQ0x1QixFQUFFO2dCQUNGb0MsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEJrSixRQUFRLEVBQUVQLFNBQUEsQ0FBQVEsY0FBYztnQkFDeEJsSixVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0osT0FBTyxFQUNQLGFBQWEsRUFDYixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFFBQVEsQ0FBQztnQkFBQTtlQUVWLENBQUMsQ0FBQyxDQUFDO2NBRUosSUFBSSxDQUFDLENBQUFpQixPQUFRLEdBQUcsSUFBSXdILFFBQUEsQ0FBQVUsT0FBTyxFQUFFO2NBQzdCLElBQUksQ0FBQyxDQUFBMUosV0FBWSxHQUFHLElBQUlKLFlBQUEsQ0FBQWdCLFdBQVcsRUFBRTtjQUNyQyxJQUFJLENBQUMsQ0FBQVksT0FBUSxHQUFHLElBQUl3SCxRQUFBLENBQUFVLE9BQU8sRUFBRTtjQUU3QixJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQzdDLElBQUksQ0FBQyxDQUFBSixVQUFXLEdBQUcsSUFBSWpCLFdBQUEsQ0FBQTFNLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDdkMsSUFBSSxDQUFDLENBQUEyTixVQUFXLENBQUN2SSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBRWhELElBQUksQ0FBQyxDQUFBbkYsR0FBSSxHQUFHLElBQUlQLElBQUEsQ0FBQXFCLEdBQUcsQ0FBQ2pCLE9BQUEsQ0FBQWtCLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUM2RCxVQUFVLENBQUM7Z0JBQUUsR0FBR2xFO2NBQUksQ0FBRSxDQUFDO1lBQzdCO1lBRUF5QixHQUFHQSxDQUFDakIsSUFBUztjQUNaLE1BQU11QixRQUFRLEdBQUcsS0FBSyxDQUFDTixHQUFHLENBQUNqQixJQUFJLENBQUM7Y0FDaEMsSUFBSUEsSUFBSSxDQUFDa00sV0FBVyxFQUFFO2dCQUNyQixJQUFJLENBQUMsQ0FBQUEsV0FBWSxDQUFDakwsR0FBRyxDQUFDakIsSUFBSSxDQUFDa00sV0FBVyxDQUFDOztjQUV4QztjQUNBLElBQUksQ0FBQzdILE9BQU8sR0FBR3JFLElBQUksQ0FBQ3FFLE9BQU87Y0FDM0IsSUFBSXJFLElBQUksQ0FBQ29NLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUFBLFVBQVcsQ0FBQ25MLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQ29NLFVBQVUsQ0FBQzs7Y0FFdEMsT0FBTzdLLFFBQVE7WUFDaEI7WUFFQSxNQUFNTSxTQUFTQSxDQUFDaUIsS0FBSyxHQUFHLEVBQUU7Y0FDekIsTUFBTTlDLElBQUksR0FBRztnQkFDWixHQUFHLElBQUksQ0FBQ0ksYUFBYSxFQUFFO2dCQUN2QixHQUFHMEMsS0FBSztnQkFDUnNKLFVBQVUsRUFBRSxJQUFJLENBQUNBLFVBQVUsQ0FBQ3JNLFFBQVEsRUFBRTtnQkFDdEMwQixJQUFJLEVBQUU7ZUFDTjtjQUNELElBQUksQ0FBQyxDQUFBdUssS0FBTSxHQUFHLElBQUk7Y0FDbEIsTUFBTXpLLFFBQVEsR0FBRyxLQUFLLENBQUNrTCxPQUFPLENBQUN6TSxJQUFJLENBQUM7Y0FDcEMrTCxjQUFjLENBQUNFLFNBQVMsQ0FBQ2hMLEdBQUcsQ0FBQyxJQUFJLENBQUNGLEVBQUUsRUFBRSxJQUFJLENBQUM7Y0FDM0MsT0FBT1EsUUFBUTtZQUNoQjtZQUNBOzs7OztZQUtBLE1BQU1tTCxtQkFBbUJBLENBQUMxTixNQUFNO2NBQy9CLElBQUk7Z0JBQ0gsSUFBSSxDQUFDMk4sYUFBYSxHQUFHLElBQUk7Z0JBQ3pCLElBQUksQ0FBQzFMLEdBQUcsQ0FBQ2pDLE1BQU0sQ0FBQztnQkFDaEIsTUFBTWdCLElBQUksR0FBd0IsTUFBTSxJQUFJLENBQUMsQ0FBQWtFLGNBQWUsQ0FBQztrQkFDNURuRCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYbUMsU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUztrQkFDekJ6QixJQUFJLEVBQUUsUUFBUTtrQkFDZG1MLFlBQVksRUFBRTVOLE1BQU0sQ0FBQ2dGLEtBQUs7a0JBQzFCQSxLQUFLLEVBQUVoRixNQUFNLENBQUNnRjtrQkFDZDtpQkFDQSxDQUFDO2dCQUVGLElBQUksQ0FBQ2hFLElBQUksQ0FBQytDLEtBQUssRUFBRTtrQkFDaEJmLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLDBDQUEwQyxFQUFFcEMsSUFBSSxDQUFDOztnQkFFL0QsTUFBTSxJQUFJLENBQUNpQixHQUFHLENBQUM7a0JBQUUsR0FBR2pCLElBQUk7a0JBQUVlLEVBQUUsRUFBRWYsSUFBSSxDQUFDZSxFQUFFO2tCQUFFUixLQUFLLEVBQUU7Z0JBQWtCLENBQUUsQ0FBQztnQkFDbkUsTUFBTSxJQUFJLENBQUNzQixTQUFTLENBQUM7a0JBQUV0QixLQUFLLEVBQUU7Z0JBQVcsQ0FBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUNvTSxhQUFhLEdBQUcsS0FBSztnQkFDMUIsSUFBSSxDQUFDN0ksWUFBWSxDQUFDLHNCQUFzQixDQUFDO2VBQ3pDLENBQUMsT0FBT1EsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDb0ksYUFBYSxHQUFHLEtBQUs7O1lBRTVCO1lBRUEsTUFBTSxDQUFBekksY0FBZU8sQ0FBQzNCLEtBQUs7Y0FDMUIsTUFBTTlDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNkMsV0FBWSxDQUFDa0IsUUFBUSxDQUFDakIsS0FBSyxDQUFDO2NBQ3BELE1BQU0sSUFBSSxDQUFDLENBQUF1QixPQUFRLENBQUNwRCxHQUFHLENBQUNqQixJQUFJLENBQUNxRSxPQUFPLENBQUM7Y0FDckMsSUFBSSxDQUFDNUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQzlCLE9BQU9ULElBQUk7WUFDWjtZQUVBLE1BQU02TSxJQUFJQSxDQUFBO2NBQ1QsTUFBTTdNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ3FNLFFBQVEsQ0FBQ1EsSUFBSSxFQUFFO2NBQ3ZDLElBQUksQ0FBQzVMLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztjQUNkLElBQUksQ0FBQ29NLFVBQVUsQ0FBQ3pMLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDb00sVUFBVSxDQUFDO1lBQzFDO1lBRUEsYUFBYXBMLEdBQUdBLENBQUM4QixLQUFLO2NBQ3JCLElBQUlBLEtBQUssRUFBRS9CLEVBQUUsSUFBSSxJQUFJLENBQUNrTCxTQUFTLENBQUNuTCxHQUFHLENBQUNnQyxLQUFLLENBQUMvQixFQUFFLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxJQUFJLENBQUNrTCxTQUFTLENBQUNqTCxHQUFHLENBQUM4QixLQUFLLENBQUMvQixFQUFFLENBQUM7O2NBR3BDLE1BQU0rTCxNQUFNLEdBQUcsSUFBSWYsY0FBYyxDQUFDakosS0FBSyxDQUFDO2NBQ3hDLElBQUlBLEtBQUssQ0FBQy9CLEVBQUUsRUFBRTtnQkFDYixNQUFNK0wsTUFBTSxDQUFDRCxJQUFJLEVBQUU7O2NBR3BCLElBQUkvSixLQUFLLENBQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDa0wsU0FBUyxDQUFDaEwsR0FBRyxDQUFDNkIsS0FBSyxDQUFDL0IsRUFBRSxFQUFFK0wsTUFBTSxDQUFDO2NBQ2xELE9BQU9BLE1BQU07WUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RMRCxJQUFBeE8sTUFBQSxHQUFBRCxPQUFBO1VBR087VUFBVSxNQUFPa08sT0FBUSxTQUFRak8sTUFBQSxDQUFBSSxhQUFzQjtZQUc3RCxJQUFJeU4sU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDWSxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLElBQUksQ0FBQztZQUN2QztZQUNBMU4sWUFBWUUsSUFBSTtjQUNmLEtBQUssQ0FBQztnQkFBRTRELFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7Z0JBQUUsR0FBRzVEO2NBQUksQ0FBRSxDQUFDO1lBQ3REOztVQUNBK0MsT0FBQSxDQUFBZ0ssT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7OztVQ1pEOztVQUVBL0UsTUFBQSxDQUFBeUYsY0FBQSxDQUFBMUssT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQWIsWUFBQSxHQUFBcEUsT0FBQTtVQUVBLElBQUE4TSxXQUFBLEdBQUE5TSxPQUFBO1VBRUEsSUFBQXdOLFFBQUEsR0FBQXhOLE9BQUE7VUFHQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFJTyxZQUZQO1VBRWtCLE1BQU82TyxLQUFNLFNBQVEzTyxLQUFBLENBQUF3TixjQUFjO1lBQ3BELENBQUFsSixXQUFZO1lBRVosQ0FBQW1KLEtBQU07WUFHTixDQUFBRSxXQUFZO1lBRVo7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUVBLElBQUk3TCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDVSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ2dDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDQyxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0UsU0FBUztZQUMzRTtZQUVBOzs7Ozs7WUFNQTVELFlBQVk7Y0FBRXlCLEVBQUUsR0FBR2tHLFNBQVM7Y0FBRXhGLElBQUksR0FBRyxRQUFRO2NBQUUsR0FBR2pDO1lBQUksSUFBcUI7Y0FBRWlDLElBQUksRUFBRTtZQUFRLENBQUU7Y0FDNUYsS0FBSyxDQUFDO2dCQUNMVixFQUFFO2dCQUNGVSxJQUFJO2dCQUNKMkIsVUFBVSxFQUFFLENBQ1g7a0JBQ0NDLElBQUksRUFBRSxTQUFTO2tCQUNmQyxLQUFLLEVBQUV1SSxRQUFBLENBQUFVO2lCQUNQLEVBQ0Q7a0JBQ0NsSixJQUFJLEVBQUUsWUFBWTtrQkFDbEJDLEtBQUssRUFBRTZILFdBQUEsQ0FBQTFNO2lCQUNQLENBQ0Q7Z0JBQ0QsR0FBR2U7ZUFDSCxDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUFxRCxXQUFZLEdBQUcsSUFBSUosWUFBQSxDQUFBZ0IsV0FBVyxFQUFFO2NBQ3JDLElBQUksQ0FBQytJLG1CQUFtQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQzdDO2NBQ0E7Y0FDQTtjQUNBO1lBQ0Q7WUFFQSxNQUFNM0ssU0FBU0EsQ0FBQ2lCLEtBQUssR0FBRyxFQUFFO2NBQ3pCLE1BQU05QyxJQUFJLEdBQUc7Z0JBQ1osR0FBRyxJQUFJLENBQUNJLGFBQWEsRUFBRTtnQkFDdkIsR0FBRzBDLEtBQUs7Z0JBQ1JzSixVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVLENBQUNyTSxRQUFRLEVBQUU7Z0JBQ3RDMEIsSUFBSSxFQUFFO2VBQ047Y0FDRCxJQUFJLENBQUMsQ0FBQXVLLEtBQU0sR0FBRyxJQUFJO2NBRWxCLE1BQU16SyxRQUFRLEdBQUcsS0FBSyxDQUFDa0wsT0FBTyxDQUFDek0sSUFBSSxDQUFDO2NBRXBDLE9BQU91QixRQUFRO1lBQ2hCO1lBQ0E7Ozs7O1lBS0EsTUFBTW1MLG1CQUFtQkEsQ0FBQzFOLE1BQU07Y0FDL0IsSUFBSTtnQkFDSCxJQUFJLENBQUMyTixhQUFhLEdBQUcsSUFBSTtnQkFDekIsSUFBSSxDQUFDMUwsR0FBRyxDQUFDakMsTUFBTSxDQUFDO2dCQUNoQixNQUFNLElBQUksQ0FBQzZDLFNBQVMsRUFBRTtnQkFDdEIsTUFBTTdCLElBQUksR0FBd0IsTUFBTSxJQUFJLENBQUMsQ0FBQWtFLGNBQWUsQ0FBQztrQkFDNURuRCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYbUMsU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUztrQkFDekJ6QixJQUFJLEVBQUUsUUFBUTtrQkFDZG1MLFlBQVksRUFBRTVOLE1BQU0sQ0FBQ2dGLEtBQUs7a0JBQzFCQSxLQUFLLEVBQUVoRixNQUFNLENBQUNnRixLQUFLO2tCQUNuQm1KLGVBQWUsRUFBRW5PLE1BQU0sQ0FBQ21PO2tCQUN4QjtpQkFDQSxDQUFDO2dCQUVGLElBQUksQ0FBQ25OLElBQUksQ0FBQytDLEtBQUssRUFBRTtrQkFDaEJmLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLDBDQUEwQyxFQUFFcEMsSUFBSSxDQUFDOztnQkFHL0RrQyxVQUFVLENBQUMsWUFBVztrQkFDckIsTUFBTSxJQUFJLENBQUNMLFNBQVMsQ0FBQztvQkFBRSxHQUFHN0IsSUFBSTtvQkFBRU8sS0FBSyxFQUFFO2tCQUFXLENBQUUsQ0FBQztrQkFDckQsSUFBSSxDQUFDb00sYUFBYSxHQUFHLEtBQUs7a0JBQzFCLElBQUksQ0FBQzdJLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztnQkFDMUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDTixPQUFPOUQsSUFBSTtlQUNYLENBQUMsT0FBT3NFLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztlQUM1QyxTQUFTO2dCQUNULElBQUksQ0FBQ29JLGFBQWEsR0FBRyxLQUFLOztZQUU1QjtZQUVBLE1BQU0sQ0FBQXpJLGNBQWVPLENBQUMzQixLQUFLO2NBQzFCLE1BQU05QyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTZDLFdBQVksQ0FBQ2tCLFFBQVEsQ0FBQ2pCLEtBQUssQ0FBQztjQUNwRCxNQUFNLElBQUksQ0FBQzdCLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztjQUNwQixJQUFJLENBQUNTLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUM5QixPQUFPVCxJQUFJO1lBQ1o7WUFFQSxNQUFNNk0sSUFBSUEsQ0FBQTtjQUNULE1BQU03TSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNxTSxRQUFRLENBQUNRLElBQUksRUFBRTtjQUV2QyxJQUFJLENBQUM1TCxHQUFHLENBQUNqQixJQUFJLENBQUM7Y0FDZCxJQUFJLENBQUNvTSxVQUFVLENBQUN6TCxRQUFRLENBQUNYLElBQUksQ0FBQ29NLFVBQVUsQ0FBQztZQUMxQztZQUVBZ0IsWUFBWSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QixNQUFNN0wsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDOEssUUFBUSxDQUFDZSxZQUFZLEVBQUU7Y0FFbkQsSUFBSSxDQUFDN0wsUUFBUSxDQUFDdUUsTUFBTSxFQUFFO2dCQUNyQixPQUFPdkUsUUFBUTs7Y0FFaEIsTUFBTSxJQUFJLENBQUNOLEdBQUcsQ0FBQ00sUUFBUSxDQUFDdkIsSUFBSSxDQUFDO2NBQzdCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztjQUNyQyxPQUFPYyxRQUFRO1lBQ2hCLENBQUM7WUFFRDs7OztZQUlBLE1BQU04TCx3QkFBd0JBLENBQUM7Y0FBRW5LO1lBQVMsQ0FBRTtjQUMzQyxJQUFJO2dCQUNILElBQUksQ0FBQ2UsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1qRSxJQUFJLEdBQXNCLE1BQU0sSUFBSSxDQUFDLENBQUFrRSxjQUFlLENBQUM7a0JBQzFEekMsSUFBSSxFQUFFLFdBQVc7a0JBQ2pCVixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYbUM7aUJBQytCLENBQUM7Z0JBRWpDLElBQUksQ0FBQ2tCLFVBQVUsQ0FBQ3BFLElBQUksQ0FBQ3FFLE9BQU8sQ0FBQztnQkFDN0I7OztnQkFHQSxPQUFPckUsSUFBSTtnQkFDWDtlQUNBLENBQUMsT0FBT3NFLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztlQUM1QyxTQUFTO2dCQUNULElBQUksQ0FBQ04sUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUFHLFVBQVVBLENBQUNwRSxJQUFhO2NBQ3ZCLElBQUksQ0FBQ3FFLE9BQU8sQ0FBQ3BELEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztjQUN0QixJQUFJLENBQUNTLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQjtZQUNBOzs7Ozs7O1lBT0EsTUFBTTZNLGlCQUFpQkEsQ0FBQztjQUFFcEssU0FBUztjQUFFcUs7WUFBWSxDQUFFO2NBQ2xELElBQUk7Z0JBQ0gsSUFBSSxDQUFDdEosUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1qRSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWtFLGNBQWUsQ0FBQztrQkFDdkN6QyxJQUFJLEVBQUUsdUJBQXVCO2tCQUM3QjhMLFlBQVk7a0JBQ1p4TSxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYbUM7aUJBQ0EsQ0FBQztnQkFFRixPQUFPbEQsSUFBSTtlQUNYLENBQUMsT0FBT3NFLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztlQUM1QyxTQUFTO2dCQUNULElBQUksQ0FBQ04sUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTVMsZUFBZUEsQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7Y0FDaEMsSUFBSTtnQkFDSCxJQUFJLENBQUNBLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlKLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Z0JBR3RDLE1BQU1LLFlBQVksR0FBRztrQkFDcEJDLEVBQUUsRUFBRTtvQkFDSEMsTUFBTSxFQUFFLGFBQWE7b0JBQ3JCQyxLQUFLLEVBQUU7bUJBQ1A7a0JBQ0RDLEVBQUUsRUFBRTtvQkFDSEYsTUFBTSxFQUFFLGVBQWU7b0JBQ3ZCQyxLQUFLLEVBQUU7bUJBQ1A7a0JBQ0RFLEVBQUUsRUFBRTtvQkFDSEgsTUFBTSxFQUFFLGVBQWU7b0JBQ3ZCQyxLQUFLLEVBQUU7O2lCQUVSO2dCQUNELE1BQU1HLE1BQU0sR0FBR04sWUFBWSxDQUFDLElBQUksQ0FBQ2hELFFBQVEsQ0FBQyxJQUFJZ0QsWUFBWSxDQUFDSSxFQUFFO2dCQUM3REwsTUFBTSxHQUFHLEdBQUdPLE1BQU0sQ0FBQ0osTUFBTSxJQUFJSCxNQUFNLElBQUlPLE1BQU0sQ0FBQ0gsS0FBSyxFQUFFO2dCQUNyRCxNQUFNeEQsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFzQixXQUFZLENBQUN1QyxLQUFLLENBQUM7a0JBQzlDVCxNQUFNO2tCQUNOVSxJQUFJLEVBQUUsV0FBVztrQkFDakJILE1BQU0sRUFBRTtpQkFDUixDQUFDO2dCQUVGLE1BQU1TLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQzBHLFFBQVEsQ0FBQ21CLFdBQVcsQ0FBQ2pNLFFBQVEsQ0FBQzRELEdBQUcsQ0FBQztnQkFFbEUsSUFBSSxDQUFDbEUsR0FBRyxDQUFDMEUsWUFBWSxDQUFDM0YsSUFBSSxDQUFDO2dCQUMzQjtnQkFDQSxJQUFJLENBQUNTLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDOUIsSUFBSSxDQUFDb0YsT0FBTyxHQUFHLEdBQUdGLFlBQVksQ0FBQzNGLElBQUksQ0FBQzZGLE9BQU8sSUFBSTRILFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQzVKLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDcEMsSUFBSSxDQUFDNkIsWUFBWSxDQUFDRyxNQUFNLEVBQUUsTUFBTSxJQUFJdkIsS0FBSyxDQUFDLG9CQUFvQixDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQ3NCLE9BQU87ZUFDbkIsQ0FBQyxPQUFPdkIsQ0FBQyxFQUFFO2dCQUNYdEMsT0FBTyxDQUFDK0QsS0FBSyxDQUFDekIsQ0FBQyxDQUFDOztZQUVsQjs7VUFDQS9CLE9BQUEsQ0FBQTJLLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxT0QsSUFBQTNPLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFvRSxZQUFBLEdBQUFwRSxPQUFBO1VBR0EsSUFBQXlOLFNBQUEsR0FBQXpOLE9BQUE7VUFHTyxZQUZQO1VBRWtCLE1BQU8wTixjQUFlLFNBQVF4TixLQUFBLENBQUFxRSxJQUFvQjtZQUNuRSxDQUFBQyxXQUFZO1lBQ1osQ0FBQW1KLEtBQU07WUFNRSxPQUFPQyxTQUFTLEdBQUcsSUFBSW5OLEdBQUcsRUFBRTtZQUlwQyxDQUFBb04sV0FBWTtZQUlaLElBQUk3TCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDVSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ2dDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDQyxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0UsU0FBUztZQUMzRTtZQUVBLElBQUl5SyxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUN0TixLQUFLLElBQUksSUFBSSxDQUFDK0wsVUFBVSxDQUFDL0wsS0FBSztZQUMzQztZQUVBOzs7Ozs7WUFNQWYsWUFBWTtjQUFFeUIsRUFBRSxHQUFHa0csU0FBUztjQUFFN0QsVUFBVTtjQUFFM0IsSUFBSSxHQUFHLFFBQVE7Y0FBRSxHQUFHakM7WUFBSSxDQUFFO2NBQ25FLEtBQUssQ0FBQztnQkFDTHVCLEVBQUU7Z0JBQ0ZvQyxNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QmtKLFFBQVEsRUFBRVAsU0FBQSxDQUFBUSxjQUFjO2dCQUN4QmxKLFVBQVUsRUFBRSxDQUNYLEdBQUdBLFVBQVUsRUFDYixJQUFJLEVBQ0osT0FBTyxFQUNQLGFBQWEsRUFDYixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFFBQVEsQ0FBQztnQkFBQTtlQUVWLENBQUMsQ0FBQyxDQUFDO2NBRUosSUFBSSxDQUFDLENBQUFQLFdBQVksR0FBRyxJQUFJSixZQUFBLENBQUFnQixXQUFXLEVBQUU7Y0FDckMsSUFBSSxDQUFDMkksVUFBVSxDQUFDdE0sU0FBUyxDQUFDLElBQUksQ0FBQztjQUMvQixJQUFJLENBQUMwTSxtQkFBbUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUM3QztjQUNBO2NBRUE7WUFDRDtZQUVBLE1BQU0zSyxTQUFTQSxDQUFDaUIsS0FBSyxHQUFHLEVBQUU7Y0FDekIsTUFBTTlDLElBQUksR0FBRztnQkFDWixHQUFHLElBQUksQ0FBQ0ksYUFBYSxFQUFFO2dCQUN2QixHQUFHMEMsS0FBSztnQkFDUnNKLFVBQVUsRUFBRSxJQUFJLENBQUNBLFVBQVUsQ0FBQ3JNLFFBQVEsRUFBRTtnQkFDdEMwQixJQUFJLEVBQUU7ZUFDTjtjQUNELElBQUksQ0FBQyxDQUFBdUssS0FBTSxHQUFHLElBQUk7Y0FFbEIsTUFBTXpLLFFBQVEsR0FBRyxLQUFLLENBQUNrTCxPQUFPLENBQUN6TSxJQUFJLENBQUM7Y0FFcEMrTCxjQUFjLENBQUNFLFNBQVMsQ0FBQ2hMLEdBQUcsQ0FBQyxJQUFJLENBQUNGLEVBQUUsRUFBRSxJQUFJLENBQUM7Y0FDM0MsT0FBT1EsUUFBUTtZQUNoQjtZQUVBLE1BQU1zTCxJQUFJQSxDQUFBO2NBQ1QsTUFBTTdNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ3FNLFFBQVEsQ0FBQ1EsSUFBSSxFQUFFO2NBQ3ZDLElBQUksQ0FBQzVMLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQztjQUNkLElBQUksQ0FBQ29NLFVBQVUsQ0FBQ3pMLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDb00sVUFBVSxDQUFDO1lBQzFDO1lBRUEsYUFBYXBMLEdBQUdBLENBQUM4QixLQUFLO2NBQ3JCLElBQUlBLEtBQUssRUFBRS9CLEVBQUUsSUFBSSxJQUFJLENBQUNrTCxTQUFTLENBQUNuTCxHQUFHLENBQUNnQyxLQUFLLENBQUMvQixFQUFFLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxJQUFJLENBQUNrTCxTQUFTLENBQUNqTCxHQUFHLENBQUM4QixLQUFLLENBQUMvQixFQUFFLENBQUM7O2NBR3BDLE1BQU0rTCxNQUFNLEdBQUcsSUFBSWYsY0FBYyxDQUFDakosS0FBSyxDQUFDO2NBQ3hDLElBQUlBLEtBQUssQ0FBQy9CLEVBQUUsRUFBRTtnQkFDYixNQUFNK0wsTUFBTSxDQUFDRCxJQUFJLEVBQUU7O2NBR3BCLElBQUkvSixLQUFLLENBQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDa0wsU0FBUyxDQUFDaEwsR0FBRyxDQUFDNkIsS0FBSyxDQUFDL0IsRUFBRSxFQUFFK0wsTUFBTSxDQUFDO2NBQ2xELE9BQU9BLE1BQU07WUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25IRCxJQUFBMU8sSUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXFFLFFBQUEsR0FBQXJFLE9BQUE7VUFLTSxNQUFPaU8sY0FBYztZQUMxQixDQUFBM04sR0FBSTtZQUNKLENBQUFZLE1BQU87WUFFUEQsWUFBWUMsTUFBc0I7Y0FDakMsSUFBSSxDQUFDLENBQUFaLEdBQUksR0FBRyxJQUFJUCxJQUFBLENBQUFxQixHQUFHLENBQUNqQixPQUFBLENBQUFrQixPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFOLE1BQU8sR0FBR0EsTUFBTTtZQUN0QixDQUFDLENBQUM7WUFFRnNOLElBQUksR0FBRyxNQUFPL0osS0FBVyxJQUFJO2NBQzVCLElBQUksQ0FBQyxDQUFBbkUsR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFSyxNQUFNO2dCQUFFOUY7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJCLEdBQUksQ0FBQ3FDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUF6QixNQUFPLENBQUN3QixFQUFFLEVBQUUsQ0FBQztjQUVsRixJQUFJLENBQUMrRSxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJdkIsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztjQUd4QyxPQUFPdkUsSUFBSTtZQUNaLENBQUM7WUFFRDROLElBQUksR0FBRyxNQUFNOUssS0FBSyxJQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBbkUsR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFSyxNQUFNO2dCQUFFOUY7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJCLEdBQUksQ0FBQ3FDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUF6QixNQUFPLENBQUN3QixFQUFFLEVBQUUsQ0FBQztjQUNsRixPQUFPO2dCQUFFK0UsTUFBTTtnQkFBRTlGO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRUQsTUFBTTZOLFFBQVFBLENBQUM5TSxFQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBcEMsR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFSyxNQUFNO2dCQUFFOUY7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJCLEdBQUksQ0FBQ3FDLEdBQUcsQ0FBQyxtQkFBbUJELEVBQUUsRUFBRSxDQUFDO2NBQ3JFLElBQUksQ0FBQytFLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUl2QixLQUFLLENBQUMsNEJBQTRCLENBQUM7O2NBRTlDLE9BQU92RSxJQUFJO1lBQ1o7WUFFQSxNQUFNcUMsTUFBTUEsQ0FBQTtjQUNYLElBQUksQ0FBQyxDQUFBMUQsR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNekYsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFyQixHQUFJLENBQUMwRCxNQUFNLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBOUMsTUFBTyxDQUFDd0IsRUFBRSxFQUFFLENBQUM7Y0FFekUsT0FBT2YsSUFBSTtZQUNaO1lBRUEsTUFBTThOLFVBQVVBLENBQUE7Y0FDZixJQUFJLENBQUMsQ0FBQW5QLEdBQUksQ0FBQzJHLE1BQU0sQ0FBQzVDLFFBQUEsQ0FBQTZDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsTUFBTXpGLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBckIsR0FBSSxDQUFDMEQsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUE5QyxNQUFPLENBQUN3QixFQUFFLEVBQUUsQ0FBQztjQUVsRSxPQUFPZixJQUFJO1lBQ1o7WUFFQSxNQUFNeU0sT0FBT0EsQ0FBQzNKLEtBQUEsR0FBdUMsRUFBRTtjQUN0RCxJQUFJQSxLQUFLLENBQUNyQixJQUFJLEtBQUssT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDSSxTQUFTLENBQUNpQixLQUFLLENBQUM7Y0FDeEQsSUFBSSxDQUFDLENBQUFuRSxHQUFJLENBQUMyRyxNQUFNLENBQUM1QyxRQUFBLENBQUE2QyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE9BQU8sSUFBSSxDQUFDLENBQUE5RyxHQUFJLENBQUNpSCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBckcsTUFBTyxDQUFDd0IsRUFBRSxVQUFVLEVBQUUrQixLQUFLLENBQUM7WUFDM0U7WUFFQSxNQUFNakIsU0FBU0EsQ0FBQ2lCLEtBQUs7Y0FDcEIsSUFBSSxDQUFDLENBQUFuRSxHQUFJLENBQUMyRyxNQUFNLENBQUM1QyxRQUFBLENBQUE2QyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU1sRSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTVDLEdBQUksQ0FBQ2lILElBQUksQ0FBQyxpQkFBaUIsRUFBRTlDLEtBQUssQ0FBQztjQUMvRCxJQUFJLENBQUN2QixRQUFRLENBQUN1RSxNQUFNLEVBQUU7Z0JBQ3JCO2NBQUE7Y0FFRCxPQUFPdkUsUUFBUTtZQUNoQjtZQUVBLE1BQU02TCxZQUFZQSxDQUFBO2NBQ2pCLElBQUksQ0FBQyxDQUFBek8sR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQztjQUNBLE9BQU8sSUFBSSxDQUFDLENBQUE5RyxHQUFJLENBQUNpSCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBckcsTUFBTyxDQUFDd0IsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDOUU7WUFFQSxNQUFNZ04sS0FBS0EsQ0FBQztjQUFFQyxRQUFRO2NBQUVDLE9BQU87Y0FBRTlLLE1BQU07Y0FBRTFCO1lBQUksQ0FBRTtjQUM5QyxJQUFJLENBQUMsQ0FBQTlDLEdBQUksQ0FBQzJHLE1BQU0sQ0FBQzVDLFFBQUEsQ0FBQTZDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsTUFBTXlJLFNBQVMsR0FBRztnQkFDakJDLFNBQVMsRUFBRSxzQkFBc0JILFFBQVEsUUFBUTtnQkFDakRsQixNQUFNLEVBQUUsWUFBWWtCLFFBQVE7ZUFDNUI7Y0FDRCxNQUFNdEksUUFBUSxHQUFHd0ksU0FBUyxDQUFDek0sSUFBSSxDQUFDLElBQUl5TSxTQUFTLENBQUNwQixNQUFNO2NBRXBELElBQUlwSyxRQUFBLENBQUE2QyxjQUFjLENBQUNDLElBQUksQ0FBQ3pFLEVBQUUsS0FBS2tOLE9BQU8sSUFBSTlLLE1BQU0sS0FBSyxNQUFNLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDLENBQUF4RSxHQUFJLENBQUNpSCxJQUFJLENBQUNGLFFBQVEsRUFBRSxFQUFFLENBQUM7O2NBRXBDLE9BQU8sSUFBSSxDQUFDLENBQUEvRyxHQUFJLENBQUNpSCxJQUFJLENBQUNGLFFBQVEsRUFBRTtnQkFBRTBJLGNBQWMsRUFBRUgsT0FBTztnQkFBRTlLO2NBQU0sQ0FBRSxDQUFDO1lBQ3JFO1lBRUEsTUFBTXFLLFdBQVdBLENBQUNySSxHQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBeEcsR0FBSSxDQUFDMkcsTUFBTSxDQUFDNUMsUUFBQSxDQUFBNkMsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNbEUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE1QyxHQUFJLENBQUNpSCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBckcsTUFBTyxDQUFDd0IsRUFBRSxRQUFRLEVBQUU7Z0JBQ2pGb0U7ZUFDQSxDQUFDO2NBQ0YsT0FBTzVELFFBQVE7WUFDaEI7O1VBQ0FnQixPQUFBLENBQUErSixjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkdELElBQUFoTyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRCxJQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBcUUsUUFBQSxHQUFBckUsT0FBQTtVQUtNLE1BQU9vRixXQUFZLFNBQVFuRixNQUFBLENBQUFJLGFBQTJCO1lBRzNELENBQUFDLEdBQUk7WUFDSlcsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQytPLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztjQUN2QyxJQUFJLENBQUMsQ0FBQTFQLEdBQUksR0FBRyxJQUFJUCxJQUFBLENBQUFxQixHQUFHLENBQUNqQixPQUFBLENBQUFrQixPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFFQSxNQUFNa0UsUUFBUUEsQ0FBQ2pCLEtBQVU7Y0FDeEIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQW5FLEdBQUksQ0FBQzJHLE1BQU0sQ0FBQzVDLFFBQUEsQ0FBQTZDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBQzNDLE1BQU1sRSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTVDLEdBQUksQ0FBQ2lILElBQUksQ0FBQyxjQUFjLEVBQUU7a0JBQUUsR0FBRzlDO2dCQUFLLENBQUUsQ0FBQztnQkFFbkUsSUFBSSxDQUFDdkIsUUFBUSxDQUFDdUUsTUFBTSxFQUFFO2tCQUNyQixJQUFJO29CQUNIQyxLQUFLLEVBQUU7c0JBQUV1SSxJQUFJLEVBQUV2STtvQkFBSztrQkFBRSxDQUN0QixHQUFHeEUsUUFBUTtrQkFFWixJQUFJd0UsS0FBSyxDQUFDbUUsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7b0JBQzNDLE9BQU87c0JBQUVuRSxLQUFLLEVBQUU7b0JBQXFCLENBQUU7O2tCQUV4QyxJQUFJQSxLQUFLLENBQUNtRSxRQUFRLENBQUMsNkVBQTZFLENBQUMsRUFBRTtvQkFDbEcsT0FBTztzQkFBRW5FLEtBQUssRUFBRSxtQkFBbUI7c0JBQUV3QixNQUFNLEVBQUV4QixLQUFLLENBQUN3SSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFBQyxDQUFFOztrQkFHbkUsT0FBTztvQkFBRXhJO2tCQUFLLENBQUU7O2dCQUVqQixPQUFPeEUsUUFBUSxDQUFDdkIsSUFBSTtlQUNwQixDQUFDLE9BQU9zRSxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJQyxLQUFLLENBQUNELENBQUMsQ0FBQ0UsT0FBTyxDQUFDOztZQUU1QjtZQUVBLE1BQU1ZLEtBQUtBLENBQUN0QyxLQUF1RDtjQUNsRSxJQUFJLENBQUMsQ0FBQW5FLEdBQUksQ0FBQzJHLE1BQU0sQ0FBQzVDLFFBQUEsQ0FBQTZDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsTUFBTWxFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNUMsR0FBSSxDQUFDaUgsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUFFaEUsUUFBUSxFQUFFLElBQUk7Z0JBQUUsR0FBR2tCO2NBQUssQ0FBRSxDQUFDO2NBQ3ZGLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQ3VFLE1BQU0sRUFBRSxNQUFNLElBQUl2QixLQUFLLENBQUNoRCxRQUFRLENBQUN3RSxLQUFLLENBQUN5SSxJQUFJLENBQUM7Y0FDMUQ7Ozs7Y0FJQSxPQUFPak4sUUFBUSxDQUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4Qjs7VUFDQXVDLE9BQUEsQ0FBQWtCLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7VUNyREQ7O1VBRUErRCxNQUFBLENBQUF5RixjQUFBLENBQUExSyxPQUFBO1lBQ0FlLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQWtFLE1BQUEsQ0FBQXlGLGNBQUEsQ0FBQTFLLE9BQUE7WUFDQWUsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBa0UsTUFBQSxDQUFBeUYsY0FBQSxDQUFBMUssT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFrRSxNQUFBLENBQUF5RixjQUFBLENBQUExSyxPQUFBO1lBQ0FlLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQWtFLE1BQUEsQ0FBQXlGLGNBQUEsQ0FBQTFLLE9BQUE7WUFDQWUsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBa0UsTUFBQSxDQUFBeUYsY0FBQSxDQUFBMUssT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSk87VUFBUCxJQUF1Qm9ILFlBT3RCO1VBUEQsV0FBdUJBLFlBQVk7WUFDbENBLFlBQUEscUJBQWlCO1lBQ2pCQSxZQUFBLHNDQUFrQztZQUNsQ0EsWUFBQSxvQ0FBZ0M7WUFDaENBLFlBQUEsb0NBQWdDO1lBQ2hDQSxZQUFBLHFCQUFpQjtZQUNqQkEsWUFBQSx1QkFBbUI7VUFDcEIsQ0FBQyxFQVBzQkEsWUFBWSxLQUFBbkksT0FBQSxDQUFBbUksWUFBQSxHQUFaQSxZQUFZIiwiaWdub3JlTGlzdCI6W119