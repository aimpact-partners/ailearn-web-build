System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/reactive@0.0.1/entities/item", "zod@3.24.1", "@aimpact/reactive@0.0.1/entities/collection"], function (_export, _context) {
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
    }, function (_zod2) {
      dependency_6 = _zod2;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_7 = _aimpactReactive001EntitiesCollection;
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
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/config', dependency_1], ['@aimpact/reactive/model', dependency_2], ['@aimpact/http-suite/api', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['zod', dependency_6], ['@aimpact/reactive/entities/collection', dependency_7]]);
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
        hash: 759141158,
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
        hash: 4176915960,
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
        hash: 878034549,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsInByb2dyZXNzRmllbGRzIiwibmFtZSIsImVudGl0eSIsInNldHRpbmdzIiwibGF5b3V0IiwicHJvcGVydGllcyIsInZhbHVlIiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIlN1Z2dlc3Rpb25zIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsInJlbGF0ZWQiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsInNhdmVDaGFuZ2VzIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwibG9nIiwiI2dldFN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwiRXJyb3IiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInNldExheW91dCIsInByb3BlcnR5IiwiZHJhZnQiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJwcm9wcyIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlTcGVjcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZW50cmllcyIsIk9iamVjdCIsImZpZWxkcyIsImtleSIsIm9wdGlvbmFsIiwiaXNBcnJheVZhbGlkIiwiYXJyYXkiLCJrZXlzIiwiZmllbGQiLCJ2YWxpZGF0ZVN0cnVjdHVyZSIsImNvbmZpZyIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50IiwiX3ZhbGlkYXRlRGF0YSIsInN0cnVjdHVyZU5hbWUiLCJlbGVtZW50IiwiZ3JvdXBlZCIsImZpZWxkU3RydWN0dXJlIiwic2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicmVxdWlyZWQiLCJyb2xlIiwibGFiZWwiLCJwb3NpdGlvbiIsIm9iamVjdGl2ZXMiLCJhZHZhbmNlZCIsImluc3RydWN0aW9ucyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImF0dGFjaG1lbnRzIiwibXVsdGlwbGUiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiX3pvZCIsInF1ZXN0aW9ucyIsInByb2dyZXNzIiwieiIsIm9iamVjdCIsInF1ZXN0aW9uIiwic3RyaW5nIiwibWluIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJudW1iZXIiLCJpbnQiLCJub25uZWdhdGl2ZSIsInJlZmluZSIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwic3RyIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwicHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsImxvYWRBdWRpZW5jZSIsImdldEF1ZGllbmNlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkxlYXJuaW5nTW9kdWxlcyIsImF1ZGllbmNlcyIsImFyY2hpdmVkIiwiTGVhcm5pbmdNb2R1bGVQcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwibG9hZCIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJfZXJyb3IiLCJjbG9uZSIsImRlbGV0ZUl0ZW0iLCJ0ZXh0IiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImRyYWZ0SWQiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsImVycm9yVGV4dCIsInNwbGl0Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9iYXNlLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29tbXVuaXR5LnRzIiwiL2NyZWRpdHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvZHJhZnQudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyIsIi9saXN0LnRzIiwiL3Byb3ZpZGVycy9pbmRleC50cyIsIi9wcm92aWRlcnMvbGVhcm5pbmctbW9kdWxlcy50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi90eXBlcy9hY3Rpdml0aWVzLnRzIiwiL293bmVyLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9kcmFmdHMudHMiLCIvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUtYmFzZS50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiLCIvdGltZVN0YW1wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBOzs7Ozs7Ozs7VUFTTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsY0FBZTtZQUVmLENBQUFDLEdBQUksR0FBbUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2hELElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztZQUNqRTtZQUVBLENBQUFDLFdBQVk7WUFDWkMsWUFBWUMsTUFBTSxFQUFFQyxJQUFLO2NBQ3hCLEtBQUssRUFBRTtj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