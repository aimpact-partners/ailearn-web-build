System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.1.0/session", "uuid@9.0.1", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.1.0/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Credits, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, LearningModules, IActivities, Activity, ActivityTypes, LearningModule, ISuggestionResponse, __beyond_pkg, hmr;
  _export({
    Credits: void 0,
    ICoinsCreditData: void 0,
    ICoinModuleConsumptionData: void 0,
    ICoinAssignmentConsumptionData: void 0,
    ICreditsConsumptionsData: void 0,
    LearningModules: void 0,
    IActivities: void 0,
    Activity: void 0,
    ActivityTypes: void 0,
    LearningModule: void 0,
    ISuggestionResponse: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120Entities) {
      dependency_2 = _beyondJsReactive120Entities;
    }, function (_aimpactHttpSuite001Api) {
      dependency_3 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_4 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk110Session) {
      dependency_5 = _aimpactChatSdk110Session;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk110Api) {
      dependency_8 = _aimpactChatSdk110Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/learning-modules"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['uuid', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@aimpact/chat-sdk/api', dependency_8]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./coins/credits
      *******************************/
      ims.set('./coins/credits', {
        hash: 2132163029,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(...args) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /*****************************
      INTERNAL MODULE: ./coins/index
      *****************************/

      ims.set('./coins/index', {
        hash: 16742768,
        creator: function (require, exports) {
          "use strict";

          var _model = require("@beyond-js/reactive/model");
          class CoinModel extends _model.ReactiveModel {
            constructor(initialCoins) {
              super({
                coins: initialCoins,
                properties: ['coins']
              });
            }
            consume(amount) {}
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./coins/types/coins
      ***********************************/

      ims.set('./coins/types/coins', {
        hash: 2316480134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./collection/index
      **********************************/

      ims.set('./collection/index', {
        hash: 1826412075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _item = require("../item");
          var _provider = require("./provider");
          /*bundle*/
          class LearningModules extends _entities.Collection {
            // item = Lesson;
            constructor() {
              super({
                storeName: 'Modules',
                db: 'chat-api',
                item: _item.LearningModule,
                provider: _provider.ModulesProvider,
                localdb: false
              });
              this.orderBy = 'timeCreated';
              globalThis.collection = this;
            }
            async load(args) {
              const data = await super.load(args);
              this.triggerEvent('items.loaded');
              return data;
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /*************************************
      INTERNAL MODULE: ./collection/provider
      *************************************/

      ims.set('./collection/provider', {
        hash: 2976651968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModulesProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            list = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              if (specs.route === 'community') {
                const {
                  status,
                  data
                } = await this.#api.get(`/community/modules`);
                return {
                  status,
                  data: {
                    entries: data.items ?? []
                  }
                };
              }
              const {
                status,
                data
              } = await this.#api.get(`/modules${specs.route}`);
              return {
                status,
                data: {
                  entries: data.items ?? []
                }
              };
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
          }
          exports.ModulesProvider = ModulesProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./interfaces/activities
      ***************************************/

      ims.set('./interfaces/activities', {
        hash: 1670046334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./interfaces/draft-improvements
      ***********************************************/

      ims.set('./interfaces/draft-improvements', {
        hash: 2979653217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./interfaces/interfaces
      ***************************************/

      ims.set('./interfaces/interfaces', {
        hash: 3371199714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./interfaces/learning-module
      ********************************************/

      ims.set('./interfaces/learning-module', {
        hash: 3287821027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./introduction/element
      **************************************/

      ims.set('./introduction/element', {
        hash: 2604797932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IntroductionElement = void 0;
          var _model = require("@beyond-js/reactive/model");
          class IntroductionElement extends _model.ReactiveModel {
            #parent;
            properties = ['id', 'type', 'value'];
            constructor(element, parent) {
              super();
              this.#parent = parent;
              if (element.type === 'assessment') element.value = JSON.parse(element.value);
              this.set(element);
            }
          }
          exports.IntroductionElement = IntroductionElement;
        }
      });

      /************************************
      INTERNAL MODULE: ./introduction/index
      ************************************/

      ims.set('./introduction/index', {
        hash: 23176832,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Introduction = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/http-suite/api");
          var _element = require("./element");
          class Introduction extends _model.ReactiveModel {
            #parent;
            #api;
            #items = new Map();
            get items() {
              return this.#items;
            }
            constructor(parent) {
              super();
              this.#parent = parent;
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            async get(type) {
              return this.#items.get(type);
            }
            async load() {
              try {
                await this.isReady;
                if (!this.#parent.id) {
                  throw new Error('no LessonId to load introductions');
                }
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.get(`/chats/introductions/${this.#parent.id}`);
                if (!status) {
                  throw new Error('Introduction not found');
                }
                const elements = Object.values(data.elements);
                elements.forEach(element => {
                  const instance = new _element.IntroductionElement(element, this.#parent);
                  this.#items.set(element.type, instance);
                });
              } catch (e) {
                console.error('error loading introduction', e);
              }
            }
          }
          exports.Introduction = Introduction;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./introduction/interfaces
      *****************************************/

      ims.set('./introduction/interfaces', {
        hash: 4198660095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./item/activities/index
      ***************************************/

      ims.set('./item/activities/index', {
        hash: 4089825190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _suggestions = require("../../suggestions");
          var _item = require("./item");
          var _types = require("./types");
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
            #api;
            #parent;
            #suggestions;
            #items = new Map();
            properties = ['types', 'count'];
            get items() {
              return [...this.#items.values()].sort((a, b) => a.order - b.order);
            }
            get map() {
              return this.#items;
            }
            get availableTypes() {
              return _types.ActivityTypes.items;
            }
            get valid() {
              if (this.items.length === 0) return false;
              return this.items.every(item => item.state === 'completed');
            }
            constructor(learningModule) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
            }
            setItems(data) {
              data.forEach(async (activity, index) => {
                if (this.#items.has(activity.id)) {
                  const item = this.#items.get(activity.id);
                  item.set(activity);
                  return;
                }
                const instance = new _item.Activity({
                  ...activity,
                  index,
                  learningModule: this.#learningModule
                });
                this.#items.set(instance.id, instance);
              });
            }
            async set(data) {
              if (Array.isArray(data)) {
                return this.setItems(data);
              }
              if (!data) {
                console.trace('what', data);
              }
              await super.set(data);
              this.types = data.types;
            }
            remove(id) {
              if (!this.#items.has(id)) return;
              this.#items.delete(id);
              this.trigger('change');
              return true;
            }
            getItems() {
              const data = [];
              this.#items.forEach(item => data.push(item.getData()));
              return data;
            }
            clear() {
              this.#items.clear();
              this.trigger('change');
            }
            async add(type, manual = false) {
              const activity = new _item.Activity({
                type,
                manual,
                learningModule: this.#learningModule,
                order: this.items.length,
                language: this.#learningModule.language
              });
              await activity.isReady;
              this.#items.set(activity.id, activity);
              this.#learningModule.triggerEvent();
              return activity;
            }
            #saveTimeout;
            async reorder(items) {
              items.forEach((item, index) => {
                item.order = index;
              });
              // Clear existing timeout if there is one
              if (this.#saveTimeout) {
                clearTimeout(this.#saveTimeout);
              }
              this.#saveTimeout = setTimeout(() => this.#learningModule.saveDraft(), 500);
              // await this.#parent.saveDraft();
            }
          }
          exports.Activities = Activities;
        }
      });

      /**************************************
      INTERNAL MODULE: ./item/activities/item
      **************************************/

      ims.set('./item/activities/item', {
        hash: 3822647414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _suggestions = require("./../../suggestions");
          var _materials = require("./materials");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _factory = require("./specs/factory");
          var _types = require("./types");
          var _uuid = require("uuid");
          var _model = require("@beyond-js/reactive/model");
          /* bundle */
          class Activity extends _model.ReactiveModel {
            #properties = ['id', 'type', 'title', 'description', 'order', 'objective', 'types', 'duration', 'materials', 'specs', 'picture', 'language', 'pictureSuggestions', 'types'];
            #dataType;
            get dataType() {
              this.#dataType = _types.ActivityTypes.get(this.type);
              return this.#dataType;
            }
            #api;
            #learningModule;
            get learningModule() {
              return this.#learningModule;
            }
            #suggestions;
            #settingsType;
            #specs;
            get specs() {
              return this.#specs;
            }
            set specs(value) {
              this.#specs.set(value);
            }
            get defaultLanguage() {
              return this.#learningModule?.language;
            }
            #materials;
            get materials() {
              return this.#materials;
            }
            set materials(value) {
              this.#materials.set(value);
            }
            /**
             * Indicates if the activity is currently defined as a manual activity.
             */
            #manual;
            get manual() {
              return this.#manual;
            }
            set manual(value) {
              this.#manual = value;
            }
            get aiCompleted() {
              const type = _types.ActivityTypes.get(this.type);
              /**
               * If the type does not have AI content, then it is considered complete.
               */
              if (!type?.aiContent) return true;
              return type.aiContent.every(field => {
                if (['role', 'objective'].includes(field)) {
                  return !!this.specs[field];
                }
                return !!this[field];
              });
            }
            /**
             * Evaluates the current state of the object based on the completeness of its materials and specifications.
             * This method assesses both `materials` and `specs` derived from the object's settings type, determining
             * if they are fully defined and non-empty. The state is categorized into one of three outcomes:
             * 'empty', 'completed', or 'processing'.
             *
             * ## States Defined:
             * - `'empty'`: Both `materials` and `specs` are either not defined or contain no valid entries.
             * - `'completed'`: All entries in both `materials` and `specs` are valid and non-empty.
             * - `'processing'`: Partial completeness is detected, where not all, but at least one, entry in either
             *   `materials` or `specs` is valid and non-empty.
             *
             * ## Preconditions:
             * - The object must have `#settingsType` property that includes `materials` and `specs` arrays.
             *   The `materials` and `specs` can contain strings or objects with a `name` property.
             * - The object must have `#materials` and `#specs` private properties used to store the actual
             *   values for materials and specifications, which are matched against `#settingsType`.
             *
             * ## Note:
             * This method relies heavily on the internal structure and initialization of `#settingsType`,
             * `#materials`, and `#specs` private properties. Ensure these are correctly set before invoking
             * `get state()`.
             *
             * @returns {string} The current state of the object: 'empty', 'completed', or 'processing'.
             */
            get state() {
              const type = this.#settingsType;
              const materials = !type.materials ? [] : type.materials?.filter(item => item.required);
              const totalMaterials = materials.reduce((acc, item) => {
                const {
                  name
                } = item;
                if (Array.isArray(this.#materials[name])) {
                  return this.#materials[name].length ? acc + 1 : acc;
                }
                return [undefined, null, ''].includes(this.#materials[name]) ? acc : acc + 1;
              }, 0);
              // const totalSpecs = specs.reduce((acc, item) => {
              // 	if (Array.isArray(this.#specs[item])) {
              // 		return this.#specs[item].length ? acc + 1 : acc;
              // 	}
              // 	console.log(20, this.#specs);
              // 	return [undefined, null, ''].includes(this.#specs[item]) ? acc : acc + 1;
              // }, 0);
              const fields = !!this.title && !!this.description;
              if (fields && totalMaterials === 0 && !this.specs.valid) return 'processing'; // real state is 'empty'
              if (fields && totalMaterials === materials.length && this.specs.valid) return 'completed';
              return 'processing';
            }
            get prepared() {
              const type = this.#settingsType;
              const includesObjective = type.specs.includes('objective');
              return !!this.title && !!this.description && (!includesObjective || includesObjective && !!this.specs.objective);
            }
            constructor(data) {
              super();
              this.reactiveProps(['type', 'title', 'description', 'objective', 'duration', 'language']);
              this.#learningModule = data.learningModule;
              this.id = data.id ?? (0, _uuid.v4)();
              this.#specs = _factory.ActivitySpecsFactory.get(data.type, this.#learningModule, this);
              this.#settingsType = _types.ActivityTypes.get(data.type);
              this.#materials = new _materials.ActivityMaterials(this, this.#learningModule, this.#settingsType.materials);
              if (!this.#settingsType) throw new Error(`Activity type ${data.type} not found`);
              this.set(data);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#manual = data.manual ?? false;
              if (data.materials) {
                this.#materials.set(data.materials, true);
              }
              this.#suggestions = new _suggestions.Suggestions();
            }
            //@ts-ignore
            set(data) {
              if (data.materials) {
                this.#materials.set(data.materials);
              }
              this.#properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                if (property === 'activities' && !data[property]) {
                  return;
                }
                this[property] = data[property];
              });
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                if (property === 'specs') {
                  output[property] = this[property].getData();
                  return;
                }
                if (property === 'materials') {
                  if (typeof this.materials?.getData === 'function') {
                    output[property] = this[property]?.getData();
                  }
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            async generate(notes) {
              try {
                this.fetching = true;
                const data = await this.#getSuggestions({
                  type: 'activity',
                  id: this.#learningModule.id,
                  activity: this.type,
                  activityId: this.id,
                  language: this.language,
                  notes
                });
                await this.set(data);
                this.#learningModule.saveDraft();
                return data;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
            async #getSuggestions(data) {
              const response = await this.#suggestions.generate(data);
              await this.#learningModule.set({
                credits: response.data.credits
              });
              return response;
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
              await this.materials.clear();
              await this.#learningModule.saveDraft();
            }
            async save(specs) {
              await this.set(specs);
              return this.#learningModule.saveDraft();
            }
          }
          exports.Activity = Activity;
          0;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./item/activities/materials/index
      *************************************************/

      ims.set('./item/activities/materials/index', {
        hash: 3168598565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ActivityMaterials extends _model.ReactiveModel {
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            #items;
            get items() {
              return this.#items;
            }
            #api;
            #parent;
            #learningModule;
            #questions;
            #originalData = {
              article: '',
              synthesis: '',
              dyslexia: '',
              introduction: '',
              flashcard: {}
            };
            #emptyData = {
              article: '',
              synthesis: '',
              introduction: '',
              dyslexia: '',
              flashcard: {}
            };
            data = [];
            get empty() {
              const hasContent = this.properties.some(property => !!this[property]);
              return !hasContent;
            }
            constructor(parent, module, settings) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.properties = settings ? settings.map(item => typeof item === 'string' ? item : item.name) : [];
              this.#items = settings ?? [];
              this.#learningModule = module;
              this.#parent = parent;
            }
            getData() {
              return this.getProperties();
            }
            clear() {
              this.set(this.#emptyData, true);
            }
            async generate(name, notes) {
              try {
                this.fetching = true;
                if (name === 'article') return this.generateContent(notes);
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  type: this.#parent.type,
                  description: this.#parent.description,
                  article: this.article,
                  language: this.#parent.language,
                  objective: this.#parent.specs.objective,
                  notes
                });
                if (!status) {
                  throw new Error('error generating materials');
                }
                await Promise.all([this.set(data), this.#learningModule.saveDraft(), this.#learningModule.set({
                  credits: data.credits
                })]);
                this.#learningModule.trigger('credits.change');
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            /**
             *
             * @param data
             * @param persistedData  is used to overwrite values
             */
            set(data, persistedData = false) {
              if (persistedData) {
                this.#originalData = data;
              }
              this.data.push(data);
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
              this.triggerEvent();
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
                await this.#learningModule.set({
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
            async generateAudio(notes) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#learningModule.id}/activities/${this.#parent.id}/materials/audio`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {});
                if (!status) {
                  throw new Error('error generating article material');
                }
                await Promise.all([this.#learningModule.set({
                  credits: data.credits
                }), this.set(data)]);
                this.#learningModule.trigger('credits.change');
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./item/activities/specs/character-talk
      ******************************************************/

      ims.set('./item/activities/specs/character-talk', {
        hash: 1511272129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          class CharacterTalkActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['objective', 'character'];
            properties = ['objective', 'character'];
            get valid() {
              return !!this.objective && !!this.character;
            }
            constructor(parent) {
              super();
              this.reactiveProps(['character']);
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              const process = property => {
                if (!data.hasOwnProperty(property)) return;
                if (property !== 'questions') {
                  this[property] = data[property];
                  change = true;
                  return;
                }
                if (data[property]) change = true;
              };
              this.#properties.forEach(process);
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
          }
          exports.CharacterTalkActivitySpecs = CharacterTalkActivitySpecs;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./item/activities/specs/conversation
      ****************************************************/

      ims.set('./item/activities/specs/conversation', {
        hash: 1872403344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ConversationActivitySpecs extends _model.ReactiveModel {
            #parent;
            #properties = ['objective'];
            properties = ['objective'];
            get valid() {
              return !!this.objective;
            }
            constructor(parent) {
              super();
              this.reactiveProps(['kind', 'description', 'topics', 'criterias', 'activityId']);
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              const process = property => {
                if (!data.hasOwnProperty(property)) return;
                if (property !== 'questions') {
                  this[property] = data[property];
                  change = true;
                  return;
                }
                if (data[property]) change = true;
              };
              this.#properties.forEach(process);
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.#properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
          }
          exports.ConversationActivitySpecs = ConversationActivitySpecs;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./item/activities/specs/factory
      ***********************************************/

      ims.set('./item/activities/specs/factory', {
        hash: 3776427608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecsFactory = void 0;
          var _ = require("./");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ActivitySpecsFactory {
            static TYPES = {
              default: _.ActivitySpecs,
              'multiple-choice': _multipleChoice.MultipleChoiceActivitySpecs,
              spoken: _spoken.SpokenActivitySpecs
            };
            static get(type, learningModule, parent) {
              if (!this.TYPES[type]) return new this.TYPES.default(type, learningModule, parent);
              return new this.TYPES[type](type, learningModule, parent);
              // return new this.TYPES[type](parent);
            }
          }
          exports.ActivitySpecsFactory = ActivitySpecsFactory;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./item/activities/specs/index
      *********************************************/

      ims.set('./item/activities/specs/index', {
        hash: 1306715269,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat-sdk/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _types = require("../types");
          var _suggestions = require("../../../suggestions");
          class ActivitySpecs extends _model.ReactiveModel {
            #parent;
            properties = ['objective', 'instructions'];
            #api;
            suggestions;
            learningModule;
            get valid() {
              return this.isValid;
            }
            get isValid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                return acc;
              }, true);
            }
            get hasValues() {
              const has = this.properties.some(property => {
                if (property === 'objective') return false;
                if (this[property] && Array.isArray(this[property])) {
                  return this[property].length > 0;
                }
                return !!this[property];
              });
              return has;
            }
            get empty() {
              return !this.hasValues;
            }
            #type;
            get type() {
              return this.#type;
            }
            constructor(type, learningModule, parent) {
              super();
              const settings = _types.ActivityTypes.get(type);
              this.learningModule = learningModule;
              this.parent = parent;
              this.#type = type;
              if (!settings) {
                throw new Error(`Activity type ${type} not found`);
              }
              this.suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.properties = Array.isArray(settings.specs) ? settings.specs : [];
              this.#parent = parent;
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                if (!data.hasOwnProperty(property)) return;
                change = true;
                if (!data[property]) return;
                this[property] = data[property];
              });
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.properties.forEach(property => output[property] = this[property]);
              return output;
            }
            async generate(notes, specs) {
              this.fetching = true;
              try {
                const data = await this.suggestions.generate({
                  type: 'specifications',
                  id: this.learningModule.id,
                  activityId: this.#parent.id,
                  activity: this.type,
                  notes,
                  ...specs
                });
                await this.set(data);
                this.learningModule.saveDraft();
                this.trigger('specs.generated');
                return data;
              } catch (e) {
                this.fetching = false;
                throw e;
              }
            }
            clear() {
              this.properties.forEach(property => {
                /**
                 * the objective is generated by AI, so we don't want to clear it
                 */
                if (property === 'objective') return;
                this[property] = undefined;
              });
              this.trigger('change');
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./item/activities/specs/multiple-choice/index
      *************************************************************/

      ims.set('./item/activities/specs/multiple-choice/index', {
        hash: 3471700775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _ = require("../");
          var _questions = require("./questions");
          /**
           * criteria
           */
          class MultipleChoiceActivitySpecs extends _.ActivitySpecs {
            #parent;
            properties = ['questions', 'related'];
            #questions = [];
            get questions() {
              return this.#questions;
            }
            get valid() {
              return this.questions.length > 0 && this.#questions.every(item => item.valid);
            }
            get isValid() {
              return this.valid;
            }
            get questionLabels() {
              return this.questions.map(item => item.question);
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                if (property === 'questions' && data.hasOwnProperty(property)) {
                  if (data[property]) change = true;
                  const questions = data[property]?.map((data, index) => {
                    const questionModel = this.#questions[index] ?? new _questions.ActivityQuestion(this.parent);
                    const specs = typeof data === 'string' ? {
                      question: data
                    } : data;
                    questionModel.set(specs);
                    return questionModel;
                  });
                  this.#questions = questions;
                  return;
                }
                if (!data.hasOwnProperty(property)) return;
                change = true;
                this[property] = data[property];
              });
              if (change) this.trigger('change');
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                if (property === 'questions') {
                  output[property] = this[property].map(item => item.getData());
                  return;
                }
                output[property] = this[property];
              });
              return output;
            }
            clear() {
              this.properties.forEach(property => {
                if (property === 'questions') {
                  this.#questions = [];
                  return;
                }
                if (property === 'objective') return;
                this[property] = undefined;
              });
              this.trigger('change');
            }
            addAnswer(index, answer) {
              if (!this.#questions[index]) {
                console.warn('Question not found, index:', index);
                return;
              }
              this.#questions[index].addOption(answer);
              this.triggerEvent();
            }
            async generate(notes, {
              related
            }) {
              const data = await this.suggestions.generate({
                type: 'questions',
                id: this.learningModule.id,
                related,
                notes
              });
              if (data.error) {
                return data;
              }
              this.set(data);
              this.learningModule.saveDraft();
              this.trigger('specs.generated');
              return data;
            }
            async generateAnswers({
              notes,
              question
            }) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'answers',
                  id: this.learningModule.id,
                  question: question ?? this.question,
                  notes
                });
                return data.options;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /***********************************************************************
      INTERNAL MODULE: ./item/activities/specs/multiple-choice/questions/index
      ***********************************************************************/

      ims.set('./item/activities/specs/multiple-choice/questions/index', {
        hash: 3924675292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityQuestion = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _suggestions = require("../../../../../suggestions");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat-sdk/api");
          class ActivityQuestion extends _model.ReactiveModel {
            #parent;
            suggestions;
            properties = ['question', 'options', 'correctAnswer'];
            #api;
            get valid() {
              return !!this.question && this.options.length > 1 && this.correctAnswer !== undefined && this.correctAnswer !== null;
            }
            constructor(parent) {
              super();
              this.id = (0, _uuid.v4)();
              this.#parent = parent;
              this.learningModule = parent.learningModule;
              this.options = [];
              this.suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
            }
            set(data) {
              this.properties.forEach(property => {
                if (property === 'correctAnswer') this[property] = data.correct_answer;
                if (!data.hasOwnProperty(property)) return;
                this[property] = data[property];
              });
            }
            getData() {
              const output = {};
              this.properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
            addOption(option) {
              return !!this.question && this.options.length > 1 && ![undefined, null, NaN].includes(this.correctAnswer);
              this.options.push(option);
              this.triggerEvent();
            }
            removeOption(index) {
              this.options.splice(index, 1);
              this.triggerEvent();
            }
            setCorrect(index) {
              if (this.correctAnswer === index) return;
              this.correctAnswer = index;
              this.triggerEvent();
            }
            async generateAnswers({
              notes,
              question
            }) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'answers',
                  id: this.learningModule.id,
                  question: question ?? this.question,
                  notes
                });
                this.trigger('specs.generated');
                return data.options;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ActivityQuestion = ActivityQuestion;
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./item/activities/specs/multiple-choice/questions/option
      ************************************************************************/

      ims.set('./item/activities/specs/multiple-choice/questions/option', {
        hash: 3165191194,
        creator: function (require, exports) {
          // export class OptionAnswer {
          //     #correct;
          //     get correct() {
          //         return this.#correct;
          //     }
          //     set correct(value) {
          //         this.#correct = value;
          //     }
          //     get option() {
          //     }
          // }
          "use strict";
        }
      });

      /**********************************************
      INTERNAL MODULE: ./item/activities/specs/spoken
      **********************************************/

      ims.set('./item/activities/specs/spoken', {
        hash: 3202177657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivitySpecs = void 0;
          var _ = require("./");
          class SpokenActivitySpecs extends _.ActivitySpecs {
            properties = ['objective', 'criteria', 'task', 'assessment'];
            #defaultValues = {
              criteria: [],
              task: '',
              assessment: ''
            };
            #criteria = [];
            get criteria() {
              return this.#criteria;
            }
            set criteria(value) {
              this.#criteria = value;
            }
            get valid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                if (Array.isArray(this[property]) && !this[property].length) return false;
                return acc;
              }, true);
            }
            constructor(type, learningModule, parent) {
              super(type, learningModule, parent);
              this.set(this.#defaultValues);
            }
            get isValid() {
              return this.properties.reduce((acc, property) => {
                if (!this[property]) return false;
                return acc;
              }, true);
            }
            set(data) {
              let change = false;
              this.properties.forEach(property => {
                change = true;
                let value = property === 'criteria' && !data[property] ? [] : data[property];
                if (!data.hasOwnProperty(property)) return;
                this[property] = value;
              });
              if (change) this.trigger('change');
            }
            async clear() {
              await this.set(this.#defaultValues);
              this.trigger('change');
            }
          }
          exports.SpokenActivitySpecs = SpokenActivitySpecs;
        }
      });

      /***************************************
      INTERNAL MODULE: ./item/activities/types
      ***************************************/

      ims.set('./item/activities/types', {
        hash: 2308661213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityTypes = void 0;
          class Types {
            #types = [{
              id: 'content-theory',
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
              id: 'debate',
              name: 'Debate',
              specs: ['objective', 'subject'],
              aiContent: ['title', 'description', 'objective']
            }, {
              id: 'character-talk',
              name: 'Character Talk',
              specs: ['objective', 'role'],
              aiContent: ['title', 'description', 'objective', 'role'],
              fields: ['language']
            }, {
              id: 'multiple-choice',
              name: 'Multiple-Choice',
              //specs: ['objective', 'related'],
              specs: ['questions'],
              materials: [],
              suggestions: 'questions',
              fields: ['questions', 'language']
            },
            // { id: 'written/spoken', name: 'Spoken' },
            {
              id: 'spoken',
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
                this.#map.set(type.id, type);
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

      /*********************************************
      INTERNAL MODULE: ./item/assignments/collection
      *********************************************/

      ims.set('./item/assignments/collection', {
        hash: 2276502694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignments = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModuleAssignments extends _model.ReactiveModel {
            #parent;
            #map = new Map();
            #api;
            get entries() {
              return this.#map;
            }
            get items() {
              return Array.from(this.#map.values());
            }
            #classrooms = new Map();
            get classrooms() {
              return this.#classrooms;
            }
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.orderBy = 'timeCreated';
              this.#parent = parent;
            }
            set(items) {
              if (!Array.isArray(items)) {
                throw new Error('Items must be an array');
              }
              items.forEach(item => {
                const instance = this.#map.has(item.id) ? this.#map.get(item.id) : new _item.ModuleAssignment(this.#parent, item);
                this.#map.set(item.id, instance);
                this.#classrooms.set(item.classroom.id, instance);
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
              const assignment = new _item.ModuleAssignment(this.#parent, response.data);
              this.#map.set(response.data.id, assignment);
              this.#classrooms.set(classroomId, assignment);
              this.#parent.trigger('change');
              // console.log(this.#map);
              return assignment;
            }
          }
          exports.ModuleAssignments = ModuleAssignments;
        }
      });

      /***************************************
      INTERNAL MODULE: ./item/assignments/item
      ***************************************/

      ims.set('./item/assignments/item', {
        hash: 3596087344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignment = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ModuleAssignment extends _model.ReactiveModel {
            #parent;
            get dashboard() {
              return `/assignments/${this.id}/dashboard/classroom`;
            }
            get link() {
              return `/assignments/${this.id}`;
            }
            constructor(parent, data) {
              super({
                properties: ['classroom', 'id']
              });
              this.#parent = parent;
              this.set(data);
            }
          }
          exports.ModuleAssignment = ModuleAssignment;
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 3300481978,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _entities = require("@beyond-js/reactive/entities");
          var _suggestions = require("../suggestions");
          var _activities = require("./activities");
          var _collection = require("./assignments/collection");
          var _provider = require("./provider");
          var _credits = require("../coins/credits");
          /*bundle*/
          class LearningModule extends _entities.Item {
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually
            ];
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            #saved;
            get saved() {
              return this.#saved;
            }
            get valid() {
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            get completed() {
              return this.valid && this.activities.valid;
            }
            #assignments;
            get assignments() {
              return this.#assignments;
            }
            #api;
            #credits;
            get credits() {
              return this.#credits.getProperties();
            }
            set credits(data) {
              this.#credits.set(data);
            }
            #suggestions;
            static instances = new Map();
            constructor({
              id = undefined,
              type = 'module'
            } = {}) {
              super({
                id,
                localdb: false,
                provider: _provider.ModuleProvider
              });
              this.initialise();
              this.#suggestions = new _suggestions.Suggestions();
              this.reactiveProps(['fetchingDraft']);
              this.#activities = new _activities.Activities(this);
              // this.#credits = new Credits();
              this.#assignments = new _collection.ModuleAssignments(this);
              this.#credits = new _credits.Credits();
              this.#activities.on('change', this.triggerEvent);
              // this.#chatIntroductions = new Introduction(this);
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.type = type;
              this.contents = {
                characteristics: 0
              };
              globalThis.model = this;
            }
            async processLoad(data) {
              /**
               * this property is used to know when the module has been saved
               * the module is considered saved when it has an id
               * are was persisted in the database
               */
              this.#saved = true;
            }
            async set(data) {
              super.set(data);
              if (data.assignments) {
                this.#assignments.set(data.assignments);
              }
              if (!this.owner) this.owner = this.creator;
              this.credits = data.credits;
              if (data.activities) {
                this.#activities.set(data.activities);
              }
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
            async saveDraft(specs = {}) {
              const data = {
                ...this.getProperties(),
                ...specs,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.#saved = true;
              const response = super.publish(data);
              LearningModule.instances.set(this.id, this);
              return response;
            }
            async refineActivities({
              observations
            }) {
              const data = {
                duration: this.duration,
                description: this.description,
                observations,
                notes: observations,
                target: this.target,
                objective: this.objective,
                id: this.id,
                audience: this.audience
              };
              const answer = await this.#getSuggestions({
                type: 'activities',
                ...data,
                observations,
                notes: observations,
                totalActivities: 5,
                activities: this.activities.getItems()
              });
              this.set(answer);
              this.triggerEvent('activities.generated');
              return answer;
            }
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
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.#credits.set(data.credits);
              this.trigger('credits.change');
              return data;
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
            async publish(props) {
              this.type = 'module';
              return super.publish(props);
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
                this.#api.bearer(_session.sessionWrapper.user.token);
                const saveResponse = await this.#api.post(`/modules/drafts/${this.id}/image`, {
                  url: response.url
                });
                this.#credits.set(saveResponse.data.credits);
                this.trigger('credits.change');
                this.picture = `${saveResponse.data.picture}?${performance.now()}`;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
                return this.picture;
              } catch (e) {
                console.error(e);
              }
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
            clone(...args) {
              return this.provider.clone(...args);
            }
            static async get(specs) {
              // console.log(0.1, specs.id, this.instances);
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              } else {
                await module.isReady;
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/provider
      *******************************/

      ims.set('./item/provider', {
        hash: 4222388679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class ModuleProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
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
              this.#parent.set(data);
              this.#parent.activities.setItems(data.activities);
              // if (specs?.progress)
              await this.#parent.processLoad(data);
              return {
                status,
                data
              };
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
              console.log(44, entity, _session.sessionWrapper.user.id, ownerId);
              if (_session.sessionWrapper.user.id === ownerId || entity === 'user') {
                return this.#api.post(endpoint, {});
              }
              return this.#api.post(endpoint, {
                organizationId: ownerId,
                entity
              });
            }
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /***********************************
      INTERNAL MODULE: ./suggestions/index
      ***********************************/

      ims.set('./suggestions/index', {
        hash: 3743550615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
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
                      text: error
                    }
                  } = response;
                  if (error.includes('The related activity')) {
                    return {
                      error: 'NO_RELATED_ACTIVITY'
                    };
                  }
                  if (error.includes('The draft does not have the following parameters to process the suggestion:')) {
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

      /**********************************************
      INTERNAL MODULE: ./suggestions/interfaces/index
      **********************************************/

      ims.set('./suggestions/interfaces/index', {
        hash: 2888578579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./coins/credits",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./coins/types/coins",
        "from": "ICoinsCreditData",
        "name": "ICoinsCreditData"
      }, {
        "im": "./coins/types/coins",
        "from": "ICoinModuleConsumptionData",
        "name": "ICoinModuleConsumptionData"
      }, {
        "im": "./coins/types/coins",
        "from": "ICoinAssignmentConsumptionData",
        "name": "ICoinAssignmentConsumptionData"
      }, {
        "im": "./coins/types/coins",
        "from": "ICreditsConsumptionsData",
        "name": "ICreditsConsumptionsData"
      }, {
        "im": "./collection/index",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./interfaces/activities",
        "from": "IActivities",
        "name": "IActivities"
      }, {
        "im": "./item/activities/item",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./item/activities/types",
        "from": "ActivityTypes",
        "name": "ActivityTypes"
      }, {
        "im": "./item/index",
        "from": "LearningModule",
        "name": "LearningModule"
      }, {
        "im": "./suggestions/interfaces/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./coins/credits').Credits : value);
        (require || prop === 'ICoinsCreditData') && _export("ICoinsCreditData", ICoinsCreditData = require ? require('./coins/types/coins').ICoinsCreditData : value);
        (require || prop === 'ICoinModuleConsumptionData') && _export("ICoinModuleConsumptionData", ICoinModuleConsumptionData = require ? require('./coins/types/coins').ICoinModuleConsumptionData : value);
        (require || prop === 'ICoinAssignmentConsumptionData') && _export("ICoinAssignmentConsumptionData", ICoinAssignmentConsumptionData = require ? require('./coins/types/coins').ICoinAssignmentConsumptionData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./coins/types/coins').ICreditsConsumptionsData : value);
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./collection/index').LearningModules : value);
        (require || prop === 'IActivities') && _export("IActivities", IActivities = require ? require('./interfaces/activities').IActivities : value);
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./item/activities/item').Activity : value);
        (require || prop === 'ActivityTypes') && _export("ActivityTypes", ActivityTypes = require ? require('./item/activities/types').ActivityTypes : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./item/index').LearningModule : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./suggestions/interfaces/index').ISuggestionResponse : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJwcm9wZXJ0aWVzIiwiZXhwb3J0cyIsIkNvaW5Nb2RlbCIsImluaXRpYWxDb2lucyIsImNvaW5zIiwiY29uc3VtZSIsImFtb3VudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfZW50aXRpZXMiLCJfaXRlbSIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlcyIsIkNvbGxlY3Rpb24iLCJzdG9yZU5hbWUiLCJkYiIsIml0ZW0iLCJMZWFybmluZ01vZHVsZSIsInByb3ZpZGVyIiwiTW9kdWxlc1Byb3ZpZGVyIiwibG9jYWxkYiIsIm9yZGVyQnkiLCJnbG9iYWxUaGlzIiwiY29sbGVjdGlvbiIsImxvYWQiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicm91dGUiLCJzdGF0dXMiLCJnZXQiLCJlbnRyaWVzIiwiaXRlbXMiLCJkZWxldGVJdGVtcyIsImlkIiwiZGVsZXRlIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwiYXZhaWxhYmxlVHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsIkFycmF5IiwiaXNBcnJheSIsInRyYWNlIiwidHlwZXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwiZ2V0SXRlbXMiLCJwdXNoIiwiZ2V0RGF0YSIsImNsZWFyIiwiYWRkIiwibWFudWFsIiwibGFuZ3VhZ2UiLCJzYXZlVGltZW91dCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2F2ZURyYWZ0IiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImRlZmF1bHRMYW5ndWFnZSIsIm1hdGVyaWFscyIsImFpQ29tcGxldGVkIiwiYWlDb250ZW50IiwiZmllbGQiLCJpbmNsdWRlcyIsImZpbHRlciIsInJlcXVpcmVkIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJuYW1lIiwidW5kZWZpbmVkIiwiZmllbGRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwiaW5jbHVkZXNPYmplY3RpdmUiLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm91dHB1dCIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJyZXNwb25zZSIsImNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsIlByb21pc2UiLCJhbGwiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsIndhcm4iLCJhZGRPcHRpb24iLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsIm9wdGlvbiIsIk5hTiIsInJlbW92ZU9wdGlvbiIsInNwbGljZSIsInNldENvcnJlY3QiLCJkZWZhdWx0VmFsdWVzIiwiY3JpdGVyaWEiLCJ0YXNrIiwiYXNzZXNzbWVudCIsIlR5cGVzIiwiZGVwZW5kZW5jaWVzIiwiTW9kdWxlQXNzaWdubWVudHMiLCJmcm9tIiwiY2xhc3Nyb29tcyIsIk1vZHVsZUFzc2lnbm1lbnQiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsImRhc2hib2FyZCIsImxpbmsiLCJfYWN0aXZpdGllcyIsIl9jb2xsZWN0aW9uIiwiX2NyZWRpdHMiLCJJdGVtIiwiYWN0aXZpdGllcyIsInNhdmVkIiwiY29tcGxldGVkIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwibW9kZWwiLCJwcm9jZXNzTG9hZCIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJwcm9wcyIsInBlcmZvcm1hbmNlIiwibm93IiwiY29uc3VtZUNvaW5zIiwiY2xvbmUiLCJnZXREcmFmdCIsIm93bmVySWQiLCJlbnRpdHkiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJsb2ciLCJvcmdhbml6YXRpb25JZCIsInRleHQiLCJzcGxpdCIsImNvZGUiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL29wdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBWSxHQUFHQyxJQUFJO2NBQ2xCLEtB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SSxDQUFDLENBQUFySCxHQUFJLENBQUNxSSxJQUFJLENBQUMsY0FBYyxFQUFFO2tCQUFFLEdBQUc3SDtnQkFBSyxDQUFFLENBQUM7Z0JBRW5FLElBQUksQ0FBQzZHLFFBQVEsQ0FBQ3ZHLE1BQU0sRUFBRTtrQkFDckIsSUFBSTtvQkFDSFUsS0FBSyxFQUFFO3NCQUFFZ08sSUFBSSxFQUFFaE87b0JBQUs7a0JBQUUsQ0FDdEIsR0FBRzZGLFFBQVE7a0JBRVosSUFBSTdGLEtBQUssQ0FBQ2lFLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO29CQUMzQyxPQUFPO3NCQUFFakUsS0FBSyxFQUFFO29CQUFxQixDQUFFOztrQkFFeEMsSUFBSUEsS0FBSyxDQUFDaUUsUUFBUSxDQUFDLDZFQUE2RSxDQUFDLEVBQUU7b0JBQ2xHLE9BQU87c0JBQUVqRSxLQUFLLEVBQUUsbUJBQW1CO3NCQUFFeUUsTUFBTSxFQUFFekUsS0FBSyxDQUFDaU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQUMsQ0FBRTs7a0JBR25FLE9BQU87b0JBQUVqTztrQkFBSyxDQUFFOztnQkFFakIsT0FBTzZGLFFBQVEsQ0FBQzFILElBQUk7ZUFDcEIsQ0FBQyxPQUFPMkIsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSUQsS0FBSyxDQUFDQyxDQUFDLENBQUM2RixPQUFPLENBQUM7O1lBRTVCO1lBRUEsTUFBTWMsS0FBS0EsQ0FBQ3pILEtBQXVEO2NBQ2xFLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNTLE1BQU0sQ0FBQ1YsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU15RyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXJILEdBQUksQ0FBQ3FJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFBRTVELFFBQVEsRUFBRSxJQUFJO2dCQUFFLEdBQUdqRTtjQUFLLENBQUUsQ0FBQztjQUN2RixJQUFJLENBQUM2RyxRQUFRLENBQUN2RyxNQUFNLEVBQUUsTUFBTSxJQUFJTyxLQUFLLENBQUNnRyxRQUFRLENBQUM3RixLQUFLLENBQUNrTyxJQUFJLENBQUM7Y0FDMUQ7Ozs7Y0FJQSxPQUFPckksUUFBUSxDQUFDMUgsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4Qjs7VUFDQXpCLE9BQUEsQ0FBQXFGLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7VUNyREQ7O1VBRUEvRSxNQUFBLENBQUFDLGNBQUEsQ0FBQVAsT0FBQTtZQUNBUSxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=