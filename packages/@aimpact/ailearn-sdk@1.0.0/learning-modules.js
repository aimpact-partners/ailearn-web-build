System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.46.dev-16/config", "@aimpact/chat-sdk@1.0.0/session", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactHttpSuite103Api) {
      dependency_3 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0046Dev16Config) {
      dependency_4 = _aimpactAilearnApp0046Dev16Config;
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['uuid', dependency_6], ['@aimpact/chat-sdk/api', dependency_7], ['@beyond-js/kernel/core', dependency_8]]);
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
        hash: 2747266104,
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
        hash: 710206721,
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
        hash: 1607690839,
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
            async generate(notes) {
              try {
                this.fetching = true;
                const data = await this.suggestions.generate({
                  type: 'questions',
                  id: this.learningModule.id,
                  related: this.related,
                  notes
                });
                if (data.error) {
                  return data;
                }
                this.set(data);
                this.learningModule.saveDraft();
                this.trigger('specs.generated');
                return data;
              } catch (e) {
                throw new Error(e.message);
              } finally {
                this.fetching = false;
              }
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
        hash: 3609334271,
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
                console.log(22, question);
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
        hash: 1395086005,
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
        hash: 661325652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _activities = require("./activities");
          var _provider = require("./provider");
          var _suggestions = require("../suggestions");
          var _collection = require("./assignments/collection");
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
              if (specs?.id && this.instances.has(specs.id)) {
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
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/provider
      *******************************/

      ims.set('./item/provider', {
        hash: 30393467,
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
        hash: 644682278,
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
                if (error.includes('The draft does not have the following parameters to process the suggestion:')) {
                  return {
                    error: 'INCOMPLETE_MODULE',
                    fields: error.split(':')[1]
                  };
                }
              }
              return response.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJvdXRlIiwic3RhdHVzIiwiZGF0YSIsImdldCIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiZWxlbWVudCIsInR5cGUiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIk1hcCIsImxvYWQiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIm5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJmaWVsZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJmb3JtYXQiLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsIndhcm4iLCJhZGRPcHRpb24iLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsIm9wdGlvbiIsIk5hTiIsInJlbW92ZU9wdGlvbiIsInNwbGljZSIsInNldENvcnJlY3QiLCJsb2ciLCJkZWZhdWx0VmFsdWVzIiwiY3JpdGVyaWEiLCJ0YXNrIiwiYXNzZXNzbWVudCIsIlR5cGVzIiwiZGVwZW5kZW5jaWVzIiwiTW9kdWxlQXNzaWdubWVudHMiLCJmcm9tIiwiY2xhc3Nyb29tcyIsIk1vZHVsZUFzc2lnbm1lbnQiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwicmVzcG9uc2UiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJJdGVtIiwiYWN0aXZpdGllcyIsInNhdmVkIiwiY29tcGxldGVkIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJhcmdzIiwiY3JlZGl0cyIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicHJvcHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnN1bWVDb2lucyIsImNsb25lIiwiZ2V0RHJhZnQiLCJvbndlcklkIiwiZW50aXR5Iiwib3JnYW5pemF0aW9uSWQiLCJ0ZXh0Iiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2NvaW5zL2NyZWRpdHMudHMiLCIvY29pbnMvaW5kZXgudHMiLCIvY29pbnMudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL2ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvaXRlbS9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NvbnZlcnNhdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy9vcHRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvaXRlbS9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvaXRlbS50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2l0ZW0vcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTU87VUFBVSxNQUFPQyxPQUFRLFNBQVFGLE1BQUEsQ0FBQUcsYUFBc0I7WUFDN0RDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPO2NBQUMsQ0FBRSxDQUFDO1lBQzdDOztVQUNBQyxPQUFBLENBQUFKLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFGLE1BQUEsR0FBQUMsT0FBQTtV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