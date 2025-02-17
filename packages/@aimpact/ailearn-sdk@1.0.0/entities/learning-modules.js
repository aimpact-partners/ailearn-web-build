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
        hash: 657196946,
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
                this.trigger('activity.generated');
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
        hash: 2801595804,
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
                if (structure.type === 'array' && !!!property?.length) band = false;
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
        hash: 2475556435,
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
                    position: 1,
                    type: 'textarea',
                    required: true
                  },
                  objectives: {
                    position: 2,
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
                    position: 3,
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
        hash: 90895495,
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
                    position: 1,
                    type: 'input',
                    required: true
                  },
                  objectives: {
                    position: 2,
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
                    position: 5,
                    advanced: true,
                    type: 'textarea',
                    optional: true
                  },
                  attachments: {
                    position: 3,
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
        hash: 1547337869,
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
                  role: {
                    type: 'textarea',
                    required: true,
                    position: 1
                  },
                  subject: {
                    type: 'textarea',
                    required: true,
                    position: 2
                  },
                  objectives: {
                    position: 3,
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
                    position: 4,
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
        hash: 4279331830,
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
                  task: {
                    type: 'textarea'
                  }
                },
                agent: {
                  assessment: {
                    type: 'textarea'
                  },
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
        hash: 4088214993,
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
            set(data) {
              // console.log(3, items);
              if (!Array.isArray(data.items)) {
                console.warn('se esta asignando assigments sin dato', data, this);
                return;
              }
              this.setItems(data.items);
              this.items.forEach(item => {
                this.#classrooms.set(item.classroom.id, item);
              });
            }
            setItems(items) {
              super.setItems(items);
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
        hash: 232158251,
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
            #archived;
            get archived() {
              return this.#archived;
            }
            constructor(args = {
              archived: false
            }) {
              super({
                entity: 'LearningModule',
                provider: _learningModules.LearningModuleProvider,
                item: _item.LearningModule,
                ...args
              });
              this.#archived = args.archived;
            }
            async load(specs) {
              const response = await super.load(specs);
              return response;
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
        hash: 3077486376,
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
          /*bundle */ //your code here
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
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'ia', 'language', 'objective', 'public', 'playground', 'target', 'duration', 'type', 'types', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'activities', {
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
            restore() {
              return this.provider.restore();
            }
            archive() {
              return this.provider.archive();
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
        hash: 2265123674,
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
            async archive() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/modules/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response;
            }
            async restore() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/modules/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response;
            }
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /********************************************
      INTERNAL MODULE: ./providers/learning-modules
      ********************************************/

      ims.set('./providers/learning-modules', {
        hash: 2707556446,
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
              if (this.#parent.archived) {
                const {
                  data
                } = await this.#api.get(`/modules/archived`, specs);
                return data?.items ?? [];
              }
              if (specs?.route === 'community') {
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
        hash: 3556353232,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsImUiLCJsb2ciLCIjZ2V0U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJFcnJvciIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2F2ZUNoYW5nZXMiLCJzZXRMYXlvdXQiLCJsYXlvdXQiLCJzZXR0aW5ncyIsImRyYWZ0IiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwicHJvcHMiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZ2VuZXJhdGVBdWRpbyIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsInVuZGVmaW5lZCIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50Iiwic3RydWN0dXJlTmFtZSIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicmVxdWlyZWQiLCJyb2xlIiwicG9zaXRpb24iLCJvYmplY3RpdmVzIiwiYWR2YW5jZWQiLCJpbnN0cnVjdGlvbnMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJfY2hhcmFjdGVyVGFsayIsIl9jaGF0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsInJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJjdG9yIiwiY3JlYXRlIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInN0ciIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsIl96b2QiLCJkYXNoYm9hcmQiLCJsaW5rIiwic2NoZW1hIiwieiIsIm9iamVjdCIsInN0cmluZyIsIkxlYXJuaW5nTW9kdWxlQXVkaWVuY2UiLCJfcHJvdmlkZXJzIiwiTGVhcm5pbmdNb2R1bGVCYXNlIiwib3duZXIiLCJhdWRpZW5jZSIsInByb3ZpZGVyIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJhcmNoaXZlZCIsIkxlYXJuaW5nTW9kdWxlUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsImxvYWQiLCJfY3JlZGl0cyIsIkNvbW11bml0eUxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJDcmVkaXRzIiwiaW5pdGlhbGl6ZSIsInB1Ymxpc2giLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsIm1vZHVsZSIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwiY29tcGxldGVkIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInRvdGFsQWN0aXZpdGllcyIsInNldFRpbWVvdXQiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwiX2Vycm9yIiwiX2F1ZGllbmNlIiwiY2xvbmUiLCJkZWxldGVJdGVtIiwidGV4dCIsInJlc3RvcmUiLCJhcmNoaXZlIiwiTW9kdWxlTGlzdEl0ZW0iLCJsaXN0IiwiZ2V0RHJhZnQiLCJvd25lcklkIiwiZW5kcG9pbnRzIiwiY29tbXVuaXR5Iiwib3JnYW5pemF0aW9uSWQiLCJ0ZXN0QWN0aXZpdHkiLCJkcmFmdElkIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwicm91dGUiLCJkZWxldGVJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJlcnJvclRleHQiLCJzcGxpdCJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXVkaWVuY2UudHMiLCIvYmFzZS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiLCIvbGlzdC50cyIsIi9wcm92aWRlcnMvaW5kZXgudHMiLCIvcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvdHlwZXMvYWN0aXZpdGllcy50cyIsIi9vd25lci50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLWJhc2UudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIiwiL3RpbWVTdGFtcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QixLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUMsQ0FBQVosY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFFLFNBQVNBLENBQUNGLE1BQU07Y0FDZixJQUFJLENBQUMsQ0FBQVgsY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFHLFFBQVFBLENBQUE7Y0FDUCxNQUFNQyxJQUFJLEdBQTBCLEVBQUU7Y0FFdEMs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