System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/config", "zod@3.25.67", "@beyond-js/reactive@2.1.1/entities/collection"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_1 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_3 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_4 = _aimpactChatSdk155Session;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_5 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_6 = _aimpactAilearnSdk120Config;
    }, function (_zod2) {
      dependency_7 = _zod2;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_8 = _beyondJsReactive211EntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.6.3"]]);
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
        hash: 1279763395,
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
              return ['content-theory', 'debate', 'multiple-choice', 'character-talk', 'spoken', 'hand-written', 'written', 'free-conversation', 'exercise'];
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
        hash: 232364619,
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
                    type: 'textarea',
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

      /*******************************************
      INTERNAL MODULE: ./activities/specs/exercise
      *******************************************/

      ims.set('./activities/specs/exercise', {
        hash: 4120180563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExerciseActivitySpecs = void 0;
          var _base = require("./base");
          class ExerciseActivitySpecs extends _base.ActivitySpecs {
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
                    type: 'textarea',
                    required: true
                  },
                  exercise: {
                    position: 2,
                    type: 'textarea',
                    required: true
                  },
                  objectives: {
                    position: 3,
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
                    position: 4,
                    type: 'textarea',
                    optional: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions', 'topic', 'exercise']
              });
            }
          }
          exports.ExerciseActivitySpecs = ExerciseActivitySpecs;
        }
      });

      /******************************************
      INTERNAL MODULE: ./activities/specs/factory
      ******************************************/

      ims.set('./activities/specs/factory', {
        hash: 412877767,
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
          var _exercise = require("./exercise");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          var _freeConversation = require("./free-conversation");
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
          ActivitySpecsFactory.register('free-conversation', _freeConversation.FreeConversationActivitySpecs);
          ActivitySpecsFactory.register('exercise', _exercise.ExerciseActivitySpecs);
          ActivitySpecsFactory.register('multiple-choice', _multipleChoice.MultipleChoiceActivitySpecs);
          ActivitySpecsFactory.register('spoken', _spoken.SpokenActivitySpecs);
          ActivitySpecsFactory.register('hand-written', _spoken.SpokenActivitySpecs);
          ActivitySpecsFactory.register('written', _spoken.SpokenActivitySpecs);
        }
      });

      /****************************************************
      INTERNAL MODULE: ./activities/specs/free-conversation
      ****************************************************/

      ims.set('./activities/specs/free-conversation', {
        hash: 1109991533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FreeConversationActivitySpecs = void 0;
          var _base = require("./base");
          class FreeConversationActivitySpecs extends _base.ActivitySpecs {
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
                  requestedTask: {
                    position: 1,
                    type: 'textarea',
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
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions', 'requestedTask']
              });
            }
          }
          exports.FreeConversationActivitySpecs = FreeConversationActivitySpecs;
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
        hash: 338252156,
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
            ActivityType["Exercise"] = "exercise";
            ActivityType["FreeConversation"] = "free-conversation";
            ActivityType["HandWritten"] = "hand-written";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJfYXBpIiwiX3N1Z2dlc3Rpb25zIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiSXRlbSIsImFwaSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJzdHJ1Y3R1cmUiLCJ1bnB1Ymxpc2hlZCIsInJlYWR5VG9UZXN0IiwicHJvZ3Jlc3NEYXRhIiwiZmlsdGVyIiwib3V0cHV0IiwiZ2VuZXJhbCIsInZhbGlkYXRlRGF0YSIsImFnZW50IiwicHJvZ3Jlc3NGaWVsZHMiLCJuYW1lIiwiZW50aXR5Iiwic2V0dGluZ3MiLCJsYXlvdXQiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsIm1hdGVyaWFscyIsInNldFBhcmVudHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlIiwibm90ZXMiLCJyZWxhdGVkIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzYXZlQ2hhbmdlcyIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiZSIsImxvZyIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsIkVycm9yIiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzZXRMYXlvdXQiLCJwcm9wZXJ0eSIsImV4cG9ydHMiLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZmllbGRzIiwia2V5Iiwib3B0aW9uYWwiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImtleXMiLCJmaWVsZCIsInZhbGlkYXRlU3RydWN0dXJlIiwiY29uZmlnIiwiYWdlbnREYXRhIiwiZ2VuZXJhbERhdGEiLCJhZHZhbmNlZERhdGEiLCJlbXB0eSIsImlzRW1wdHkiLCJiYW5kIiwiZ2V0TGVhcm5pbmdNb2R1bGUiLCJnZXRQYXJlbnQiLCJfdmFsaWRhdGVEYXRhIiwic3RydWN0dXJlTmFtZSIsImVsZW1lbnQiLCJncm91cGVkIiwiZmllbGRTdHJ1Y3R1cmUiLCJzY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyZXF1aXJlZCIsInJvbGUiLCJsYWJlbCIsInBvc2l0aW9uIiwib2JqZWN0aXZlcyIsImFkdmFuY2VkIiwiaW5zdHJ1Y3Rpb25zIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiYXR0YWNobWVudHMiLCJtdWx0aXBsZSIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiRXhlcmNpc2VBY3Rpdml0eVNwZWNzIiwiZXhlcmNpc2UiLCJfY2hhcmFjdGVyVGFsayIsIl9jaGF0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2V4ZXJjaXNlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9mcmVlQ29udmVyc2F0aW9uIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJGcmVlQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJyZXF1ZXN0ZWRUYXNrIiwiX3pvZCIsInF1ZXN0aW9ucyIsInByb2dyZXNzIiwieiIsIm9iamVjdCIsInF1ZXN0aW9uIiwic3RyaW5nIiwibWluIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJudW1iZXIiLCJpbnQiLCJub25uZWdhdGl2ZSIsInJlZmluZSIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwic3RyIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwicHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsImxvYWRBdWRpZW5jZSIsImdldEF1ZGllbmNlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkxlYXJuaW5nTW9kdWxlcyIsImF1ZGllbmNlcyIsImFyY2hpdmVkIiwiTGVhcm5pbmdNb2R1bGVQcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwibG9hZCIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwiaXNSZWFjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsInNldFRpbWVvdXQiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwiX2Vycm9yIiwiY2xvbmUiLCJkZWxldGVJdGVtIiwidGV4dCIsInJlc3RvcmUiLCJhcmNoaXZlIiwiTW9kdWxlTGlzdEl0ZW0iLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJsaXN0IiwiZ2V0RHJhZnQiLCJvd25lcklkIiwib3JnYW5pemF0aW9uSWQiLCJ0ZXN0QWN0aXZpdHkiLCJkcmFmdElkIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwicm91dGUiLCJkZWxldGVJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJlcnJvclRleHQiLCJzcGxpdCJdLCJzb3VyY2VzIjpbIi8vYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiLy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiLy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2UudHMiLCIvL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi8vYWN0aXZpdGllcy9zcGVjcy9jb250ZW50LXRoZW9yeS50cyIsIi8vYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvL2FjdGl2aXRpZXMvc3BlY3MvZXhlcmNpc2UudHMiLCIvL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi8vYWN0aXZpdGllcy9zcGVjcy9mcmVlLWNvbnZlcnNhdGlvbi50cyIsIi8vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiLy9hY3Rpdml0eS10eXBlcy50cy8iLCIvL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvL2F1ZGllbmNlLnRzLyIsIi8vYmFzZS50cy8iLCIvL2NvbGxlY3Rpb24udHMvIiwiLy9jb21tdW5pdHkudHMvIiwiLy9jcmVkaXRzL2luZGV4LnRzIiwiLy90eXBlcy50cy8iLCIvL2RyYWZ0LnRzLyIsIi8vZXJyb3IudHMvIiwiLy9pdGVtLnRzLyIsIi8vbGlzdC50cy8iLCIvL3Byb3ZpZGVycy9pbmRleC50cyIsIi8vcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiLy90eXBlcy9hY3Rpdml0aWVzLnRzIiwiLy9vd25lci50cy8iLCIvL2RyYWZ0LWltcHJvdmVtZW50cy50cy8iLCIvL2RyYWZ0cy50cy8iLCIvL2luZGV4LnRzLyIsIi8vaW50ZXJmYWNlcy50cy8iLCIvL2xlYXJuaW5nLW1vZHVsZS1iYXNlLnRzLyIsIi8vbGVhcm5pbmctbW9kdWxlLnRzLyIsIi8vdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiLCIvL3RpbWVTdGFtcC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBOzs7Ozs7Ozs7VUFTTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUks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