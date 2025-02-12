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
        hash: 2180232910,
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
        hash: 4096869799,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsImUiLCJsb2ciLCIjZ2V0U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJFcnJvciIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2F2ZUNoYW5nZXMiLCJzZXRMYXlvdXQiLCJsYXlvdXQiLCJzZXR0aW5ncyIsImRyYWZ0IiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwicHJvcHMiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZ2VuZXJhdGVBdWRpbyIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsInVuZGVmaW5lZCIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50Iiwic3RydWN0dXJlTmFtZSIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicmVxdWlyZWQiLCJyb2xlIiwicG9zaXRpb24iLCJvYmplY3RpdmVzIiwiYWR2YW5jZWQiLCJpbnN0cnVjdGlvbnMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJfY2hhcmFjdGVyVGFsayIsIl9jaGF0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsInJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJjdG9yIiwiY3JlYXRlIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInN0ciIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsIl96b2QiLCJkYXNoYm9hcmQiLCJsaW5rIiwic2NoZW1hIiwieiIsIm9iamVjdCIsInN0cmluZyIsIkxlYXJuaW5nTW9kdWxlQXVkaWVuY2UiLCJfcHJvdmlkZXJzIiwiTGVhcm5pbmdNb2R1bGVCYXNlIiwib3duZXIiLCJhdWRpZW5jZSIsInByb3ZpZGVyIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJMZWFybmluZ01vZHVsZVByb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJfY3JlZGl0cyIsIkNvbW11bml0eUxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJDcmVkaXRzIiwiaW5pdGlhbGl6ZSIsInB1Ymxpc2giLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsImxvYWQiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJzZXRUaW1lb3V0IiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJzYXZlUGljdHVyZSIsInBlcmZvcm1hbmNlIiwibm93IiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsIl9lcnJvciIsIl9hdWRpZW5jZSIsImNsb25lIiwiZGVsZXRlSXRlbSIsInRleHQiLCJNb2R1bGVMaXN0SXRlbSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImRyYWZ0SWQiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsImVycm9yVGV4dCIsInNwbGl0Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9iYXNlLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29tbXVuaXR5LnRzIiwiL2NyZWRpdHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvZHJhZnQudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyIsIi9saXN0LnRzIiwiL3Byb3ZpZGVycy9pbmRleC50cyIsIi9wcm92aWRlcnMvbGVhcm5pbmctbW9kdWxlcy50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi90eXBlcy9hY3Rpdml0aWVzLnRzIiwiL293bmVyLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9kcmFmdHMudHMiLCIvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUtYmFzZS50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiLCIvdGltZVN0YW1wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBOzs7Ozs7Ozs7VUFTTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsY0FBZTtZQUVmLENBQUFDLEdBQUksR0FBbUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2hELElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztZQUNqRTtZQUVBLENBQUFDLFdBQVk7WUFDWkMsWUFBWUMsTUFBTSxFQUFFQyxJQUFLO2NBQ3hCLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBWixjQUFlLEdBQUdXLE1BQU07WUFDOUI7WUFFQUUsU0FBU0EsQ0FBQ0YsTUFBTTtjQUNmLElBQUksQ0FBQyxDQUFBWCxjQUFlLEdBQUdXLE1BQU07WUFDOUI7WUFFQUcsUUFBUUEsQ0FBQTtjQUNQLE1BQU1DLElBQUksR0FBMEIsRUFBRTtjQUV0QyxJQUFJLENBQUMsQ0FBQWQsR0FBSSxDQUFDZSxPQUFP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