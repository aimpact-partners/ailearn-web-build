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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.4-test.05"]]);
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
        hash: 3044232913,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor() {
              super({
                properties: ['consumed', 'total']
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
        hash: 2952682949,
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
                const data = await this.#suggestions.generate({
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
        hash: 3352065334,
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
                await this.set(data);
                this.#learningModule.saveDraft();
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
                this.set(data);
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
        hash: 652565897,
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
          /*bundle*/
          class LearningModule extends _entities.Item {
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'credits', 'manual' // let the system know that the module was created manually
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
            // #credits: Credits;
            // get credits() {
            // 	return this.#credits.getProperties();
            // }
            // set credits(value) {
            // 	this.#credits.set(value);
            // 	this.triggerEvent();
            // }
            #assignments;
            get assignments() {
              return this.#assignments;
            }
            #api;
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
            async load(...args) {
              const {
                data
              } = await super.load(...args);
              // console.log(0.1, data, data.credits, this.credits);
              //todo: this code must be removed when the reactive model is fixed
              if (data.credits) {
                //todo: review where it is needed
                await this.set({
                  credits: data.credits
                });
              }
            }
            async set(data) {
              super.set(data);
              if (data.assignments) {
                this.#assignments.set(data.assignments);
              }
              if (!this.owner) this.owner = this.creator;
              // if (data.credits) {
              // 	this.#credits.set(data.credits);
              // }
              if (data.activities) {
                this.#activities.set(data.activities);
              }
              // if (data.activities && Array.isArray(data.activities)) {
              // 	this.#activities.setItems(data.activities);
              // }
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
                const data = await this.#suggestions.generate({
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
              const answer = await this.#suggestions.generate({
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
                const data = await this.#suggestions.generate({
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
                const data = await this.#suggestions.generate({
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
            async activitySuggestions({
              type,
              observations,
              description,
              title
            }) {
              return this.generateSugestions(type, {
                description,
                observations,
                notes: observations,
                title
              });
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
                this.picture = `${saveResponse.data.picture}?${performance.now()}`;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
                return this.picture;
              } catch (e) {
                console.error(e);
              }
            }
            async consumeCoins() {
              const response = await this.provider.consumeCoins();
              if (!response.status) {
                return response;
              }
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            }
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
        hash: 3915103370,
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
            async clone(moduleId, onwerId, entity) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              if (_session.sessionWrapper.user.id === onwerId || entity === 'user') {
                return this.#api.post(`/community/modules/${moduleId}/clone`, {});
              }
              return this.#api.post(`/community/modules/${moduleId}/clone`, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsImdsb2JhbFRoaXMiLCJjb2xsZWN0aW9uIiwibG9hZCIsImFyZ3MiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicm91dGUiLCJzdGF0dXMiLCJnZXQiLCJlbnRyaWVzIiwiaXRlbXMiLCJkZWxldGVJdGVtcyIsImlkIiwiZGVsZXRlIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwiYXZhaWxhYmxlVHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsIkFycmF5IiwiaXNBcnJheSIsInRyYWNlIiwidHlwZXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwiZ2V0SXRlbXMiLCJwdXNoIiwiZ2V0RGF0YSIsImNsZWFyIiwiYWRkIiwibWFudWFsIiwibGFuZ3VhZ2UiLCJzYXZlVGltZW91dCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2F2ZURyYWZ0IiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImRlZmF1bHRMYW5ndWFnZSIsIm1hdGVyaWFscyIsImFpQ29tcGxldGVkIiwiYWlDb250ZW50IiwiZmllbGQiLCJpbmNsdWRlcyIsImZpbHRlciIsInJlcXVpcmVkIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJuYW1lIiwidW5kZWZpbmVkIiwiZmllbGRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmVkIiwiaW5jbHVkZXNPYmplY3RpdmUiLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm91dHB1dCIsImdlbmVyYXRlIiwibm90ZXMiLCJmZXRjaGluZyIsImFjdGl2aXR5SWQiLCJtZXNzYWdlIiwiZ2VuZXJhdGVQaWN0dXJlIiwicHJvbXB0Iiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsIndhcm4iLCJhZGRPcHRpb24iLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsIm9wdGlvbiIsIk5hTiIsInJlbW92ZU9wdGlvbiIsInNwbGljZSIsInNldENvcnJlY3QiLCJkZWZhdWx0VmFsdWVzIiwiY3JpdGVyaWEiLCJ0YXNrIiwiYXNzZXNzbWVudCIsIlR5cGVzIiwiZGVwZW5kZW5jaWVzIiwiTW9kdWxlQXNzaWdubWVudHMiLCJmcm9tIiwiY2xhc3Nyb29tcyIsIk1vZHVsZUFzc2lnbm1lbnQiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwicmVzcG9uc2UiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJJdGVtIiwiYWN0aXZpdGllcyIsInNhdmVkIiwiY29tcGxldGVkIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwibW9kZWwiLCJwcm9jZXNzTG9hZCIsImNyZWRpdHMiLCJvd25lciIsImNyZWF0b3IiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsInB1Ymxpc2giLCJyZWZpbmVBY3Rpdml0aWVzIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJhdWRpZW5jZSIsInRvdGFsQWN0aXZpdGllcyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwiYWN0aXZpdHlTdWdnZXN0aW9ucyIsImdlbmVyYXRlU3VnZXN0aW9ucyIsInByb3BzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb25zdW1lQ29pbnMiLCJjbG9uZSIsImdldERyYWZ0Iiwib253ZXJJZCIsImVudGl0eSIsIm9yZ2FuaXphdGlvbklkIiwidGV4dCIsInNwbGl0IiwiY29kZSJdLCJzb3VyY2VzIjpbIi9jb2lucy9jcmVkaXRzLnRzIiwiL2NvaW5zL2luZGV4LnRzIiwiL2NvaW5zLnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMvb3B0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3R5cGVzLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvaXRlbS9pbmRleC50cyIsIi9pdGVtL3Byb3ZpZGVyLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU1PO1VBQVUsTUFBT0MsT0FBUSxTQUFRRixNQUFBLENBQUFHLGFBQXNCO1lBQzdEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTztjQUFDLENBQUUsQ0FBQztZ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