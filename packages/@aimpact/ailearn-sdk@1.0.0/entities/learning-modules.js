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
        hash: 1394020594,
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
              return this.items.every(item => {
                return item.state === 'completed';
              });
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
        hash: 4013035929,
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
            async generateContent(notes, objective) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/article`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  objective: objective ? objective : this.#parent.specs.objective,
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
            async generate(name, notes, objective) {
              this.fetching = true;
              if (name === 'article') return this.generateContent(notes, objective);
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/${name}`;
              const {
                status,
                data
              } = await this.#api.post(url, {
                notes,
                objective
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
        hash: 3151644608,
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
                    type: 'textarea',
                    required: true
                  },
                  objectives: {
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
        hash: 3731567375,
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
                  objectives: {
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
        hash: 2580183850,
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
        hash: 1500935901,
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
                properties: ['state', 'pictureSuggestions', {
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
              objective,
              totalActivities
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

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 2905388780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor(message, code) {
              super(message); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 77375346,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _error = require("./error");
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
            async deleteItem() {
              const response = await this.provider.deleteItem();
              if (!response.status) throw new _error.CustomError(response.error.text, response.error.code);
              return response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsImUiLCJsb2ciLCIjZ2V0U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJFcnJvciIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2F2ZUNoYW5nZXMiLCJzZXRMYXlvdXQiLCJsYXlvdXQiLCJzZXR0aW5ncyIsImRyYWZ0IiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwicHJvcHMiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZ2VuZXJhdGVBdWRpbyIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsInVuZGVmaW5lZCIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50Iiwic3RydWN0dXJlTmFtZSIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicmVxdWlyZWQiLCJyb2xlIiwib2JqZWN0aXZlcyIsImFkdmFuY2VkIiwiaW5zdHJ1Y3Rpb25zIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiYXR0YWNobWVudHMiLCJtdWx0aXBsZSIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJzdHIiLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJfem9kIiwiZGFzaGJvYXJkIiwibGluayIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsIm93bmVyIiwiYXVkaWVuY2UiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwibG9hZEF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiTGVhcm5pbmdNb2R1bGVQcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwiX2NyZWRpdHMiLCJDb21tdW5pdHlMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiQ3JlZGl0cyIsImluaXRpYWxpemUiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJsb2FkIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJfZXJyb3IiLCJfYXVkaWVuY2UiLCJjbG9uZSIsImRlbGV0ZUl0ZW0iLCJ0ZXh0IiwiTW9kdWxlTGlzdEl0ZW0iLCJsaXN0IiwiZ2V0RHJhZnQiLCJvd25lcklkIiwiZW5kcG9pbnRzIiwiY29tbXVuaXR5Iiwib3JnYW5pemF0aW9uSWQiLCJ0ZXN0QWN0aXZpdHkiLCJkcmFmdElkIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwicm91dGUiLCJkZWxldGVJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJlcnJvclRleHQiLCJzcGxpdCJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXVkaWVuY2UudHMiLCIvYmFzZS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiLCIvbGlzdC50cyIsIi9wcm92aWRlcnMvaW5kZXgudHMiLCIvcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvdHlwZXMvYWN0aXZpdGllcy50cyIsIi9vd25lci50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLWJhc2UudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIiwiL3RpbWVTdGFtcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QixLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUMsQ0FBQVosY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFFLFNBQVNBLENBQUNGLE1BQU07Y0FDZixJQUFJLENBQUMsQ0FBQVgsY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFHLFFBQVFBLENBQUE7Y0FDUCxNQUFNQyxJQUFJLEdBQTBCLEVBQUU7Y0FFdEMsSUFBSSxDQUFDLENBQUFkLEdBQUksQ0FBQ2UsT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3hCRixJQUFJLENBQUNHLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxhQUFhLEVBQUUsQ0FBQztjQUNoQyxDQUFDLENBQUM7Y0FDRixPQUFPSixJQUFJO1lBQ1o7WUFFQSxJQUFJSyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUNqQixLQUFLLENBQUNrQixLQUFLLENBQUNKLElBQUksSUFBRztnQkFDOUIsT0FBT0EsSUFBSSxDQUFDSyxLQUFLLEtBQUssV0FBVztjQUNsQyxDQUFDLENBQUM7WUFDSDtZQUNBQyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUF0QixHQUFJLENBQUNzQixLQUFLLEVBQUU7Y0FDakIsSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBQ0EsSUFBSUMsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQztZQUNuRjtZQUNBQyxRQUFRQSxDQUFDWCxJQUFJO2NBQ1pBLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUNXLFFBQVEsRUFBRUMsS0FBSyxLQUFJO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDSCxjQUFjLENBQUNJLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJLENBQUMsRUFBRTtrQkFDakRDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFTCxRQUFRLENBQUNHLElBQUksRUFBRSxrQkFBa0IsQ0FBQztrQkFDcEU7O2dCQUdELElBQUksSUFBSSxDQUFDLENBQUE3QixHQUFJLENBQUNnQyxHQUFHLENBQUNOLFFBQVEsQ0FBQ08sRUFBRSxDQUFDLEVBQUU7a0JBQy9CLE1BQU1qQixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFoQixHQUFJLENBQUNrQyxHQUFHLENBQUNSLFFBQVEsQ0FBQ08sRUFBRSxDQUFFO2tCQUN4Q2pCLElBQUksQ0FBQ21CLEdBQUcsQ0FBQ1QsUUFBUSxDQUFDO2tCQUNsQjs7Z0JBR0QsTUFBTVUsUUFBUSxHQUFHLElBQUl4QyxLQUFBLENBQUF5QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUF0QyxjQUFlLEVBQUU7a0JBQUUsR0FBRzJCLFFBQVE7a0JBQUVDO2dCQUFLLENBQUUsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLENBQUEzQixHQUFJLENBQUNtQyxHQUFHLENBQUNDLFFBQVEsQ0FBQ0gsRUFBRSxFQUFFRyxRQUFRLENBQUM7Y0FDckMsQ0FBQyxDQUFDO2NBQ0YsT0FBTztnQkFBRUUsT0FBTyxFQUFFO2NBQUksQ0FBRTtZQUN6QjtZQUVBSCxHQUFHQSxDQUFDckIsSUFBUztjQUNaLElBQUl5QixLQUFLLENBQUNDLE9BQU8sQ0FBQzFCLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQ1csUUFBUSxDQUFDWCxJQUFJLENBQUM7O2NBRzNCLE1BQU0yQixRQUFRLEdBQUcsS0FBSyxDQUFDTixHQUFHLENBQUNyQixJQUFJLENBQUM7Y0FDaEM7Y0FDQSxPQUFPMkIsUUFBUTtZQUNoQjtZQUVBOzs7Ozs7O1lBT0EsTUFBTUMsR0FBR0EsQ0FBQ2IsSUFBSSxFQUFFYyxNQUFNLEdBQUcsS0FBSztjQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDbkIsY0FBYyxDQUFDSSxRQUFRLENBQUNDLElBQUksQ0FBQyxFQUFFO2dCQUN4Q0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsbUJBQW1CLEVBQUVGLElBQUksRUFBRSxrQkFBa0IsQ0FBQztnQkFDM0Q7O2NBRUQsTUFBTUgsUUFBUSxHQUFHLElBQUk5QixLQUFBLENBQUF5QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUF0QyxjQUFlLEVBQUU7Z0JBQ25EOEIsSUFBSTtnQkFDSnRCLEtBQUssRUFBRSxJQUFJLENBQUNMLEtBQUssQ0FBQzBDLE1BQU07Z0JBQ3hCQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE5QyxjQUFlLENBQUM4QztlQUMvQixDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUE3QyxHQUFJLENBQUNtQyxHQUFHLENBQUNULFFBQVEsQ0FBQ29CLFVBQVUsRUFBRXBCLFFBQVEsQ0FBQztjQUM1QyxJQUFJLENBQUMsQ0FBQTNCLGNBQWUsQ0FBQ2dELFNBQVMsRUFBRTtjQUVoQyxPQUFPckIsUUFBUTtZQUNoQjtZQUVBOzs7O1lBSUEsTUFBTXNCLE9BQU9BLENBQUM5QyxLQUFLO2NBQ2xCQSxLQUFLLENBQUNhLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLEVBQUVXLEtBQUssS0FBSTtnQkFDN0JYLElBQUksQ0FBQ1QsS0FBSyxHQUFHb0IsS0FBSztjQUNuQixDQUFDLENBQUM7Y0FFRixPQUFPLElBQUksQ0FBQyxDQUFBNUIsY0FBZSxDQUFDZ0QsU0FBUyxFQUFFO1lBQ3hDO1lBRUEsTUFBTUUsTUFBTUEsQ0FBQ2hCLEVBQUU7Y0FDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFqQyxHQUFJLENBQUNnQyxHQUFHLENBQUNDLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QkgsT0FBTyxDQUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFRSxFQUFFLEVBQUUsa0NBQWtDLENBQUM7Z0JBQ3BFOztjQUVELElBQUksQ0FBQyxDQUFBakMsR0FBSSxDQUFDa0QsTUFBTSxDQUFDakIsRUFBRSxDQUFDO2NBRXBCLE1BQU0sSUFBSSxDQUFDLENBQUFsQyxjQUFlLENBQUNnRCxTQUFTLEVBQUU7Y0FDdEMsSUFBSSxDQUFDeEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBNEIsS0FBS0EsQ0FBQTtjQUNKO1lBQUE7WUFHRGpCLEdBQUdBLENBQUNELEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBakMsR0FBSSxDQUFDa0MsR0FBRyxDQUFDRCxFQUFFLENBQUM7WUFDekI7WUFFQUQsR0FBR0EsQ0FBQ0MsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFqQyxHQUFJLENBQUNnQyxHQUFHLENBQUNDLEVBQUUsQ0FBQztZQUN6Qjs7VUFDQW1CLE9BQUEsQ0FBQXZELFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1SUQsSUFBQXdELE9BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE0RCxJQUFBLEdBQUE1RCxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQTZELFlBQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsVUFBQSxHQUFBOUQsT0FBQTtVQUVBLElBQUErRCxRQUFBLEdBQUEvRCxPQUFBO1VBRU87VUFBVSxNQUFPMEMsUUFBUyxTQUFRekMsS0FBQSxDQUFBK0QsSUFBYztZQVl0RCxDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsV0FBWTtZQUVaLElBQUl4QyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUN5QyxLQUFLLENBQUMzQyxLQUFLLElBQUksSUFBSSxDQUFDNEMsS0FBSyxJQUFJLElBQUksQ0FBQ0MsV0FBVyxHQUFHLFdBQVcsR0FBRyxZQUFZO1lBQ3ZGO1lBR0EsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDSCxLQUFLLENBQUNJLFNBQVMsSUFBSSxJQUFJLENBQUNILEtBQUssSUFBSSxJQUFJLENBQUNDLFdBQVc7WUFDOUQ7WUFFQSxJQUFJL0IsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDYSxVQUFVO1lBQ3ZCO1lBRUEsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiO2NBQ0EsT0FBTyxLQUFLLENBQUNiLEVBQUUsSUFBSSxJQUFJLENBQUNrQyxZQUFZO1lBQ3JDO1lBQ0EsQ0FBQXBFLGNBQWU7WUFDZixJQUFJVyxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQVgsY0FBZTtZQUM1QjtZQUVBLElBQUltRSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUNKLEtBQUssRUFBRUksU0FBUztZQUM3QjtZQUVBLElBQUlFLFNBQVNBLENBQUE7Y0FDWixPQUFPLEVBQUU7WUFDVjtZQUVBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxPQUFPLEtBQUssQ0FBQ0EsV0FBVyxJQUFJLElBQUksQ0FBQ1AsS0FBSyxDQUFDTyxXQUFXO1lBQ25EO1lBRUEsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDQyxZQUFZLENBQUNDLE1BQU0sQ0FBQ3hELElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQzRCLE1BQU0sS0FBSyxDQUFDO1lBQzVEO1lBQ0EsSUFBSTJCLFlBQVlBLENBQUE7Y0FDZixNQUFNRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ0MsV0FBVyxDQUFDO2NBRWpELElBQUksSUFBSSxDQUFDRixLQUFLLENBQUNNLFNBQVMsQ0FBQ00sT0FBTyxFQUFFRCxNQUFNLENBQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDNkMsS0FBSyxDQUFDYSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Y0FDakY7Y0FDQSxJQUFJLElBQUksQ0FBQ2IsS0FBSyxDQUFDTSxTQUFTLENBQUNRLEtBQUssRUFBRUgsTUFBTSxDQUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQzZDLEtBQUssQ0FBQ2EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2NBRTdFLE9BQU9GLE1BQU07WUFDZDtZQUVBaEUsWUFBWVYsY0FBcUIsRUFBRVksSUFBQSxHQUFnQyxFQUFFO2NBQ3BFLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQa0UsTUFBTSxFQUFFLHdCQUF3QjtnQkFDaENDLFVBQVUsRUFBRSxDQUNYLElBQUksRUFDSixNQUFNLEVBQ04sT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2IsT0FBTyxFQUNQLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsTUFBTSxFQUNOO2tCQUNDQyxJQUFJLEVBQUUsV0FBVztrQkFDakJDLEtBQUssRUFBRXZCLFVBQUEsQ0FBQXdCO2lCQUNQLEVBQ0Q7a0JBQ0NGLElBQUksRUFBRSxPQUFPO2tCQUNiQyxLQUFLLEVBQUV0QixRQUFBLENBQUF3QixvQkFBb0IsQ0FBQ2hELEdBQUcsQ0FBQ3ZCLElBQUksQ0FBQ2tCLElBQUk7aUJBQ3pDO2VBRUYsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBOUIsY0FBZSxHQUFHQSxjQUFjO2NBQ3JDLElBQUksQ0FBQyxDQUFBOEQsV0FBWSxHQUFHLElBQUlMLFlBQUEsQ0FBQTJCLFdBQVcsRUFBRTtjQUNyQyxJQUFJLENBQUMsQ0FBQXZCLEdBQUksR0FBRyxJQUFJTCxJQUFBLENBQUE2QixHQUFHLENBQUMvQixPQUFBLENBQUFnQyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFL0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUEzRixjQUFlLENBQUM7Y0FDckQsSUFBSSxDQUFDK0QsS0FBSyxFQUFFNEIsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTNGLGNBQWUsQ0FBQztjQUVsRCxJQUFJLENBQUMrRCxLQUFLLENBQUM2QixFQUFFLENBQUMsb0JBQW9CLEVBQUUsTUFBSztnQkFDeEMsSUFBSSxDQUFDQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQ3JFLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdkIsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxNQUFNc0UsUUFBUUEsQ0FBQztjQUFFQyxLQUFLO2NBQUU1QjtZQUFTLENBQUU7Y0FDbEMsSUFBSTtnQkFDSCxJQUFJLENBQUM2QixRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTWpGLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBa0YsY0FBZSxDQUFDO2tCQUN2Q25FLElBQUksRUFBRSxZQUFZO2tCQUNsQkksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBbEMsY0FBZSxDQUFDa0MsRUFBRTtrQkFDM0JQLFFBQVEsRUFBRSxJQUFJLENBQUNHLElBQUk7a0JBQ25CcUMsU0FBUztrQkFDVCtCLFVBQVUsRUFBRSxJQUFJLENBQUNoRSxFQUFFO2tCQUNuQlksUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtrQkFDdkJpRDtpQkFDQSxDQUFDO2dCQUVGLE1BQU0sSUFBSSxDQUFDM0QsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2dCQUNwQixNQUFNLElBQUksQ0FBQ2dELEtBQUssQ0FBQzNCLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLENBQUFmLGNBQWUsQ0FBQ21HLFVBQVUsQ0FBQ3BGLElBQUksQ0FBQ3FGLE9BQU8sQ0FBQztnQkFDN0MsSUFBSSxDQUFDLENBQUFwRyxjQUFlLENBQUNnRCxTQUFTLEVBQUU7Z0JBQ2hDLE9BQU9qQyxJQUFJO2VBQ1gsQ0FBQyxPQUFPc0YsQ0FBQyxFQUFFO2dCQUNYdEUsT0FBTyxDQUFDdUUsR0FBRyxDQUFDRCxDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNULElBQUksQ0FBQ0wsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTSxDQUFBQyxjQUFlTSxDQUFDeEMsS0FBSztjQUMxQixNQUFNaEQsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUErQyxXQUFZLENBQUNnQyxRQUFRLENBQUMvQixLQUFLLENBQUM7Y0FFcEQsTUFBTSxJQUFJLENBQUMsQ0FBQS9ELGNBQWUsQ0FBQ29DLEdBQUcsQ0FBQztnQkFBRWdFLE9BQU8sRUFBRXJGLElBQUksQ0FBQ3FGO2NBQU8sQ0FBRSxDQUFDO2NBQ3pELE9BQU9yRixJQUFJO1lBQ1o7WUFFQTs7OztZQUlBLE1BQU15RixlQUFlQSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtjQUNoQyxJQUFJLENBQUNBLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlDLEtBQUssQ0FBQyw0REFBNEQsQ0FBQzs7Y0FHOUUsTUFBTUMsWUFBWSxHQUFHO2dCQUNwQkMsRUFBRSxFQUFFO2tCQUNIQyxNQUFNLEVBQUUsYUFBYTtrQkFDckJDLEtBQUssRUFBRTtpQkFDUDtnQkFDREMsRUFBRSxFQUFFO2tCQUNIRixNQUFNLEVBQUUsZUFBZTtrQkFDdkJDLEtBQUssRUFBRTtpQkFDUDtnQkFDREUsRUFBRSxFQUFFO2tCQUNISCxNQUFNLEVBQUUsZUFBZTtrQkFDdkJDLEtBQUssRUFBRTs7ZUFFUjtjQUNELE1BQU1HLE1BQU0sR0FBR04sWUFBWSxDQUFDLElBQUksQ0FBQzdELFFBQVEsQ0FBQyxJQUFJNkQsWUFBWSxDQUFDSSxFQUFFO2NBQzdETixNQUFNLEdBQUcsR0FBR1EsTUFBTSxDQUFDSixNQUFNLElBQUlKLE1BQU0sSUFBSVEsTUFBTSxDQUFDSCxLQUFLLEVBQUU7Y0FFckQsTUFBTTtnQkFBRUk7Y0FBRyxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXBELFdBQVksQ0FBQ3FELEtBQUssQ0FBQztnQkFBRVYsTUFBTTtnQkFBRVcsSUFBSSxFQUFFLFdBQVc7Z0JBQUVILE1BQU0sRUFBRTtjQUFLLENBQUUsQ0FBQztjQUUzRixJQUFJLENBQUMsQ0FBQXBELEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsTUFBTUMsUUFBUSxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQXpILGNBQWUsQ0FBQ2tDLEVBQUUsZUFBZSxJQUFJLENBQUNBLEVBQUUsUUFBUTtjQUN6RixNQUFNd0YsWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE3RCxHQUFJLENBQUM4RCxJQUFJLENBQUNGLFFBQVEsRUFBRTtnQkFBRVA7Y0FBRyxDQUFFLENBQUM7Y0FDNUQsSUFBSSxDQUFDLENBQUFsSCxjQUFlLENBQUNvQyxHQUFHLENBQUM7Z0JBQUVnRSxPQUFPLEVBQUVzQixZQUFZLENBQUMzRyxJQUFJLENBQUNxRjtjQUFPLENBQUUsQ0FBQztjQUNoRSxJQUFJLENBQUMsQ0FBQXBHLGNBQWUsQ0FBQ3dCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUM5QyxJQUFJLENBQUNvRyxPQUFPLEdBQUdGLFlBQVksQ0FBQzNHLElBQUksQ0FBQzZHLE9BQU87Y0FFeEMsSUFBSSxDQUFDL0IsWUFBWSxDQUFDLGlCQUFpQixDQUFDO2NBQ3BDLElBQUksQ0FBQzZCLFlBQVksQ0FBQ0csTUFBTSxFQUFFO2dCQUN6QixNQUFNLElBQUluQixLQUFLLENBQUNnQixZQUFZLENBQUNJLEtBQUssQ0FBQzs7Y0FFcEMsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDcEI7WUFFQSxNQUFNRyxZQUFZQSxDQUFBO2NBQ2pCLE1BQU0sSUFBSSxDQUFDaEUsS0FBSyxDQUFDeEMsS0FBSyxFQUFFO2NBQ3hCO2NBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLGNBQWUsQ0FBQ2dELFNBQVMsRUFBRTtZQUN2QztZQUVBZ0YsSUFBSSxHQUFHLE1BQU9qRSxLQUFNLElBQUk7Y0FDdkIsSUFBSUEsS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDM0IsR0FBRyxDQUFDMkIsS0FBSyxDQUFDO2NBRWhDLElBQUksQ0FBQyxJQUFJLENBQUNPLFdBQVcsRUFBRTtjQUN2QixJQUFJLENBQUMwQixRQUFRLEdBQUcsSUFBSTtjQUNwQjtjQUNBLE1BQU10RCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTFDLGNBQWUsQ0FBQ2dELFNBQVMsRUFBRTtjQUV2RCxJQUFJZSxLQUFLLEVBQUVxQyxPQUFPLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxDQUFBcEcsY0FBZSxDQUFDbUcsVUFBVSxDQUFDcEMsS0FBSyxDQUFDcUMsT0FBTyxDQUFDOztjQUUvQztjQUNBLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ2tFLFdBQVcsRUFBRTtjQUN4QixJQUFJLENBQUN6RyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDOUIsSUFBSSxDQUFDd0UsUUFBUSxHQUFHLEtBQUs7Y0FDckIsT0FBT3RELFFBQVE7WUFDaEIsQ0FBQztZQUVEUSxNQUFNQSxDQUFDaEIsRUFBRTtjQUNSO1lBQUE7WUFHRGYsYUFBYUEsQ0FBQTtjQUNaLElBQUk0RCxVQUFVLEdBQUcsS0FBSyxDQUFDNUQsYUFBYSxFQUFFO2NBQ3RDLElBQUksQ0FBQzRELFVBQVUsQ0FBQzdDLEVBQUUsRUFBRTtnQkFDbkIsT0FBTztrQkFBRSxHQUFHNkMsVUFBVTtrQkFBRTdDLEVBQUUsRUFBRSxJQUFJLENBQUNhO2dCQUFVLENBQUU7O2NBRzlDLE9BQU9nQyxVQUFVO1lBQ2xCO1lBRUFtRCxTQUFTQSxDQUFDQyxNQUFNO2NBQ2YsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsQ0FBQ3RHLFFBQVEsQ0FBQ3NHLE1BQU0sQ0FBQyxFQUFFO2dCQUN6RnBHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFbUcsTUFBTSxDQUFDO2dCQUN0Qzs7Y0FFRCxJQUFJLENBQUMvRixHQUFHLENBQUM7Z0JBQ1JnRyxRQUFRLEVBQUU7a0JBQ1REOztlQUVELENBQUM7Y0FDRixJQUFJLENBQUNILElBQUksRUFBRTtZQUNaOztVQUNBM0UsT0FBQSxDQUFBZixRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL09ELElBQUFnQixPQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBNEQsSUFBQSxHQUFBNUQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQVlNLE1BQU9zRixpQkFBa0IsU0FBUXZGLE1BQUEsQ0FBQUksYUFBaUM7WUFHdkUsQ0FBQThELEdBQUk7WUFDSixDQUFBbEQsTUFBTztZQUVQLENBQUEwSCxLQUFNO1lBRU4sQ0FBQUMsU0FBVSxHQUFHO2NBQUVDLE9BQU8sRUFBRSxFQUFFO2NBQUVDLFNBQVMsRUFBRSxFQUFFO2NBQUVDLFlBQVksRUFBRSxFQUFFO2NBQUVDLFFBQVEsRUFBRSxFQUFFO2NBQUVDLFNBQVMsRUFBRTtZQUFFLENBQUU7WUFFMUZqSSxZQUFZa0ksS0FBSyxHQUFHLEVBQUU7Y0FDckIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLEtBQUs7Z0JBQ1I3RCxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVE7ZUFDdEYsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBbEIsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQTZCLEdBQUcsQ0FBQy9CLE9BQUEsQ0FBQWdDLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUNBRSxVQUFVLEdBQUdBLENBQUNoRixNQUFNLEVBQUUwSCxLQUFLLEtBQUk7Y0FDOUIsSUFBSSxDQUFDLENBQUExSCxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUEwSCxLQUFNLEdBQUdBLEtBQUs7WUFDcEIsQ0FBQztZQUVEUSxPQUFPQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMxSCxhQUFhLEVBQUU7WUFDNUI7WUFFQUksS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQ2EsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBa0csU0FBVSxDQUFDO1lBQzFCO1lBRUEsQ0FBQVEsU0FBVSxHQUFxQixJQUFJNUksR0FBRyxFQUFFO1lBQ3hDLElBQUk0SSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLE1BQU1DLGVBQWVBLENBQUNoRCxLQUFLLEVBQUU1QixTQUFTO2NBQ3JDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFOLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBRTNDLE1BQU1OLEdBQUcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUFtQixLQUFNLENBQUNuRyxFQUFFLGVBQWUsSUFBSSxDQUFDLENBQUF2QixNQUFPLENBQUN1QixFQUFFLG9CQUFvQjtnQkFFL0YsTUFBTTtrQkFBRTJGLE1BQU07a0JBQUU5RztnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThDLEdBQUksQ0FBQzhELElBQUksQ0FBQ1QsR0FBRyxFQUFFO2tCQUNsRGxELEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQXJELE1BQU8sQ0FBQ3FELEtBQUs7a0JBQ3pCRyxTQUFTLEVBQUVBLFNBQVMsR0FBR0EsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFBeEQsTUFBTyxDQUFDb0QsS0FBSyxDQUFDSSxTQUFTO2tCQUMvRDRCO2lCQUNBLENBQUM7Z0JBRUYsSUFBSSxDQUFDM0QsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2dCQUVkLE1BQU0sSUFBSSxDQUFDLENBQUFzSCxLQUFNLENBQUNyRixTQUFTLENBQUM7a0JBQUVvRCxPQUFPLEVBQUVyRixJQUFJLENBQUNxRjtnQkFBTyxDQUFFLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxDQUFBaUMsS0FBTSxDQUFDN0csT0FBTyxDQUFDLGdCQUFnQixDQUFDO2dCQUVyQyxJQUFJLENBQUNxRyxNQUFNLEVBQUU7a0JBQ1osTUFBTSxJQUFJbkIsS0FBSyxDQUFDLG1DQUFtQyxDQUFDOztnQkFFckQsSUFBSSxDQUFDdEUsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2dCQUVkLE9BQU9BLElBQUk7ZUFDWCxDQUFDLE9BQU9zRixDQUFDLEVBQUU7Z0JBQ1h0RSxPQUFPLENBQUMrRixLQUFLLENBQUN6QixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNMLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1GLFFBQVFBLENBQUNkLElBQUksRUFBRWUsS0FBYSxFQUFFNUIsU0FBaUI7Y0FDcEQsSUFBSSxDQUFDNkIsUUFBUSxHQUFHLElBQUk7Y0FDcEIsSUFBSWhCLElBQUksS0FBSyxTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUMrRCxlQUFlLENBQUNoRCxLQUFLLEVBQUU1QixTQUFTLENBQUM7Y0FFckUsSUFBSSxDQUFDLENBQUFOLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsTUFBTU4sR0FBRyxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQW1CLEtBQU0sQ0FBQ25HLEVBQUUsZUFBZSxJQUFJLENBQUMsQ0FBQXZCLE1BQU8sQ0FBQ3VCLEVBQUUsY0FBYzhDLElBQUksRUFBRTtjQUMvRixNQUFNO2dCQUFFNkMsTUFBTTtnQkFBRTlHO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE4QyxHQUFJLENBQUM4RCxJQUFJLENBQUNULEdBQUcsRUFBRTtnQkFDbERuQixLQUFLO2dCQUNMNUI7ZUFDQSxDQUFDO2NBRUYsSUFBSSxDQUFDMEQsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSW5CLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Y0FHOUMsSUFBSSxDQUFDdEUsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2NBQ2QsTUFBTSxJQUFJLENBQUMsQ0FBQXNILEtBQU0sQ0FBQ3JGLFNBQVMsQ0FBQ2pDLElBQUksQ0FBQztjQUNqQyxJQUFJLENBQUNpRixRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUMsQ0FBQXFDLEtBQU0sQ0FBQzdHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUVyQyxPQUFPVCxJQUFJO1lBQ1o7WUFFQSxNQUFNaUksYUFBYUEsQ0FBQ3RELFNBQVMsR0FBRyxFQUFFO2NBQ2pDLElBQUksQ0FBQyxDQUFBN0IsR0FBSSxDQUFDd0QsTUFBTSxDQUFDOUQsUUFBQSxDQUFBK0QsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNTixHQUFHLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxDQUFBbUIsS0FBTSxDQUFDbkcsRUFBRSxlQUFlLElBQUksQ0FBQyxDQUFBdkIsTUFBTyxDQUFDdUIsRUFBRSxrQkFBa0I7Y0FDN0YsTUFBTTZCLEtBQUssR0FBRzJCLFNBQVMsR0FBRztnQkFBRUE7Y0FBUyxDQUFFLEdBQUcsRUFBRTtjQUM1QyxNQUFNO2dCQUFFbUMsTUFBTTtnQkFBRTlHO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE4QyxHQUFJLENBQUM4RCxJQUFJLENBQUNULEdBQUcsRUFBRW5ELEtBQUssQ0FBQztjQUV6RCxJQUFJLENBQUM4RCxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJbkIsS0FBSyxDQUFDLG1DQUFtQyxDQUFDOztjQUVyRCxNQUFNdUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FDakIsSUFBSSxDQUFDLENBQUFiLEtBQU0sQ0FBQ2pHLEdBQUcsQ0FBQztnQkFBRWdFLE9BQU8sRUFBRXJGLElBQUksQ0FBQ3FGO2NBQU8sQ0FBRSxDQUFDLEVBQzFDLElBQUksQ0FBQ2hFLEdBQUcsQ0FBQztnQkFBRStHLE1BQU0sRUFBRTtrQkFBRSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtrQkFBRSxHQUFHcEksSUFBSSxDQUFDb0k7Z0JBQU07Y0FBRSxDQUFFLENBQUMsQ0FDeEQsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBZCxLQUFNLENBQUM3RyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDckMsSUFBSSxDQUFDQSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDOUIsT0FBT1QsSUFBSTtZQUNaO1lBRUEsTUFBTXFJLFdBQVdBLENBQUMxRCxTQUFTLEdBQUcsRUFBRTtjQUMvQixJQUFJLENBQUMsQ0FBQTdCLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsTUFBTU4sR0FBRyxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQW1CLEtBQU0sQ0FBQ25HLEVBQUUsZUFBZSxJQUFJLENBQUMsQ0FBQXZCLE1BQU8sQ0FBQ3VCLEVBQUUsa0JBQWtCO2NBQzdGLE1BQU02QixLQUFLLEdBQUcyQixTQUFTLEdBQUc7Z0JBQUVBO2NBQVMsQ0FBRSxHQUFHLEVBQUU7Y0FDNUMsTUFBTTtnQkFBRW1DLE1BQU07Z0JBQUU5RztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBOEMsR0FBSSxDQUFDVixNQUFNLENBQUMrRCxHQUFHLEVBQUVuRCxLQUFLLENBQUM7Y0FFM0QsSUFBSSxDQUFDOEQsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSW5CLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQzs7Y0FHckQsTUFBTXVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOUcsR0FBRyxDQUFDO2dCQUFFK0csTUFBTSxFQUFFcEksSUFBSSxDQUFDb0k7Y0FBTSxDQUFFLENBQUMsQ0FBQyxDQUFDO2NBQ3RELElBQUksQ0FBQzNILE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUM5QjtjQUVBLE9BQU9ULElBQUk7WUFDWjtZQUNBLE1BQU1zSSxZQUFZQSxDQUFBO2NBQ2pCLElBQUksQ0FBQ2pILEdBQUcsQ0FBQztnQkFBRStHLE1BQU0sRUFBRUc7Y0FBUyxDQUFFLENBQUM7Y0FDL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFBakIsS0FBTSxDQUFDckYsU0FBUyxFQUFFO1lBQ3JDOztVQUNBSyxPQUFBLENBQUE2QixpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqSkQsSUFBQXZGLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUE2RCxZQUFBLEdBQUE3RCxPQUFBO1VBS00sTUFBTzJKLGFBQWMsU0FBUTVKLE1BQUEsQ0FBQUksYUFBMEM7WUFPNUUsSUFBSXNFLFNBQVNBLENBQUE7Y0FDWixPQUFPLEVBQUU7WUFDVjtZQUlBLENBQUFyRSxjQUFlO1lBQ2YsQ0FBQVcsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ1U2SSxpQkFBaUIsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMzQyxDQUFBMUYsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsSUFBSTFDLEtBQUtBLENBQUE7Y0FDUixNQUFNcUksWUFBWSxHQUFHQSxDQUFDQyxLQUFZLEVBQUVDLE1BQTJCLEtBQzlEbkgsS0FBSyxDQUFDQyxPQUFPLENBQUNpSCxLQUFLLENBQUMsSUFDcEJBLEtBQUssQ0FBQzdHLE1BQU0sR0FBRyxDQUFDLElBQ2hCNkcsS0FBSyxDQUFDckksS0FBSyxDQUFDSixJQUFJLElBQUkySSxNQUFNLENBQUNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDLENBQUN0SSxLQUFLLENBQUN5SSxLQUFLLElBQUk3SSxJQUFJLENBQUM2SSxLQUFLLENBQUMsQ0FBQyxDQUFDO2NBRXJFLE1BQU1DLGlCQUFpQixHQUFJMUYsU0FBOEIsSUFBSTtnQkFDNUQsT0FBT3VGLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDM0YsU0FBUyxDQUFDLENBQUNoRCxLQUFLLENBQUMsQ0FBQyxDQUFDNEksUUFBUSxFQUFFQyxNQUFNLENBQUMsS0FBSTtrQkFDN0QsSUFBSUEsTUFBTSxDQUFDcEksSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDNUIsT0FBTzJILFlBQVksQ0FBQyxJQUFJLENBQUNRLFFBQVEsQ0FBQyxFQUFFQyxNQUFNLENBQUNQLE1BQU0sQ0FBQzttQkFDbEQsTUFBTSxJQUFJTyxNQUFNLENBQUNDLFFBQVEsRUFBRTtvQkFDM0IsT0FBTyxJQUFJOztrQkFFWixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNGLFFBQVEsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDO2NBQ0gsQ0FBQztjQUNELE9BQU9GLGlCQUFpQixDQUFDLElBQUksQ0FBQzFGLFNBQVMsQ0FBQ00sT0FBTyxDQUFDLElBQUlvRixpQkFBaUIsQ0FBQyxJQUFJLENBQUMxRixTQUFTLENBQUNRLEtBQUssQ0FBQztZQUM1RjtZQUVBLElBQUl1RixTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUN4RixZQUFZLENBQUMsT0FBTyxDQUFDO1lBQ2xDO1lBRUEsSUFBSXlGLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQ3pGLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDcEM7WUFFQSxJQUFJMEYsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDMUYsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUNyQztZQUVBbEUsWUFBWUUsSUFBSSxHQUFHO2NBQUVtRSxVQUFVLEVBQUU7WUFBRSxDQUFFO2NBQ3BDLEtBQUssQ0FBQztnQkFDTCxHQUFHbkUsSUFBSTtnQkFDUG1FLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHbkUsSUFBSSxDQUFDbUUsVUFBVTtlQUM1QyxDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUFqQixXQUFZLEdBQUcsSUFBSUwsWUFBQSxDQUFBMkIsV0FBVyxFQUFFO1lBQ3RDO1lBRUFtRixLQUFLQSxDQUFBO2NBQ0osSUFBSUMsT0FBTyxHQUFHLElBQUk7Y0FDbEIsSUFBSUMsSUFBSSxHQUFHLENBQUM7Y0FFWixPQUFPRCxPQUFPLElBQUlDLElBQUksR0FBRyxJQUFJLENBQUMxRixVQUFVLENBQUNsQyxNQUFNLEVBQUU7Z0JBQ2hELElBQUksSUFBSSxDQUFDa0MsVUFBVSxDQUFDMEYsSUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFO2tCQUMxQ0EsSUFBSSxFQUFFO2tCQUNOOztnQkFFRDtnQkFDQSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMxRixVQUFVLENBQUMwRixJQUFJLENBQUMsQ0FBQyxFQUFFO2tCQUNoQ0QsT0FBTyxHQUFHLEtBQUs7O2dCQUVoQkMsSUFBSSxFQUFFOztjQUVQLE9BQU9ELE9BQU87WUFDZjtZQUVBN0UsVUFBVUEsQ0FBQ2hGLE1BQWdCLEVBQUVYLGNBQXFCO2NBQ2pELElBQUksQ0FBQyxDQUFBVyxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFYLGNBQWUsR0FBR0EsY0FBYztZQUN0QztZQUVBb0MsR0FBR0EsQ0FBQzJDLFVBQWdEO2NBQ25ELEtBQUssQ0FBQzNDLEdBQUcsQ0FBQzJDLFVBQVUsQ0FBQztjQUNyQixJQUFJLENBQUN2RCxPQUFPLENBQUMsb0JBQW9CLENBQUM7Y0FDbEMsT0FBTztnQkFDTmUsT0FBTyxFQUFFO2VBQ1Q7WUFDRjtZQUVBLE1BQU1oQixLQUFLQSxDQUFBO2NBQ1YsSUFBSSxDQUFDd0QsVUFBVSxDQUFDL0QsT0FBTyxDQUFDaUosUUFBUSxJQUFHO2dCQUNsQyxJQUFJQSxRQUFRLEtBQUssV0FBVyxFQUFFO2dCQUM5QjtnQkFDQSxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHWCxTQUFTO2NBQzNCLENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQzlILE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDOUI7WUFFQSxNQUFNc0UsUUFBUUEsQ0FBQ0MsS0FBSyxFQUFFaEMsS0FBSztjQUMxQixJQUFJLENBQUNpQyxRQUFRLEdBQUcsSUFBSTtjQUVwQixJQUFJO2dCQUNILE1BQU1qRixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMrQyxXQUFXLENBQUNnQyxRQUFRLENBQUM7a0JBQzVDaEUsSUFBSSxFQUFFLGdCQUFnQjtrQkFDdEJJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQWxDLGNBQWUsQ0FBQ2tDLEVBQUU7a0JBQzNCZ0UsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBdkYsTUFBTyxDQUFDdUIsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBdkIsTUFBTyxDQUFDb0MsVUFBVTtrQkFDdERwQixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFoQixNQUFPLENBQUNtQixJQUFJO2tCQUMzQjtrQkFDQTtrQkFDQWlFLEtBQUssRUFBRSxPQUFPQSxLQUFLLEtBQUssUUFBUSxHQUFHQSxLQUFLLEdBQUdBLEtBQUssRUFBRUEsS0FBSztrQkFDdkQsR0FBR2hDO2lCQUNILENBQUM7Z0JBRUYsTUFBTSxJQUFJLENBQUMzQixHQUFHLENBQUNyQixJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQ2tILFdBQVcsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLENBQUF0SCxNQUFPLENBQUNxSCxJQUFJLENBQUNqSCxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUMvQixPQUFPVCxJQUFJO2VBQ1gsQ0FBQyxPQUFPc0YsQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQ0wsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLE1BQU1LLENBQUM7O1lBRVQ7WUFFQXFFLGlCQUFpQkEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBMUssY0FBZTtZQUM1QjtZQUVBMkssU0FBU0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFoSyxNQUFPO1lBQ3BCO1lBRVV3RixVQUFVQSxDQUFDQyxPQUFZO2NBQ2hDLElBQUksQ0FBQyxDQUFBcEcsY0FBZSxDQUFDb0MsR0FBRyxDQUFDO2dCQUFFZ0U7Y0FBTyxDQUFFLENBQUM7WUFDdEM7WUFFQXhCLFlBQVlBLENBQUNnRyxhQUFhO2NBQ3pCLElBQUlILElBQUksR0FBRyxJQUFJO2NBRWYsSUFBSSxDQUFDLElBQUksQ0FBQ3BHLFNBQVMsQ0FBQ3VHLGFBQWEsQ0FBQyxFQUFFO2dCQUNuQzs7Y0FHRGhCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3hGLFNBQVMsQ0FBQ3VHLGFBQWEsQ0FBQyxDQUFDLENBQUM1SixPQUFPLENBQUNDLElBQUksSUFBRztnQkFDekQsTUFBTW9ELFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQ3VHLGFBQWEsQ0FBQyxDQUFDM0osSUFBSSxDQUFDO2dCQUNyRCxNQUFNZ0osUUFBUSxHQUFHLElBQUksQ0FBQ2hKLElBQUksQ0FBQztnQkFFM0IsSUFBSSxDQUFDZ0osUUFBUSxFQUFFUSxJQUFJLEdBQUcsS0FBSztnQkFDM0I7Y0FDRCxDQUFDLENBQUM7Y0FDRixPQUFPQSxJQUFJO1lBQ1o7O1VBQ0FwSCxPQUFBLENBQUFrRyxhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEtELElBQUFzQixLQUFBLEdBQUFqTCxPQUFBO1VBRU0sTUFBT2tMLDBCQUEyQixTQUFRRCxLQUFBLENBQUF0QixhQUFhO1lBSTVELElBQUlsRixTQUFTQSxDQUFBO2NBQ1osT0FBTztnQkFDTk0sT0FBTyxFQUFFO2tCQUNSb0csSUFBSSxFQUFFO29CQUNMakosSUFBSSxFQUFFLFVBQVU7b0JBQ2hCa0osUUFBUSxFQUFFOztpQkFFWDtnQkFDRG5HLEtBQUssRUFBRTtrQkFDTm9HLElBQUksRUFBRTtvQkFDTG5KLElBQUksRUFBRSxVQUFVO29CQUNoQmtKLFFBQVEsRUFBRTttQkFDVjtrQkFDREUsVUFBVSxFQUFFO29CQUNYcEosSUFBSSxFQUFFLE9BQU87b0JBQ2JrSixRQUFRLEVBQUUsSUFBSTtvQkFDZHJCLE1BQU0sRUFBRTtzQkFDUDNFLElBQUksRUFBRSxPQUFPO3NCQUNiYixTQUFTLEVBQUU7OztpQkFHYjtnQkFDRGdILFFBQVEsRUFBRTtrQkFDVEMsWUFBWSxFQUFFO29CQUNiRCxRQUFRLEVBQUUsSUFBSTtvQkFDZHJKLElBQUksRUFBRSxVQUFVO29CQUNoQnFJLFFBQVEsRUFBRTs7O2VBR1o7WUFDRjtZQUVBekosWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1BtRSxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsY0FBYztlQUN0RSxDQUFDO1lBQ0g7O1VBQ0ExQixPQUFBLENBQUF5SCwwQkFBQSxHQUFBQSwwQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0QsSUFBQUQsS0FBQSxHQUFBakwsT0FBQTtVQUVNLE1BQU95TCxpQkFBa0IsU0FBUVIsS0FBQSxDQUFBdEIsYUFBYTtZQUduRDdJLFlBQVlFLElBQUksR0FBRyxFQUFFO2NBQ3BCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQbUUsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVk7ZUFDdEMsQ0FBQztZQUNIOztVQUNBMUIsT0FBQSxDQUFBZ0ksaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEQsSUFBQVIsS0FBQSxHQUFBakwsT0FBQTtVQUVNLE1BQU8wTCwwQkFBMkIsU0FBUVQsS0FBQSxDQUFBdEIsYUFBYTtZQUk1RCxJQUFJbEYsU0FBU0EsQ0FBQTtjQUNaLE9BQU87Z0JBQ05NLE9BQU8sRUFBRTtrQkFDUm9HLElBQUksRUFBRTtvQkFDTGpKLElBQUksRUFBRSxVQUFVO29CQUNoQmtKLFFBQVEsRUFBRTs7aUJBRVg7Z0JBQ0RuRyxLQUFLLEVBQUU7a0JBQ04wRyxLQUFLLEVBQUU7b0JBQUV6SixJQUFJLEVBQUUsT0FBTztvQkFBRWtKLFFBQVEsRUFBRTtrQkFBSSxDQUFFO2tCQUN4Q0UsVUFBVSxFQUFFO29CQUNYQyxRQUFRLEVBQUUsSUFBSTtvQkFDZHJKLElBQUksRUFBRSxPQUFPO29CQUNia0osUUFBUSxFQUFFLElBQUk7b0JBQ2RyQixNQUFNLEVBQUU7c0JBQ1AzRSxJQUFJLEVBQUUsT0FBTztzQkFDYmIsU0FBUyxFQUFFOzs7aUJBR2I7Z0JBQ0RnSCxRQUFRLEVBQUU7a0JBQ1RDLFlBQVksRUFBRTtvQkFDYkQsUUFBUSxFQUFFLElBQUk7b0JBQ2RySixJQUFJLEVBQUUsVUFBVTtvQkFDaEJxSSxRQUFRLEVBQUU7bUJBQ1Y7a0JBQ0RxQixXQUFXLEVBQUU7b0JBQ1pDLFFBQVEsRUFBRTs7O2VBR1o7WUFDRjtZQUNBL0ssWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1BtRSxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE9BQU87ZUFDL0UsQ0FBQztZQUNIOztVQUNBMUIsT0FBQSxDQUFBaUksMEJBQUEsR0FBQUEsMEJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNELElBQUFULEtBQUEsR0FBQWpMLE9BQUE7VUFFTSxNQUFPOEwsbUJBQW9CLFNBQVFiLEtBQUEsQ0FBQXRCLGFBQWE7WUFJckQ7OztZQUdBLElBQUlsRixTQUFTQSxDQUFBO2NBQ1osT0FBTztnQkFDTk0sT0FBTyxFQUFFO2tCQUNSb0csSUFBSSxFQUFFO29CQUFFakosSUFBSSxFQUFFLFVBQVU7b0JBQUVrSixRQUFRLEVBQUU7a0JBQUk7aUJBQ3hDO2dCQUNEbkcsS0FBSyxFQUFFO2tCQUNOOEcsT0FBTyxFQUFFO29CQUFFN0osSUFBSSxFQUFFLE9BQU87b0JBQUVrSixRQUFRLEVBQUU7a0JBQUksQ0FBRTtrQkFDMUNDLElBQUksRUFBRTtvQkFBRW5KLElBQUksRUFBRSxVQUFVO29CQUFFa0osUUFBUSxFQUFFO2tCQUFJLENBQUU7a0JBRTFDRSxVQUFVLEVBQUU7b0JBQ1hwSixJQUFJLEVBQUUsT0FBTztvQkFDYmtKLFFBQVEsRUFBRSxJQUFJO29CQUNkckIsTUFBTSxFQUFFO3NCQUNQM0UsSUFBSSxFQUFFLE9BQU87c0JBQ2JiLFNBQVMsRUFBRTs7O2lCQUdiO2dCQUNEZ0gsUUFBUSxFQUFFO2tCQUNUQyxZQUFZLEVBQUU7b0JBQ2JELFFBQVEsRUFBRSxJQUFJO29CQUNkckosSUFBSSxFQUFFLFVBQVU7b0JBQ2hCcUksUUFBUSxFQUFFOzs7ZUFHWjtZQUNGO1lBRUF6SixZQUFZRSxJQUFJLEdBQUcsRUFBRTtjQUNwQixLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUG1FLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTTtlQUNqRixDQUFDO1lBQ0g7O1VBQ0ExQixPQUFBLENBQUFxSSxtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0QsSUFBQUUsY0FBQSxHQUFBaE0sT0FBQTtVQUNBLElBQUFpTSxLQUFBLEdBQUFqTSxPQUFBO1VBQ0EsSUFBQWtNLGNBQUEsR0FBQWxNLE9BQUE7VUFDQSxJQUFBbU0sT0FBQSxHQUFBbk0sT0FBQTtVQUNBLElBQUFvTSxlQUFBLEdBQUFwTSxPQUFBO1VBQ0EsSUFBQXFNLE9BQUEsR0FBQXJNLE9BQUE7VUFJTSxNQUFPdUYsb0JBQW9CO1lBQ3hCLE9BQU8rRyxRQUFRLEdBQXFDLElBQUloTSxHQUFHLEVBQUU7WUFFckUsT0FBT2lNLFFBQVFBLENBQUNySyxJQUFZLEVBQUVzSyxJQUF5QjtjQUN0RCxJQUFJLENBQUNGLFFBQVEsQ0FBQzlKLEdBQUcsQ0FBQ04sSUFBSSxFQUFFc0ssSUFBSSxDQUFDO1lBQzlCO1lBRUEsT0FBT0MsTUFBTUEsQ0FBQ3ZLLElBQVk7Y0FDekIsTUFBTU8sUUFBUSxHQUFHLElBQUksQ0FBQzZKLFFBQVEsQ0FBQy9KLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDO2NBQ3hDLElBQUksQ0FBQ08sUUFBUSxFQUFFO2dCQUNkLE1BQU0sSUFBSXFFLEtBQUssQ0FBQyxrQkFBa0I1RSxJQUFJLHNCQUFzQixDQUFDOztjQUU5RCxPQUFPLElBQUlPLFFBQVEsRUFBRTtZQUN0QjtZQUVBLE9BQU9GLEdBQUdBLENBQUNMLElBQVk7Y0FDdEIsSUFBSSxDQUFDLElBQUksQ0FBQ29LLFFBQVEsQ0FBQ2pLLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCQyxPQUFPLENBQUNDLElBQUksQ0FBQyxxREFBcURGLElBQUksRUFBRSxDQUFDOztjQUUxRSxPQUFPLElBQUksQ0FBQ29LLFFBQVEsQ0FBQy9KLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDO1lBQy9COztVQUdEO1VBQUF1QixPQUFBLENBQUE4QixvQkFBQSxHQUFBQSxvQkFBQTtVQUNBQSxvQkFBb0IsQ0FBQ2dILFFBQVEsQ0FBQyxNQUFNLEVBQUVOLEtBQUEsQ0FBQVIsaUJBQWlCLENBQUM7VUFDeERsRyxvQkFBb0IsQ0FBQ2dILFFBQVEsQ0FBQyxRQUFRLEVBQUVKLE9BQUEsQ0FBQUwsbUJBQW1CLENBQUM7VUFDNUR2RyxvQkFBb0IsQ0FBQ2dILFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRVAsY0FBQSxDQUFBZCwwQkFBMEIsQ0FBQztVQUMzRTNGLG9CQUFvQixDQUFDZ0gsUUFBUSxDQUFDLGdCQUFnQixFQUFFTCxjQUFBLENBQUFSLDBCQUEwQixDQUFDO1VBQzNFbkcsb0JBQW9CLENBQUNnSCxRQUFRLENBQUMsaUJBQWlCLEVBQUVILGVBQUEsQ0FBQU0sMkJBQTJCLENBQUM7VUFDN0VuSCxvQkFBb0IsQ0FBQ2dILFFBQVEsQ0FBQyxRQUFRLEVBQUVGLE9BQUEsQ0FBQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkM1RCxJQUFBMUIsS0FBQSxHQUFBakwsT0FBQTtVQU9NLE1BQU8wTSwyQkFBNEIsU0FBUXpCLEtBQUEsQ0FBQXRCLGFBQWE7WUFJbkRDLGlCQUFpQixHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztZQUV0RCxJQUFJbkYsU0FBU0EsQ0FBQTtjQUNaLE9BQU87Z0JBQ05NLE9BQU8sRUFBRTtrQkFDUjZILFNBQVMsRUFBRTtvQkFDVnhCLFFBQVEsRUFBRSxJQUFJO29CQUNkbEosSUFBSSxFQUFFLE9BQU87b0JBQ2I2SCxNQUFNLEVBQUU7c0JBQ1A4QyxRQUFRLEVBQUUsT0FBTztzQkFDakJDLE9BQU8sRUFBRTt3QkFDUjVLLElBQUksRUFBRSxPQUFPO3dCQUNiNkgsTUFBTSxFQUFFOzBCQUNQZ0QsTUFBTSxFQUFFLE9BQU87MEJBQ2ZDLE9BQU8sRUFBRTs7Ozs7O2VBTWQ7WUFDRjtZQUVBLElBQUl4TCxLQUFLQSxDQUFBO2NBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQ29MLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQ0EsU0FBUyxDQUFDM0osTUFBTSxFQUFFLE9BQU8sS0FBSztjQUMzRCxPQUFPLElBQUksQ0FBQzJKLFNBQVMsQ0FBQ25MLEtBQUssQ0FBQ29MLFFBQVEsSUFBRztnQkFDdEMsT0FDQ0EsUUFBUSxDQUFDQSxRQUFRLElBQ2pCQSxRQUFRLENBQUNJLE9BQU8sQ0FBQ2hLLE1BQU0sR0FBRyxDQUFDLElBQzNCNEosUUFBUSxDQUFDSyxhQUFhLElBQUksQ0FBQyxJQUMzQkwsUUFBUSxDQUFDSyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDaEssTUFBTTtjQUVsRCxDQUFDLENBQUM7WUFDSDtZQUVBbkMsWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1BtRSxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUztlQUNuQyxDQUFDO1lBQ0g7WUFFQXdGLEtBQUtBLENBQUE7Y0FDSixJQUFJQyxPQUFPLEdBQUcsSUFBSTtjQUNsQixJQUFJQyxJQUFJLEdBQUcsQ0FBQztjQUVaLE9BQU9ELE9BQU8sSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQzFGLFVBQVUsQ0FBQ2xDLE1BQU0sRUFBRTtnQkFDaEQsTUFBTWtLLEdBQUcsR0FBRyxJQUFJLENBQUNoSSxVQUFVLENBQUMwRixJQUFJLENBQVc7Z0JBQzNDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM1SSxRQUFRLENBQUNrTCxHQUFHLENBQUMsRUFBRTtrQkFDM0N0QyxJQUFJLEVBQUU7a0JBQ047O2dCQUdELElBQUksSUFBSSxDQUFDc0MsR0FBRyxDQUFDLEVBQUU7a0JBQ2R2QyxPQUFPLEdBQUcsS0FBSzs7Z0JBRWhCQyxJQUFJLEVBQUU7O2NBRVAsT0FBT0QsT0FBTztZQUNmO1lBRUEsTUFBTTFFLFFBQVFBLENBQUNDLEtBQUssRUFBRTtjQUFFaUg7WUFBTyxDQUFFO2NBQ2hDLE1BQU1qTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMrQyxXQUFXLENBQUNnQyxRQUFRLENBQUM7Z0JBQzVDaEUsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCSSxFQUFFLEVBQUUsSUFBSSxDQUFDd0ksaUJBQWlCLEVBQUUsQ0FBQ3hJLEVBQUU7Z0JBQy9COEssT0FBTztnQkFDUDtnQkFDQTtnQkFDQWpILEtBQUssRUFBRSxPQUFPQSxLQUFLLEtBQUssUUFBUSxHQUFHQSxLQUFLLEdBQUdBLEtBQUssRUFBRUE7ZUFDbEQsQ0FBQztjQUVGLElBQUloRixJQUFJLENBQUMrRyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTy9HLElBQUk7O2NBR1osSUFBSSxDQUFDcUIsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2NBQ2QsSUFBSSxDQUFDSixNQUFNLENBQUNxSCxJQUFJLENBQUNqSCxJQUFJLENBQUM7Y0FFdEIsSUFBSSxDQUFDUyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Y0FDL0IsT0FBT1QsSUFBSTtZQUNaO1lBRUEsTUFBTWtNLGVBQWVBLENBQUM7Y0FBRWxILEtBQUs7Y0FBRTBHLFFBQVE7Y0FBRTdLO1lBQUssQ0FBRTtjQUMvQyxJQUFJLENBQUNvRSxRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNakYsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDK0MsV0FBVyxDQUFDZ0MsUUFBUSxDQUFDO2dCQUM1Q2hFLElBQUksRUFBRSxTQUFTO2dCQUNmSSxFQUFFLEVBQUUsSUFBSSxDQUFDd0ksaUJBQWlCLEVBQUUsQ0FBQ3hJLEVBQUU7Z0JBQy9CdUssUUFBUTtnQkFDUjFHO2VBQ0EsQ0FBQztjQUVGLElBQUksQ0FBQ3lHLFNBQVMsQ0FBQzVLLEtBQUssQ0FBQyxDQUFDaUwsT0FBTyxHQUFHOUwsSUFBSSxDQUFDOEwsT0FBTztjQUM1QyxJQUFJLENBQUNMLFNBQVMsQ0FBQzVLLEtBQUssQ0FBQyxDQUFDa0wsYUFBYSxHQUFHL0wsSUFBSSxDQUFDK0wsYUFBYTtjQUN4RCxJQUFJLENBQUNuTSxNQUFNLENBQUNxSCxJQUFJLENBQUNqSCxJQUFJLENBQUM7Y0FDdEIsT0FBTyxJQUFJLENBQUN5TCxTQUFTLENBQUM1SyxLQUFLLENBQUM7WUFDN0I7O1VBQ0F5QixPQUFBLENBQUFpSiwyQkFBQSxHQUFBQSwyQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1R0QsSUFBQXpCLEtBQUEsR0FBQWpMLE9BQUE7VUFFTSxNQUFPMk0sbUJBQW9CLFNBQVExQixLQUFBLENBQUF0QixhQUFhO1lBVXJELElBQUlsRixTQUFTQSxDQUFBO2NBQ1osT0FBTztnQkFDTk0sT0FBTyxFQUFFO2tCQUNSb0csSUFBSSxFQUFFO2lCQUNOO2dCQUNEbEcsS0FBSyxFQUFFO2tCQUNOcUksVUFBVSxFQUFFLFVBQVU7a0JBQ3RCQyxRQUFRLEVBQUU7b0JBQ1RyTCxJQUFJLEVBQUUsT0FBTztvQkFDYjZILE1BQU0sRUFBRTtzQkFDUDNFLElBQUksRUFBRSxPQUFPO3NCQUNiMkcsT0FBTyxFQUFFOzs7O2VBSVo7WUFDRjtZQUNBakwsWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1BtRSxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVO2VBQzFELENBQUM7WUFDSDs7VUFDQTFCLE9BQUEsQ0FBQWtKLG1CQUFBLEdBQUFBLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDRCxJQUFBYSxpQkFBQSxHQUFBeE4sT0FBQTtVQXlCQSxNQUFNeU4sS0FBSztZQUNWLENBQUFDLEtBQU0sR0FBa0MsQ0FDdkM7Y0FDQ3BMLEVBQUUsRUFBRWtMLGlCQUFBLENBQUFHLFlBQVksQ0FBQ0MsYUFBYTtjQUM5QnhJLElBQUksRUFBRSxnQkFBZ0I7Y0FDdEJqQixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUM7Y0FFcEIwSixTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztjQUNoRC9ILFNBQVMsRUFBRSxDQUNWO2dCQUNDVixJQUFJLEVBQUU7ZUFDTixFQUNEO2dCQUNDMEksWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCMUksSUFBSSxFQUFFO2VBQ04sRUFDRDtnQkFDQzBJLFlBQVksRUFBRSxTQUFTO2dCQUN2QjFJLElBQUksRUFBRTtlQUNOLEVBRUQ7Z0JBQ0MwSSxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3pCMUksSUFBSSxFQUFFO2VBQ04sQ0FDRDtjQUNEMkUsTUFBTSxFQUFFLENBQUMsVUFBVTthQUNuQixFQUNEO2NBQ0N6SCxFQUFFLEVBQUVrTCxpQkFBQSxDQUFBRyxZQUFZLENBQUNJLE1BQU07Y0FDdkIzSSxJQUFJLEVBQUUsUUFBUTtjQUNkakIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztjQUMvQjBKLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVzthQUMvQyxFQUNEO2NBQ0N2TCxFQUFFLEVBQUVrTCxpQkFBQSxDQUFBRyxZQUFZLENBQUNLLGFBQWE7Y0FDOUI1SSxJQUFJLEVBQUUsZ0JBQWdCO2NBQ3RCakIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztjQUM1QjBKLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztjQUN4RDlELE1BQU0sRUFBRSxDQUFDLFVBQVU7YUFDbkIsRUFDRDtjQUNDekgsRUFBRSxFQUFFa0wsaUJBQUEsQ0FBQUcsWUFBWSxDQUFDTSxjQUFjO2NBQy9CN0ksSUFBSSxFQUFFLGlCQUFpQjtjQUN2QjtjQUNBakIsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDO2NBQ3BCMkIsU0FBUyxFQUFFLEVBQUU7Y0FDYjVCLFdBQVcsRUFBRSxXQUFXO2NBQ3hCNkYsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVU7YUFDaEM7WUFDRDtZQUNBO2NBQ0N6SCxFQUFFLEVBQUVrTCxpQkFBQSxDQUFBRyxZQUFZLENBQUNPLE1BQU07Y0FDdkI5SSxJQUFJLEVBQUUsUUFBUTtjQUNkeUksU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUM7Y0FDaEQ5RCxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7Y0FDcEI1RixLQUFLLEVBQUUsQ0FDTixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTjtnQkFDQ2lCLElBQUksRUFBRSxVQUFVO2dCQUNoQjJFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxTQUFTO2VBQzFCO2FBRUYsQ0FDRDtZQUVELElBQUl4SixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQW1OLEtBQU07WUFDbkI7WUFDQSxDQUFBck4sR0FBSSxHQUE4QixJQUFJQyxHQUFHLEVBQUU7WUFDM0MsSUFBSThKLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBL0osR0FBSTtZQUNqQjtZQUNBUyxZQUFBO2NBQ0MsSUFBSSxDQUFDLENBQUE0TSxLQUFNLENBQUN0TSxPQUFPLENBQUVjLElBQXdCLElBQUk7Z0JBQ2hELElBQUksQ0FBQyxDQUFBN0IsR0FBSSxDQUFDbUMsR0FBRyxDQUFDTixJQUFJLENBQUNJLEVBQUUsRUFBRUosSUFBSSxDQUFDSSxFQUFFLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQUMsR0FBR0EsQ0FBQ0QsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFqQyxHQUFJLENBQUNrQyxHQUFHLENBQUNELEVBQUUsQ0FBQztZQUN6Qjs7VUFHTTtVQUFXLE1BQU02TCxhQUFhLEdBQUExSyxPQUFBLENBQUEwSyxhQUFBLEdBQUcsSUFBSVYsS0FBSyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9HbkQsSUFBQVcsV0FBQSxHQUFBcE8sT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE0RCxJQUFBLEdBQUE1RCxPQUFBO1VBRUEsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBMEQsT0FBQSxHQUFBMUQsT0FBQTtVQUVNLE1BQU9xTyxXQUFZLFNBQVFELFdBQUEsQ0FBQUUsVUFBc0I7WUFFdEQsQ0FBQXJLLEdBQUk7WUFDSixDQUFBbEQsTUFBTztZQUNQRCxZQUFZO2NBQUVDLE1BQU07Y0FBRSxHQUFHQztZQUFJLElBQVU7Y0FBRUQsTUFBTSxFQUFFMkk7WUFBUyxDQUFFO2NBQzNELEtBQUssQ0FBQztnQkFDTCxHQUFHMUksSUFBSTtnQkFDUGtFLE1BQU0sRUFBRSxhQUFhO2dCQUNyQjdELElBQUksRUFBRXBCLEtBQUEsQ0FBQXNPO2VBQ04sQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBeE4sTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBa0QsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQTZCLEdBQUcsQ0FBQy9CLE9BQUEsQ0FBQWdDLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUNBLENBQUEySSxVQUFXLEdBQTRCLElBQUlsTyxHQUFHLEVBQUU7WUFDaEQsSUFBSWtPLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUE7WUFDQWhNLEdBQUdBLENBQUNqQyxLQUFtQjtjQUN0QixJQUFJLENBQUN1QixRQUFRLENBQUN2QixLQUFLLENBQUM7Y0FDcEIsSUFBSSxDQUFDQSxLQUFLLENBQUNhLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2dCQUN6QixJQUFJLENBQUMsQ0FBQW1OLFVBQVcsQ0FBQ2hNLEdBQUcsQ0FBQ25CLElBQUksQ0FBQ29OLFNBQVMsQ0FBQ25NLEVBQUUsRUFBRWpCLElBQUksQ0FBQztjQUM5QyxDQUFDLENBQUM7WUFDSDtZQUVBLE1BQU0wQixHQUFHQSxDQUFDMkwsV0FBVztjQUNwQixNQUFNdkssS0FBSyxHQUFHO2dCQUFFd0ssUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBNU4sTUFBTyxDQUFDdUIsRUFBRTtnQkFBRW9NO2NBQVcsQ0FBRTtjQUN4RCxJQUFJLENBQUMsQ0FBQXpLLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsTUFBTTlFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbUIsR0FBSSxDQUFDOEQsSUFBSSxDQUFDLGNBQWMsRUFBRTVELEtBQUssQ0FBQztjQUU1RCxJQUFJLENBQUNyQixRQUFRLENBQUNtRixNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSW5CLEtBQUssQ0FBQ2hFLFFBQVEsQ0FBQ29GLEtBQUssQ0FBQzs7Y0FFaEMsTUFBTTBHLFVBQVUsR0FBRyxJQUFJM08sS0FBQSxDQUFBc08sVUFBVSxDQUFDO2dCQUFFeE4sTUFBTSxFQUFFLElBQUk7Z0JBQUUsR0FBRytCLFFBQVEsQ0FBQzNCO2NBQUksQ0FBRSxDQUFDO2NBRXJFLElBQUksQ0FBQyxDQUFBcU4sVUFBVyxDQUFDaE0sR0FBRyxDQUFDa00sV0FBVyxFQUFFRSxVQUFVLENBQUM7Y0FDN0MsSUFBSSxDQUFDLENBQUE3TixNQUFPLENBQUNhLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDOUI7Y0FDQSxPQUFPZ04sVUFBVTtZQUNsQjs7VUFDQW5MLE9BQUEsQ0FBQTRLLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREQsSUFBQXBPLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE2TyxJQUFBLEdBQUE3TyxPQUFBO1VBTUE7OztVQUdNLE1BQU91TyxVQUFXLFNBQVF0TyxLQUFBLENBQUErRCxJQUFpQjtZQUloRCxJQUFJOEssU0FBU0EsQ0FBQTtjQUNaLE9BQU8sY0FBYyxJQUFJLENBQUN4TSxFQUFFLEVBQUU7WUFDL0I7WUFFQSxJQUFJeU0sSUFBSUEsQ0FBQTtjQUNQLE9BQU8sZ0JBQWdCLElBQUksQ0FBQ3pNLEVBQUUsRUFBRTtZQUNqQztZQUNVME0sTUFBTSxHQUFHSCxJQUFBLENBQUFJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO2NBQzNCNU0sRUFBRSxFQUFFdU0sSUFBQSxDQUFBSSxDQUFDLENBQUNFLE1BQU0sRUFBRTtjQUNkL0osSUFBSSxFQUFFeUosSUFBQSxDQUFBSSxDQUFDLENBQUNFLE1BQU0sRUFBRTtjQUNoQjlLLFdBQVcsRUFBRXdLLElBQUEsQ0FBQUksQ0FBQyxDQUFDRSxNQUFNLEVBQUUsQ0FBQzVFLFFBQVE7YUFDaEMsQ0FBQztZQUVGekosWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVrRSxNQUFNLEVBQUUsYUFBYTtnQkFBRUMsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUk7Y0FBQyxDQUFFLENBQUM7WUFDM0U7O1VBQ0ExQixPQUFBLENBQUE4SyxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJELElBQUF4TyxNQUFBLEdBQUFDLE9BQUE7VUFNTSxNQUFPb1Asc0JBQXVCLFNBQVFyUCxNQUFBLENBQUFJLGFBQXNDO1lBQ2pGVyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFcUUsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDN0M7O1VBQ0ExQixPQUFBLENBQUEyTCxzQkFBQSxHQUFBQSxzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBblAsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXFQLFVBQUEsR0FBQXJQLE9BQUE7VUFLTyxZQURQO1VBQ2tCLE1BQU9zUCxrQkFBbUIsU0FBUXJQLEtBQUEsQ0FBQStELElBQXFDO1lBR3hGdUwsS0FBSztZQUNMck0sUUFBUTtZQUNSa0IsS0FBSztZQUNMQyxXQUFXO1lBQ1hFLFNBQVM7WUFDVHlELE9BQU87WUFDUHdILFFBQVE7WUFJUjFPLFlBQVk7Y0FBRXdCLEVBQUUsR0FBR29ILFNBQVM7Y0FBRXZFLFVBQVUsR0FBRyxFQUFFO2NBQUVqRCxJQUFJLEdBQUcsUUFBUTtjQUFFLEdBQUdsQjtZQUFJLENBQUUsR0FBRyxFQUFFO2NBQzdFLEtBQUssQ0FBQztnQkFDTHNCLEVBQUU7Z0JBQ0Y0QyxNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QnVLLFFBQVEsRUFBRUosVUFBQSxDQUFBSyxjQUFjO2dCQUN4QixHQUFHMU8sSUFBSTtnQkFDUG1FLFVBQVUsRUFBRSxDQUNYLElBQUksRUFDSixTQUFTLEVBQ1QsT0FBTyxFQUNQLFVBQVUsRUFDVixPQUFPLEVBQ1AsYUFBYSxFQUNiLFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEdBQUdBLFVBQVU7ZUFFZCxDQUFDO1lBQ0g7WUFFQSxNQUFNd0ssWUFBWUEsQ0FBQ3pNLFFBQVE7Y0FDMUIsTUFBTXNNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ0MsUUFBUSxDQUFDRyxXQUFXLENBQUMxTSxRQUFRLENBQUM7Y0FDMUQsT0FBT3NNLFFBQVE7WUFDaEI7O1VBQ0EvTCxPQUFBLENBQUE2TCxrQkFBQSxHQUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0QsSUFBQWxCLFdBQUEsR0FBQXBPLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNlAsZ0JBQUEsR0FBQTdQLE9BQUE7VUFHTyxXQURQO1VBQ2lCLE1BQU84UCxlQUFnQixTQUFRMUIsV0FBQSxDQUFBRSxVQUFrRDtZQUNqRyxDQUFBeUIsU0FBVSxHQUFHLElBQUl6UCxHQUFHLEVBQUU7WUFDdEIsSUFBSXlQLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0FqUCxZQUFZRSxJQUFJLEdBQUcsRUFBRTtjQUNwQixLQUFLLENBQUM7Z0JBQ0xrRSxNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QnVLLFFBQVEsRUFBRUksZ0JBQUEsQ0FBQUcsc0JBQXNCO2dCQUNoQzNPLElBQUksRUFBRXBCLEtBQUEsQ0FBQWdRLGNBQWM7Z0JBQ3BCLEdBQUdqUDtlQUNILENBQUM7WUFDSDtZQUVBLE1BQU0yTyxZQUFZQSxDQUFDek0sUUFBUTtjQUMxQixJQUFJLElBQUksQ0FBQyxDQUFBNk0sU0FBVSxDQUFDMU4sR0FBRyxDQUFDYSxRQUFRLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxJQUFJLENBQUMsQ0FBQTZNLFNBQVUsQ0FBQ3hOLEdBQUcsQ0FBQ1csUUFBUSxDQUFDOztjQUVyQyxNQUFNc00sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDQyxRQUFRLENBQUNHLFdBQVcsQ0FBQzFNLFFBQVEsQ0FBQztjQUMxRCxJQUFJLENBQUMsQ0FBQTZNLFNBQVUsQ0FBQ3ZOLEdBQUcsQ0FBQ1UsUUFBUSxFQUFFc00sUUFBUSxDQUFDO2NBQ3ZDLE9BQU9BLFFBQVE7WUFDaEI7O1VBQ0EvTCxPQUFBLENBQUFxTSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUE3UCxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNkQsWUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFvTyxXQUFBLEdBQUFwTyxPQUFBO1VBQ0EsSUFBQTRELElBQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBMEQsT0FBQSxHQUFBMUQsT0FBQTtVQUVBLElBQUFrUSxRQUFBLEdBQUFsUSxPQUFBO1VBR0EsSUFBQXFQLFVBQUEsR0FBQXJQLE9BQUE7VUFHTyxZQUZQO1VBRWtCLE1BQU9tUSx1QkFBd0IsU0FBUWxRLEtBQUEsQ0FBQStELElBQXlDO1lBQ2pHLENBQUFFLFdBQVk7WUFDWixDQUFBa00sS0FBTTtZQU1FLE9BQU9DLFNBQVMsR0FBRyxJQUFJL1AsR0FBRyxFQUFFO1lBRXBDLENBQUEyRCxHQUFJO1lBRUosQ0FBQXFNLFdBQVk7WUFFWixDQUFBOUosT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPO2dCQUFFLEdBQUksSUFBSSxDQUFDLENBQUFBLE9BQVEsQ0FBQ2pGLGFBQWEsRUFBYztnQkFBRWdQLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQS9KLE9BQVEsQ0FBQytKO2NBQVMsQ0FBRTtZQUM3RjtZQUNBLElBQUkvSixPQUFPQSxDQUFDckYsSUFBc0I7Y0FDakMsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDWCxJQUFJLENBQUMsQ0FBQXFGLE9BQVEsQ0FBQ2hFLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQztZQUN4QjtZQUVBLENBQUFxUCxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxJQUFJQSxVQUFVQSxDQUFDbkwsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQW1MLFVBQVcsQ0FBQzdPLEtBQUssRUFBRTtjQUN4QixJQUFJLENBQUMsQ0FBQTZPLFVBQVcsQ0FBQ2hPLEdBQUcsQ0FBQzZDLEtBQUssQ0FBQztjQUMzQixJQUFJLENBQUNZLFlBQVksRUFBRTtZQUNwQjtZQUVBOzs7Ozs7WUFNQW5GLFlBQVk7Y0FBRXdCLEVBQUUsR0FBR29ILFNBQVM7Y0FBRXhILElBQUksR0FBRyxRQUFRO2NBQUUsR0FBR2xCO1lBQUksQ0FBRSxHQUFHLEVBQUU7Y0FDNUQsS0FBSyxDQUFDO2dCQUNMc0IsRUFBRTtnQkFDRjRDLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCdUssUUFBUSxFQUFFSixVQUFBLENBQUFLLGNBQWM7Z0JBQ3hCdkssVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLE9BQU8sRUFDUCxhQUFhLEVBQ2IsUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixRQUFRLEVBQ1IsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsU0FBUyxFQUVULGFBQWEsRUFDYixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLE9BQU8sRUFDUCxRQUFRLENBQUM7Z0JBQUE7ZUFFVixDQUFDLENBQUMsQ0FBQztjQUVKLElBQUksQ0FBQyxDQUFBcUIsT0FBUSxHQUFHLElBQUkwSixRQUFBLENBQUFPLE9BQU8sRUFBRTtjQUM3QixJQUFJLENBQUMsQ0FBQXZNLFdBQVksR0FBRyxJQUFJTCxZQUFBLENBQUEyQixXQUFXLEVBQUU7Y0FFckMsSUFBSSxDQUFDLENBQUFnTCxVQUFXLEdBQUcsSUFBSXBDLFdBQUEsQ0FBQWxPLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDdkMsSUFBSSxDQUFDLENBQUFzUSxVQUFXLENBQUN4SyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBRWhELElBQUksQ0FBQyxDQUFBaEMsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQTZCLEdBQUcsQ0FBQy9CLE9BQUEsQ0FBQWdDLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUM2SyxVQUFVLENBQUM7Z0JBQUUsR0FBRzFQO2NBQUksQ0FBRSxDQUFDO1lBQzdCO1lBRUF3QixHQUFHQSxDQUFDckIsSUFBUztjQUNaLE1BQU0yQixRQUFRLEdBQUcsS0FBSyxDQUFDTixHQUFHLENBQUNyQixJQUFJLENBQUM7Y0FDaEMsSUFBSUEsSUFBSSxDQUFDbVAsV0FBVyxFQUFFO2dCQUNyQjtnQkFDQSxJQUFJLENBQUMsQ0FBQUEsV0FBWSxDQUFDOU4sR0FBRyxDQUFDckIsSUFBSSxDQUFDbVAsV0FBVyxDQUFDOztjQUV4QztjQUNBLElBQUksQ0FBQzlKLE9BQU8sR0FBR3JGLElBQUksQ0FBQ3FGLE9BQU87Y0FDM0IsSUFBSXJGLElBQUksQ0FBQ3FQLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUFBLFVBQVcsQ0FBQ2hPLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQ3FQLFVBQVUsQ0FBQzs7Y0FFdEMsT0FBTzFOLFFBQVE7WUFDaEI7WUFFQSxNQUFNTSxTQUFTQSxDQUFDZSxLQUFLLEdBQUcsRUFBRTtjQUN6QixNQUFNaEQsSUFBSSxHQUFHO2dCQUNaLEdBQUcsSUFBSSxDQUFDSSxhQUFhLEVBQUU7Z0JBQ3ZCLEdBQUc0QyxLQUFLO2dCQUNScU0sVUFBVSxFQUFFLElBQUksQ0FBQ0EsVUFBVSxDQUFDdFAsUUFBUSxFQUFFO2dCQUN0Q2dCLElBQUksRUFBRTtlQUNOO2NBQ0QsSUFBSSxDQUFDLENBQUFrTyxLQUFNLEdBQUcsSUFBSTtjQUNsQixNQUFNdE4sUUFBUSxHQUFHLEtBQUssQ0FBQzZOLE9BQU8sQ0FBQ3hQLElBQUksQ0FBQztjQUNwQ2dQLHVCQUF1QixDQUFDRSxTQUFTLENBQUM3TixHQUFHLENBQUMsSUFBSSxDQUFDRixFQUFFLEVBQUUsSUFBSSxDQUFDO2NBQ3BELE9BQU9RLFFBQVE7WUFDaEI7WUFDQTs7Ozs7WUFLQSxNQUFNOE4sbUJBQW1CQSxDQUFDcFEsTUFBTTtjQUMvQixJQUFJO2dCQUNILElBQUksQ0FBQ3FRLGFBQWEsR0FBRyxJQUFJO2dCQUN6QixJQUFJLENBQUNyTyxHQUFHLENBQUNoQyxNQUFNLENBQUM7Z0JBQ2hCLE1BQU1XLElBQUksR0FBd0IsTUFBTSxJQUFJLENBQUMsQ0FBQWtGLGNBQWUsQ0FBQztrQkFDNUQvRCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYaUMsU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUztrQkFDekJyQyxJQUFJLEVBQUUsUUFBUTtrQkFDZDRPLFlBQVksRUFBRXRRLE1BQU0sQ0FBQzJGLEtBQUs7a0JBQzFCQSxLQUFLLEVBQUUzRixNQUFNLENBQUMyRjtrQkFDZDtpQkFDQSxDQUFDO2dCQUVGLElBQUksQ0FBQ2hGLElBQUksQ0FBQ2lELEtBQUssRUFBRTtrQkFDaEJqQyxPQUFPLENBQUNDLElBQUksQ0FBQywwQ0FBMEMsRUFBRWpCLElBQUksQ0FBQzs7Z0JBRS9ELE1BQU0sSUFBSSxDQUFDcUIsR0FBRyxDQUFDO2tCQUFFLEdBQUdyQixJQUFJO2tCQUFFbUIsRUFBRSxFQUFFbkIsSUFBSSxDQUFDbUIsRUFBRTtrQkFBRVosS0FBSyxFQUFFO2dCQUFrQixDQUFFLENBQUM7Z0JBQ25FLE1BQU0sSUFBSSxDQUFDMEIsU0FBUyxDQUFDO2tCQUFFMUIsS0FBSyxFQUFFO2dCQUFXLENBQUUsQ0FBQztnQkFDNUMsSUFBSSxDQUFDbVAsYUFBYSxHQUFHLEtBQUs7Z0JBQzFCLElBQUksQ0FBQzVLLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztlQUN6QyxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlLLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztlQUM1QyxTQUFTO2dCQUNULElBQUksQ0FBQytKLGFBQWEsR0FBRyxLQUFLOztZQUU1QjtZQUVBLE1BQU0sQ0FBQXhLLGNBQWVNLENBQUN4QyxLQUFLO2NBQzFCLE1BQU1oRCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQStDLFdBQVksQ0FBQ2dDLFFBQVEsQ0FBQy9CLEtBQUssQ0FBQztjQUNwRCxNQUFNLElBQUksQ0FBQyxDQUFBcUMsT0FBUSxDQUFDaEUsR0FBRyxDQUFDckIsSUFBSSxDQUFDcUYsT0FBTyxDQUFDO2NBQ3JDLElBQUksQ0FBQzVFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztjQUM5QixPQUFPVCxJQUFJO1lBQ1o7WUFFQSxNQUFNNFAsSUFBSUEsQ0FBQTtjQUNULE1BQU01UCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNzTyxRQUFRLENBQUNzQixJQUFJLEVBQUU7Y0FDdkMsSUFBSSxDQUFDdk8sR0FBRyxDQUFDckIsSUFBSSxDQUFDO2NBQ2QsSUFBSSxDQUFDcVAsVUFBVSxDQUFDMU8sUUFBUSxDQUFDWCxJQUFJLENBQUNxUCxVQUFVLENBQUM7Y0FDekMsT0FBT3JQLElBQUk7WUFDWjtZQUVBLGFBQWFvQixHQUFHQSxDQUFDNEIsS0FBSztjQUNyQixJQUFJQSxLQUFLLEVBQUU3QixFQUFFLElBQUksSUFBSSxDQUFDK04sU0FBUyxDQUFDaE8sR0FBRyxDQUFDOEIsS0FBSyxDQUFDN0IsRUFBRSxDQUFDLEVBQUU7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDK04sU0FBUyxDQUFDOU4sR0FBRyxDQUFDNEIsS0FBSyxDQUFDN0IsRUFBRSxDQUFDOztjQUdwQyxNQUFNME8sTUFBTSxHQUFHLElBQUliLHVCQUF1QixDQUFDaE0sS0FBSyxDQUFDO2NBQ2pELElBQUlBLEtBQUssQ0FBQzdCLEVBQUUsRUFBRTtnQkFDYixNQUFNME8sTUFBTSxDQUFDRCxJQUFJLEVBQUU7O2NBR3BCLElBQUk1TSxLQUFLLENBQUM3QixFQUFFLEVBQUUsSUFBSSxDQUFDK04sU0FBUyxDQUFDN04sR0FBRyxDQUFDMkIsS0FBSyxDQUFDN0IsRUFBRSxFQUFFME8sTUFBTSxDQUFDO2NBQ2xELE9BQU9BLE1BQU07WUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pMRCxJQUFBalIsTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBVSxNQUFPeVEsT0FBUSxTQUFRMVEsTUFBQSxDQUFBSSxhQUFzQjtZQUc3RCxJQUFJb1EsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDVSxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLElBQUksQ0FBQztZQUN2QztZQUNBcFEsWUFBWUUsSUFBSSxHQUFHLEVBQUU7Y0FDcEIsS0FBSyxDQUFDO2dCQUFFbUUsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQztnQkFBRSxHQUFHbkU7Y0FBSSxDQUFFLENBQUM7WUFDdEQ7O1VBQ0F5QyxPQUFBLENBQUFnTixPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7O1VDWkQ7O1VBRUF6RyxNQUFBLENBQUFtSCxjQUFBLENBQUExTixPQUFBO1lBQ0E0QixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQStJLFdBQUEsR0FBQXBPLE9BQUE7VUFDQSxJQUFBaUwsS0FBQSxHQUFBakwsT0FBQTtVQUVBLElBQUFrUSxRQUFBLEdBQUFsUSxPQUFBO1VBR0EsSUFBQTZELFlBQUEsR0FBQTdELE9BQUE7VUFLTyxZQUZQO1VBRWtCLE1BQU9vUixLQUFNLFNBQVFuRyxLQUFBLENBQUFxRSxrQkFBa0I7WUFDeEQsQ0FBQXBMLFdBQVk7WUFFWixDQUFBa00sS0FBTTtZQUdOLElBQUlpQixTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUM3UCxLQUFLLElBQUksSUFBSSxDQUFDZ1AsVUFBVSxDQUFDaFAsS0FBSztZQUMzQztZQUNBLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNjLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDOEIsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUNDLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDRSxTQUFTO1lBQzNFO1lBRUE7Ozs7OztZQU1BekQsWUFBWTtjQUFFd0IsRUFBRSxHQUFHb0gsU0FBUztjQUFFeEgsSUFBSSxHQUFHLFFBQVE7Y0FBRSxHQUFHbEI7WUFBSSxJQUFxQjtjQUFFa0IsSUFBSSxFQUFFO1lBQVEsQ0FBRTtjQUM1RixLQUFLLENBQUM7Z0JBQ0xJLEVBQUU7Z0JBQ0ZKLElBQUk7Z0JBQ0ppRCxVQUFVLEVBQUUsQ0FDWCxPQUFPLEVBQ1Asb0JBQW9CLEVBQ3BCO2tCQUNDQyxJQUFJLEVBQUUsU0FBUztrQkFDZkMsS0FBSyxFQUFFNkssUUFBQSxDQUFBTztpQkFDUCxFQUNEO2tCQUNDckwsSUFBSSxFQUFFLFlBQVk7a0JBQ2xCQyxLQUFLLEVBQUUrSSxXQUFBLENBQUFsTztpQkFDUCxDQUNEO2dCQUNELEdBQUdjO2VBQ0gsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBa0QsV0FBWSxHQUFHLElBQUlMLFlBQUEsQ0FBQTJCLFdBQVcsRUFBRTtjQUVyQyxJQUFJLENBQUNnTCxVQUFVLENBQUN2UCxTQUFTLENBQUMsSUFBSSxDQUFDO2NBQy9CLElBQUksQ0FBQ3FRLG1CQUFtQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDO1lBRUEsTUFBTWxPLFNBQVNBLENBQUNlLEtBQUssR0FBRyxFQUFFO2NBQ3pCLE1BQU1oRCxJQUFJLEdBQUc7Z0JBQ1osR0FBRyxJQUFJLENBQUNJLGFBQWEsRUFBRTtnQkFDdkIsR0FBRzRDLEtBQUs7Z0JBQ1JxTSxVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVLENBQUN0UCxRQUFRLEVBQUU7Z0JBQ3RDZ0IsSUFBSSxFQUFFO2VBQ047Y0FDRCxJQUFJLENBQUMsQ0FBQWtPLEtBQU0sR0FBRyxJQUFJO2NBRWxCLE1BQU10TixRQUFRLEdBQUcsS0FBSyxDQUFDNk4sT0FBTyxDQUFDeFAsSUFBSSxDQUFDO2NBRXBDLE9BQU8yQixRQUFRO1lBQ2hCO1lBQ0E7Ozs7O1lBS0EsTUFBTThOLG1CQUFtQkEsQ0FBQ3BRLE1BQU07Y0FDL0IsSUFBSTtnQkFDSCxJQUFJLENBQUNxUSxhQUFhLEdBQUcsSUFBSTtnQkFDekIsSUFBSSxDQUFDck8sR0FBRyxDQUFDaEMsTUFBTSxDQUFDO2dCQUNoQixNQUFNLElBQUksQ0FBQzRDLFNBQVMsRUFBRTtnQkFDdEIsTUFBTWpDLElBQUksR0FBd0IsTUFBTSxJQUFJLENBQUMsQ0FBQWtGLGNBQWUsQ0FBQztrQkFDNUQvRCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYaUMsU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUztrQkFDekJyQyxJQUFJLEVBQUUsUUFBUTtrQkFDZDRPLFlBQVksRUFBRXRRLE1BQU0sQ0FBQzJGLEtBQUs7a0JBQzFCQSxLQUFLLEVBQUUzRixNQUFNLENBQUMyRixLQUFLO2tCQUNuQm9MLGVBQWUsRUFBRS9RLE1BQU0sQ0FBQytRO2tCQUN4QjtpQkFDQSxDQUFDO2dCQUVGLElBQUksQ0FBQ3BRLElBQUksQ0FBQ2lELEtBQUssRUFBRTtrQkFDaEJqQyxPQUFPLENBQUNDLElBQUksQ0FBQywwQ0FBMEMsRUFBRWpCLElBQUksQ0FBQzs7Z0JBRy9EcVEsVUFBVSxDQUFDLFlBQVc7a0JBQ3JCLE1BQU0sSUFBSSxDQUFDcE8sU0FBUyxDQUFDO29CQUFFLEdBQUdqQyxJQUFJO29CQUFFTyxLQUFLLEVBQUU7a0JBQVcsQ0FBRSxDQUFDO2tCQUNyRCxJQUFJLENBQUNtUCxhQUFhLEdBQUcsS0FBSztrQkFDMUIsSUFBSSxDQUFDNUssWUFBWSxDQUFDLHNCQUFzQixDQUFDO2dCQUMxQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLE9BQU85RSxJQUFJO2VBQ1gsQ0FBQyxPQUFPc0YsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSUssS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDK0osYUFBYSxHQUFHLEtBQUs7O1lBRTVCO1lBRUEsTUFBTSxDQUFBeEssY0FBZU0sQ0FBQ3hDLEtBQUs7Y0FDMUIsTUFBTWhELElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBK0MsV0FBWSxDQUFDZ0MsUUFBUSxDQUFDL0IsS0FBSyxDQUFDO2NBQ3BELE1BQU0sSUFBSSxDQUFDM0IsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2NBQ3BCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQzlCLE9BQU9ULElBQUk7WUFDWjtZQUVBLE1BQU00UCxJQUFJQSxDQUFBO2NBQ1QsTUFBTTVQLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ3NPLFFBQVEsQ0FBQ3NCLElBQUksRUFBRTtjQUV2QyxJQUFJLENBQUN2TyxHQUFHLENBQUNyQixJQUFJLENBQUM7Y0FDZCxJQUFJLENBQUNxUCxVQUFVLENBQUMxTyxRQUFRLENBQUNYLElBQUksQ0FBQ3FQLFVBQVUsQ0FBQztjQUN6QyxPQUFPclAsSUFBSTtZQUNaO1lBRUFzUSxZQUFZLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLE1BQU0zTyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMyTSxRQUFRLENBQUNnQyxZQUFZLEVBQUU7Y0FFbkQsSUFBSSxDQUFDM08sUUFBUSxDQUFDbUYsTUFBTSxFQUFFO2dCQUNyQixPQUFPbkYsUUFBUTs7Y0FFaEIsTUFBTSxJQUFJLENBQUNOLEdBQUcsQ0FBQ00sUUFBUSxDQUFDM0IsSUFBSSxDQUFDO2NBQzdCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztjQUNyQyxPQUFPa0IsUUFBUTtZQUNoQixDQUFDO1lBRUQ7Ozs7WUFJQSxNQUFNNE8sd0JBQXdCQSxDQUFDO2NBQUVuTixTQUFTO2NBQUVnTjtZQUFlLENBQUU7Y0FDNUQsSUFBSTtnQkFDSCxJQUFJLENBQUNuTCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTWpGLElBQUksR0FBc0IsTUFBTSxJQUFJLENBQUMsQ0FBQWtGLGNBQWUsQ0FBQztrQkFDMURuRSxJQUFJLEVBQUUsV0FBVztrQkFDakJJLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7a0JBQ1hpQztpQkFDK0IsQ0FBQztnQkFFakMsSUFBSSxDQUFDZ0MsVUFBVSxDQUFDcEYsSUFBSSxDQUFDcUYsT0FBTyxDQUFDO2dCQUM3Qjs7O2dCQUdBLE9BQU9yRixJQUFJO2dCQUNYO2VBQ0EsQ0FBQyxPQUFPc0YsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSUssS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDVixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQUcsVUFBVUEsQ0FBQ3BGLElBQWE7Y0FDdkIsSUFBSSxDQUFDcUYsT0FBTyxDQUFDaEUsR0FBRyxDQUFDckIsSUFBSSxDQUFDO2NBQ3RCLElBQUksQ0FBQ1MsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQy9CO1lBQ0E7Ozs7Ozs7WUFPQSxNQUFNK1AsaUJBQWlCQSxDQUFDO2NBQUVwTixTQUFTO2NBQUVxTjtZQUFZLENBQUU7Y0FDbEQsSUFBSTtnQkFDSCxJQUFJLENBQUN4TCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTWpGLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBa0YsY0FBZSxDQUFDO2tCQUN2Q25FLElBQUksRUFBRSx1QkFBdUI7a0JBQzdCMFAsWUFBWTtrQkFDWnRQLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7a0JBQ1hpQztpQkFDQSxDQUFDO2dCQUVGLE9BQU9wRCxJQUFJO2VBQ1gsQ0FBQyxPQUFPc0YsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSUssS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDVixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNUSxlQUFlQSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtjQUNoQyxJQUFJO2dCQUNILElBQUksQ0FBQ0EsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztnQkFHdEMsTUFBTUMsWUFBWSxHQUFHO2tCQUNwQkMsRUFBRSxFQUFFO29CQUNIQyxNQUFNLEVBQUUsYUFBYTtvQkFDckJDLEtBQUssRUFBRTttQkFDUDtrQkFDREMsRUFBRSxFQUFFO29CQUNIRixNQUFNLEVBQUUsZUFBZTtvQkFDdkJDLEtBQUssRUFBRTttQkFDUDtrQkFDREUsRUFBRSxFQUFFO29CQUNISCxNQUFNLEVBQUUsZUFBZTtvQkFDdkJDLEtBQUssRUFBRTs7aUJBRVI7Z0JBQ0QsTUFBTUcsTUFBTSxHQUFHTixZQUFZLENBQUMsSUFBSSxDQUFDN0QsUUFBUSxDQUFDLElBQUk2RCxZQUFZLENBQUNJLEVBQUU7Z0JBQzdETixNQUFNLEdBQUcsR0FBR1EsTUFBTSxDQUFDSixNQUFNLElBQUlKLE1BQU0sSUFBSVEsTUFBTSxDQUFDSCxLQUFLLEVBQUU7Z0JBQ3JELE1BQU1wRSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW9CLFdBQVksQ0FBQ3FELEtBQUssQ0FBQztrQkFDOUNWLE1BQU07a0JBQ05XLElBQUksRUFBRSxXQUFXO2tCQUNqQkgsTUFBTSxFQUFFO2lCQUNSLENBQUM7Z0JBRUYsTUFBTVMsWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDMkgsUUFBUSxDQUFDb0MsV0FBVyxDQUFDL08sUUFBUSxDQUFDd0UsR0FBRyxDQUFDO2dCQUVsRSxJQUFJLENBQUM5RSxHQUFHLENBQUNzRixZQUFZLENBQUMzRyxJQUFJLENBQUM7Z0JBQzNCO2dCQUNBLElBQUksQ0FBQ1MsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2dCQUM5QixJQUFJLENBQUNvRyxPQUFPLEdBQUcsR0FBR0YsWUFBWSxDQUFDM0csSUFBSSxDQUFDNkcsT0FBTyxJQUFJOEosV0FBVyxDQUFDQyxHQUFHLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDOUwsWUFBWSxDQUFDLGlCQUFpQixDQUFDO2dCQUNwQyxJQUFJLENBQUM2QixZQUFZLENBQUNHLE1BQU0sRUFBRSxNQUFNLElBQUluQixLQUFLLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9ELE9BQU8sSUFBSSxDQUFDa0IsT0FBTztlQUNuQixDQUFDLE9BQU92QixDQUFDLEVBQUU7Z0JBQ1h0RSxPQUFPLENBQUMrRixLQUFLLENBQUN6QixDQUFDLENBQUM7O1lBRWxCOztVQUNBaEQsT0FBQSxDQUFBMk4sS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25PSyxNQUFPWSxXQUFZLFNBQVFsTCxLQUFLO1lBQ3JDbUwsT0FBTztZQUNQQyxJQUFJO1lBQ0pwUixZQUFZbVIsT0FBTyxFQUFFQyxJQUFJO2NBQ3hCLEtBQUssQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztjQUNoQixJQUFJLENBQUM3TSxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUM7Y0FDM0IsSUFBSSxDQUFDOE0sSUFBSSxHQUFHQSxJQUFJLENBQUMsQ0FBQztZQUNuQjs7VUFDQXpPLE9BQUEsQ0FBQXVPLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBRyxNQUFBLEdBQUFuUyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW9PLFdBQUEsR0FBQXBPLE9BQUE7VUFDQSxJQUFBb1MsU0FBQSxHQUFBcFMsT0FBQTtVQUNBLElBQUFxUCxVQUFBLEdBQUFyUCxPQUFBO1VBdUJPO1VBQVcsTUFBT2lRLGNBQWUsU0FBUWhRLEtBQUEsQ0FBQStELElBQXFDO1lBQ3BGLENBQUFFLFdBQVk7WUFDWixDQUFBa00sS0FBTTtZQTJCRSxPQUFPQyxTQUFTLEdBQUcsSUFBSS9QLEdBQUcsRUFBRTtZQUVwQyxJQUFJa0IsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ2MsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM4QixLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0MsV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUNFLFNBQVM7WUFDM0U7WUFFQTs7Ozs7O1lBTUF6RCxZQUFZO2NBQUV3QixFQUFFLEdBQUdvSCxTQUFTO2NBQUV2RSxVQUFVLEdBQUcsRUFBRTtjQUFFakQsSUFBSSxHQUFHLFFBQVE7Y0FBRSxHQUFHbEI7WUFBSSxDQUFFO2NBQ3hFLEtBQUssQ0FBQztnQkFDTHNCLEVBQUU7Z0JBQ0Y0QyxNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QnVLLFFBQVEsRUFBRUosVUFBQSxDQUFBSyxjQUFjO2dCQUN4QixHQUFHMU8sSUFBSTtnQkFDUG1FLFVBQVUsRUFBRSxDQUNYLEdBQUdBLFVBQVUsRUFDYixJQUFJLEVBQ0osT0FBTyxFQUNQLGFBQWEsRUFDYixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0osVUFBVSxFQUNWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsWUFBWSxFQUNaLFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQO2tCQUNDQyxJQUFJLEVBQUUsYUFBYTtrQkFDbkJDLEtBQUssRUFBRStJLFdBQUEsQ0FBQUM7aUJBQ1AsRUFDRCxRQUFRLEVBQ1I7a0JBQ0NqSixJQUFJLEVBQUUsVUFBVTtrQkFDaEJDLEtBQUssRUFBRStNLFNBQUEsQ0FBQWhEO2lCQUNQO2VBRUYsQ0FBQyxDQUFDLENBQUM7WUFDTDtZQUVBLGFBQWE3TSxHQUFHQSxDQUFDNEIsS0FBSztjQUNyQixJQUFJQSxLQUFLLEVBQUU3QixFQUFFLElBQUksSUFBSSxDQUFDK04sU0FBUyxDQUFDaE8sR0FBRyxDQUFDOEIsS0FBSyxDQUFDN0IsRUFBRSxDQUFDLEVBQUU7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDK04sU0FBUyxDQUFDOU4sR0FBRyxDQUFDNEIsS0FBSyxDQUFDN0IsRUFBRSxDQUFDOztjQUdwQyxNQUFNME8sTUFBTSxHQUFHLElBQUlmLGNBQWMsQ0FBQzlMLEtBQUssQ0FBQztjQUN4QyxJQUFJQSxLQUFLLENBQUM3QixFQUFFLEVBQUU7Z0JBQ2IsTUFBTTBPLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFOztjQUdwQixJQUFJNU0sS0FBSyxDQUFDN0IsRUFBRSxFQUFFLElBQUksQ0FBQytOLFNBQVMsQ0FBQzdOLEdBQUcsQ0FBQzJCLEtBQUssQ0FBQzdCLEVBQUUsRUFBRTBPLE1BQU0sQ0FBQztjQUNsRCxPQUFPQSxNQUFNO1lBQ2Q7WUFFQXFCLEtBQUtBLENBQUNyUixJQUFJO2NBQ1QsT0FBTyxJQUFJLENBQUN5TyxRQUFRLENBQUM0QyxLQUFLLENBQUNyUixJQUFJLENBQUM7WUFDakM7WUFFQSxNQUFNc1IsVUFBVUEsQ0FBQTtjQUNmLE1BQU14UCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMyTSxRQUFRLENBQUM2QyxVQUFVLEVBQUU7Y0FDakQsSUFBSSxDQUFDeFAsUUFBUSxDQUFDbUYsTUFBTSxFQUFFLE1BQU0sSUFBSWtLLE1BQUEsQ0FBQUgsV0FBVyxDQUFDbFAsUUFBUSxDQUFDb0YsS0FBSyxDQUFDcUssSUFBSSxFQUFFelAsUUFBUSxDQUFDb0YsS0FBSyxDQUFDZ0ssSUFBSSxDQUFDO2NBQ3JGLE9BQU9wUCxRQUFRO1lBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbklELElBQUE3QyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBcVAsVUFBQSxHQUFBclAsT0FBQTtVQUtPLFlBRFA7VUFDa0IsTUFBT3dTLGNBQWUsU0FBUXZTLEtBQUEsQ0FBQStELElBQXFDO1lBR3BGdUwsS0FBSztZQUNMck0sUUFBUTtZQUNSa0IsS0FBSztZQUNMQyxXQUFXO1lBQ1hFLFNBQVM7WUFDVHlELE9BQU87WUFDUHdILFFBQVE7WUFDUmdCLFVBQVU7WUFLVjFQLFlBQVk7Y0FBRXdCLEVBQUUsR0FBR29ILFNBQVM7Y0FBRXZFLFVBQVUsR0FBRyxFQUFFO2NBQUVqRCxJQUFJLEdBQUcsUUFBUTtjQUFFLEdBQUdsQjtZQUFJLENBQUUsR0FBRyxFQUFFO2NBQzdFLEtBQUssQ0FBQztnQkFDTHNCLEVBQUU7Z0JBQ0Y0QyxNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QnVLLFFBQVEsRUFBRUosVUFBQSxDQUFBSyxjQUFjO2dCQUN4QixHQUFHMU8sSUFBSTtnQkFDUG1FLFVBQVUsRUFBRSxDQUNYLElBQUksRUFDSixTQUFTLEVBQ1QsT0FBTyxFQUNQLFVBQVUsRUFDVixPQUFPLEVBQ1AsYUFBYSxFQUNiLFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVk7ZUFFYixDQUFDO1lBQ0g7O1VBQ0ExQixPQUFBLENBQUErTyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNELElBQUE5TyxPQUFBLEdBQUExRCxPQUFBO1VBRUEsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBNEQsSUFBQSxHQUFBNUQsT0FBQTtVQUlNLE1BQU8wUCxjQUFjO1lBQzFCLENBQUF6TCxHQUFJO1lBQ0osQ0FBQWxELE1BQU87WUFFUEQsWUFBWUMsTUFBc0I7Y0FDakMsSUFBSSxDQUFDLENBQUFrRCxHQUFJLEdBQUcsSUFBSUwsSUFBQSxDQUFBNkIsR0FBRyxDQUFDL0IsT0FBQSxDQUFBZ0MsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBOUUsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCLENBQUMsQ0FBQztZQUVGZ1EsSUFBSSxHQUFHLE1BQU81TSxLQUFXLElBQUk7Y0FDNUIsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsTUFBTTtnQkFBRUssTUFBTTtnQkFBRTlHO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE4QyxHQUFJLENBQUMxQixHQUFHLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBeEIsTUFBTyxDQUFDdUIsRUFBRSxFQUFFLENBQUM7Y0FFbEYsSUFBSSxDQUFDMkYsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSW5CLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7Y0FHeEMsT0FBTzNGLElBQUk7WUFDWixDQUFDO1lBRURzUixJQUFJLEdBQUcsTUFBTXRPLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDd0QsTUFBTSxDQUFDOUQsUUFBQSxDQUFBK0QsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNO2dCQUFFSyxNQUFNO2dCQUFFOUc7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThDLEdBQUksQ0FBQzFCLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUF4QixNQUFPLENBQUN1QixFQUFFLEVBQUUsQ0FBQztjQUNsRixJQUFJLENBQUMyRixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJbkIsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztjQUV4QyxPQUFPM0YsSUFBSTtZQUNaLENBQUM7WUFFRCxNQUFNdVIsUUFBUUEsQ0FBQ3BRLEVBQUU7Y0FDaEIsSUFBSSxDQUFDLENBQUEyQixHQUFJLENBQUN3RCxNQUFNLENBQUM5RCxRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVLLE1BQU07Z0JBQUU5RztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBOEMsR0FBSSxDQUFDMUIsR0FBRyxDQUFDLG1CQUFtQkQsRUFBRSxFQUFFLENBQUM7Y0FDckUsSUFBSSxDQUFDMkYsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSW5CLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Y0FFOUMsT0FBTzNGLElBQUk7WUFDWjtZQUVBLE1BQU1vQyxNQUFNQSxDQUFBO2NBQ1gsSUFBSSxDQUFDLENBQUFVLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsTUFBTXpHLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBOEMsR0FBSSxDQUFDVixNQUFNLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBeEMsTUFBTyxDQUFDdUIsRUFBRSxFQUFFLENBQUM7Y0FFekUsT0FBT25CLElBQUk7WUFDWjtZQUVBLE1BQU1tUixVQUFVQSxDQUFBO2NBQ2YsSUFBSSxDQUFDLENBQUFyTyxHQUFJLENBQUN3RCxNQUFNLENBQUM5RCxRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU16RyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThDLEdBQUksQ0FBQ1YsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUF4QyxNQUFPLENBQUN1QixFQUFFLEVBQUUsQ0FBQztjQUVsRSxPQUFPbkIsSUFBSTtZQUNaO1lBRUEsTUFBTXdQLE9BQU9BLENBQUN4TSxLQUFBLEdBQXVDLEVBQUU7Y0FDdEQsSUFBSUEsS0FBSyxDQUFDakMsSUFBSSxLQUFLLE9BQU8sRUFBRSxPQUFPLElBQUksQ0FBQ2tCLFNBQVMsQ0FBQ2UsS0FBSyxDQUFDO2NBQ3hELElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUN3RCxNQUFNLENBQUM5RCxRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE9BQU8sSUFBSSxDQUFDLENBQUEzRCxHQUFJLENBQUM4RCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBaEgsTUFBTyxDQUFDdUIsRUFBRSxVQUFVLEVBQUU2QixLQUFLLENBQUM7WUFDM0U7WUFFQSxNQUFNZixTQUFTQSxDQUFDZSxLQUFLO2NBQ3BCLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUN3RCxNQUFNLENBQUM5RCxRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU05RSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW1CLEdBQUksQ0FBQzhELElBQUksQ0FBQyxpQkFBaUIsRUFBRTVELEtBQUssQ0FBQztjQUMvRCxJQUFJLENBQUNyQixRQUFRLENBQUNtRixNQUFNLEVBQUU7Z0JBQ3JCO2NBQUE7Y0FFRCxPQUFPbkYsUUFBUTtZQUNoQjtZQUVBLE1BQU0yTyxZQUFZQSxDQUFBO2NBQ2pCLElBQUksQ0FBQyxDQUFBeE4sR0FBSSxDQUFDd0QsTUFBTSxDQUFDOUQsUUFBQSxDQUFBK0QsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQztjQUNBLE9BQU8sSUFBSSxDQUFDLENBQUEzRCxHQUFJLENBQUM4RCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBaEgsTUFBTyxDQUFDdUIsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDOUU7WUFFQSxNQUFNK1AsS0FBS0EsQ0FBQztjQUFFMUQsUUFBUTtjQUFFZ0UsT0FBTztjQUFFek4sTUFBTTtjQUFFaEQ7WUFBSSxDQUFFO2NBQzlDLElBQUksQ0FBQyxDQUFBK0IsR0FBSSxDQUFDd0QsTUFBTSxDQUFDOUQsUUFBQSxDQUFBK0QsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNZ0wsU0FBUyxHQUFHO2dCQUNqQkMsU0FBUyxFQUFFLHNCQUFzQmxFLFFBQVEsUUFBUTtnQkFDakRxQyxNQUFNLEVBQUUsWUFBWXJDLFFBQVE7ZUFDNUI7Y0FDRCxNQUFNOUcsUUFBUSxHQUFHK0ssU0FBUyxDQUFDMVEsSUFBSSxDQUFDLElBQUkwUSxTQUFTLENBQUM1QixNQUFNO2NBRXBELElBQUlyTixRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ3JGLEVBQUUsS0FBS3FRLE9BQU8sSUFBSXpOLE1BQU0sS0FBSyxNQUFNLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDLENBQUFqQixHQUFJLENBQUM4RCxJQUFJLENBQUNGLFFBQVEsRUFBRSxFQUFFLENBQUM7O2NBRXBDLE9BQU8sSUFBSSxDQUFDLENBQUE1RCxHQUFJLENBQUM4RCxJQUFJLENBQUNGLFFBQVEsRUFBRTtnQkFBRWlMLGNBQWMsRUFBRUgsT0FBTztnQkFBRXpOO2NBQU0sQ0FBRSxDQUFDO1lBQ3JFO1lBRUEsTUFBTTJNLFdBQVdBLENBQUN2SyxHQUFHO2NBQ3BCLElBQUksQ0FBQyxDQUFBckQsR0FBSSxDQUFDd0QsTUFBTSxDQUFDOUQsUUFBQSxDQUFBK0QsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNOUUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFtQixHQUFJLENBQUM4RCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBaEgsTUFBTyxDQUFDdUIsRUFBRSxRQUFRLEVBQUU7Z0JBQ2pGZ0Y7ZUFDQSxDQUFDO2NBQ0YsT0FBT3hFLFFBQVE7WUFDaEI7WUFFQThNLFdBQVcsR0FBRyxNQUFNMU0sUUFBUSxJQUFHO2NBQzlCLElBQUksQ0FBQyxDQUFBZSxHQUFJLENBQUN3RCxNQUFNLENBQUM5RCxRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVLLE1BQU07Z0JBQUU5RztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBOEMsR0FBSSxDQUFDMUIsR0FBRyxDQUFDLGdDQUFnQyxFQUFFO2dCQUFFVztjQUFRLENBQUUsQ0FBQztjQUM1RixJQUFJLENBQUMrRSxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJbkIsS0FBSyxDQUFDLHdCQUF3QixDQUFDOztjQUUxQyxPQUFPM0YsSUFBSTtZQUNaLENBQUM7WUFFRDRSLFlBQVksR0FBRyxNQUFBQSxDQUFPQyxPQUFPLEVBQUUxTSxVQUFVLEtBQUk7Y0FDNUMsSUFBSSxDQUFDLENBQUFyQyxHQUFJLENBQUN3RCxNQUFNLENBQUM5RCxRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVLLE1BQU07Z0JBQUU5RztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBOEMsR0FBSSxDQUFDOEQsSUFBSSxDQUM1QyxtQkFBbUJpTCxPQUFPLGVBQWUxTSxVQUFVLFVBQVUsRUFDN0QsRUFBRSxDQUNGO2NBQ0QsT0FBT25GLElBQUk7WUFDWixDQUFDO1lBRUQ4UixrQkFBa0IsR0FBRyxNQUFBQSxDQUFPRCxPQUFPLEVBQUUxTSxVQUFVLEtBQUk7Y0FDbEQsSUFBSSxDQUFDLENBQUFyQyxHQUFJLENBQUN3RCxNQUFNLENBQUM5RCxRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU07Z0JBQUVLLE1BQU07Z0JBQUU5RztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBOEMsR0FBSSxDQUFDMUIsR0FBRyxDQUFDLG1CQUFtQnlRLE9BQU8sZUFBZTFNLFVBQVUsVUFBVSxDQUFDO2NBQzNHLE9BQU9uRixJQUFJO1lBQ1osQ0FBQzs7VUFDRHNDLE9BQUEsQ0FBQWlNLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwSUQsSUFBQWhNLE9BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE0RCxJQUFBLEdBQUE1RCxPQUFBO1VBTU0sTUFBT2dRLHNCQUFzQjtZQUNsQyxDQUFBL0wsR0FBSTtZQUNKLENBQUFsRCxNQUFPO1lBRVBELFlBQVlDLE1BQXdDO2NBQ25ELElBQUksQ0FBQyxDQUFBa0QsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQTZCLEdBQUcsQ0FBQy9CLE9BQUEsQ0FBQWdDLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQTlFLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBMFIsSUFBSSxHQUFHLE1BQU10TyxLQUFLLElBQUc7Y0FDcEIsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsSUFBSXpELEtBQUssQ0FBQytPLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLE9BQU8vTyxLQUFLLENBQUMrTyxLQUFLO2dCQUNsQixNQUFNO2tCQUFFL1I7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE4QyxHQUFJLENBQUMxQixHQUFHLENBQUMsb0JBQW9CLEVBQUU0QixLQUFLLENBQUM7Z0JBQ2pFLE9BQU9oRCxJQUFJLEVBQUVaLEtBQUssSUFBSSxFQUFFOztjQUV6QixNQUFNO2dCQUFFMEgsTUFBTTtnQkFBRTlHO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE4QyxHQUFJLENBQUMxQixHQUFHLENBQUMsV0FBVzRCLEtBQUssQ0FBQytPLEtBQUssRUFBRSxDQUFDO2NBRXRFLE9BQU8vUixJQUFJLEVBQUVaLEtBQUssSUFBSSxFQUFFO1lBQ3pCLENBQUM7WUFFRCxNQUFNNFMsV0FBV0EsQ0FBQzdRLEVBQUU7Y0FDbkIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQTJCLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBRTNDLE1BQU07a0JBQUVLLE1BQU07a0JBQUU5RztnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThDLEdBQUksQ0FBQ1YsTUFBTSxDQUFDLG1CQUFtQmpCLEVBQUUsRUFBRSxDQUFDO2dCQUV4RSxJQUFJLENBQUMyRixNQUFNLEVBQUU7a0JBQ1osTUFBTSxJQUFJbkIsS0FBSyxDQUFDLHVCQUF1QixDQUFDOztnQkFHekMsT0FBTzNGLElBQUk7ZUFDWCxDQUFDLE9BQU9zRixDQUFDLEVBQUU7Z0JBQ1h0RSxPQUFPLENBQUMrRixLQUFLLENBQUN6QixDQUFDLENBQUM7O1lBRWxCO1lBRUFtSixXQUFXLEdBQUcsTUFBTTFNLFFBQVEsSUFBRztjQUM5QixJQUFJLENBQUMsQ0FBQWUsR0FBSSxDQUFDd0QsTUFBTSxDQUFDOUQsUUFBQSxDQUFBK0QsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFSyxNQUFNO2dCQUFFOUc7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThDLEdBQUksQ0FBQzFCLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRTtnQkFBRVc7Y0FBUSxDQUFFLENBQUM7Y0FDNUYsSUFBSSxDQUFDK0UsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSW5CLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzs7Y0FFMUMsT0FBTzNGLElBQUk7WUFDWixDQUFDOztVQUNEc0MsT0FBQSxDQUFBdU0sc0JBQUEsR0FBQUEsc0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRELElBQUFqUSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEQsSUFBQSxHQUFBNUQsT0FBQTtVQUNBLElBQUEwRCxPQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTJELFFBQUEsR0FBQTNELE9BQUE7VUFLTSxNQUFPd0YsV0FBWSxTQUFRekYsTUFBQSxDQUFBSSxhQUEyQjtZQUczRCxDQUFBOEQsR0FBSTtZQUNKbkQsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ3NTLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztjQUN2QyxJQUFJLENBQUMsQ0FBQW5QLEdBQUksR0FBRyxJQUFJTCxJQUFBLENBQUE2QixHQUFHLENBQUMvQixPQUFBLENBQUFnQyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFFQSxNQUFNSyxRQUFRQSxDQUFDL0IsS0FBVTtjQUN4QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUN3RCxNQUFNLENBQUM5RCxRQUFBLENBQUErRCxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUMzQyxNQUFNOUUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFtQixHQUFJLENBQUM4RCxJQUFJLENBQUMsY0FBYyxFQUFFO2tCQUFFLEdBQUc1RDtnQkFBSyxDQUFFLENBQUM7Z0JBRW5FLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQ21GLE1BQU0sRUFBRTtrQkFDckIsSUFBSTtvQkFDSEMsS0FBSyxFQUFFO3NCQUFFcUssSUFBSSxFQUFFYztvQkFBUyxDQUFFO29CQUMxQm5MO2tCQUFLLENBQ0wsR0FBR3BGLFFBQVE7a0JBRVosSUFBSXVRLFNBQVMsQ0FBQ3BSLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO29CQUMvQyxPQUFPO3NCQUFFaUcsS0FBSyxFQUFFO29CQUFxQixDQUFFOztrQkFFeEMsSUFBSW1MLFNBQVMsQ0FBQ3BSLFFBQVEsQ0FBQyw2RUFBNkUsQ0FBQyxFQUFFO29CQUN0RyxPQUFPO3NCQUFFaUcsS0FBSyxFQUFFLG1CQUFtQjtzQkFBRTZCLE1BQU0sRUFBRTdCLEtBQUssQ0FBQ29MLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUFDLENBQUU7O2tCQUduRSxPQUFPO29CQUFFcEw7a0JBQUssQ0FBRTs7Z0JBRWpCLE9BQU9wRixRQUFRLENBQUMzQixJQUFJO2VBQ3BCLENBQUMsT0FBT3NGLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlLLEtBQUssQ0FBQ0wsQ0FBQyxDQUFDd0wsT0FBTyxDQUFDOztZQUU1QjtZQUVBLE1BQU0xSyxLQUFLQSxDQUFDcEQsS0FBdUQ7Y0FDbEUsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ3dELE1BQU0sQ0FBQzlELFFBQUEsQ0FBQStELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsTUFBTTlFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbUIsR0FBSSxDQUFDOEQsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUFFN0UsUUFBUSxFQUFFLElBQUk7Z0JBQUUsR0FBR2lCO2NBQUssQ0FBRSxDQUFDO2NBQ3ZGLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQ21GLE1BQU0sRUFBRSxNQUFNLElBQUluQixLQUFLLENBQUNoRSxRQUFRLENBQUNvRixLQUFLLENBQUNnSyxJQUFJLENBQUM7Y0FDMUQ7Ozs7Y0FJQSxPQUFPcFAsUUFBUSxDQUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4Qjs7VUFDQXNDLE9BQUEsQ0FBQStCLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q007VUFBUCxJQUF1Qm1JLFlBT3RCO1VBUEQsV0FBdUJBLFlBQVk7WUFDbENBLFlBQUEscUJBQWlCO1lBQ2pCQSxZQUFBLHNDQUFrQztZQUNsQ0EsWUFBQSxvQ0FBZ0M7WUFDaENBLFlBQUEsb0NBQWdDO1lBQ2hDQSxZQUFBLHFCQUFpQjtZQUNqQkEsWUFBQSx1QkFBbUI7VUFDcEIsQ0FBQyxFQVBzQkEsWUFBWSxLQUFBbEssT0FBQSxDQUFBa0ssWUFBQSxHQUFaQSxZQUFZOzs7Ozs7Ozs7OztVQ2ZuQzs7VUFFQTNELE1BQUEsQ0FBQW1ILGNBQUEsQ0FBQTFOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTJFLE1BQUEsQ0FBQW1ILGNBQUEsQ0FBQTFOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTJFLE1BQUEsQ0FBQW1ILGNBQUEsQ0FBQTFOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTJFLE1BQUEsQ0FBQW1ILGNBQUEsQ0FBQTFOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTJFLE1BQUEsQ0FBQW1ILGNBQUEsQ0FBQTFOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTJFLE1BQUEsQ0FBQW1ILGNBQUEsQ0FBQTFOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTJFLE1BQUEsQ0FBQW1ILGNBQUEsQ0FBQTFOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKTztVQUFQLElBQXVCc0ksWUFPdEI7VUFQRCxXQUF1QkEsWUFBWTtZQUNsQ0EsWUFBQSxxQkFBaUI7WUFDakJBLFlBQUEsc0NBQWtDO1lBQ2xDQSxZQUFBLG9DQUFnQztZQUNoQ0EsWUFBQSxvQ0FBZ0M7WUFDaENBLFlBQUEscUJBQWlCO1lBQ2pCQSxZQUFBLHVCQUFtQjtVQUNwQixDQUFDLEVBUHNCQSxZQUFZLEtBQUFsSyxPQUFBLENBQUFrSyxZQUFBLEdBQVpBLFlBQVk7Ozs7Ozs7Ozs7O1VDQW5DOztVQUVBM0QsTUFBQSxDQUFBbUgsY0FBQSxDQUFBMU4sT0FBQTtZQUNBNEIsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119