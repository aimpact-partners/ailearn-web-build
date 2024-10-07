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
        hash: 3612035501,
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
              const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials`;
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
              console.log(99, data);
              this.set(data);
              await this.#learningModule.saveDraft(data);
              this.#learningModule.trigger('credits.change');
              return data;
            }
            async generateAudio(notes) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`;
              const {
                status,
                data
              } = await this.#api.post(url, {});
              if (!status) {
                throw new Error('error generating article material');
              }
              await Promise.all([this.#learningModule.set({
                credits: data.credits
              }), this.set(data)]);
              this.#learningModule.trigger('credits.change');
              return data;
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/base
      ***************************************/

      ims.set('./activities/specs/base', {
        hash: 1573618741,
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
                console.log(99, data);
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
        hash: 3683008765,
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
        hash: 3954746659,
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
        hash: 1282023966,
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
              console.log(0.2, specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwibGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsIm9yZGVyIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNvbnNvbGUiLCJ3YXJuIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiX2ZhY3RvcnkiLCJJdGVtIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJpbml0aWFsaXplIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsImNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsImdldERhdGEiLCJnZW5lcmF0ZUNvbnRlbnQiLCJsb2ciLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsIkFjdGl2aXR5U3BlY3MiLCJzdHJ1Y3R1cmUiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwiZW50cmllcyIsInByb3BlcnR5IiwiY29uZmlnIiwib3B0aW9uYWwiLCJlbXB0eSIsImlzRW1wdHkiLCJiYW5kIiwidW5kZWZpbmVkIiwiZ2V0TGVhcm5pbmdNb2R1bGUiLCJnZXRQYXJlbnQiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwicm9sZSIsInRhc2siLCJpbnN0cnVjdGlvbnMiLCJvYmplY3RpdmVzIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJfY2hhcmFjdGVyVGFsayIsIl9jaGF0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsInJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJjdG9yIiwiY3JlYXRlIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiX3pvZCIsIkFzc2lnbm1lbnQiLCJzY2hlbWEiLCJ6Iiwib2JqZWN0Iiwic3RyaW5nIiwiTGVhcm5pbmdNb2R1bGVzIiwiX2NyZWRpdHMiLCJfcHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiZGF0YVByb3ZpZGVyIiwiTW9kdWxlUHJvdmlkZXIiLCJDcmVkaXRzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInB1Ymxpc2giLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsImxvYWQiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsInRvdGFsQWN0aXZpdGllcyIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbXBsZXRlZCIsImxpc3QiLCJnZXREcmFmdCIsImRlbGV0ZUl0ZW0iLCJjbG9uZSIsIm1vZHVsZUlkIiwib3duZXJJZCIsImVuZHBvaW50cyIsImNvbW11bml0eSIsIm9yZ2FuaXphdGlvbklkIiwicmVhY3RpdmVQcm9wcyIsInRleHQiLCJpbmNsdWRlcyIsInNwbGl0IiwiY29kZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyL2luZGV4LnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFLQTs7Ozs7Ozs7O1VBU00sTUFBT0ksVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLEdBQUk7WUFDSixDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQy9CO1lBQ0EsQ0FBQUMsV0FBWTtZQUNaQyxZQUFZQyxNQUFNLEVBQUVDLElBQUs7Y0FDeEI7Y0FDQTtjQUNBO2NBQ0E7Y0FDQSxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQVQsR0FBSSxHQUFHLElBQUlQLElBQUEsQ0FBQWlCLEdBQUcsQ0FBQ2IsT0FBQSxDQUFBYyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFiLGNBQWUsR0FBR08sTUFBTTtZQUM5QjtZQUVBTyxTQUFTQSxDQUFDUCxNQUFNO2NBQ2YsSUFBSSxDQUFDLENBQUFQLGNBQWUsR0FBR08sTUFBTTtZQUM5QjtZQUVBUSxRQUFRQSxDQUFB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