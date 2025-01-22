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
        hash: 1837188359,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsIkFjdGl2aXR5IiwidXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsInJlc3BvbnNlIiwiYWRkIiwidHlwZSIsIm1hbnVhbCIsImxlbmd0aCIsImxhbmd1YWdlIiwiaW5zdGFuY2VJZCIsInNhdmVEcmFmdCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInJlbW92ZSIsIndhcm4iLCJkZWxldGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfYXBpIiwiX3N1Z2dlc3Rpb25zIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiSXRlbSIsImFwaSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJzdHJ1Y3R1cmUiLCJ1bnB1Ymxpc2hlZCIsInJlYWR5VG9UZXN0IiwicHJvZ3Jlc3NEYXRhIiwiZmlsdGVyIiwib3V0cHV0IiwicGljdHVyZSIsImdlbmVyYWwiLCJ2YWxpZGF0ZURhdGEiLCJhZHZhbmNlZCIsImFnZW50IiwiZW50aXR5IiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJTdWdnZXN0aW9ucyIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm1hdGVyaWFscyIsInNldFBhcmVudHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiI2dldFN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0IiwiRXJyb3IiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0Iiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2F2ZUNoYW5nZXMiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJwcm9wcyIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJlIiwiZ2VuZXJhdGVBdWRpbyIsIlByb21pc2UiLCJhbGwiLCJhdWRpb3MiLCJkZWxldGVBdWRpbyIsImRlbGV0ZUF1ZGlvcyIsInVuZGVmaW5lZCIsIkFjdGl2aXR5U3BlY3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlzQXJyYXlWYWxpZCIsImFycmF5IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkIiwidmFsaWRhdGVTdHJ1Y3R1cmUiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJjb25maWciLCJvcHRpb25hbCIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50Iiwic3RydWN0dXJlTmFtZSIsInJlcXVpcmVkIiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyb2xlIiwiaW5zdHJ1Y3Rpb25zIiwib2JqZWN0aXZlcyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImF0dGFjaG1lbnRzIiwibXVsdGlwbGUiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyIiwiY29ycmVjdCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwic3RyIiwiaW5jbHVkZXMiLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJfem9kIiwiZGFzaGJvYXJkIiwibGluayIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX2F1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwicHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsImxvYWRBdWRpZW5jZSIsImF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJtb2R1bGUiLCJMZWFybmluZ01vZHVsZSIsImxvYWQiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiTGVhcm5pbmdNb2R1bGVQcm92aWRlciIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJhc3NpZ25tZW50cyIsImF2YWlsYWJsZSIsImFjdGl2aXRpZXMiLCJDcmVkaXRzIiwiaW5pdGlhbGl6ZSIsInB1Ymxpc2giLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsInRvdGFsIiwiY29uc3VtZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIkRyYWZ0IiwiY29tcGxldGVkIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInRvdGFsQWN0aXZpdGllcyIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImxpc3QiLCJnZXREcmFmdCIsImRlbGV0ZUl0ZW0iLCJjbG9uZSIsIm93bmVySWQiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImRyYWZ0SWQiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsInRleHQiLCJlcnJvclRleHQiLCJzcGxpdCIsIm1lc3NhZ2UiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9iYXNlLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29tbXVuaXR5LnRzIiwiL2NyZWRpdHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvZHJhZnQudHMiLCIvaXRlbS50cyIsIi9wcm92aWRlcnMvaW5kZXgudHMiLCIvcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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