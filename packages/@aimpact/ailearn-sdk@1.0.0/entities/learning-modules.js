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
        hash: 2046258376,
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
                properties: ['article', 'synthesis', 'introduction', 'dyslexia', 'flashcard']
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
        hash: 2016726104,
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
                instructions: 'textarea',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIkFjdGl2aXRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwibGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJNYXAiLCJpdGVtcyIsInZhbHVlcyIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsIm9yZGVyIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNvbnNvbGUiLCJ3YXJuIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiX2ZhY3RvcnkiLCJJdGVtIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJpbml0aWFsaXplIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsImNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsImdldERhdGEiLCJnZW5lcmF0ZUNvbnRlbnQiLCJsb2ciLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsIkFjdGl2aXR5U3BlY3MiLCJzdHJ1Y3R1cmUiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwiZW50cmllcyIsInByb3BlcnR5IiwiY29uZmlnIiwib3B0aW9uYWwiLCJlbXB0eSIsImlzRW1wdHkiLCJiYW5kIiwidW5kZWZpbmVkIiwiZ2V0TGVhcm5pbmdNb2R1bGUiLCJnZXRQYXJlbnQiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwicm9sZSIsInRhc2siLCJhc3Nlc3NtZW50Iiwib2JqZWN0aXZlcyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImluc3RydWN0aW9ucyIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiX3pvZCIsIkFzc2lnbm1lbnQiLCJzY2hlbWEiLCJ6Iiwib2JqZWN0Iiwic3RyaW5nIiwiTGVhcm5pbmdNb2R1bGVzIiwiX2NyZWRpdHMiLCJfcHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiZGF0YVByb3ZpZGVyIiwiTW9kdWxlUHJvdmlkZXIiLCJDcmVkaXRzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInB1Ymxpc2giLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsImxvYWQiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsInRvdGFsQWN0aXZpdGllcyIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbXBsZXRlZCIsImxpc3QiLCJnZXREcmFmdCIsImRlbGV0ZUl0ZW0iLCJjbG9uZSIsIm1vZHVsZUlkIiwib3duZXJJZCIsImVuZHBvaW50cyIsImNvbW11bml0eSIsIm9yZ2FuaXphdGlvbklkIiwicmVhY3RpdmVQcm9wcyIsInRleHQiLCJpbmNsdWRlcyIsInNwbGl0IiwiY29kZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyL2luZGV4LnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFLQTs7Ozs7Ozs7O1VBU00sTUFBT0ksVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLEdBQUk7WUFDSixDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQy9CO1lBQ0EsQ0FBQUMsV0FBWTtZQUNaQyxZQUFZQyxNQUFNLEVBQUVDLElBQUs7Y0FDeEI7Y0FDQTtjQUNBO2NBQ0E7Y0FDQSxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQVQsR0FBSSxHQUFHLElBQUlQLElBQUEsQ0FBQWlCLEdBQUcsQ0FBQ2IsT0FBQSxDQUFBYyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDLENBQUFiLGNBQWUsR0FBR08sTUFBTTtZQUM5QjtZQUVBTyxTQUFTQSxDQUFDUCxNQUFNO2NBQ2YsSUFBSSxDQUFDLENBQUFQLGNBQWUsR0FBR08sTUFBTTtZQUM5QjtZQUVBUSxRQUFRQSxDQUFB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