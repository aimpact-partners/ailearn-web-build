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
        hash: 2091479019,
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
              objective,
              related
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
                  notes,
                  related
                });
                await this.set(data);
                await this.specs.set(data);
                this.specs.saveChanges();
                this.saveChanges();
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
        hash: 1795834407,
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
                if (structure.type === 'array' && property?.length > 0) {
                  property.forEach(element => {
                    Object.keys(structure.fields).forEach(field => {
                      if (!element[field]) band = false;
                    });
                  });
                }
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
        hash: 2061921334,
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
              if (Array.isArray(data)) data = {
                items: data
              };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwic2F2ZUNoYW5nZXMiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsImUiLCJsb2ciLCIjZ2V0U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJFcnJvciIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2V0TGF5b3V0IiwibGF5b3V0Iiwic2V0dGluZ3MiLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImZpZWxkcyIsIk9iamVjdCIsImtleXMiLCJmaWVsZCIsInZhbGlkYXRlU3RydWN0dXJlIiwiZW50cmllcyIsInByb3BlcnR5IiwiY29uZmlnIiwib3B0aW9uYWwiLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsInN0cnVjdHVyZU5hbWUiLCJlbGVtZW50IiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyZXF1aXJlZCIsInJvbGUiLCJwb3NpdGlvbiIsIm9iamVjdGl2ZXMiLCJhZHZhbmNlZCIsImluc3RydWN0aW9ucyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImF0dGFjaG1lbnRzIiwibXVsdGlwbGUiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyIiwiY29ycmVjdCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwic3RyIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJfem9kIiwiZGFzaGJvYXJkIiwibGluayIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsIm93bmVyIiwiYXVkaWVuY2UiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwibG9hZEF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiYXJjaGl2ZWQiLCJMZWFybmluZ01vZHVsZVByb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJsb2FkIiwiX2NyZWRpdHMiLCJDb21tdW5pdHlMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiQ3JlZGl0cyIsImluaXRpYWxpemUiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJzZXRUaW1lb3V0IiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJzYXZlUGljdHVyZSIsInBlcmZvcm1hbmNlIiwibm93IiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsIl9lcnJvciIsIl9hdWRpZW5jZSIsImNsb25lIiwiZGVsZXRlSXRlbSIsInRleHQiLCJyZXN0b3JlIiwiYXJjaGl2ZSIsIk1vZHVsZUxpc3RJdGVtIiwibGlzdCIsImdldERyYWZ0Iiwib3duZXJJZCIsImVuZHBvaW50cyIsImNvbW11bml0eSIsIm9yZ2FuaXphdGlvbklkIiwidGVzdEFjdGl2aXR5IiwiZHJhZnRJZCIsImdldEFjdGl2aXR5VGVzdGluZyIsInJvdXRlIiwiZGVsZXRlSXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwiZXJyb3JUZXh0Iiwic3BsaXQiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2Jhc2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXQudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jb250ZW50LXRoZW9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2RlYmF0ZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvYWN0aXZpdHktdHlwZXMudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2F1ZGllbmNlLnRzIiwiL2Jhc2UudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9lcnJvci50cyIsIi9pdGVtLnRzIiwiL2xpc3QudHMiLCIvcHJvdmlkZXJzL2luZGV4LnRzIiwiL3Byb3ZpZGVycy9sZWFybmluZy1tb2R1bGVzLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL3R5cGVzL2FjdGl2aXRpZXMudHMiLCIvb3duZXIudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS1iYXNlLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyIsIi90aW1lU3RhbXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRUE7Ozs7Ozs7OztVQVNNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0QsQ0FBQyxDQUFDRSxLQUFLLEdBQUdELENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1lBQ2pFO1lBRUEsQ0FBQUMsV0FBWTtZQUNaQyxZQUFZQyxNQUFNLEVBQUVDLElBQUs7Y0FDeEIsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDLENBQUFaLGNBQWUsR0FBR1csTUFBTTtZQUM5QjtZQUVBRSxTQUFTQSxDQUFDRixNQUFNO2NBQ2YsSUFBSSxDQUFDLENBQUFYLGNBQWUsR0FBR1csTUFBTTtZQUM5QjtZQUVBRyxRQUFRQSxDQUFBO2NBQ1AsTUFBTUMsSUFBSSxHQUEwQixF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LENBQUM7Y0FDMUQ7Ozs7Y0FJQSxPQUFPdlAsUUFBUSxDQUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4Qjs7VUFDQXNDLE9BQUEsQ0FBQStCLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q007VUFBUCxJQUF1QnFJLFlBT3RCO1VBUEQsV0FBdUJBLFlBQVk7WUFDbENBLFlBQUEscUJBQWlCO1lBQ2pCQSxZQUFBLHNDQUFrQztZQUNsQ0EsWUFBQSxvQ0FBZ0M7WUFDaENBLFlBQUEsb0NBQWdDO1lBQ2hDQSxZQUFBLHFCQUFpQjtZQUNqQkEsWUFBQSx1QkFBbUI7VUFDcEIsQ0FBQyxFQVBzQkEsWUFBWSxLQUFBcEssT0FBQSxDQUFBb0ssWUFBQSxHQUFaQSxZQUFZOzs7Ozs7Ozs7OztVQ2ZuQzs7VUFFQTVELE1BQUEsQ0FBQXFILGNBQUEsQ0FBQTdOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTRFLE1BQUEsQ0FBQXFILGNBQUEsQ0FBQTdOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTRFLE1BQUEsQ0FBQXFILGNBQUEsQ0FBQTdOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTRFLE1BQUEsQ0FBQXFILGNBQUEsQ0FBQTdOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTRFLE1BQUEsQ0FBQXFILGNBQUEsQ0FBQTdOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTRFLE1BQUEsQ0FBQXFILGNBQUEsQ0FBQTdOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQTRFLE1BQUEsQ0FBQXFILGNBQUEsQ0FBQTdOLE9BQUE7WUFDQTRCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKTztVQUFQLElBQXVCd0ksWUFPdEI7VUFQRCxXQUF1QkEsWUFBWTtZQUNsQ0EsWUFBQSxxQkFBaUI7WUFDakJBLFlBQUEsc0NBQWtDO1lBQ2xDQSxZQUFBLG9DQUFnQztZQUNoQ0EsWUFBQSxvQ0FBZ0M7WUFDaENBLFlBQUEscUJBQWlCO1lBQ2pCQSxZQUFBLHVCQUFtQjtVQUNwQixDQUFDLEVBUHNCQSxZQUFZLEtBQUFwSyxPQUFBLENBQUFvSyxZQUFBLEdBQVpBLFlBQVk7Ozs7Ozs7Ozs7O1VDQW5DOztVQUVBNUQsTUFBQSxDQUFBcUgsY0FBQSxDQUFBN04sT0FBQTtZQUNBNEIsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119