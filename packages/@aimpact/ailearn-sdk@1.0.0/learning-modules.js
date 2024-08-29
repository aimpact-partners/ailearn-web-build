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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
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
        hash: 1958740288,
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
        hash: 3630162107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJwcm9wZXJ0aWVzIiwiZXhwb3J0cyIsIkNvaW5Nb2RlbCIsImluaXRpYWxDb2lucyIsImNvaW5zIiwiY29uc3VtZSIsImFtb3VudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfZW50aXRpZXMiLCJfaXRlbSIsIl9wcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlcyIsIkNvbGxlY3Rpb24iLCJzdG9yZU5hbWUiLCJkYiIsIml0ZW0iLCJMZWFybmluZ01vZHVsZSIsInByb3ZpZGVyIiwiTW9kdWxlc1Byb3ZpZGVyIiwibG9jYWxkYiIsIm9yZGVyQnkiLCJnbG9iYWxUaGlzIiwiY29sbGVjdGlvbiIsImxvYWQiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicm91dGUiLCJzdGF0dXMiLCJnZXQiLCJlbnRyaWVzIiwiaXRlbXMiLCJkZWxldGVJdGVtcyIsImlkIiwiZGVsZXRlIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwiYXZhaWxhYmxlVHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsIkFycmF5IiwiaXNBcnJheSIsInRyYWNlIiwidHlwZXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwiZ2V0SXRlbXMiLCJwdXNoIiwiZ2V0RGF0YSIsImNsZWFyIiwiYWRkIiwibWFudWFsIiwibGFuZ3VhZ2UiLCJzYXZlVGltZW91dCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2F2ZURyYWZ0IiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImRlZmF1bHRMYW5ndWFnZSIsIm1hdGVyaWFscyIsImFpQ29tcGxldGVkIiwiYWlDb250ZW50IiwiZmllbGQiLCJpbmNsdWRlcyIsImZpbHRlciIsInJlcXVpcmVkIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJuYW1lIiwidW5kZWZpbmVkIiwiZmllbGRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwiaW5jbHVkZXNPYmplY3RpdmUiLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm91dHB1dCIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImdldFN1Z2dlc3Rpb25zIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCIjZ2V0U3VnZ2VzdGlvbnMiLCJjcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0Iiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJQcm9taXNlIiwiYWxsIiwicGVyc2lzdGVkRGF0YSIsImdlbmVyYXRlQXVkaW8iLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsImNoYXJhY3RlciIsImNoYW5nZSIsInByb2Nlc3MiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJUWVBFUyIsIkFjdGl2aXR5U3BlY3MiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJzcG9rZW4iLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiaXNWYWxpZCIsImhhc1ZhbHVlcyIsIl9xdWVzdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInF1ZXN0aW9uIiwicXVlc3Rpb25Nb2RlbCIsIkFjdGl2aXR5UXVlc3Rpb24iLCJhZGRBbnN3ZXIiLCJhbnN3ZXIiLCJ3YXJuIiwiYWRkT3B0aW9uIiwicmVsYXRlZCIsImdlbmVyYXRlQW5zd2VycyIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb24iLCJOYU4iLCJyZW1vdmVPcHRpb24iLCJzcGxpY2UiLCJzZXRDb3JyZWN0IiwiZGVmYXVsdFZhbHVlcyIsImNyaXRlcmlhIiwidGFzayIsImFzc2Vzc21lbnQiLCJUeXBlcyIsImRlcGVuZGVuY2llcyIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiZnJvbSIsImNsYXNzcm9vbXMiLCJNb2R1bGVBc3NpZ25tZW50IiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsInJlc3BvbnNlIiwiYXNzaWdubWVudCIsImRhc2hib2FyZCIsImxpbmsiLCJfYWN0aXZpdGllcyIsIl9jb2xsZWN0aW9uIiwiX2NyZWRpdHMiLCJJdGVtIiwiYWN0aXZpdGllcyIsInNhdmVkIiwiY29tcGxldGVkIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwibW9kZWwiLCJwcm9jZXNzTG9hZCIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJwcm9wcyIsInBlcmZvcm1hbmNlIiwibm93IiwiY29uc3VtZUNvaW5zIiwiY2xvbmUiLCJnZXREcmFmdCIsIm93bmVySWQiLCJlbnRpdHkiLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJvcmdhbml6YXRpb25JZCIsInRleHQiLCJzcGxpdCIsImNvZGUiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL29wdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBWSxHQUFHQyxJQUFJO2NBQ2xCLEtBQUssQ0FB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