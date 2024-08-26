System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "uuid@9.0.1", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.1/api"], function (_export, _context) {
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
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk101Api) {
      dependency_8 = _aimpactChatSdk101Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
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
        hash: 4252346481,
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
              // console.log(40, 'guardamos', this.#items);
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
        hash: 4013554478,
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
              onwerId,
              entity,
              type
            }) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoints = {
                community: `/community/modules/${moduleId}/clone`,
                module: `/modules/${moduleId}/clone`
              };
              const endpoint = endpoints[type] ?? endpoints.module;
              if (_session.sessionWrapper.user.id === onwerId || entity === 'user') {
                return this.#api.post(endpoint, {});
              }
              return this.#api.post(endpoint, {
                organizationId: onwerId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJwcm9wZXJ0aWVzIiwiZXhwb3J0cyIsIkNvaW5Nb2RlbCIsImluaXRpYWxDb2lucyIsImNvaW5zIiwiY29uc3VtZSIsImFtb3VudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfZW50aXRpZXMiLCJfaXRlbSIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlcyIsIkNvbGxlY3Rpb24iLCJzdG9yZU5hbWUiLCJkYiIsIml0ZW0iLCJMZWFybmluZ01vZHVsZSIsInByb3ZpZGVyIiwiTW9kdWxlc1Byb3ZpZGVyIiwibG9jYWxkYiIsIm9yZGVyQnkiLCJnbG9iYWxUaGlzIiwiY29sbGVjdGlvbiIsImxvYWQiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicm91dGUiLCJzdGF0dXMiLCJnZXQiLCJlbnRyaWVzIiwiaXRlbXMiLCJkZWxldGVJdGVtcyIsImlkIiwiZGVsZXRlIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwiYXZhaWxhYmxlVHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsIkFycmF5IiwiaXNBcnJheSIsInRyYWNlIiwidHlwZXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwiZ2V0SXRlbXMiLCJwdXNoIiwiZ2V0RGF0YSIsImNsZWFyIiwiYWRkIiwibWFudWFsIiwibGFuZ3VhZ2UiLCJzYXZlVGltZW91dCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2F2ZURyYWZ0IiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImRlZmF1bHRMYW5ndWFnZSIsIm1hdGVyaWFscyIsImFpQ29tcGxldGVkIiwiYWlDb250ZW50IiwiZmllbGQiLCJpbmNsdWRlcyIsImZpbHRlciIsInJlcXVpcmVkIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJuYW1lIiwidW5kZWZpbmVkIiwiZmllbGRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwiaW5jbHVkZXNPYmplY3RpdmUiLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm91dHB1dCIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJyZXNwb25zZSIsImNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsIlByb21pc2UiLCJhbGwiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsIndhcm4iLCJhZGRPcHRpb24iLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsIm9wdGlvbiIsIk5hTiIsInJlbW92ZU9wdGlvbiIsInNwbGljZSIsInNldENvcnJlY3QiLCJkZWZhdWx0VmFsdWVzIiwiY3JpdGVyaWEiLCJ0YXNrIiwiYXNzZXNzbWVudCIsIlR5cGVzIiwiZGVwZW5kZW5jaWVzIiwiTW9kdWxlQXNzaWdubWVudHMiLCJmcm9tIiwiY2xhc3Nyb29tcyIsIk1vZHVsZUFzc2lnbm1lbnQiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsImRhc2hib2FyZCIsImxpbmsiLCJfYWN0aXZpdGllcyIsIl9jb2xsZWN0aW9uIiwiX2NyZWRpdHMiLCJJdGVtIiwiYWN0aXZpdGllcyIsInNhdmVkIiwiY29tcGxldGVkIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwibW9kZWwiLCJwcm9jZXNzTG9hZCIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJwcm9wcyIsInBlcmZvcm1hbmNlIiwibm93IiwiY29uc3VtZUNvaW5zIiwiY2xvbmUiLCJnZXREcmFmdCIsIm9ud2VySWQiLCJlbnRpdHkiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInRleHQiLCJzcGxpdCIsImNvZGUiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL29wdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBWSxHQUFHQyxJQUFJO2NBQ2xCLEtBQUssQ0FB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