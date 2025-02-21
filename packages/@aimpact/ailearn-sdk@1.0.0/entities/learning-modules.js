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
        hash: 1020844673,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9zdWdnZXN0aW9ucyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIkl0ZW0iLCJhcGkiLCJzdWdnZXN0aW9ucyIsInNwZWNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwib2JqZWN0aXZlIiwiX19pbnN0YW5jZUlkIiwic3RydWN0dXJlIiwidW5wdWJsaXNoZWQiLCJyZWFkeVRvVGVzdCIsInByb2dyZXNzRGF0YSIsImZpbHRlciIsIm91dHB1dCIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZ2VudCIsInByb2dyZXNzRmllbGRzIiwibmFtZSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJTdWdnZXN0aW9ucyIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm1hdGVyaWFscyIsInNldFBhcmVudHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlIiwibm90ZXMiLCJyZWxhdGVkIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzYXZlQ2hhbmdlcyIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiZSIsImxvZyIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsIkVycm9yIiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzZXRMYXlvdXQiLCJsYXlvdXQiLCJzZXR0aW5ncyIsInByb3BlcnR5IiwiZHJhZnQiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJwcm9wcyIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlTcGVjcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZW50cmllcyIsIk9iamVjdCIsImZpZWxkcyIsImtleSIsIm9wdGlvbmFsIiwiaXNBcnJheVZhbGlkIiwiYXJyYXkiLCJrZXlzIiwiZmllbGQiLCJ2YWxpZGF0ZVN0cnVjdHVyZSIsImNvbmZpZyIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50IiwiX3ZhbGlkYXRlRGF0YSIsInN0cnVjdHVyZU5hbWUiLCJlbGVtZW50IiwiZ3JvdXBlZCIsImZpZWxkU3RydWN0dXJlIiwic2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicmVxdWlyZWQiLCJyb2xlIiwibGFiZWwiLCJwb3NpdGlvbiIsIm9iamVjdGl2ZXMiLCJhZHZhbmNlZCIsImluc3RydWN0aW9ucyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImF0dGFjaG1lbnRzIiwibXVsdGlwbGUiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiX3pvZCIsInF1ZXN0aW9ucyIsInByb2dyZXNzIiwieiIsIm9iamVjdCIsInF1ZXN0aW9uIiwic3RyaW5nIiwibWluIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJudW1iZXIiLCJpbnQiLCJub25uZWdhdGl2ZSIsInJlZmluZSIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwic3RyIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwicHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsImxvYWRBdWRpZW5jZSIsImdldEF1ZGllbmNlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkxlYXJuaW5nTW9kdWxlcyIsImF1ZGllbmNlcyIsImFyY2hpdmVkIiwiTGVhcm5pbmdNb2R1bGVQcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwibG9hZCIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJfZXJyb3IiLCJjbG9uZSIsImRlbGV0ZUl0ZW0iLCJ0ZXh0IiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImRyYWZ0SWQiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsImVycm9yVGV4dCIsInNwbGl0Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9iYXNlLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29tbXVuaXR5LnRzIiwiL2NyZWRpdHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvZHJhZnQudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyIsIi9saXN0LnRzIiwiL3Byb3ZpZGVycy9pbmRleC50cyIsIi9wcm92aWRlcnMvbGVhcm5pbmctbW9kdWxlcy50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi90eXBlcy9hY3Rpdml0aWVzLnRzIiwiL293bmVyLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9kcmFmdHMudHMiLCIvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUtYmFzZS50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiLCIvdGltZVN0YW1wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBOzs7Ozs7Ozs7VUFTTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsY0FBZTtZQUVmLENBQUFDLEdBQUksR0FBbUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2hELElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztZQUNqRTtZQUVBLENBQUFDLFdBQVk7WUFDWkMsWUFBWUMsTUFBTSxFQUFFQyxJQUFLO2NBQ3hCLEtBQUssRUFBRTtj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