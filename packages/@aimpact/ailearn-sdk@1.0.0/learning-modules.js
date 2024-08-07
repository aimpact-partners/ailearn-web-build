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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.3-test.02"]]);
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
        hash: 3682787468,
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
        hash: 1919719384,
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
            #properties = ['id', 'type', 'title', 'description', 'order', 'objective', 'types', 'duration', 'materials', 'specs', 'picture', 'language', 'pictureSuggestions'];
            get types() {
              return _types.ActivityTypes.items;
            }
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
        hash: 3907303172,
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
              await this.set({
                credits: data.credits
              });
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
              this.#activities.set(data.activities);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsImdsb2JhbFRoaXMiLCJjb2xsZWN0aW9uIiwibG9hZCIsImFyZ3MiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicm91dGUiLCJzdGF0dXMiLCJnZXQiLCJlbnRyaWVzIiwiaXRlbXMiLCJkZWxldGVJdGVtcyIsImlkIiwiZGVsZXRlIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwiYXZhaWxhYmxlVHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsIkFycmF5IiwiaXNBcnJheSIsInR5cGVzIiwicmVtb3ZlIiwidHJpZ2dlciIsImdldEl0ZW1zIiwicHVzaCIsImdldERhdGEiLCJjbGVhciIsImFkZCIsIm1hbnVhbCIsImxhbmd1YWdlIiwic2F2ZVRpbWVvdXQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNhdmVEcmFmdCIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl91dWlkIiwiZGF0YVR5cGUiLCJzZXR0aW5nc1R5cGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJtYXRlcmlhbHMiLCJhaUNvbXBsZXRlZCIsImFpQ29udGVudCIsImZpZWxkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJyZXF1aXJlZCIsInRvdGFsTWF0ZXJpYWxzIiwicmVkdWNlIiwiYWNjIiwibmFtZSIsInVuZGVmaW5lZCIsImZpZWxkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsImluY2x1ZGVzT2JqZWN0aXZlIiwib2JqZWN0aXZlIiwicmVhY3RpdmVQcm9wcyIsInY0IiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJBY3Rpdml0eU1hdGVyaWFscyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJvdXRwdXQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJhY3Rpdml0eUlkIiwibWVzc2FnZSIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsImNsZWFyQ29udGVudCIsInNhdmUiLCJxdWVzdGlvbnMiLCJvcmlnaW5hbERhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiZHlzbGV4aWEiLCJpbnRyb2R1Y3Rpb24iLCJmbGFzaGNhcmQiLCJlbXB0eURhdGEiLCJlbXB0eSIsImhhc0NvbnRlbnQiLCJzb21lIiwibW9kdWxlIiwic2V0dGluZ3MiLCJnZXRQcm9wZXJ0aWVzIiwiZ2VuZXJhdGVDb250ZW50IiwicGVyc2lzdGVkRGF0YSIsImdlbmVyYXRlQXVkaW8iLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsImNoYXJhY3RlciIsImNoYW5nZSIsInByb2Nlc3MiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJUWVBFUyIsIkFjdGl2aXR5U3BlY3MiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJzcG9rZW4iLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiaXNWYWxpZCIsImhhc1ZhbHVlcyIsIl9xdWVzdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInF1ZXN0aW9uIiwicXVlc3Rpb25Nb2RlbCIsIkFjdGl2aXR5UXVlc3Rpb24iLCJhZGRBbnN3ZXIiLCJhbnN3ZXIiLCJ3YXJuIiwiYWRkT3B0aW9uIiwicmVsYXRlZCIsImdlbmVyYXRlQW5zd2VycyIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb24iLCJOYU4iLCJyZW1vdmVPcHRpb24iLCJzcGxpY2UiLCJzZXRDb3JyZWN0IiwiZGVmYXVsdFZhbHVlcyIsImNyaXRlcmlhIiwidGFzayIsImFzc2Vzc21lbnQiLCJUeXBlcyIsImRlcGVuZGVuY2llcyIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiZnJvbSIsImNsYXNzcm9vbXMiLCJNb2R1bGVBc3NpZ25tZW50IiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsInJlc3BvbnNlIiwiYXNzaWdubWVudCIsImRhc2hib2FyZCIsImxpbmsiLCJfYWN0aXZpdGllcyIsIl9jb2xsZWN0aW9uIiwiSXRlbSIsImFjdGl2aXRpZXMiLCJzYXZlZCIsImNvbXBsZXRlZCIsImFzc2lnbm1lbnRzIiwiaW5zdGFuY2VzIiwiTW9kdWxlUHJvdmlkZXIiLCJpbml0aWFsaXNlIiwib24iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJjcmVkaXRzIiwib3duZXIiLCJjcmVhdG9yIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJwdWJsaXNoIiwicmVmaW5lQWN0aXZpdGllcyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJ0b3RhbEFjdGl2aXRpZXMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsImFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVN1Z2VzdGlvbnMiLCJwcm9wcyIsInBlcmZvcm1hbmNlIiwibm93IiwiY29uc3VtZUNvaW5zIiwiY2xvbmUiLCJnZXREcmFmdCIsIm9ud2VySWQiLCJlbnRpdHkiLCJvcmdhbml6YXRpb25JZCIsInRleHQiLCJzcGxpdCIsImNvZGUiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL29wdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDN0M7O1VB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