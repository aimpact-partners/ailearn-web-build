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
        hash: 1490839685,
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
        hash: 2913357057,
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
            clone(args) {
              return this.provider.clone(args);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsImxlbmd0aCIsImxhbmd1YWdlIiwiaW5zdGFuY2VJZCIsInNhdmVEcmFmdCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInJlbW92ZSIsIndhcm4iLCJkZWxldGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfYXBpIiwiX3N1Z2dlc3Rpb25zIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiSXRlbSIsImFwaSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJzdHJ1Y3R1cmUiLCJ1bnB1Ymxpc2hlZCIsInJlYWR5VG9UZXN0IiwicHJvZ3Jlc3NEYXRhIiwiZmlsdGVyIiwib3V0cHV0IiwiZ2VuZXJhbCIsInZhbGlkYXRlRGF0YSIsImFkdmFuY2VkIiwiYWdlbnQiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInZhbHVlIiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIlN1Z2dlc3Rpb25zIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwibWF0ZXJpYWxzIiwic2V0UGFyZW50cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwic2V0Q3JlZGl0cyIsImNyZWRpdHMiLCJlIiwiI2dldFN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwiRXJyb3IiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsInN0YXR1cyIsImVycm9yIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInNhdmVDaGFuZ2VzIiwiZW1wdHlEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImludHJvZHVjdGlvbiIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwicHJvcHMiLCJnZXREYXRhIiwiYXVkaW9zTWFwIiwiZ2VuZXJhdGVDb250ZW50IiwiZ2VuZXJhdGVBdWRpbyIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsInVuZGVmaW5lZCIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50Iiwic3RydWN0dXJlTmFtZSIsInJlcXVpcmVkIiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyb2xlIiwiaW5zdHJ1Y3Rpb25zIiwib2JqZWN0aXZlcyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImF0dGFjaG1lbnRzIiwibXVsdGlwbGUiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyIiwiY29ycmVjdCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwic3RyIiwiaW5jbHVkZXMiLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJfem9kIiwiZGFzaGJvYXJkIiwibGluayIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX2F1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwicHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsImxvYWRBdWRpZW5jZSIsImF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJtb2R1bGUiLCJMZWFybmluZ01vZHVsZSIsImxvYWQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiTGVhcm5pbmdNb2R1bGVQcm92aWRlciIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJDcmVkaXRzIiwiaW5pdGlhbGl6ZSIsInB1Ymxpc2giLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwiY29tcGxldGVkIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInRvdGFsQWN0aXZpdGllcyIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNsb25lIiwibGlzdCIsImdldERyYWZ0IiwiZGVsZXRlSXRlbSIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImRyYWZ0SWQiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsInRleHQiLCJlcnJvclRleHQiLCJzcGxpdCIsIm1lc3NhZ2UiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9iYXNlLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29tbXVuaXR5LnRzIiwiL2NyZWRpdHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvZHJhZnQudHMiLCIvaXRlbS50cyIsIi9wcm92aWRlcnMvaW5kZXgudHMiLCIvcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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