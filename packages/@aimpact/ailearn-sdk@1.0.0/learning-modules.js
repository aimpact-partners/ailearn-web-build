System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.46.dev-09/config", "@aimpact/chat-sdk@1.0.0/session", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0046Dev09Config) {
      dependency_4 = _aimpactAilearnApp0046Dev09Config;
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
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
        hash: 3795292617,
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
        hash: 751190992,
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
                db: 'chat-api',
                storeName: 'Modules',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJvdXRlIiwic3RhdHVzIiwiZGF0YSIsImdldCIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiZWxlbWVudCIsInR5cGUiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIk1hcCIsImxvYWQiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJsb2ciLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIm5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJmaWVsZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJmb3JtYXQiLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsIndhcm4iLCJhZGRPcHRpb24iLCJyZWxhdGVkIiwiZ2VuZXJhdGVBbnN3ZXJzIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsIm9wdGlvbiIsIk5hTiIsInJlbW92ZU9wdGlvbiIsInNwbGljZSIsInNldENvcnJlY3QiLCJkZWZhdWx0VmFsdWVzIiwiY3JpdGVyaWEiLCJ0YXNrIiwiYXNzZXNzbWVudCIsIlR5cGVzIiwiZGVwZW5kZW5jaWVzIiwiTW9kdWxlQXNzaWdubWVudHMiLCJmcm9tIiwiY2xhc3Nyb29tcyIsIk1vZHVsZUFzc2lnbm1lbnQiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwicmVzcG9uc2UiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJJdGVtIiwiYWN0aXZpdGllcyIsInNhdmVkIiwiY29tcGxldGVkIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJhcmdzIiwiY3JlZGl0cyIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicHJvcHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnN1bWVDb2lucyIsImNsb25lIiwiZ2V0RHJhZnQiLCJvbndlcklkIiwiZW50aXR5Iiwib3JnYW5pemF0aW9uSWQiLCJ0ZXh0Iiwic3BsaXQiLCJjb2RlIl0sInNvdXJjZXMiOlsiL2NvaW5zL2NyZWRpdHMudHMiLCIvY29pbnMvaW5kZXgudHMiLCIvY29pbnMudHMiLCIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvZHJhZnQtaW1wcm92ZW1lbnRzLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL2ludHJvZHVjdGlvbi9lbGVtZW50LnRzIiwiL2ludHJvZHVjdGlvbi9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvaXRlbS9hY3Rpdml0aWVzL21hdGVyaWFscy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NvbnZlcnNhdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy9vcHRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvaXRlbS9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvaXRlbS50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2l0ZW0vcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTU87VUFBVSxNQUFPQyxPQUFRLFNBQVFGLE1BQUEsQ0FBQUcsYUFBc0I7WUFDN0RDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPO2NBQUMsQ0FBRSxDQUFDO1lBQzdDOztVQUNBQyxPQUFBLENBQUFKLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFGLE1BQUEsR0FBQUMsT0FBQTtV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