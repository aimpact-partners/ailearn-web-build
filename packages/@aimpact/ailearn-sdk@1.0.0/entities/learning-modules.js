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
        hash: 936132720,
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
                    label: 'characterRole',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwic2F2ZUNoYW5nZXMiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsImUiLCJsb2ciLCIjZ2V0U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJFcnJvciIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2V0TGF5b3V0IiwibGF5b3V0Iiwic2V0dGluZ3MiLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImZpZWxkcyIsIk9iamVjdCIsImtleXMiLCJmaWVsZCIsInZhbGlkYXRlU3RydWN0dXJlIiwiZW50cmllcyIsInByb3BlcnR5IiwiY29uZmlnIiwib3B0aW9uYWwiLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsInN0cnVjdHVyZU5hbWUiLCJlbGVtZW50IiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyZXF1aXJlZCIsInJvbGUiLCJsYWJlbCIsInBvc2l0aW9uIiwib2JqZWN0aXZlcyIsImFkdmFuY2VkIiwiaW5zdHJ1Y3Rpb25zIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiYXR0YWNobWVudHMiLCJtdWx0aXBsZSIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsIl96b2QiLCJkYXNoYm9hcmQiLCJsaW5rIiwic2NoZW1hIiwieiIsIm9iamVjdCIsInN0cmluZyIsIkxlYXJuaW5nTW9kdWxlQXVkaWVuY2UiLCJfcHJvdmlkZXJzIiwiTGVhcm5pbmdNb2R1bGVCYXNlIiwib3duZXIiLCJhdWRpZW5jZSIsInByb3ZpZGVyIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJnZXRBdWRpZW5jZSIsIl9sZWFybmluZ01vZHVsZXMiLCJMZWFybmluZ01vZHVsZXMiLCJhdWRpZW5jZXMiLCJhcmNoaXZlZCIsIkxlYXJuaW5nTW9kdWxlUHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZSIsImxvYWQiLCJfY3JlZGl0cyIsIkNvbW11bml0eUxlYXJuaW5nTW9kdWxlIiwic2F2ZWQiLCJpbnN0YW5jZXMiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJDcmVkaXRzIiwiaW5pdGlhbGl6ZSIsInB1Ymxpc2giLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsIm1vZHVsZSIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwiY29tcGxldGVkIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInRvdGFsQWN0aXZpdGllcyIsInNldFRpbWVvdXQiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwiX2Vycm9yIiwiX2F1ZGllbmNlIiwiY2xvbmUiLCJkZWxldGVJdGVtIiwidGV4dCIsInJlc3RvcmUiLCJhcmNoaXZlIiwiTW9kdWxlTGlzdEl0ZW0iLCJsaXN0IiwiZ2V0RHJhZnQiLCJvd25lcklkIiwiZW5kcG9pbnRzIiwiY29tbXVuaXR5Iiwib3JnYW5pemF0aW9uSWQiLCJ0ZXN0QWN0aXZpdHkiLCJkcmFmdElkIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwicm91dGUiLCJkZWxldGVJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJlcnJvclRleHQiLCJzcGxpdCJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXVkaWVuY2UudHMiLCIvYmFzZS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiLCIvbGlzdC50cyIsIi9wcm92aWRlcnMvaW5kZXgudHMiLCIvcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvdHlwZXMvYWN0aXZpdGllcy50cyIsIi9vd25lci50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLWJhc2UudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIiwiL3RpbWVTdGFtcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFFQSxDQUFBQyxXQUFZO1lBQ1pDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSztjQUN4QixLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUMsQ0FBQVosY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFFLFNBQVNBLENBQUNGLE1BQU07Y0FDZixJQUFJLENBQUMsQ0FBQVgsY0FBZSxHQUFHVyxNQUFNO1lBQzlCO1lBRUFHLFFBQVFBLENBQUE7Y0FDUCxNQUFNQyxJQUFJ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Q2xFLFFBQVEsQ0FBQ3NGLEtBQUssQ0FBQ2tLLElBQUksQ0FBQztjQUMxRDs7OztjQUlBLE9BQU94UCxRQUFRLENBQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCOztVQUNBc0MsT0FBQSxDQUFBK0IsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDTTtVQUFQLElBQXVCc0ksWUFPdEI7VUFQRCxXQUF1QkEsWUFBWTtZQUNsQ0EsWUFBQSxxQkFBaUI7WUFDakJBLFlBQUEsc0NBQWtDO1lBQ2xDQSxZQUFBLG9DQUFnQztZQUNoQ0EsWUFBQSxvQ0FBZ0M7WUFDaENBLFlBQUEscUJBQWlCO1lBQ2pCQSxZQUFBLHVCQUFtQjtVQUNwQixDQUFDLEVBUHNCQSxZQUFZLEtBQUFySyxPQUFBLENBQUFxSyxZQUFBLEdBQVpBLFlBQVk7Ozs7Ozs7Ozs7O1VDZm5DOztVQUVBN0QsTUFBQSxDQUFBc0gsY0FBQSxDQUFBOU4sT0FBQTtZQUNBNEIsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBNEUsTUFBQSxDQUFBc0gsY0FBQSxDQUFBOU4sT0FBQTtZQUNBNEIsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBNEUsTUFBQSxDQUFBc0gsY0FBQSxDQUFBOU4sT0FBQTtZQUNBNEIsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBNEUsTUFBQSxDQUFBc0gsY0FBQSxDQUFBOU4sT0FBQTtZQUNBNEIsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBNEUsTUFBQSxDQUFBc0gsY0FBQSxDQUFBOU4sT0FBQTtZQUNBNEIsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBNEUsTUFBQSxDQUFBc0gsY0FBQSxDQUFBOU4sT0FBQTtZQUNBNEIsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBNEUsTUFBQSxDQUFBc0gsY0FBQSxDQUFBOU4sT0FBQTtZQUNBNEIsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pPO1VBQVAsSUFBdUJ5SSxZQU90QjtVQVBELFdBQXVCQSxZQUFZO1lBQ2xDQSxZQUFBLHFCQUFpQjtZQUNqQkEsWUFBQSxzQ0FBa0M7WUFDbENBLFlBQUEsb0NBQWdDO1lBQ2hDQSxZQUFBLG9DQUFnQztZQUNoQ0EsWUFBQSxxQkFBaUI7WUFDakJBLFlBQUEsdUJBQW1CO1VBQ3BCLENBQUMsRUFQc0JBLFlBQVksS0FBQXJLLE9BQUEsQ0FBQXFLLFlBQUEsR0FBWkEsWUFBWTs7Ozs7Ozs7Ozs7VUNBbkM7O1VBRUE3RCxNQUFBLENBQUFzSCxjQUFBLENBQUE5TixPQUFBO1lBQ0E0QixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=