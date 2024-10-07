System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "uuid@10.0.0", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.3.0/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Credits, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, LearningModules, IActivities, Activity, ActivityTypes, LearningModule, ISuggestionResponse, IActivityBase, IContentTheoryActivity, __beyond_pkg, hmr;
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
    ISuggestionResponse: void 0,
    IActivityBase: void 0,
    IContentTheoryActivity: void 0
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
    }, function (_aimpactChatSdk130Session) {
      dependency_5 = _aimpactChatSdk130Session;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk130Api) {
      dependency_8 = _aimpactChatSdk130Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 1574458122,
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
        hash: 2418790481,
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
        hash: 2457921187,
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
              this.#materials = new _materials.ActivityMaterials(this, this.#learningModule);
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
              await this.materials?.clear();
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
        hash: 3752505538,
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
          /**
           * Materials: Elementos de apoyo de una actividad.
           * Resources: Elementos usados por los prompts para generar contenido.
           */
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
              flashcard: {}
            };
            #emptyData = {
              article: '',
              synthesis: '',
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
        hash: 3823323072,
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
                  // todo: in some place the notes is a string, in others it's an object
                  // we need to standardize this
                  notes: typeof notes === 'string' ? notes : notes?.notes,
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
                console.log(40, property, this[property]);
                this[property] = undefined;
                console.log(41, property, this[property]);
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
        hash: 2904385456,
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
                // todo: in some place the notes is a string, in others it's an object
                // we need to standardize this
                notes: typeof notes === 'string' ? notes : notes?.notes
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
        hash: 2929980205,
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
      INTERNAL MODULE: ./item/error
      ****************************/

      ims.set('./item/error', {
        hash: 1142626891,
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
              this.message = message;
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 3937705664,
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
          var _error = require("./error");
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
              return {
                ...this.#credits.getProperties(),
                available: this.#credits.available
              };
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
                await this.#credits.set(saveResponse.data.credits);
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
            async deleteItem() {
              const response = await this.provider.deleteItem();
              if (!response.status) throw new _error.CustomError(response.error.text, response.error.code);
              return response;
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/provider
      *******************************/

      ims.set('./item/provider', {
        hash: 2328627333,
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

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2495976347,
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
      }, {
        "im": "./types",
        "from": "IActivityBase",
        "name": "IActivityBase"
      }, {
        "im": "./types",
        "from": "IContentTheoryActivity",
        "name": "IContentTheoryActivity"
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
        (require || prop === 'IActivityBase') && _export("IActivityBase", IActivityBase = require ? require('./types').IActivityBase : value);
        (require || prop === 'IContentTheoryActivity') && _export("IContentTheoryActivity", IContentTheoryActivity = require ? require('./types').IContentTheoryActivity : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJhdmFpbGFibGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiY29uc3RydWN0b3IiLCJhcmdzIiwicHJvcGVydGllcyIsImV4cG9ydHMiLCJDb2luTW9kZWwiLCJpbml0aWFsQ29pbnMiLCJjb2lucyIsImNvbnN1bWUiLCJhbW91bnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2VudGl0aWVzIiwiX2l0ZW0iLCJfcHJvdmlkZXIiLCJMZWFybmluZ01vZHVsZXMiLCJDb2xsZWN0aW9uIiwic3RvcmVOYW1lIiwiZGIiLCJpdGVtIiwiTGVhcm5pbmdNb2R1bGUiLCJwcm92aWRlciIsIk1vZHVsZXNQcm92aWRlciIsImxvY2FsZGIiLCJvcmRlckJ5IiwiZ2xvYmFsVGhpcyIsImNvbGxlY3Rpb24iLCJsb2FkIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJvdXRlIiwic3RhdHVzIiwiZ2V0IiwiZW50cmllcyIsIml0ZW1zIiwiZGVsZXRlSXRlbXMiLCJpZCIsImRlbGV0ZSIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJlbGVtZW50IiwidHlwZSIsIkpTT04iLCJwYXJzZSIsInNldCIsIl9lbGVtZW50IiwiSW50cm9kdWN0aW9uIiwiTWFwIiwiaXNSZWFkeSIsImVsZW1lbnRzIiwidmFsdWVzIiwiZm9yRWFjaCIsImluc3RhbmNlIiwiX3N1Z2dlc3Rpb25zIiwiX3R5cGVzIiwiQWN0aXZpdGllcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsIm1hcCIsImF2YWlsYWJsZVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInZhbGlkIiwibGVuZ3RoIiwiZXZlcnkiLCJzdGF0ZSIsIlN1Z2dlc3Rpb25zIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaGFzIiwiQWN0aXZpdHkiLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlcyIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIm5hbWUiLCJ1bmRlZmluZWQiLCJmaWVsZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwibWVzc2FnZSIsIiNnZXRTdWdnZXN0aW9ucyIsImNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsIlByb21pc2UiLCJhbGwiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwibG9nIiwiX3F1ZXN0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsIndhcm4iLCJhZGRPcHRpb24iLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsIm9wdGlvbiIsIk5hTiIsInJlbW92ZU9wdGlvbiIsInNwbGljZSIsInNldENvcnJlY3QiLCJkZWZhdWx0VmFsdWVzIiwiY3JpdGVyaWEiLCJ0YXNrIiwiYXNzZXNzbWVudCIsIlR5cGVzIiwiZGVwZW5kZW5jaWVzIiwiTW9kdWxlQXNzaWdubWVudHMiLCJmcm9tIiwiY2xhc3Nyb29tcyIsIk1vZHVsZUFzc2lnbm1lbnQiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwicmVzcG9uc2UiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIkN1c3RvbUVycm9yIiwiY29kZSIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIl9lcnJvciIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJhc3NpZ25tZW50cyIsImluc3RhbmNlcyIsIk1vZHVsZVByb3ZpZGVyIiwiaW5pdGlhbGlzZSIsIm9uIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJtb2RlbCIsInByb2Nlc3NMb2FkIiwib3duZXIiLCJjcmVhdG9yIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJwdWJsaXNoIiwicmVmaW5lQWN0aXZpdGllcyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJ0b3RhbEFjdGl2aXRpZXMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInByb3BzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb25zdW1lQ29pbnMiLCJjbG9uZSIsImRlbGV0ZUl0ZW0iLCJ0ZXh0IiwiZ2V0RHJhZnQiLCJvd25lcklkIiwiZW50aXR5IiwiZW5kcG9pbnRzIiwiY29tbXVuaXR5Iiwib3JnYW5pemF0aW9uSWQiLCJzcGxpdCJdLCJzb3VyY2VzIjpbIi9jb2lucy9jcmVkaXRzLnRzIiwiL2NvaW5zL2luZGV4LnRzIiwiL2NvaW5zLnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMvb3B0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3R5cGVzLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvaXRlbS9lcnJvci50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2l0ZW0vcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxH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