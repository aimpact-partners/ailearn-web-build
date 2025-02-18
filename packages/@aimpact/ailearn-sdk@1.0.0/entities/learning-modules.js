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
        hash: 3231864825,
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
                console.log(11, notes, objective, related);
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
        hash: 2553854634,
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
                if (structure.type === 'array' && property.length > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwibG9nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwic2F2ZUNoYW5nZXMiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsImUiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJFcnJvciIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2V0TGF5b3V0IiwibGF5b3V0Iiwic2V0dGluZ3MiLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImZpZWxkcyIsIk9iamVjdCIsImtleXMiLCJmaWVsZCIsInZhbGlkYXRlU3RydWN0dXJlIiwiZW50cmllcyIsInByb3BlcnR5IiwiY29uZmlnIiwib3B0aW9uYWwiLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsInN0cnVjdHVyZU5hbWUiLCJlbGVtZW50IiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyZXF1aXJlZCIsInJvbGUiLCJwb3NpdGlvbiIsIm9iamVjdGl2ZXMiLCJhZHZhbmNlZCIsImluc3RydWN0aW9ucyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImF0dGFjaG1lbnRzIiwibXVsdGlwbGUiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyIiwiY29ycmVjdCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwic3RyIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJfem9kIiwiZGFzaGJvYXJkIiwibGluayIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsIm93bmVyIiwiYXVkaWVuY2UiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwibG9hZEF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiYXJjaGl2ZWQiLCJMZWFybmluZ01vZHVsZVByb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJsb2FkIiwiX2NyZWRpdHMiLCJDb21tdW5pdHlMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiQ3JlZGl0cyIsImluaXRpYWxpemUiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJzZXRUaW1lb3V0IiwiY29uc3VtZUNvaW5zIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJzYXZlUGljdHVyZSIsInBlcmZvcm1hbmNlIiwibm93IiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsIl9lcnJvciIsIl9hdWRpZW5jZSIsImNsb25lIiwiZGVsZXRlSXRlbSIsInRleHQiLCJyZXN0b3JlIiwiYXJjaGl2ZSIsIk1vZHVsZUxpc3RJdGVtIiwibGlzdCIsImdldERyYWZ0Iiwib3duZXJJZCIsImVuZHBvaW50cyIsImNvbW11bml0eSIsIm9yZ2FuaXphdGlvbklkIiwidGVzdEFjdGl2aXR5IiwiZHJhZnRJZCIsImdldEFjdGl2aXR5VGVzdGluZyIsInJvdXRlIiwiZGVsZXRlSXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwiZXJyb3JUZXh0Iiwic3BsaXQiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2Jhc2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXQudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jb250ZW50LXRoZW9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2RlYmF0ZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvYWN0aXZpdHktdHlwZXMudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2F1ZGllbmNlLnRzIiwiL2Jhc2UudHMiLCIvY29sbGVjdGlvbi50cyIsIi9jb21tdW5pdHkudHMiLCIvY3JlZGl0cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9kcmFmdC50cyIsIi9lcnJvci50cyIsIi9pdGVtLnRzIiwiL2xpc3QudHMiLCIvcHJvdmlkZXJzL2luZGV4LnRzIiwiL3Byb3ZpZGVycy9sZWFybmluZy1tb2R1bGVzLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL3R5cGVzL2FjdGl2aXRpZXMudHMiLCIvb3duZXIudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS1iYXNlLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyIsIi90aW1lU3RhbXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRUE7Ozs7Ozs7OztVQVNNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0QsQ0FBQyxDQUFDRSxLQUFLLEdBQUdELENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1lBQ2pFO1lBRUEsQ0FBQUMsV0FBWTtZQUNaQyxZQUFZQyxNQUFNLEVBQUVDLElBQUs7Y0FDeEIsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDLENBQUFaLGNBQWUsR0FBR1csTUFBTTtZQUM5QjtZQUVBRSxTQUFTQSxDQUFDRixNQUFNO2NBQ2YsSUFBSSxDQUFDLENBQUFYLGNBQWUsR0FBR1csTUFBTTtZQUM5QjtZQUVBRyxRQUFRQSxDQUFBO2NBQ1AsTUFBTUMsSUFBSSxHQUEwQixF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