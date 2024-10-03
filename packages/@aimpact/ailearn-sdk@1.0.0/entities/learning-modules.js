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
        hash: 695965044,
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
          var _activityTypes = require("../activity-types");
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
              return _activityTypes.ActivityTypes.items;
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
        hash: 1310037881,
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
              this.specs?.setParents(this, this.#learningModule);
              this.specs.on('properties.changed', () => {
                this.triggerEvent('properties.changed');
              });
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                if (property === 'specs') {
                  output[property] = this[property].getData();
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            set(data) {
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                if (property === 'activities' && !data[property]) {
                  return;
                }
                this[property] = data[property];
              });
              this.triggerEvent('properties.changed');
              return {
                updated: true
              };
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
        hash: 2206785813,
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
            constructor(parent, module) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
              this.#learningModule = module;
            }
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
                await this.#learningModule.set({
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
              try {
                this.fetching = true;
                if (name === 'article') return this.generateContent(notes);
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/LearningModules/${this.#learningModule.id}/activities/${this.#parent.id}/materials`;
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
                await Promise.all([this.set(data), this.#learningModule.saveDraft(), this.#learningModule.set({
                  credits: data.credits
                })]);
                this.#learningModule.trigger('credits.change');
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/base
      ***************************************/

      ims.set('./activities/specs/base', {
        hash: 2097625674,
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
        hash: 4292214338,
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
        hash: 802474667,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _base = require("./base");
          class MultipleChoiceActivitySpecs extends _base.ActivitySpecs {
            constructor(args = {}) {
              super({
                ...args,
                properties: ['questions', 'related']
              });
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
        hash: 825287213,
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
        hash: 3299920194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9tb2RlbCIsIl9pdGVtIiwiX2NvbmZpZyIsIl9hY3Rpdml0eVR5cGVzIiwiQWN0aXZpdGllcyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJsZWFybmluZ01vZHVsZSIsIm1hcCIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwic2F2ZVRpbWVvdXQiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImFyZ3MiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXRQYXJlbnQiLCJnZXRJdGVtcyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJnZXRQcm9wZXJ0aWVzIiwidmFsaWQiLCJldmVyeSIsInN0YXRlIiwiY2xlYXIiLCJ0cmlnZ2VyIiwiYXZhaWxhYmxlVHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsIm9yZGVyIiwibGVuZ3RoIiwibGFuZ3VhZ2UiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNvbnNvbGUiLCJ3YXJuIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21hdGVyaWFscyIsIl9zdWdnZXN0aW9ucyIsIl9zZXNzaW9uIiwiX2ZhY3RvcnkiLCJJdGVtIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJpbml0aWFsaXplIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2V0RGF0YSIsIm91dHB1dCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJlIiwiRXJyb3IiLCJtZXNzYWdlIiwiI2dldFN1Z2dlc3Rpb25zIiwiY3JlZGl0cyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwibW9kdWxlIiwiZ2VuZXJhdGVDb250ZW50IiwiUHJvbWlzZSIsImFsbCIsIkFjdGl2aXR5U3BlY3MiLCJzdHJ1Y3R1cmUiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImZpZWxkcyIsIk9iamVjdCIsImtleXMiLCJmaWVsZCIsImVudHJpZXMiLCJjb25maWciLCJvcHRpb25hbCIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJ1bmRlZmluZWQiLCJfYmFzZSIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwicm9sZSIsInRhc2siLCJhc3Nlc3NtZW50Iiwib2JqZWN0aXZlcyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwibWF0ZXJpYWxzIiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiX2NvbGxlY3Rpb24iLCJBc3NpZ25tZW50cyIsIkNvbGxlY3Rpb24iLCJfem9kIiwiQXNzaWdubWVudCIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZXMiLCJfY3JlZGl0cyIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJkYXRhUHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsIkNyZWRpdHMiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwibG9hZCIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJzYXZlUGljdHVyZSIsInBlcmZvcm1hbmNlIiwibm93IiwiY29tcGxldGVkIiwibGlzdCIsImdldERyYWZ0IiwiZGVsZXRlSXRlbSIsImNsb25lIiwibW9kdWxlSWQiLCJvd25lcklkIiwiZW5kcG9pbnRzIiwiY29tbXVuaXR5Iiwib3JnYW5pemF0aW9uSWQiLCJyZWFjdGl2ZVByb3BzIiwidGV4dCIsImluY2x1ZGVzIiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIvaW5kZXgudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFw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