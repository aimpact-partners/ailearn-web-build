System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.36/config", "@aimpact/chat-sdk@1.0.0/session", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0036Config) {
      dependency_4 = _aimpactAilearnApp0036Config;
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.36"]]);
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
        hash: 3620489736,
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
        hash: 1630696778,
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
                if (data.error) {
                  return data;
                }
                // this.set(data);
                // this.learningModule.saveDraft();
                // this.trigger('specs.generated');
                return data;
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
        hash: 2895857568,
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
        hash: 3510504061,
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
                console.log(0.1, this[property], property, acc);
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
        hash: 239118327,
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
              return this.#api.post(`/community/modules/${moduleId}/clone`, {
                owner: onwerId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJvdXRlIiwic3RhdHVzIiwiZGF0YSIsImdldCIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiZWxlbWVudCIsInR5cGUiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIk1hcCIsImxvYWQiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJsb2ciLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIm5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJmaWVsZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJpbmNsdWRlc09iamVjdGl2ZSIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJmb3JtYXQiLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9ucyIsInF1ZXN0aW9uTGFiZWxzIiwicXVlc3Rpb24iLCJxdWVzdGlvbk1vZGVsIiwiQWN0aXZpdHlRdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlciIsIndhcm4iLCJhZGRPcHRpb24iLCJyZWxhdGVkIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsIm9wdGlvbiIsIk5hTiIsInJlbW92ZU9wdGlvbiIsInNwbGljZSIsInNldENvcnJlY3QiLCJnZW5lcmF0ZUFuc3dlcnMiLCJkZWZhdWx0VmFsdWVzIiwiY3JpdGVyaWEiLCJ0YXNrIiwiYXNzZXNzbWVudCIsIlR5cGVzIiwiZGVwZW5kZW5jaWVzIiwiTW9kdWxlQXNzaWdubWVudHMiLCJmcm9tIiwiY2xhc3Nyb29tcyIsIk1vZHVsZUFzc2lnbm1lbnQiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwicmVzcG9uc2UiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJJdGVtIiwiYWN0aXZpdGllcyIsInNhdmVkIiwiY29tcGxldGVkIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJhcmdzIiwiY3JlZGl0cyIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicHJvcHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnN1bWVDb2lucyIsImNsb25lIiwiZ2V0RHJhZnQiLCJvbndlcklkIiwiZW50aXR5IiwidGV4dCIsInNwbGl0IiwiY29kZSJdLCJzb3VyY2VzIjpbIi9jb2lucy9jcmVkaXRzLnRzIiwiL2NvaW5zL2luZGV4LnRzIiwiL2NvaW5zLnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMvb3B0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9zcG9rZW4udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3R5cGVzLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvaXRlbS9pbmRleC50cyIsIi9pdGVtL3Byb3ZpZGVyLnRzIiwiL3N1Z2dlc3Rpb25zL2luZGV4LnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU1PO1VBQVUsTUFBT0MsT0FBUSxTQUFRRixNQUFBLENBQUFHLGFBQXNCO1lBQzdEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTztjQUFDLENBQUUsQ0FBQztZQUM3Qzs7VUFDQUMsT0FBQSxDQUFBSixPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBRixNQUFBLEdBQUFDLE9BQUE7VUFFQSxNQUFNTSxTQUFVLFNB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