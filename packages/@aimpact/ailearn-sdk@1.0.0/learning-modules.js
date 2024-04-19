System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat-sdk@1.0.0/session", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }, function (_beyondJsReactive1112Entities) {
      dependency_2 = _beyondJsReactive1112Entities;
    }, function (_bgroupHttpSuite103Api) {
      dependency_3 = _bgroupHttpSuite103Api;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_4 = _aimpactAilearnApp0032Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }, function (_aimpactChatSdk100Api) {
      dependency_7 = _aimpactChatSdk100Api;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bgroup/media-manager", "1.0.0"], ["@bgroup/http-suite", "1.0.3"], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@bgroup/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['uuid', dependency_6], ['@aimpact/chat-sdk/api', dependency_7], ['@beyond-js/kernel/core', dependency_8]]);
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
        hash: 2329555532,
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
                provider: _provider.ModulesProvider
              });
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /*************************************
      INTERNAL MODULE: ./collection/provider
      *************************************/

      ims.set('./collection/provider', {
        hash: 2655351180,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModulesProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
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
              const {
                status,
                data
              } = await this.#api.get(`/modules${specs.route}`);
              if (!status) {
                throw new Error('error loading module');
              }
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
        hash: 2582168893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Introduction = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@bgroup/http-suite/api");
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
        hash: 3085862644,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
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
            setItems(data, clean = false) {
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
            async add(type) {
              const activity = new _item.Activity({
                type,
                learningModule: this.#learningModule,
                order: this.items.length
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
              this.#saveTimeout = setTimeout(() => {
                this.#learningModule.saveDraft();
                console.log('saved');
              }, 500);
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
        hash: 1645376317,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _suggestions = require("./../../suggestions");
          var _materials = require("./materials");
          var _api = require("@bgroup/http-suite/api");
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
            get language() {
              return this.#learningModule?.language;
            }
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
              const specs = type.specs?.map(item => typeof item === 'string' ? item : item.name);
              const totalMaterials = materials.reduce((acc, item) => {
                const {
                  name
                } = item;
                if (Array.isArray(this.#materials[name])) {
                  return this.#materials[name].length ? acc + 1 : acc;
                }
                return [undefined, null, ''].includes(this.#materials[name]) ? acc : acc + 1;
              }, 0);
              const totalSpecs = specs.reduce((acc, item) => {
                if (Array.isArray(this.#specs[item])) {
                  return this.#specs[item].length ? acc + 1 : acc;
                }
                return [undefined, null, ''].includes(this.#specs[item]) ? acc : acc + 1;
              }, 0);
              if (totalMaterials === 0 && totalSpecs === 0) return 'processing'; // real state is 'empty'
              if (totalMaterials === materials.length && totalSpecs === specs.length) return 'completed';
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
              globalThis.a = this;
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
              try {
                if (!prompt) {
                  throw new Error('Prompt is required to generate a picture for the activity.');
                }
                const response = await this.#suggestions.image({
                  prompt,
                  size: '1792x1024',
                  format: 'url'
                });
                this.#api.bearer(_session.sessionWrapper.user.token);
                const saveResponse = await this.#api.post(`/modules/drafts/${this.#learningModule.id}/activities/${this.id}/image`, {
                  url: response.url
                });
                this.picture = saveResponse.data.picture;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
                return this.picture;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async clearContent() {
              this.specs.clear();
              this.materials.clear();
              await this.#learningModule.saveDraft();
            }
            async save(specs) {
              await this.set(specs);
              return this.#learningModule.saveDraft();
            }
          }
          exports.Activity = Activity;
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
        hash: 1559896118,
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
            #questions;
            get questions() {
              return this.#questions;
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
        hash: 2487096461,
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
            #questions;
            get questions() {
              return this.#questions;
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
        hash: 409358871,
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
            properties = ['objective'];
            #api;
            suggestions;
            learningModule;
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
              this.properties.forEach(property => {
                output[property] = this[property];
              });
              return output;
            }
            async generate(notes, specs) {
              try {
                this.fetching = true;
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
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
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
        hash: 3787754979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _ = require("../");
          var _question = require("./question");
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
                    const questionModel = this.#questions[index] ?? new _question.ActivityQuestion(this.parent);
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
                if (!data[property]) return;
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
            async generate(notes) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'questions',
                  id: this.learningModule.id,
                  related: this.related,
                  notes
                });
                this.set(data);
                this.learningModule.saveDraft();
                this.trigger('specs.generated');
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

      /****************************************************************
      INTERNAL MODULE: ./item/activities/specs/multiple-choice/question
      ****************************************************************/

      ims.set('./item/activities/specs/multiple-choice/question', {
        hash: 2696396792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityQuestion = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _suggestions = require("../../../../suggestions");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/chat-sdk/api");
          class ActivityQuestion extends _model.ReactiveModel {
            #parent;
            suggestions;
            properties = ['question', 'options', 'correctAnswer'];
            #api;
            get valid() {
              console.log(this.question, this.options.length, this.correctAnswer);
              return !!this.question && this.options.length > 1 && !!this.correctAnswer;
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
              if (this.options.includes(option)) return;
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
            async generateAnswers() {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'answers',
                  id: this.learningModule.id,
                  question: this.question
                });
                await this.set({
                  options: data.options,
                  correctAnswer: data.correct_answer
                });
                this.learningModule.saveDraft();
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

      /**********************************************
      INTERNAL MODULE: ./item/activities/specs/spoken
      **********************************************/

      ims.set('./item/activities/specs/spoken', {
        hash: 2841528969,
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
              subject: ''
            };
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
                if (!value) return;
                this[property] = value;
              });
              if (change) this.trigger('change');
            }
            clear() {
              this.set(this.#defaultValues);
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
        hash: 1735014290,
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
                name: 'article',
                required: true
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
              fields: {}
            }, {
              id: 'debate',
              name: 'Debate',
              specs: ['objective', 'subject'],
              aiContent: ['title', 'description', 'objective']
            }, {
              id: 'character-talk',
              name: 'Character Talk',
              specs: ['objective', 'role'],
              aiContent: ['title', 'description', 'objective', 'role']
            }, {
              id: 'multiple-choice',
              name: 'Multiple-Choice',
              //specs: ['objective', 'related'],
              specs: ['questions'],
              materials: [],
              suggestions: 'questions',
              fields: ['questions']
            },
            // { id: 'written/spoken', name: 'Spoken' },
            {
              id: 'spoken',
              name: 'Spoken',
              aiContent: ['title', 'description', 'objective'],
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
        hash: 2708679814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignments = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          var _api = require("@bgroup/http-suite/api");
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
        hash: 1220091045,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _activities = require("./activities");
          var _provider = require("./provider");
          var _suggestions = require("../suggestions");
          var _collection = require("./assignments/collection");
          var _credits = require("../coins/credits");
          /*bundle*/
          class LearningModule extends _entities.Item {
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'pictureSuggestions', 'state', 'credits'];
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            get defaultLanguage() {
              // return languages.current;
              return 'es';
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
            #credits;
            get credits() {
              return this.#credits.getProperties();
            }
            set credits(value) {
              this.#credits.set(value);
              this.triggerEvent();
            }
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
                db: 'chat-api',
                storeName: 'Modules',
                provider: _provider.ModuleProvider
              });
              this.initialise();
              this.#suggestions = new _suggestions.Suggestions();
              this.reactiveProps(['fetchingDraft']);
              this.#activities = new _activities.Activities(this);
              this.#credits = new _credits.Credits();
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
            async set(data) {
              super.set(data);
              if (data.assignments) {
                this.#assignments.set(data.assignments);
              }
              if (!this.owner) this.owner = this.creator;
              if (data.credits) {
                this.#credits.set(data.credits);
              }
              if (data.activities && Array.isArray(data.activities)) {
                this.#activities.setItems(data.activities, true);
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
                  type: 'module'
                });
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                await this.set({
                  ...data,
                  id: data.id,
                  state: 'mudule-generated'
                });
                console.log(2, 'seteamos', this.getProperties());
                if (data.activities) {
                  this.activities.setItems(data.activities);
                }
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
              return response;
            }
            async refineActivities({
              observations
            }) {
              const data = {
                duration: this.duration,
                description: this.description,
                observations,
                target: this.target,
                objective: this.objective,
                id: this.id,
                audience: this.audience
              };
              const answer = await this.#suggestions.generate({
                type: 'activities',
                ...data,
                observations,
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
                title
              });
            }
            async publish(props) {
              this.type = 'module';
              super.publish(props);
            }
            async generatePicture(prompt = '') {
              try {
                if (!prompt) {
                  throw new Error('Prompt is required');
                }
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
            static async get(specs) {
              if (this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              } else {
                await module.isReady;
              }
              this.instances.set(specs.id, module);
              return module;
            }
            async getCredits() {
              try {
                const credits = await this.provider.getCredits();
                await this.set(credits);
                this.trigger('credits.change', 'add');
                return;
              } catch (e) {}
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/provider
      *******************************/

      ims.set('./item/provider', {
        hash: 882900164,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
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
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.get(`/modules/drafts/${id}`);
                if (!status) {
                  throw new Error('error getting module draft');
                }
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async delete() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const data = await this.#api.delete(`/modules/drafts/${this.#parent.id}`);
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async publish(specs = {}) {
              try {
                if (specs.type === 'draft') return this.saveDraft(specs);
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
                if (!response.status) {
                  throw new Error('error publishin module draft');
                }
                return response;
              } catch (e) {
                console.error(e);
              }
            }
            async saveDraft(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post(`/modules/drafts`, specs);
                if (!response.status) {
                  throw new Error('error saving module draft');
                }
                return response;
              } catch (e) {
                console.error(e);
              }
            }
            async getCredits() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post(`/modules/drafts/${this.#parent.id}/coins/consume`, {});
                if (!response.status) {
                  throw new Error('error saving module draft');
                }
                return response.data;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /***********************************
      INTERNAL MODULE: ./suggestions/index
      ***********************************/

      ims.set('./suggestions/index', {
        hash: 3534152796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
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
                const {
                  status,
                  data
                } = await this.#api.post('/suggestions', {
                  ...specs
                });
                if (!status) throw new Error('error generating suggestions');
                return data;
              } catch (e) {
                throw new Error(e.message);
              }
            }
            async image(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post('/images/generate', {
                  language: 'es',
                  ...specs
                });
                if (!response.status) throw new Error('error generating image');
                /**
                 * openai response return an array, the current model (dalle-3) generates always a unique
                 * image, so we return always the first element of the array
                 */
                return response.data[0];
              } catch (e) {
                throw new Error(e.message);
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwibGlzdCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJzdGF0dXMiLCJkYXRhIiwiZ2V0Iiwicm91dGUiLCJFcnJvciIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJsb2FkIiwiaXNSZWFkeSIsImVsZW1lbnRzIiwidmFsdWVzIiwiZm9yRWFjaCIsImluc3RhbmNlIiwiX3N1Z2dlc3Rpb25zIiwiX3R5cGVzIiwiQWN0aXZpdGllcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsIm1hcCIsInR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInZhbGlkIiwibGVuZ3RoIiwiZXZlcnkiLCJzdGF0ZSIsIlN1Z2dlc3Rpb25zIiwic2V0SXRlbXMiLCJjbGVhbiIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJ0cmlnZ2VyRXZlbnQiLCJzYXZlVGltZW91dCIsInJlb3JkZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2F2ZURyYWZ0IiwibG9nIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiX3V1aWQiLCJkYXRhVHlwZSIsInNldHRpbmdzVHlwZSIsImxhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJ0b3RhbFNwZWNzIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJyZWFjdGl2ZVByb3BzIiwidjQiLCJBY3Rpdml0eVNwZWNzRmFjdG9yeSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiZ2xvYmFsVGhpcyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJvdXRwdXQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJhY3Rpdml0eUlkIiwibWVzc2FnZSIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInJlc3BvbnNlIiwiaW1hZ2UiLCJzaXplIiwiZm9ybWF0Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInVybCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFuZ2UiLCJwcm9jZXNzIiwiQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIl8iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiVFlQRVMiLCJBY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwic3Bva2VuIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsImlzVmFsaWQiLCJoYXNWYWx1ZXMiLCJfcXVlc3Rpb24iLCJxdWVzdGlvbkxhYmVscyIsInF1ZXN0aW9uIiwicXVlc3Rpb25Nb2RlbCIsIkFjdGl2aXR5UXVlc3Rpb24iLCJhZGRBbnN3ZXIiLCJhbnN3ZXIiLCJ3YXJuIiwiYWRkT3B0aW9uIiwicmVsYXRlZCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb24iLCJyZW1vdmVPcHRpb24iLCJzcGxpY2UiLCJzZXRDb3JyZWN0IiwiZ2VuZXJhdGVBbnN3ZXJzIiwiZGVmYXVsdFZhbHVlcyIsImNyaXRlcmlhIiwidGFzayIsInN1YmplY3QiLCJUeXBlcyIsImRlcGVuZGVuY2llcyIsImZpZWxkcyIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiZnJvbSIsImNsYXNzcm9vbXMiLCJNb2R1bGVBc3NpZ25tZW50IiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiX2FjdGl2aXRpZXMiLCJfY29sbGVjdGlvbiIsIl9jcmVkaXRzIiwiSXRlbSIsImFjdGl2aXRpZXMiLCJzYXZlZCIsImNvbXBsZXRlZCIsImNyZWRpdHMiLCJhc3NpZ25tZW50cyIsImluc3RhbmNlcyIsIk1vZHVsZVByb3ZpZGVyIiwiaW5pdGlhbGlzZSIsIm9uIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJtb2RlbCIsInByb2Nlc3NMb2FkIiwib3duZXIiLCJjcmVhdG9yIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJwdWJsaXNoIiwicmVmaW5lQWN0aXZpdGllcyIsIm9ic2VydmF0aW9ucyIsImR1cmF0aW9uIiwidGFyZ2V0IiwiYXVkaWVuY2UiLCJ0b3RhbEFjdGl2aXRpZXMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsImFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVN1Z2VzdGlvbnMiLCJwcm9wcyIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2V0Q3JlZGl0cyIsImdldERyYWZ0Il0sInNvdXJjZXMiOlsiL2NvaW5zL2NyZWRpdHMudHMiLCIvY29pbnMvaW5kZXgudHMiLCIvY29pbnMudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL2ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvaXRlbS9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NvbnZlcnNhdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3R5cGVzLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvaXRlbS9pbmRleC50cyIsIi9pdGVtL3Byb3ZpZGVyLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDN0M7O1VBQ0FDLE9BQUEsQ0FBQUosT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQUYsTUFBQSxHQUFBQyxPQUFBO1VBRUEsTUFBTU0sU0FBVSxTQUFRUCxNQUFBLENBQUFHLGFBQWE7WUFDcENDLFlBQVlJLFlBQW9CO2NBQy9CLEtBQUssQ0FBQztnQkFBRUMsS0FBSyxFQUFFRCxZQUFZO2dCQUFFSCxVQUFVLEVBQUUsQ0FBQyxPQUFPO2NBQUMsQ0FBRSxDQUFDO1lBQ3REO1lBRUFLLE9BQU9BLENBQUNDLE1BQWMsR0FFbkI7Ozs7Ozs7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