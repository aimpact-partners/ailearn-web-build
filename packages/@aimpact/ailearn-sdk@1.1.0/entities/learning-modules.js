System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "zod@3.24.1", "@aimpact/reactive@0.0.1/entities/collection"], function (_export, _context) {
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
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_1 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_3 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_4 = _aimpactChatSdk141Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_5 = _aimpactHttpSuite001Api;
    }, function (_zod2) {
      dependency_6 = _zod2;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_7 = _aimpactReactive001EntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/entities/item', dependency_1], ['@aimpact/reactive/model', dependency_2], ['@aimpact/ailearn-sdk/config', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/http-suite/api', dependency_5], ['zod', dependency_6], ['@aimpact/reactive/entities/collection', dependency_7]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/
      ims.set('./activities/collection', {
        hash: 40390141,
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
            static isCollection = true;
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
              if (!data) return;
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
            getItemProperties() {
              const items = [];
              for (let item of this.items) {
                items.push(item.getProperties());
              }
              return items;
            }
          }
          exports.Activities = Activities;
        }
      });

      /*********************************
      INTERNAL MODULE: ./activities/item
      *********************************/

      ims.set('./activities/item', {
        hash: 135514160,
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
            get progressFields() {
              return [{
                name: 'title'
              }, {
                name: 'description'
              }, ...this.specs.progressFields];
            }
            constructor(learningModule, args = {}) {
              super({
                ...args,
                entity: 'LearningModuleActivity',
                settings: {
                  layout: 'main-chat-layout'
                },
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
            async setLayout(layout) {
              if (!['main-chat-layout', 'main-content-layout', 'full-content-layout'].includes(layout)) {
                console.warn('invalid layout', layout);
                return;
              }
              this.set({
                settings: {
                  layout
                }
              });
              await this.#learningModule.saveDraft();
              //  persist changes in memory
              this.trigger('activity.saved');
              this.fetching = false;
              console.log('layout set to', layout);
            }
            validateData(property) {
              if (this[property]) {
                return !!this[property];
              }
              return this.specs.validateData(property);
            }
          }
          exports.Activity = Activity;
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/materials/index
      ********************************************/

      ims.set('./activities/materials/index', {
        hash: 4142539919,
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
        hash: 3348416853,
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
            get progressFields() {
              const entries = Object.entries(this.structure);
              const fields = [];
              for (const [key, value] of entries) {
                if (key === 'grouped') continue;
                fields.push({
                  name: key,
                  optional: value.optional
                });
              }
              return fields;
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
            _validateData(structureName) {
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
            validateData(structureName) {
              let band = true;
              const structure = this.structure.grouped ? this.structure[structureName] : this.structure;
              if (!structure) return;
              Object.keys(structure).forEach(item => {
                const fieldStructure = structure[item];
                const property = this[item];
                if (['optional', 'attachments'].includes(item)) return;
                // Validar usando el esquema de Zod si está definido
                if (fieldStructure.schema) {
                  const result = fieldStructure.schema.safeParse(property);
                  if (!result.success) band = false;
                } else {
                  //old logic
                  if (fieldStructure.type === 'array' && !!!property?.length) band = false;
                  if (fieldStructure.type === 'array' && property?.length > 0) {
                    property.forEach(element => {
                      Object.keys(fieldStructure.fields).forEach(field => {
                        if (!element[field]) band = false;
                      });
                    });
                  }
                }
                if (!property) band = false;
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
        hash: 1833066880,
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
                /**
                 *   This is a flag to indicate that the fields are grouped and is used by validateData method
                 *  to know if the fields are grouped or not
                 */
                grouped: true,
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
                  optional: true,
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
        hash: 2219931835,
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
                grouped: true,
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
                  optional: true,
                  instructions: {
                    position: 5,
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
        hash: 788669142,
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
                grouped: true,
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
                  optional: true,
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
        hash: 890236426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _base = require("./base");
          var _zod = require("zod");
          class MultipleChoiceActivitySpecs extends _base.ActivitySpecs {
            ignoredProperties = ['objective', 'related'];
            get structure() {
              return {
                questions: {
                  required: true,
                  type: 'array',
                  progress: true,
                  schema: _zod.z.array(_zod.z.object({
                    question: _zod.z.string().min(1),
                    options: _zod.z.array(_zod.z.string().min(1)).min(1),
                    correctAnswer: _zod.z.number().int().nonnegative()
                  }).refine(data => data.correctAnswer < data.options.length)),
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
        hash: 2454268062,
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
                grouped: true,
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
        hash: 3792440397,
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
                properties: ['id', 'creator', 'owner', 'language', 'title', 'description', 'objective', 'picture', 'type', 'audience', ...properties]
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
        hash: 1657439539,
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
            #type = 'module';
            get type() {
              return this.#type;
            }
            constructor(args = {
              type: 'modules',
              archived: false
            }) {
              super({
                entity: 'LearningModule',
                provider: _learningModules.LearningModuleProvider,
                item: _item.LearningModule,
                ...args
              });
              this.#type = args.type;
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
        hash: 245711037,
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
              type = 'draft',
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
              this.type = type;
              this.#suggestions = new _suggestions.Suggestions();
              this.activities.setParent(this);
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
            }
            async saveDraft(specs = {
              owner: undefined
            }) {
              let {
                owner
              } = specs;
              const data = {
                ...this.getProperties(),
                ...specs,
                owner: owner ? owner?.isReactive ? owner.getProperties() : owner : this.owner,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.set({
                ...data
              });
              // const response = this.getProperties();
              const response = await super.publish();
              this.#saved = true;
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
        hash: 2821205923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _error = require("./error");
          var _item = require("@aimpact/reactive/entities/item");
          var _collection = require("./assignments/collection");
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
                }, 'manual',
                // {
                // 	name: 'audience',
                // 	value: LearningModuleAudience
                // },
                'audience']
              }); // super call ends.
              this.type = type;
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
        hash: 1759729232,
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
              const endpoints = {
                community: `/community/modules/${this.#parent.id}`,
                module: `/modules/${this.#parent.id}`,
                draft: `/modules/drafts/${this.#parent.id}`
              };
              const type = this.#parent.type ?? 'module';
              const {
                status,
                data
              } = await this.#api.get(endpoints[type]);
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
              if (this.#parent.type === 'draft') return this.saveDraft(specs);
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
        hash: 19116369,
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
              const endpoints = {
                archived: '/modules/archived',
                module: '/modules',
                draft: '/modules/drafts'
              };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9hcGkiLCJfc3VnZ2VzdGlvbnMiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJJdGVtIiwiYXBpIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsIl9faW5zdGFuY2VJZCIsInN0cnVjdHVyZSIsInVucHVibGlzaGVkIiwicmVhZHlUb1Rlc3QiLCJwcm9ncmVzc0RhdGEiLCJmaWx0ZXIiLCJvdXRwdXQiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWdlbnQiLCJwcm9ncmVzc0ZpZWxkcyIsIm5hbWUiLCJlbnRpdHkiLCJzZXR0aW5ncyIsImxheW91dCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJTdWdnZXN0aW9ucyIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm1hdGVyaWFscyIsInNldFBhcmVudHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlIiwibm90ZXMiLCJyZWxhdGVkIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzYXZlQ2hhbmdlcyIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiZSIsImxvZyIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsIkVycm9yIiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzZXRMYXlvdXQiLCJwcm9wZXJ0eSIsImV4cG9ydHMiLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZmllbGRzIiwia2V5Iiwib3B0aW9uYWwiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImtleXMiLCJmaWVsZCIsInZhbGlkYXRlU3RydWN0dXJlIiwiY29uZmlnIiwiYWdlbnREYXRhIiwiZ2VuZXJhbERhdGEiLCJhZHZhbmNlZERhdGEiLCJlbXB0eSIsImlzRW1wdHkiLCJiYW5kIiwiZ2V0TGVhcm5pbmdNb2R1bGUiLCJnZXRQYXJlbnQiLCJfdmFsaWRhdGVEYXRhIiwic3RydWN0dXJlTmFtZSIsImVsZW1lbnQiLCJncm91cGVkIiwiZmllbGRTdHJ1Y3R1cmUiLCJzY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyZXF1aXJlZCIsInJvbGUiLCJsYWJlbCIsInBvc2l0aW9uIiwib2JqZWN0aXZlcyIsImFkdmFuY2VkIiwiaW5zdHJ1Y3Rpb25zIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiYXR0YWNobWVudHMiLCJtdWx0aXBsZSIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJfem9kIiwicXVlc3Rpb25zIiwicHJvZ3Jlc3MiLCJ6Iiwib2JqZWN0IiwicXVlc3Rpb24iLCJzdHJpbmciLCJtaW4iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIm51bWJlciIsImludCIsIm5vbm5lZ2F0aXZlIiwicmVmaW5lIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsImRhc2hib2FyZCIsImxpbmsiLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsIm93bmVyIiwiYXVkaWVuY2UiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwibG9hZEF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiYXJjaGl2ZWQiLCJMZWFybmluZ01vZHVsZVByb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJsb2FkIiwiX2NyZWRpdHMiLCJDb21tdW5pdHlMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiQ3JlZGl0cyIsImluaXRpYWxpemUiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJfZXJyb3IiLCJjbG9uZSIsImRlbGV0ZUl0ZW0iLCJ0ZXh0IiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImRyYWZ0SWQiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsImVycm9yVGV4dCIsInNwbGl0Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9iYXNlLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29tbXVuaXR5LnRzIiwiL2NyZWRpdHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvZHJhZnQudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyIsIi9saXN0LnRzIiwiL3Byb3ZpZGVycy9pbmRleC50cyIsIi9wcm92aWRlcnMvbGVhcm5pbmctbW9kdWxlcy50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi90eXBlcy9hY3Rpdml0aWVzLnRzIiwiL293bmVyLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9kcmFmdHMudHMiLCIvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUtYmFzZS50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiLCIvdGltZVN0YW1wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBOzs7Ozs7Ozs7VUFTTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsY0FBZTtZQUVmLENBQUFDLEdBQUksR0FBbUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2hELElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztZQUNqRTtZQUVBLE9BQU9DLFlB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