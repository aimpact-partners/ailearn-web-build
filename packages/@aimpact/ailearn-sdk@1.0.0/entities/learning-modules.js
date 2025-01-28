System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/entities/collection", "zod@3.24.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, LearningModuleBase, LearningModules, CommunityLearningModule, Credits, Draft, LearningModule, IActivityDraftData, ISuggestionResponse, ILearningModuleDraft, IOwnerData, ICreditsConsumptionsData, ActivityType, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    ActivityTypes: void 0,
    LearningModuleBase: void 0,
    LearningModules: void 0,
    CommunityLearningModule: void 0,
    Credits: void 0,
    Draft: void 0,
    LearningModule: void 0,
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
        hash: 3971586,
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
                if (!this.availableTypes.includes(activity.type)) {
                  console.warn('The activity type', activity.type, 'is not available');
                  return;
                }
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
              if (!this.availableTypes.includes(type)) {
                console.warn('The activity type', type, 'is not available');
                return;
              }
              const activity = new _item.Activity(this.#learningModule, {
                type,
                order: this.items.length,
                language: this.#learningModule.language
              });
              this.#map.set(activity.instanceId, activity);
              this.#learningModule.saveDraft();
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
        hash: 3046884350,
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
            get readyToTest() {
              return this.progressData.filter(item => !item).length === 0;
            }
            get progressData() {
              const output = [!!this.title, !!this.description];
              if (this.specs.structure.general) output.push(this.specs.validateData('general'));
              // if (this.specs.structure.advanced) output.push(this.specs.validateData('advanced'));
              if (this.specs.structure.agent) output.push(this.specs.validateData('agent'));
              return output;
            }
            constructor(learningModule, args = {}) {
              super({
                ...args,
                entity: 'LearningModuleActivity',
                properties: ['id', 'type', 'title', 'settings', 'description', 'order', 'types', 'duration', 'picture', 'language', 'pictureSuggestions', 'type', {
                  name: 'materials',
                  value: _materials.ActivityMaterials
                }, {
                  name: 'specs',
                  value: _factory.ActivitySpecsFactory.get(args.type)
                }]
              });
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.materials.setParents(this, this.#learningModule);
              this.specs?.setParents(this, this.#learningModule);
              this.specs.on('properties.changed', () => {
                this.triggerEvent('properties.changed');
                this.trigger('change');
              });
            }
            async generate({
              notes,
              objective
            }) {
              try {
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
              } catch (e) {
                console.log(e);
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
            save = async specs => {
              if (specs) await this.set(specs);
              if (!this.unpublished) return;
              this.fetching = true;
              // super.save();
              const response = await this.#learningModule.saveDraft();
              if (specs?.credits) {
                this.#learningModule.setCredits(specs.credits);
              }
              //  persist changes in memory
              this.specs.saveChanges();
              this.trigger('activity.saved');
              this.fetching = false;
              return response;
            };
            remove(id) {
              // TODO: Implement this method
            }
            getProperties() {
              let properties = super.getProperties();
              if (!properties.id) properties.id = this.instanceId;
              return properties;
            }
            setLayout(layout) {
              if (!['main-chat-layout', 'main-content-layout', 'full-content-layout'].includes(layout)) {
                console.warn('invalid layout', layout);
                return;
              }
              this.set({
                settings: {
                  layout
                }
              });
              this.save();
            }
          }
          exports.Activity = Activity;
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/materials/index
      ********************************************/

      ims.set('./activities/materials/index', {
        hash: 3549396762,
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
            constructor(props = {}) {
              super({
                ...props,
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
        hash: 3900990228,
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
            get agentData() {
              return this.validateData('agent');
            }
            get generalData() {
              return this.validateData('general');
            }
            get advancedData() {
              return this.validateData('advanced');
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
                //@ts-ignore;
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
                //@ts-ignore
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
                this.saveChanges();
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
            validateData(structureName) {
              let band = true;
              if (!this.structure[structureName]) {
                return;
              }
              Object.keys(this.structure[structureName]).forEach(item => {
                const structure = this.structure[structureName][item];
                const property = this[item];
                if (!property) band = false;
                // if (structure.required && !property) band = false;
              });
              return band;
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/character-talk
      *************************************************/

      ims.set('./activities/specs/character-talk', {
        hash: 784023792,
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
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  role: {
                    type: 'input',
                    required: true
                  },
                  instructions: {
                    type: 'textarea',
                    optional: true
                  },
                  objectives: {
                    type: 'array',
                    required: true,
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
        hash: 528000415,
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
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  topic: {
                    type: 'input',
                    required: true
                  },
                  objectives: {
                    advanced: true,
                    type: 'array',
                    required: true,
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
        hash: 1632253397,
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
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  subject: {
                    type: 'input',
                    required: true
                  },
                  role: {
                    type: 'textarea',
                    required: true
                  },
                  instructions: {
                    type: 'textarea',
                    optional: true
                  },
                  objectives: {
                    type: 'array',
                    required: true,
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
        hash: 469617681,
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
                    required: true,
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
                const str = this.properties[band];
                if (['objective', 'related'].includes(str)) {
                  band++;
                  continue;
                }
                if (str) {
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
        hash: 387346656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
          var _item = require("./item");
          var _api = require("@aimpact/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          class Assignments extends _collection.Collection {
            #api;
            #parent;
            constructor({
              parent,
              ...args
            } = {
              parent: undefined
            }) {
              super({
                ...args,
                entity: 'Assignments',
                item: _item.Assignment
              });
              this.#parent = parent;
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            #classrooms = new Map();
            get classrooms() {
              return this.#classrooms;
            }
            //@ts-ignore
            set(items) {
              this.setItems(items);
              this.items.forEach(item => {
                this.#classrooms.set(item.classroom.id, item);
              });
            }
            async add(classroomId) {
              const specs = {
                moduleId: this.#parent.id,
                classroomId
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/assignments', specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              const assignment = new _item.Assignment({
                parent: this,
                ...response.data
              });
              this.#classrooms.set(classroomId, assignment);
              this.#parent.trigger('change');
              // console.log(this.#map);
              return assignment;
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 1042129113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _zod = require("zod");
          class Assignment extends _item.Item {
            get dashboard() {
              return `/dashboard/${this.id}`;
            }
            get link() {
              return `/assignments/${this.id}`;
            }
            schema = _zod.z.object({
              id: _zod.z.string(),
              name: _zod.z.string(),
              description: _zod.z.string().optional()
            });
            constructor(args = {}) {
              super({
                ...args,
                entity: 'Assignments',
                properties: ['classroom', 'id']
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

      /**********************
      INTERNAL MODULE: ./base
      **********************/

      ims.set('./base', {
        hash: 2655467967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleBase = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _audience = require("./audience");
          var _providers = require("./providers");
          /*bundle */
          class LearningModuleBase extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
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
              properties = [],
              type = 'module',
              ...args
            }) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'ia', 'language', 'objective', 'public', 'playground', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual', {
                  name: 'audience',
                  value: _audience.LearningModuleAudience
                }]
              }); // super call ends.
            }
            async loadAudience(language) {
              const audience = await this.provider.getAudience(language);
              return audience;
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
          exports.LearningModuleBase = LearningModuleBase;
        }
      });

      /****************************
      INTERNAL MODULE: ./collection
      ****************************/

      ims.set('./collection', {
        hash: 3967468559,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
          var _item = require("./item");
          var _learningModules = require("./providers/learning-modules");
          /*bundle*/ //your code here
          class LearningModules extends _collection.Collection {
            #audiences = new Map();
            get audiences() {
              return this.#audiences;
            }
            constructor(args = {}) {
              super({
                entity: 'LearningModule',
                provider: _learningModules.LearningModuleProvider,
                item: _item.LearningModule,
                ...args
              });
            }
            async loadAudience(language) {
              if (this.#audiences.has(language)) {
                return this.#audiences.get(language);
              }
              const audience = await this.provider.getAudience(language);
              this.#audiences.set(language, audience);
              return audience;
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /***************************
      INTERNAL MODULE: ./community
      ***************************/

      ims.set('./community', {
        hash: 798722325,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityLearningModule = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _suggestions = require("./suggestions");
          var _collection = require("./activities/collection");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _credits = require("./credits");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class CommunityLearningModule extends _item.Item {
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
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                properties: ['id', 'title', 'description', 'status', 'userId', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually]
                ]
              }); // super call ends.
              this.#credits = new _credits.Credits();
              this.#suggestions = new _suggestions.Suggestions();
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
                // todo: @jircdev
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
              CommunityLearningModule.instances.set(this.id, this);
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
              return data;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new CommunityLearningModule(specs);
              if (specs.id) {
                await module.load();
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.CommunityLearningModule = CommunityLearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/index
      *******************************/

      ims.set('./credits/index', {
        hash: 1001623085,
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
            constructor(args = {}) {
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
        hash: 1705262902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Draft = void 0;
          var _collection = require("./activities/collection");
          var _base = require("./base");
          var _credits = require("./credits");
          var _suggestions = require("./suggestions");
          /*bundle */ //your code here
          class Draft extends _base.LearningModuleBase {
            #suggestions;
            #saved;
            get completed() {
              return this.valid && this.activities.valid;
            }
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
                properties: ['totalActivities', {
                  name: 'credits',
                  value: _credits.Credits
                }, {
                  name: 'activities',
                  value: _collection.Activities
                }],
                ...args
              });
              this.#suggestions = new _suggestions.Suggestions();
              this.activities.setParent(this);
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
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
              return data;
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
        hash: 2913357057,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _collection = require("./assignments/collection");
          var _audience = require("./audience");
          var _providers = require("./providers");
          /*bundle */
          class LearningModule extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
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
              properties = [],
              type = 'module',
              ...args
            }) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'ia', 'language', 'objective', 'public', 'playground', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', {
                  name: 'assignments',
                  value: _collection.Assignments
                }, 'manual', {
                  name: 'audience',
                  value: _audience.LearningModuleAudience
                }]
              }); // super call ends.
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
            clone(args) {
              return this.provider.clone(args);
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*********************************
      INTERNAL MODULE: ./providers/index
      *********************************/

      ims.set('./providers/index', {
        hash: 3765739538,
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
              if (!status) {
                throw new Error('error loading module');
              }
              return data;
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
            testActivity = async (draftId, activityId) => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.post(`/modules/drafts/${draftId}/activities/${activityId}/testing`, {});
              return data;
            };
            getActivityTesting = async (draftId, activityId) => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /********************************************
      INTERNAL MODULE: ./providers/learning-modules
      ********************************************/

      ims.set('./providers/learning-modules', {
        hash: 3295641174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          class LearningModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            list = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              if (specs.route === 'community') {
                delete specs.route;
                const {
                  data
                } = await this.#api.get(`/community/modules`, specs);
                return data?.items ?? [];
              }
              const {
                status,
                data
              } = await this.#api.get(`/modules${specs.route}`);
              return data?.items ?? [];
            };
            async deleteItems(id) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.delete(`/modules/drafts/${id}`);
                if (!status) {
                  throw new Error('error deleting module');
                }
                return data;
              } catch (e) {
                console.error(e);
              }
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
          exports.LearningModuleProvider = LearningModuleProvider;
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
        hash: 3255660472,
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
        hash: 139844840,
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
        "im": "./base",
        "from": "LearningModuleBase",
        "name": "LearningModuleBase"
      }, {
        "im": "./collection",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./community",
        "from": "CommunityLearningModule",
        "name": "CommunityLearningModule"
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
        (require || prop === 'LearningModuleBase') && _export("LearningModuleBase", LearningModuleBase = require ? require('./base').LearningModuleBase : value);
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./collection').LearningModules : value);
        (require || prop === 'CommunityLearningModule') && _export("CommunityLearningModule", CommunityLearningModule = require ? require('./community').CommunityLearningModule : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImRlbGV0ZSIsImNsZWFuIiwiZXhwb3J0cyIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9hcGkiLCJfc3VnZ2VzdGlvbnMiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJJdGVtIiwiYXBpIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsIl9faW5zdGFuY2VJZCIsInN0cnVjdHVyZSIsInVucHVibGlzaGVkIiwicmVhZHlUb1Rlc3QiLCJwcm9ncmVzc0RhdGEiLCJmaWx0ZXIiLCJvdXRwdXQiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWdlbnQiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInZhbHVlIiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIlN1Z2dlc3Rpb25zIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwibG9nIiwiI2dldFN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwiRXJyb3IiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInNhdmVDaGFuZ2VzIiwic2V0TGF5b3V0IiwibGF5b3V0Iiwic2V0dGluZ3MiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJwcm9wcyIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlTcGVjcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaXNBcnJheVZhbGlkIiwiYXJyYXkiLCJmaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwiZmllbGQiLCJ2YWxpZGF0ZVN0cnVjdHVyZSIsImVudHJpZXMiLCJwcm9wZXJ0eSIsImNvbmZpZyIsIm9wdGlvbmFsIiwiYWdlbnREYXRhIiwiZ2VuZXJhbERhdGEiLCJhZHZhbmNlZERhdGEiLCJlbXB0eSIsImlzRW1wdHkiLCJiYW5kIiwiZ2V0TGVhcm5pbmdNb2R1bGUiLCJnZXRQYXJlbnQiLCJzdHJ1Y3R1cmVOYW1lIiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyZXF1aXJlZCIsInJvbGUiLCJpbnN0cnVjdGlvbnMiLCJvYmplY3RpdmVzIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiYWR2YW5jZWQiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJfY2hhcmFjdGVyVGFsayIsIl9jaGF0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsInJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJjdG9yIiwiY3JlYXRlIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInN0ciIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsIl96b2QiLCJkYXNoYm9hcmQiLCJsaW5rIiwic2NoZW1hIiwieiIsIm9iamVjdCIsInN0cmluZyIsIkxlYXJuaW5nTW9kdWxlQXVkaWVuY2UiLCJfYXVkaWVuY2UiLCJfcHJvdmlkZXJzIiwiTGVhcm5pbmdNb2R1bGVCYXNlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwibG9hZEF1ZGllbmNlIiwiYXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIm1vZHVsZSIsIkxlYXJuaW5nTW9kdWxlIiwibG9hZCIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJMZWFybmluZ01vZHVsZVByb3ZpZGVyIiwiX2NyZWRpdHMiLCJDb21tdW5pdHlMZWFybmluZ01vZHVsZSIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwidG90YWxBY3Rpdml0aWVzIiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJzYXZlUGljdHVyZSIsInBlcmZvcm1hbmNlIiwibm93IiwiY2xvbmUiLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwib3duZXJJZCIsImVuZHBvaW50cyIsImNvbW11bml0eSIsIm9yZ2FuaXphdGlvbklkIiwidGVzdEFjdGl2aXR5IiwiZHJhZnRJZCIsImdldEFjdGl2aXR5VGVzdGluZyIsInJvdXRlIiwiZGVsZXRlSXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwidGV4dCIsImVycm9yVGV4dCIsInNwbGl0IiwibWVzc2FnZSIsImNvZGUiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2Jhc2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXQudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jb250ZW50LXRoZW9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2RlYmF0ZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvYWN0aXZpdHktdHlwZXMudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2F1ZGllbmNlLnRzIiwiL2Jhc2UudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVycy9pbmRleC50cyIsIi9wcm92aWRlcnMvbGVhcm5pbmctbW9kdWxlcy50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9kcmFmdHMudHMiLCIvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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