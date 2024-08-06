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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.1"]]);
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
        hash: 4039456007,
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
            get items() {
              return [...this.#items.values()].sort((a, b) => a.order - b.order);
            }
            get map() {
              return this.#items;
            }
            get types() {
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
        hash: 3367076123,
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
            #properties = ['id', 'type', 'title', 'description', 'order', 'objective', 'duration', 'materials', 'specs', 'picture', 'language', 'pictureSuggestions'];
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
        hash: 1192962899,
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
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'credits', 'manual' // let the system know that the module was created manually
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
              if (data.activities && Array.isArray(data.activities)) {
                this.#activities.setItems(data.activities);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsImdsb2JhbFRoaXMiLCJjb2xsZWN0aW9uIiwibG9hZCIsImFyZ3MiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicm91dGUiLCJzdGF0dXMiLCJnZXQiLCJlbnRyaWVzIiwiaXRlbXMiLCJkZWxldGVJdGVtcyIsImlkIiwiZGVsZXRlIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIm5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJmaWVsZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJzdHJpbmdGb3JtYXQiLCJlcyIsInByZWZpeCIsInN1Zml4IiwiZW4iLCJkZSIsImZvcm1hdCIsInVybCIsImltYWdlIiwic2l6ZSIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFyYWN0ZXIiLCJjaGFuZ2UiLCJwcm9jZXNzIiwiQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIl8iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiVFlQRVMiLCJBY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwic3Bva2VuIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsImlzVmFsaWQiLCJoYXNWYWx1ZXMiLCJfcXVlc3Rpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJnZW5lcmF0ZUFuc3dlcnMiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJhc3Nlc3NtZW50IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJyZXNwb25zZSIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiX2FjdGl2aXRpZXMiLCJfY29sbGVjdGlvbiIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJhc3NpZ25tZW50cyIsImluc3RhbmNlcyIsIk1vZHVsZVByb3ZpZGVyIiwiaW5pdGlhbGlzZSIsIm9uIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJtb2RlbCIsInByb2Nlc3NMb2FkIiwiY3JlZGl0cyIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicHJvcHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnN1bWVDb2lucyIsImNsb25lIiwiZ2V0RHJhZnQiLCJvbndlcklkIiwiZW50aXR5Iiwib3JnYW5pemF0aW9uSWQiLCJ0ZXh0Iiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2NvaW5zL2NyZWRpdHMudHMiLCIvY29pbnMvaW5kZXgudHMiLCIvY29pbnMudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL2ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvaXRlbS9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NvbnZlcnNhdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy9vcHRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvaXRlbS9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvaXRlbS50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2l0ZW0vcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTU87VUFBVSxNQUFPQyxPQUFRLFNBQVFGLE1BQUEsQ0FBQUcsYUFBc0I7WUFDN0RDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPO2NBQUMsQ0FBRSxDQUFDO1lBQzdDOztVQUNBQyxPQUFBLENBQUFKLE9B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