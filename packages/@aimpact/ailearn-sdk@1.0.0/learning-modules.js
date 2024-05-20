System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32-dev.48/config", "@aimpact/chat-sdk@1.0.0/session", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0032Dev48Config) {
      dependency_4 = _aimpactAilearnApp0032Dev48Config;
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
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
        hash: 1925933779,
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
        hash: 3520088824,
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
        hash: 1977360301,
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
              this.properties.forEach(property => {
                output[property] = this[property];
              });
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
                console.log(30, data);
                await this.set(data);
                this.learningModule.saveDraft();
                this.trigger('specs.generated');
              } catch (e) {
                console.log(31, e);
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
        hash: 1739687290,
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
        hash: 458677107,
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
        hash: 4113931183,
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
          var _credits = require("../coins/credits");
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
        hash: 1581371000,
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
              if (!response.status) throw new Error('error generating image');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJvdXRlIiwic3RhdHVzIiwiZGF0YSIsImdldCIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiZWxlbWVudCIsInR5cGUiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIk1hcCIsImxvYWQiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImNsZWFuIiwiYWN0aXZpdHkiLCJpbmRleCIsImhhcyIsIkFjdGl2aXR5IiwicmVtb3ZlIiwidHJpZ2dlciIsImdldEl0ZW1zIiwicHVzaCIsImdldERhdGEiLCJjbGVhciIsImFkZCIsIm1hbnVhbCIsImxhbmd1YWdlIiwidHJpZ2dlckV2ZW50Iiwic2F2ZVRpbWVvdXQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNhdmVEcmFmdCIsImxvZyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl91dWlkIiwiZGF0YVR5cGUiLCJzZXR0aW5nc1R5cGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJtYXRlcmlhbHMiLCJhaUNvbXBsZXRlZCIsImFpQ29udGVudCIsImZpZWxkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJyZXF1aXJlZCIsIm5hbWUiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIkFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsImZpZWxkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsImluY2x1ZGVzT2JqZWN0aXZlIiwib2JqZWN0aXZlIiwicmVhY3RpdmVQcm9wcyIsInY0IiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJBY3Rpdml0eU1hdGVyaWFscyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJvdXRwdXQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJhY3Rpdml0eUlkIiwibWVzc2FnZSIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInJlc3BvbnNlIiwiaW1hZ2UiLCJzaXplIiwiZm9ybWF0Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInVybCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFyYWN0ZXIiLCJjaGFuZ2UiLCJwcm9jZXNzIiwiQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIl8iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiVFlQRVMiLCJBY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwic3Bva2VuIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsImlzVmFsaWQiLCJoYXNWYWx1ZXMiLCJfcXVlc3Rpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImdlbmVyYXRlQW5zd2VycyIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJjcmVkaXRzIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJvd25lciIsImNyZWF0b3IiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsInB1Ymxpc2giLCJyZWZpbmVBY3Rpdml0aWVzIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJhdWRpZW5jZSIsInRvdGFsQWN0aXZpdGllcyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwiYWN0aXZpdHlTdWdnZXN0aW9ucyIsImdlbmVyYXRlU3VnZXN0aW9ucyIsInByb3BzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb25zdW1lQ29pbnMiLCJjbG9uZSIsImFyZ3MiLCJnZXREcmFmdCIsIm9ud2VySWQiLCJlbnRpdHkiLCJ0ZXh0Iiwic3BsaXQiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL29wdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDN0M7O1VBQ0FDLE9BQUEsQ0FBQUosT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQUYsTUFBQSxHQUFBQyxPQUFBO1VBRUEsTUFBTU0sU0FBVSxTQUFR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