System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/entities/collection", "zod@3.24.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, LearningModuleBase, LearningModules, CommunityLearningModule, Credits, Draft, LearningModule, IActivityDraftData, ISuggestionResponse, ILearningModuleDraft, IOwnerData, ICreditsConsumptionsData, ActivityType, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    ActivityTypes: void 0,
    LearningModuleBase: void 0,
    LearningModules: void 0,
    CommunityLearningModule: void 0,
    Credits: void 0,
    Draft: void 0,
    LearningModule: void 0,
    IActivityDraftData: void 0,
    ISuggestionResponse: void 0,
    ILearningModuleDraft: void 0,
    IOwnerData: void 0,
    ICreditsConsumptionsData: void 0,
    ActivityType: void 0,
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
        hash: 2084378752,
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
              return this.items.every(item => item.state === 'completed');
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
              // Clear existing timeout if there is one
              if (this.#saveTimeout) {
                clearTimeout(this.#saveTimeout);
              }
              console.log('----');
              this.#saveTimeout = setTimeout(() => this.#learningModule.saveDraft(), 500);
              // await this.#parent.saveDraft();
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
        hash: 1299774693,
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
            get progressData() {
              const output = [!!this.title, !!this.description, !!this.picture];
              if (this.specs.structure.general) output.push(this.specs.validateData('general'));
              if (this.specs.structure.advanced) output.push(this.specs.validateData('advanced'));
              if (this.specs.structure.agent) output.push(this.specs.validateData('agent'));
              return output;
            }
            constructor(learningModule, args = {}) {
              super({
                ...args,
                entity: 'LearningModuleActivity',
                properties: ['id', 'type', 'title', 'description', 'order', 'types', 'duration', 'picture', 'language', 'pictureSuggestions', 'type', {
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
              return data;
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
              if (!properties.id) properties.id = this.instanceId;
              return properties;
            }
          }
          exports.Activity = Activity;
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/materials/index
      ********************************************/

      ims.set('./activities/materials/index', {
        hash: 3549396762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ActivityMaterials extends _model.ReactiveModel {
            #api;
            #parent;
            #learningModule;
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
            setParents = (parent, learningModule) => {
              this.#parent = parent;
              this.#learningModule = learningModule;
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
            async generateContent(notes) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/article`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  objective: this.#parent.specs.objective,
                  notes
                });
                this.set(data);
                await this.#learningModule.saveDraft({
                  credits: data.credits
                });
                this.#learningModule.trigger('credits.change');
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
            async generate(name, notes) {
              this.fetching = true;
              if (name === 'article') return this.generateContent(notes);
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/${name}`;
              const {
                status,
                data
              } = await this.#api.post(url, {
                notes
              });
              if (!status) {
                throw new Error('error generating materials');
              }
              this.set(data);
              await this.#learningModule.saveDraft(data);
              this.fetching = false;
              this.#learningModule.trigger('credits.change');
              return data;
            }
            async generateAudio(materials = []) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`;
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
              await Promise.all([this.#learningModule.set({
                credits: data.credits
              }), this.set({
                audios: {
                  ...this.audios,
                  ...data.audios
                }
              })]);
              this.#learningModule.trigger('credits.change');
              this.trigger('audios.changed');
              return data;
            }
            async deleteAudio(materials = []) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`;
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
              // this.#learningModule.trigger('credits.change');
              return data;
            }
            async deleteAudios() {
              this.set({
                audios: undefined
              });
              return await this.#learningModule.saveDraft();
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/base
      ***************************************/

      ims.set('./activities/specs/base', {
        hash: 195489921,
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
                if (structure.required && !property) band = false;
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
        hash: 784023792,
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
                    type: 'input',
                    required: true
                  },
                  instructions: {
                    type: 'textarea',
                    optional: true
                  },
                  objectives: {
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
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
        hash: 528000415,
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
                    type: 'input',
                    required: true
                  },
                  objectives: {
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
                    advanced: true,
                    type: 'textarea',
                    optional: true
                  },
                  attachments: {
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
        hash: 1632253397,
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
                  subject: {
                    type: 'input',
                    required: true
                  },
                  role: {
                    type: 'textarea',
                    required: true
                  },
                  instructions: {
                    type: 'textarea',
                    optional: true
                  },
                  objectives: {
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
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
        hash: 469617681,
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
                if (str) {
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
        hash: 2388494673,
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
                  task: 'textarea'
                },
                agent: {
                  assessment: 'textarea',
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
        hash: 387346656,
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
            set(items) {
              this.setItems(items);
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
        hash: 1042129113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _zod = require("zod");
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
        hash: 2655467967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleBase = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _audience = require("./audience");
          var _providers = require("./providers");
          /*bundle */
          class LearningModuleBase extends _item.Item {
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
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'ia', 'language', 'objective', 'public', 'playground', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual', {
                  name: 'audience',
                  value: _audience.LearningModuleAudience
                }]
              }); // super call ends.
            }
            async loadAudience(language) {
              const audience = await this.provider.getAudience(language);
              return audience;
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
        hash: 798722325,
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
        hash: 1705262902,
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
                properties: ['totalActivities', {
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
              objective
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

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1500162253,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
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
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'ia', 'language', 'objective', 'public', 'playground', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', {
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
          }
          exports.LearningModule = LearningModule;
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
        hash: 647971666,
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
        hash: 2813416681,
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
        "im": "./types/drafts",
        "from": "IActivityDraftData",
        "name": "IActivityDraftData"
      }, {
        "im": "./types/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
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
        (require || prop === 'IActivityDraftData') && _export("IActivityDraftData", IActivityDraftData = require ? require('./types/drafts').IActivityDraftData : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./types/index').ISuggestionResponse : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsImxlbmd0aCIsImxhbmd1YWdlIiwiaW5zdGFuY2VJZCIsInNhdmVEcmFmdCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInJlbW92ZSIsIndhcm4iLCJkZWxldGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfYXBpIiwiX3N1Z2dlc3Rpb25zIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiSXRlbSIsImFwaSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJzdHJ1Y3R1cmUiLCJ1bnB1Ymxpc2hlZCIsInByb2dyZXNzRGF0YSIsIm91dHB1dCIsInBpY3R1cmUiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWR2YW5jZWQiLCJhZ2VudCIsImVudGl0eSIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsIkVycm9yIiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInNhdmVDaGFuZ2VzIiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwicHJvcHMiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZSIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImZpZWxkcyIsIk9iamVjdCIsImtleXMiLCJmaWVsZCIsInZhbGlkYXRlU3RydWN0dXJlIiwiZW50cmllcyIsInByb3BlcnR5IiwiY29uZmlnIiwib3B0aW9uYWwiLCJhZ2VudERhdGEiLCJnZW5lcmFsRGF0YSIsImFkdmFuY2VkRGF0YSIsImVtcHR5IiwiaXNFbXB0eSIsImJhbmQiLCJnZXRMZWFybmluZ01vZHVsZSIsImdldFBhcmVudCIsInN0cnVjdHVyZU5hbWUiLCJyZXF1aXJlZCIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicm9sZSIsImluc3RydWN0aW9ucyIsIm9iamVjdGl2ZXMiLCJDaGF0QWN0aXZpdHlTcGVjcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eVNwZWNzIiwidG9waWMiLCJhdHRhY2htZW50cyIsIm11bHRpcGxlIiwiRGViYXRlQWN0aXZpdHlTcGVjcyIsInN1YmplY3QiLCJfY2hhcmFjdGVyVGFsayIsIl9jaGF0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsInJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJjdG9yIiwiY3JlYXRlIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInN0ciIsImluY2x1ZGVzIiwicmVsYXRlZCIsImdlbmVyYXRlQW5zd2VycyIsImFzc2Vzc21lbnQiLCJjcml0ZXJpYSIsIl9tb2R1bGVBY3Rpdml0aWVzIiwiVHlwZXMiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZSIsIkNvbnRlbnRUaGVvcnkiLCJhaUNvbnRlbnQiLCJkZXBlbmRlbmNpZXMiLCJEZWJhdGUiLCJDaGFyYWN0ZXJUYWxrIiwiTXVsdGlwbGVDaG9pY2UiLCJTcG9rZW4iLCJBY3Rpdml0eVR5cGVzIiwiX2NvbGxlY3Rpb24iLCJBc3NpZ25tZW50cyIsIkNvbGxlY3Rpb24iLCJBc3NpZ25tZW50IiwiY2xhc3Nyb29tcyIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJhc3NpZ25tZW50IiwiX3pvZCIsImRhc2hib2FyZCIsImxpbmsiLCJzY2hlbWEiLCJ6Iiwib2JqZWN0Iiwic3RyaW5nIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9hdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJzYXZlZCIsImluc3RhbmNlcyIsInByb3ZpZGVyIiwiTW9kdWxlUHJvdmlkZXIiLCJsb2FkQXVkaWVuY2UiLCJhdWRpZW5jZSIsImdldEF1ZGllbmNlIiwibW9kdWxlIiwiTGVhcm5pbmdNb2R1bGUiLCJsb2FkIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkxlYXJuaW5nTW9kdWxlcyIsImF1ZGllbmNlcyIsIkxlYXJuaW5nTW9kdWxlUHJvdmlkZXIiLCJfY3JlZGl0cyIsIkNvbW11bml0eUxlYXJuaW5nTW9kdWxlIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiQ3JlZGl0cyIsImluaXRpYWxpemUiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiZ2V0RHJhZnQiLCJkZWxldGVJdGVtIiwiY2xvbmUiLCJvd25lcklkIiwiZW5kcG9pbnRzIiwiY29tbXVuaXR5Iiwib3JnYW5pemF0aW9uSWQiLCJ0ZXN0QWN0aXZpdHkiLCJkcmFmdElkIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwicm91dGUiLCJkZWxldGVJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJ0ZXh0IiwiZXJyb3JUZXh0Iiwic3BsaXQiLCJtZXNzYWdlIiwiY29kZSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXVkaWVuY2UudHMiLCIvYmFzZS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXJzL2luZGV4LnRzIiwiL3Byb3ZpZGVycy9sZWFybmluZy1tb2R1bGVzLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2RyYWZ0cy50cyIsIi9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi90eXBlcy9tb2R1bGUtYWN0aXZpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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