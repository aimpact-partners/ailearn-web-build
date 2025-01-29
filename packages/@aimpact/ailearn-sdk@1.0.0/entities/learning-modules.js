System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/entities/collection", "zod@3.24.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, LearningModuleBase, LearningModules, CommunityLearningModule, Credits, Draft, LearningModule, ModuleListItem, ActivityType, IActivityListItem, IOwnerData, IActivityDraftData, ISuggestionResponse, IModuleListItem, ILearningModuleDraft, ICreditsConsumptionsData, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    ActivityTypes: void 0,
    LearningModuleBase: void 0,
    LearningModules: void 0,
    CommunityLearningModule: void 0,
    Credits: void 0,
    Draft: void 0,
    LearningModule: void 0,
    ModuleListItem: void 0,
    ActivityType: void 0,
    IActivityListItem: void 0,
    IOwnerData: void 0,
    IActivityDraftData: void 0,
    ISuggestionResponse: void 0,
    IModuleListItem: void 0,
    ILearningModuleDraft: void 0,
    ICreditsConsumptionsData: void 0,
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
        hash: 98574271,
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
              return this.#learningModule.saveDraft();
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
        hash: 2643952113,
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
              if (!properties.id) {
                return {
                  ...properties,
                  id: this.instanceId
                };
              }
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
        hash: 1262339134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/reactive/model");
          class ActivityMaterials extends _model.ReactiveModel {
            #api;
            #parent;
            #draft;
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
            setParents = (parent, draft) => {
              this.#parent = parent;
              this.#draft = draft;
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
                const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/article`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  objective: this.#parent.specs.objective,
                  notes
                });
                this.set(data);
                await this.#draft.saveDraft({
                  credits: data.credits
                });
                this.#draft.trigger('credits.change');
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
              const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/${name}`;
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
              await this.#draft.saveDraft(data);
              this.fetching = false;
              this.#draft.trigger('credits.change');
              return data;
            }
            async generateAudio(materials = []) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/audio`;
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
              await Promise.all([this.#draft.set({
                credits: data.credits
              }), this.set({
                audios: {
                  ...this.audios,
                  ...data.audios
                }
              })]);
              this.#draft.trigger('credits.change');
              this.trigger('audios.changed');
              return data;
            }
            async deleteAudio(materials = []) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/audio`;
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
              // this.#draft.trigger('credits.change');
              return data;
            }
            async deleteAudios() {
              this.set({
                audios: undefined
              });
              return await this.#draft.saveDraft();
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
        hash: 2016369847,
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
                if (this[str]) {
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
        hash: 683159511,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _zod = require("zod");
          /**
           * TODO: Review if this object is really needed.
           */
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
        hash: 1718067691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleBase = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class LearningModuleBase extends _item.Item {
            owner;
            language;
            title;
            description;
            objective;
            picture;
            audience;
            constructor({
              id = undefined,
              properties = [],
              type = 'module',
              ...args
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: ['id', 'creator', 'owner', 'language', 'title', 'description', 'objective', 'picture', 'audience', ...properties]
              });
            }
            async loadAudience(language) {
              const audience = await this.provider.getAudience(language);
              return audience;
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
        hash: 2697452062,
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
        hash: 1756628758,
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
                properties: ['totalActivities', 'state', {
                  name: 'credits',
                  value: _credits.Credits
                }, {
                  name: 'activities',
                  value: _collection.Activities
                }],
                ...args
              });
              this.#suggestions = new _suggestions.Suggestions();
              console.log(155, this, args);
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

      /**********************
      INTERNAL MODULE: ./list
      **********************/

      ims.set('./list', {
        hash: 4232444088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleListItem = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class ModuleListItem extends _item.Item {
            owner;
            language;
            title;
            description;
            objective;
            picture;
            audience;
            activities;
            constructor({
              id = undefined,
              properties = [],
              type = 'module',
              ...args
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: ['id', 'creator', 'owner', 'language', 'title', 'description', 'objective', 'picture', 'audience', 'activities']
              });
            }
          }
          exports.ModuleListItem = ModuleListItem;
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
        hash: 455536856,
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

      /************************************
      INTERNAL MODULE: ./types/common/owner
      ************************************/

      ims.set('./types/common/owner', {
        hash: 3016744349,
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

      /********************************************
      INTERNAL MODULE: ./types/learning-module-base
      ********************************************/

      ims.set('./types/learning-module-base', {
        hash: 2023505170,
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

      /*********************************
      INTERNAL MODULE: ./types/timeStamp
      *********************************/

      ims.set('./types/timeStamp', {
        hash: 1228819976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
        "im": "./list",
        "from": "ModuleListItem",
        "name": "ModuleListItem"
      }, {
        "im": "./types/activities",
        "from": "ActivityType",
        "name": "ActivityType"
      }, {
        "im": "./types/activities",
        "from": "IActivityListItem",
        "name": "IActivityListItem"
      }, {
        "im": "./types/common/owner",
        "from": "IOwnerData",
        "name": "IOwnerData"
      }, {
        "im": "./types/drafts",
        "from": "IActivityDraftData",
        "name": "IActivityDraftData"
      }, {
        "im": "./types/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
      }, {
        "im": "./types/learning-module-base",
        "from": "IModuleListItem",
        "name": "IModuleListItem"
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
        (require || prop === 'ModuleListItem') && _export("ModuleListItem", ModuleListItem = require ? require('./list').ModuleListItem : value);
        (require || prop === 'ActivityType') && _export("ActivityType", ActivityType = require ? require('./types/activities').ActivityType : value);
        (require || prop === 'IActivityListItem') && _export("IActivityListItem", IActivityListItem = require ? require('./types/activities').IActivityListItem : value);
        (require || prop === 'IOwnerData') && _export("IOwnerData", IOwnerData = require ? require('./types/common/owner').IOwnerData : value);
        (require || prop === 'IActivityDraftData') && _export("IActivityDraftData", IActivityDraftData = require ? require('./types/drafts').IActivityDraftData : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./types/index').ISuggestionResponse : value);
        (require || prop === 'IModuleListItem') && _export("IModuleListItem", IModuleListItem = require ? require('./types/learning-module-base').IModuleListItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsImUiLCJsb2ciLCIjZ2V0U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJFcnJvciIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2F2ZUNoYW5nZXMiLCJzZXRMYXlvdXQiLCJsYXlvdXQiLCJzZXR0aW5ncyIsImRyYWZ0IiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwicHJvcHMiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZ2VuZXJhdGVBdWRpbyIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsInVuZGVmaW5lZCIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50Iiwic3RydWN0dXJlTmFtZSIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicmVxdWlyZWQiLCJyb2xlIiwiaW5zdHJ1Y3Rpb25zIiwib2JqZWN0aXZlcyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImFkdmFuY2VkIiwiYXR0YWNobWVudHMiLCJtdWx0aXBsZSIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJzdHIiLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJfem9kIiwiZGFzaGJvYXJkIiwibGluayIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsIm93bmVyIiwiYXVkaWVuY2UiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwibG9hZEF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiTGVhcm5pbmdNb2R1bGVQcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwiX2NyZWRpdHMiLCJDb21tdW5pdHlMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiQ3JlZGl0cyIsImluaXRpYWxpemUiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJsb2FkIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIl9hdWRpZW5jZSIsImNsb25lIiwiTW9kdWxlTGlzdEl0ZW0iLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwib3duZXJJZCIsImVuZHBvaW50cyIsImNvbW11bml0eSIsIm9yZ2FuaXphdGlvbklkIiwidGVzdEFjdGl2aXR5IiwiZHJhZnRJZCIsImdldEFjdGl2aXR5VGVzdGluZyIsInJvdXRlIiwiZGVsZXRlSXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwidGV4dCIsImVycm9yVGV4dCIsInNwbGl0IiwibWVzc2FnZSIsImNvZGUiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2Jhc2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXQudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jb250ZW50LXRoZW9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2RlYmF0ZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvYWN0aXZpdHktdHlwZXMudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2F1ZGllbmNlLnRzIiwiL2Jhc2UudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9pdGVtLnRzIiwiL2xpc3QudHMiLCIvcHJvdmlkZXJzL2luZGV4LnRzIiwiL3Byb3ZpZGVycy9sZWFybmluZy1tb2R1bGVzLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL3R5cGVzL2FjdGl2aXRpZXMudHMiLCIvb3duZXIudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS1iYXNlLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyIsIi90aW1lU3RhbXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBOzs7Ozs7Ozs7VUFTTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsY0FBZTtZQUVmLENBQUFDLEdBQUksR0FBbUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2hELElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztZQUNqRTtZQUVBLENBQUFDLFdBQVk7WUFDWkMsWUFBWUMsTUFBTSxFQUFFQyxJQUFLO2NBQ3hCLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBWixjQUFlLEdBQUdXLE1BQU07WUFDOUI7WUFFQUUsU0FBU0EsQ0FBQ0YsTUFBTTtjQUNmLElBQUksQ0FBQyxDQUFBWCxjQUFlLEdBQUdXLE1BQU07WUFDOUI7WUFFQUcsUUFBUUEsQ0FBQTtjQUNQLE1BQU1DLElBQUksR0FBMEIsRUFBRTtjQUV0QyxJQUFJLENBQUMsQ0FBQWQsR0FBSSxDQUFDZSxPQUFPLENBQUNDLElBQUksSUFBRztnQkFDeEJGLElBQUksQ0FBQ0csSUFBSSxDQUFDRCxJQUFJ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