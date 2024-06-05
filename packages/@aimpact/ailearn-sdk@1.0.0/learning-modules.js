System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.46.dev-07/config", "@aimpact/chat-sdk@1.0.0/session", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0046Dev07Config) {
      dependency_4 = _aimpactAilearnApp0046Dev07Config;
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.46.dev-07"]]);
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