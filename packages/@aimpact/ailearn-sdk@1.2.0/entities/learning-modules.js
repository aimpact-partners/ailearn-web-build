System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/entities/item", "@beyond-js/reactive@2.0.5/model", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/config", "zod@3.24.4", "@beyond-js/reactive@2.0.5/entities/collection"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, LearningModuleBase, LearningModules, CommunityLearningModule, Credits, Draft, LearningModule, ModuleListItem, ActivityType, IActivityListItem, IOwnerData, IActivityDraftData, ISuggestionResponse, IModuleListItem, ILearningModuleDraft, ICreditsConsumptionsData, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, IEvaluationActivity0, __beyond_pkg, hmr;
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
    ISpokenActivity: void 0,
    IEvaluationActivity0: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_1 = _beyondJsReactive205EntitiesItem;
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_3 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk154Session) {
      dependency_4 = _aimpactChatSdk154Session;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_5 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_6 = _aimpactAilearnSdk120Config;
    }, function (_zod2) {
      dependency_7 = _zod2;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_8 = _beyondJsReactive205EntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.4.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-sdk/startup', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/http-suite/api', dependency_5], ['@aimpact/ailearn-sdk/config', dependency_6], ['zod', dependency_7], ['@beyond-js/reactive/entities/collection', dependency_8]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/
      ims.set('./activities/collection', {
        hash: 3099723449,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
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
              return ['content-theory', 'debate', 'multiple-choice', 'character-talk', 'spoken', 'hand-written', 'written', 'free-conversation'];
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
        hash: 2161391276,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
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
                //@ts-ignore
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
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 1824373940,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _startup = require("@aimpact/ailearn-sdk/startup");
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
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 2520513949,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 91455299,
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
          ActivitySpecsFactory.register('free-conversation', _contentTheory.ContentTheoryActivitySpecs);
          ActivitySpecsFactory.register('multiple-choice', _multipleChoice.MultipleChoiceActivitySpecs);
          ActivitySpecsFactory.register('spoken', _spoken.SpokenActivitySpecs);
          ActivitySpecsFactory.register('hand-written', _spoken.SpokenActivitySpecs);
          ActivitySpecsFactory.register('written', _spoken.SpokenActivitySpecs);
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/multiple-choice
      **************************************************/

      ims.set('./activities/specs/multiple-choice', {
        hash: 3018563661,
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
        hash: 618343526,
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
        hash: 1564677649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
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
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 2225456919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
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
        hash: 618611988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleAudience = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 27328805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleBase = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
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
        hash: 2362661404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
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
        hash: 773585045,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityLearningModule = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
          var _collection = require("./activities/collection");
          var _credits = require("./credits");
          var _providers = require("./providers");
          var _suggestions = require("./suggestions");
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
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
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
        hash: 4277097651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        hash: 1041458194,
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
              owner: undefined,
              credits: undefined
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
        hash: 1401106681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _error = require("./error");
          var _item = require("@beyond-js/reactive/entities/item");
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
        hash: 572354641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleListItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
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
        hash: 657911054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class ModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            } //
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const data = await this.#api.delete(`/modules/drafts/${this.#parent.id}`);
              return data;
            }
            async deleteItem() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const data = await this.#api.delete(`/modules/${this.#parent.id}`);
              return data;
            }
            async publish(specs = {}) {
              if (this.#parent.type === 'draft') return this.saveDraft(specs);
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
            }
            async saveDraft(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/modules/drafts`, specs);
              if (!response.status) {
                //throw new Error('error saving module draft');
              }
              return response;
            }
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              // return this.#api.post(`/assignments/${this.#parent.id}/coins/consume`, {});
              return this.#api.post(`/modules/drafts/${this.#parent.id}/coins/consume`, {});
            }
            async clone({
              moduleId,
              ownerId,
              entity,
              type
            }) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/modules/drafts/${this.#parent.id}/image`, {
                url
              });
              return response;
            }
            getAudience = async language => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.post(`/modules/drafts/${draftId}/activities/${activityId}/testing`, {});
              return data;
            };
            getActivityTesting = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
            async archive() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/modules/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response;
            }
            async restore() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 3888892872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class LearningModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            list = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 122768128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Suggestions extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.reactiveProps(['type', 'content']);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async generate(specs) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 2425380602,
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
            ActivityType["Image"] = "image";
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
      }, {
        "im": "./types/module-activities",
        "from": "IEvaluationActivity0",
        "name": "IEvaluationActivity0"
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
        (require || prop === 'IEvaluationActivity0') && _export("IEvaluationActivity0", IEvaluationActivity0 = require ? require('./types/module-activities').IEvaluationActivity0 : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJfYXBpIiwiX3N1Z2dlc3Rpb25zIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiSXRlbSIsImFwaSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJzdHJ1Y3R1cmUiLCJ1bnB1Ymxpc2hlZCIsInJlYWR5VG9UZXN0IiwicHJvZ3Jlc3NEYXRhIiwiZmlsdGVyIiwib3V0cHV0IiwiZ2VuZXJhbCIsInZhbGlkYXRlRGF0YSIsImFnZW50IiwicHJvZ3Jlc3NGaWVsZHMiLCJuYW1lIiwiZW50aXR5Iiwic2V0dGluZ3MiLCJsYXlvdXQiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsIm1hdGVyaWFscyIsInNldFBhcmVudHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlIiwibm90ZXMiLCJyZWxhdGVkIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzYXZlQ2hhbmdlcyIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiZSIsImxvZyIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsIkVycm9yIiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzZXRMYXlvdXQiLCJwcm9wZXJ0eSIsImV4cG9ydHMiLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZmllbGRzIiwia2V5Iiwib3B0aW9uYWwiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImtleXMiLCJmaWVsZCIsInZhbGlkYXRlU3RydWN0dXJlIiwiY29uZmlnIiwiYWdlbnREYXRhIiwiZ2VuZXJhbERhdGEiLCJhZHZhbmNlZERhdGEiLCJlbXB0eSIsImlzRW1wdHkiLCJiYW5kIiwiZ2V0TGVhcm5pbmdNb2R1bGUiLCJnZXRQYXJlbnQiLCJfdmFsaWRhdGVEYXRhIiwic3RydWN0dXJlTmFtZSIsImVsZW1lbnQiLCJncm91cGVkIiwiZmllbGRTdHJ1Y3R1cmUiLCJzY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyZXF1aXJlZCIsInJvbGUiLCJsYWJlbCIsInBvc2l0aW9uIiwib2JqZWN0aXZlcyIsImFkdmFuY2VkIiwiaW5zdHJ1Y3Rpb25zIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiYXR0YWNobWVudHMiLCJtdWx0aXBsZSIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJfem9kIiwicXVlc3Rpb25zIiwicHJvZ3Jlc3MiLCJ6Iiwib2JqZWN0IiwicXVlc3Rpb24iLCJzdHJpbmciLCJtaW4iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIm51bWJlciIsImludCIsIm5vbm5lZ2F0aXZlIiwicmVmaW5lIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsImRhc2hib2FyZCIsImxpbmsiLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsIm93bmVyIiwiYXVkaWVuY2UiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwibG9hZEF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiYXJjaGl2ZWQiLCJMZWFybmluZ01vZHVsZVByb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJsb2FkIiwiX2NyZWRpdHMiLCJDb21tdW5pdHlMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiQ3JlZGl0cyIsImluaXRpYWxpemUiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJfZXJyb3IiLCJjbG9uZSIsImRlbGV0ZUl0ZW0iLCJ0ZXh0IiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImRyYWZ0SWQiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsImVycm9yVGV4dCIsInNwbGl0Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9iYXNlLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29tbXVuaXR5LnRzIiwiL2NyZWRpdHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvZHJhZnQudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyIsIi9saXN0LnRzIiwiL3Byb3ZpZGVycy9pbmRleC50cyIsIi9wcm92aWRlcnMvbGVhcm5pbmctbW9kdWxlcy50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi90eXBlcy9hY3Rpdml0aWVzLnRzIiwiL293bmVyLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9kcmFmdHMudHMiLCIvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUtYmFzZS50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiLCIvdGltZVN0YW1wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBOzs7Ozs7Ozs7VUFTTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsY0FBZTtZQUVmLENBQUFDLEdBQUksR0FBbUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2hELElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsR0FBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQ0UsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUssQ0FBQztZQUNqRTtZQUVBLE9BQU9DLFlBQVks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