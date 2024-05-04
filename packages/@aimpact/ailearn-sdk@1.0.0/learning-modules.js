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
        hash: 483847178,
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
              this.orderBy = 'timeCreted';
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /*************************************
      INTERNAL MODULE: ./collection/provider
      *************************************/

      ims.set('./collection/provider', {
        hash: 3564997868,
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
        hash: 3085164899,
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
        hash: 3698290823,
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
              if (totalMaterials === 0 && !this.specs.valid) return 'processing'; // real state is 'empty'
              if (totalMaterials === materials.length && this.specs.valid) return 'completed';
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
        hash: 3318640094,
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
        hash: 1531529046,
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
        hash: 3387576425,
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
        hash: 288873432,
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
        hash: 2842284958,
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
        hash: 1142996273,
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
        hash: 3395857236,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJvdXRlIiwic3RhdHVzIiwiZGF0YSIsImdldCIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiZWxlbWVudCIsInR5cGUiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIk1hcCIsImxvYWQiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImNsZWFuIiwiYWN0aXZpdHkiLCJpbmRleCIsImhhcyIsIkFjdGl2aXR5IiwicmVtb3ZlIiwidHJpZ2dlciIsImdldEl0ZW1zIiwicHVzaCIsImdldERhdGEiLCJjbGVhciIsImFkZCIsIm1hbnVhbCIsImxhbmd1YWdlIiwidHJpZ2dlckV2ZW50Iiwic2F2ZVRpbWVvdXQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNhdmVEcmFmdCIsImxvZyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl91dWlkIiwiZGF0YVR5cGUiLCJzZXR0aW5nc1R5cGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJtYXRlcmlhbHMiLCJhaUNvbXBsZXRlZCIsImFpQ29udGVudCIsImZpZWxkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJyZXF1aXJlZCIsIm5hbWUiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIkFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsInByZXBhcmVkIiwiaW5jbHVkZXNPYmplY3RpdmUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib2JqZWN0aXZlIiwicmVhY3RpdmVQcm9wcyIsInY0IiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJBY3Rpdml0eU1hdGVyaWFscyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJvdXRwdXQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJhY3Rpdml0eUlkIiwibWVzc2FnZSIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInJlc3BvbnNlIiwiaW1hZ2UiLCJzaXplIiwiZm9ybWF0Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInVybCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFyYWN0ZXIiLCJjaGFuZ2UiLCJwcm9jZXNzIiwiQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIl8iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiVFlQRVMiLCJBY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwic3Bva2VuIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsImlzVmFsaWQiLCJoYXNWYWx1ZXMiLCJfcXVlc3Rpb24iLCJxdWVzdGlvbkxhYmVscyIsInF1ZXN0aW9uIiwicXVlc3Rpb25Nb2RlbCIsIkFjdGl2aXR5UXVlc3Rpb24iLCJhZGRBbnN3ZXIiLCJhbnN3ZXIiLCJ3YXJuIiwiYWRkT3B0aW9uIiwicmVsYXRlZCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb24iLCJOYU4iLCJyZW1vdmVPcHRpb24iLCJzcGxpY2UiLCJzZXRDb3JyZWN0IiwiZ2VuZXJhdGVBbnN3ZXJzIiwiZGVmYXVsdFZhbHVlcyIsImNyaXRlcmlhIiwidGFzayIsInN1YmplY3QiLCJUeXBlcyIsImRlcGVuZGVuY2llcyIsImZpZWxkcyIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiZnJvbSIsImNsYXNzcm9vbXMiLCJNb2R1bGVBc3NpZ25tZW50IiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiX2FjdGl2aXRpZXMiLCJfY29sbGVjdGlvbiIsIl9jcmVkaXRzIiwiSXRlbSIsImFjdGl2aXRpZXMiLCJzYXZlZCIsImNvbXBsZXRlZCIsImNyZWRpdHMiLCJhc3NpZ25tZW50cyIsImluc3RhbmNlcyIsIk1vZHVsZVByb3ZpZGVyIiwiaW5pdGlhbGlzZSIsIm9uIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJwcm9jZXNzTG9hZCIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJvYnNlcnZhdGlvbnMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicHJvcHMiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnN1bWVDb2lucyIsImNsb25lIiwiYXJncyIsImdldERyYWZ0Iiwib253ZXJJZCIsImVudGl0eSJdLCJzb3VyY2VzIjpbIi9jb2lucy9jcmVkaXRzLnRzIiwiL2NvaW5zL2luZGV4LnRzIiwiL2NvaW5zLnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTU87VUFBVSxNQUFPQyxPQUFRLFNBQVFGLE1BQUEsQ0FBQUcsYUFBc0I7WUFDN0RDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPO2NBQUMsQ0FBRSxDQUFDO1lBQzdDOztVQUNBQyxPQUFBLENBQUFKLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFGLE1BQUEsR0FBQUMsT0FBQTtVQUVBLE1BQU1NLFNBQVUsU0FBUVAsTUFBQSxDQUFBRyxhQUFhO1lBQ3BDQyxZQUFZSSxZQUFvQjtjQUMvQixLQUFLLENBQUM7Z0JBQUVDLEtBQUssRUFBRUQsWUFBWTtnQkFBRUgsVUFBVSxFQUFFLENBQUMsT0FBTztjQUFDLENBQUUsQ0FBQztZQUN0RDtZQUVBSyxPQUFPQSxDQUFDQyxNQUFjLEdBRW5COzs7Ozs7Ozs7Ozs7VUNUSjs7VUFFQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFQLE9BQUE7WUFDQVEsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLFNBQUEsR0FBQWQsT0FBQTtVQUVBLElBQUFlLEtBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixTQUFBLEdBQUFoQixPQUFBO1VBRU87VUFBVSxNQUFPaUIsZUFBZ0IsU0FBUUgsU0FBQSxDQUFBSSxVQUFVO1lBQ3pEO1lBQ0FmLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQ0xnQixTQUFTLEVBQUUsU0FBUztnQkFDcEJDLEVBQUUsRUFBRSxVQUFVO2dCQUNkQyxJQUFJLEVBQUVOLEtBQUEsQ0FBQU8sY0FBYztnQkFDcEJDLFFBQVEsRUFBRVAsU0FBQSxDQUFBUSxlQUFlO2dCQUN6QkMsT0FBTyxFQUFFO2VBQ1QsQ0FBQztjQUNGLElBQUksQ0FBQ0MsT0FBTyxHQUFHLFlBQVk7WUFDNUI7O1VBQ0FyQixPQUFBLENBQUFZLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkQsSUFBQWxCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyQixJQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLE9BQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsUUFBQSxHQUFBN0IsT0FBQTtVQUdNLE1BQU93QixlQUFnQixTQUFRekIsTUFBQSxDQUFBRyxhQUE4QjtZQUNsRSxDQUFBNEIsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUDVCLFlBQVk0QixNQUFzQjtjQUNqQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUMsQ0FBQUwsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUFNLElBQUksR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDcEIsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1MsTUFBTSxDQUFDVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsSUFBSUosS0FBSyxDQUFDSyxLQUFLLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxNQUFNO2tCQUFFQyxNQUFNO2tCQUFFQztnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDZ0IsR0FBRyxDQUFDLG9CQUFvQixDQUFDO2dCQUNsRSxPQUFPO2tCQUFFRixNQUFNO2tCQUFFQyxJQUFJLEVBQUU7b0JBQUVFLE9BQU8sRUFBRUYsSUFBSSxDQUFDRyxLQUFLLElBQUk7a0JBQUU7Z0JBQUUsQ0FBRTs7Y0FFdkQsTUFBTTtnQkFBRUosTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDZ0IsR0FBRyxDQUFDLFdBQVdSLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLENBQUM7Y0FFdEUsT0FBTztnQkFBRUMsTUFBTTtnQkFBRUMsSUFBSSxFQUFFO2tCQUFFRSxPQUFPLEVBQUVGLElBQUksQ0FBQ0csS0FBSyxJQUFJO2dCQUFFO2NBQUUsQ0FBRTtZQUN2RCxDQUFDO1lBRUQsTUFBTUMsV0FBV0EsQ0FBQ0MsRUFBRTtjQUNuQixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBcEIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztnQkFFM0MsTUFBTTtrQkFBRUUsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQ3FCLE1BQU0sQ0FBQyxtQkFBbUJELEVBQUUsRUFBRSxDQUFDO2dCQUV4RSxJQUFJLENBQUNOLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlRLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzs7Z0JBR3pDLE9BQU9QLElBQUk7ZUFDWCxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0FoRCxPQUFBLENBQUFtQixlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7O1VDN0NEOztVQUVBYixNQUFBLENBQUFDLGNBQUEsQ0FBQVAsT0FBQTtZQUNBUSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFGLE1BQUEsQ0FBQUMsY0FBQSxDQUFBUCxPQUFBO1lBQ0FRLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUYsTUFBQSxDQUFBQyxjQUFBLENBQUFQLE9BQUE7WUFDQVEsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBRixNQUFBLENBQUFDLGNBQUEsQ0FBQVAsT0FBQTtZQUNBUSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBS00sTUFBT3dELG1CQUFvQixTQUFRekQsTUFBQSxDQUFBRyxhQUFtQztZQUkzRSxDQUFBNkIsTUFBTztZQUNQM0IsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7WUFDcENELFlBQVlzRCxPQUE2QixFQUFFMUIsTUFBaUM7Y0FDM0UsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJMEIsT0FBTyxDQUFDQyxJQUFJLEtBQUssWUFBWSxFQUFFRCxPQUFPLENBQUM1QyxLQUFLLEdBQUc4QyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsT0FBTyxDQUFDNUMsS0FBSyxDQUFDO2NBQzVFLElBQUksQ0FBQ2dELEdBQUcsQ0FBQ0osT0FBTyxDQUFDO1lBQ2xCOztVQUNBcEQsT0FBQSxDQUFBbUQsbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJELElBQUF6RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkIsUUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE0QixPQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTJCLElBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBOEQsUUFBQSxHQUFBOUQsT0FBQTtVQUtNLE1BQU8rRCxZQUFhLFNBQVFoRSxNQUFBLENBQUFHLGFBQTRCO1lBQzdELENBQUE2QixNQUFPO1lBQ1AsQ0FBQUQsR0FBSTtZQUVKLENBQUFrQixLQUFNLEdBQUcsSUFBSWdCLEdBQUcsRUFBRTtZQUNsQixJQUFJaEIsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQTdDLFlBQVk0QixNQUFpQztjQUM1QyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNKLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1lBQ2hEO1lBRUEsTUFBTVUsR0FBR0EsQ0FBQ1ksSUFBWTtjQUNyQixPQUFPLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNGLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDO1lBQzdCO1lBRUEsTUFBTU8sSUFBSUEsQ0FBQTtjQUNULElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUNDLE9BQU87Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQW5DLE1BQU8sQ0FBQ21CLEVBQUUsRUFBRTtrQkFDckIsTUFBTSxJQUFJRSxLQUFLLENBQUMsbUNBQW1DLENBQUM7O2dCQUdyRCxJQUFJLENBQUMsQ0FBQXRCLEdBQUksQ0FBQ1MsTUFBTSxDQUFDVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBQzNDLE1BQU07a0JBQUVFLE1BQU07a0JBQUVDO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZixHQUFJLENBQUNnQixHQUFHLENBQUMsd0JBQXdCLElBQUksQ0FBQyxDQUFBZixNQUFPLENBQUNtQixFQUFFLEVBQUUsQ0FBQztnQkFFdkYsSUFBSSxDQUFDTixNQUFNLEVBQUU7a0JBQ1osTUFBTSxJQUFJUSxLQUFLLENBQUMsd0JBQXdCLENBQUM7O2dCQUcxQyxNQUFNZSxRQUFRLEdBQTJCeEQsTUFBTSxDQUFDeUQsTUFBTSxDQUFDdkIsSUFBSSxDQUFDc0IsUUFBUSxDQUFDO2dCQUVyRUEsUUFBUSxDQUFDRSxPQUFPLENBQUNaLE9BQU8sSUFBRztrQkFDMUIsTUFBTWEsUUFBUSxHQUFHLElBQUlSLFFBQUEsQ0FBQU4sbUJBQW1CLENBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTFCLE1BQU8sQ0FBQztrQkFDL0QsSUFBSSxDQUFDLENBQUFpQixLQUFNLENBQUNhLEdBQUcsQ0FBQ0osT0FBTyxDQUFDQyxJQUFJLEVBQUVZLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDO2VBQ0YsQ0FBQyxPQUFPakIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRUYsQ0FBQyxDQUFDOztZQUVoRDs7VUFDQWhELE9BQUEsQ0FBQTBELFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7VUhwREQ7O1VBRUFwRCxNQUFBLENBQUFDLGNBQUEsQ0FBQVAsT0FBQTtZQUNBUSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VJSkEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJCLElBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBNEIsT0FBQSxHQUFBNUIsT0FBQTtVQUdBLElBQUF1RSxZQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQWUsS0FBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQXdFLE1BQUEsR0FBQXhFLE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT3lFLFVBQVcsU0FBUTFFLE1BQUEsQ0FBQUcsYUFBMEI7WUFDekQsQ0FBQXdFLGNBQWU7WUFDZixDQUFBNUMsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFDUCxDQUFBNEMsV0FBWTtZQUNaLENBQUEzQixLQUFNLEdBQW1DLElBQUlnQixHQUFHLEVBQUU7WUFDbEQsSUFBSWhCLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDb0IsTUFBTSxFQUFFLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDbkU7WUFFQSxJQUFJQyxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQWhDLEtBQU07WUFDbkI7WUFFQSxJQUFJaUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU9ULE1BQUEsQ0FBQVUsYUFBYSxDQUFDbEMsS0FBSztZQUMzQjtZQUVBLElBQUltQyxLQUFLQSxDQUFBO2NBQ1IsSUFBSSxJQUFJLENBQUNuQyxLQUFLLENBQUNvQyxNQUFNLEtBQUssQ0FBQyxFQUFFLE9BQU8sS0FBSztjQUN6QyxPQUFPLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ3FDLEtBQUssQ0FBQ2hFLElBQUksSUFBSUEsSUFBSSxDQUFDaUUsS0FBSyxLQUFLLFdBQVcsQ0FBQztZQUM1RDtZQUVBbkYsWUFBWXVFLGNBQThCO2NBQ3pDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBNUMsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQXNDLGNBQWUsR0FBR0EsY0FBYztjQUNyQyxJQUFJLENBQUMsQ0FBQUMsV0FBWSxHQUFHLElBQUlKLFlBQUEsQ0FBQWdCLFdBQVcsRUFBRTtZQUN0QztZQUVBQyxRQUFRQSxDQUFDM0MsSUFBSSxFQUFFNEMsS0FBSyxHQUFHLEtBQUs7Y0FDM0I1QyxJQUFJLENBQUN3QixPQUFPLENBQUMsT0FBT3FCLFFBQVEsRUFBRUMsS0FBSyxLQUFJO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxDQUFBM0MsS0FBTSxDQUFDNEMsR0FBRyxDQUFDRixRQUFRLENBQUN4QyxFQUFFLENBQUMsRUFBRTtrQkFDakMsTUFBTTdCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQTJCLEtBQU0sQ0FBQ0YsR0FBRyxDQUFDNEMsUUFBUSxDQUFDeEMsRUFBRSxDQUFFO2tCQUMxQzdCLElBQUksQ0FBQ3dDLEdBQUcsQ0FBQzZCLFFBQVEsQ0FBQztrQkFDbEI7O2dCQUVELE1BQU1wQixRQUFRLEdBQUcsSUFBSXZELEtBQUEsQ0FBQThFLFFBQVEsQ0FBQztrQkFBRSxHQUFHSCxRQUFRO2tCQUFFQyxLQUFLO2tCQUFFakIsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBQTtnQkFBZSxDQUFFLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxDQUFBMUIsS0FBTSxDQUFDYSxHQUFHLENBQUNTLFFBQVEsQ0FBQ3BCLEVBQUUsRUFBRW9CLFFBQVEsQ0FBQztjQUN2QyxDQUFDLENBQUM7WUFDSDtZQUVBd0IsTUFBTUEsQ0FBQzVDLEVBQUU7Y0FDUixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQzRDLEdBQUcsQ0FBQzFDLEVBQUUsQ0FBQyxFQUFFO2NBQzFCLElBQUksQ0FBQyxDQUFBRixLQUFNLENBQUNHLE1BQU0sQ0FBQ0QsRUFBRSxDQUFDO2NBQ3RCLElBQUksQ0FBQzZDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdEIsT0FBTyxJQUFJO1lBQ1o7WUFFQUMsUUFBUUEsQ0FBQTtjQUNQLE1BQU1uRCxJQUFJLEdBQTBCLEVBQUU7Y0FDdEMsSUFBSSxDQUFDLENBQUFHLEtBQU0sQ0FBQ3FCLE9BQU8sQ0FBQ2hELElBQUksSUFBSXdCLElBQUksQ0FBQ29ELElBQUksQ0FBQzVFLElBQUksQ0FBQzZFLE9BQU8sRUFBRSxDQUFDLENBQUM7Y0FDdEQsT0FBT3JELElBQUk7WUFDWjtZQUVBc0QsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBbkQsS0FBTSxDQUFDbUQsS0FBSyxFQUFFO2NBQ25CLElBQUksQ0FBQ0osT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBLE1BQU1LLEdBQUdBLENBQUMxQyxJQUFJLEVBQUUyQyxNQUFNLEdBQUcsS0FBSztjQUM3QixNQUFNWCxRQUFRLEdBQUcsSUFBSTNFLEtBQUEsQ0FBQThFLFFBQVEsQ0FBQztnQkFDN0JuQyxJQUFJO2dCQUNKMkMsTUFBTTtnQkFDTjNCLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQUEsY0FBZTtnQkFDcENLLEtBQUssRUFBRSxJQUFJLENBQUMvQixLQUFLLENBQUNvQyxNQUFNO2dCQUN4QmtCLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTVCLGNBQWUsQ0FBQzRCO2VBQy9CLENBQUM7Y0FDRixNQUFNWixRQUFRLENBQUN4QixPQUFPO2NBQ3RCLElBQUksQ0FBQyxDQUFBbEIsS0FBTSxDQUFDYSxHQUFHLENBQUM2QixRQUFRLENBQUN4QyxFQUFFLEVBQUV3QyxRQUFRLENBQUM7Y0FFdEMsSUFBSSxDQUFDLENBQUFoQixjQUFlLENBQUM2QixZQUFZLEVBQUU7Y0FDbkMsT0FBT2IsUUFBUTtZQUNoQjtZQUVBLENBQUFjLFdBQVk7WUFDWixNQUFNQyxPQUFPQSxDQUFDekQsS0FBSztjQUNsQkEsS0FBSyxDQUFDcUIsT0FBTyxDQUFDLENBQUNoRCxJQUFJLEVBQUVzRSxLQUFLLEtBQUk7Z0JBQzdCdEUsSUFBSSxDQUFDMEQsS0FBSyxHQUFHWSxLQUFLO2NBQ25CLENBQUMsQ0FBQztjQUNGO2NBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQWEsV0FBWSxFQUFFO2dCQUN0QkUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBRixXQUFZLENBQUM7O2NBRWhDLElBQUksQ0FBQyxDQUFBQSxXQUFZLEdBQUdHLFVBQVUsQ0FBQyxNQUFLO2dCQUNuQyxJQUFJLENBQUMsQ0FBQWpDLGNBQWUsQ0FBQ2tDLFNBQVMsRUFBRTtnQkFDaEN0RCxPQUFPLENBQUN1RCxHQUFHLENBQUMsT0FBTyxDQUFDO2NBQ3JCLENBQUMsRUFBRSxHQUFHLENBQUM7Y0FDUDtjQUNBO1lBQ0Q7OztVQUNBeEcsT0FBQSxDQUFBb0UsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdHRCxJQUFBRixZQUFBLEdBQUF2RSxPQUFBO1VBR0EsSUFBQThHLFVBQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBMkIsSUFBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUE0QixPQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLFFBQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBK0csUUFBQSxHQUFBL0csT0FBQTtVQUNBLElBQUF3RSxNQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQWdILEtBQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFZLE1BQU82RixRQUFTLFNBQVE5RixNQUFBLENBQUFHLGFBQXVCO1lBQ2pFLENBQUFFLFVBQVcsR0FBRyxDQUNiLElBQUksRUFDSixNQUFNLEVBQ04sT0FBTyxFQUNQLGFBQWEsRUFDYixPQUFPLEVBQ1AsV0FBVyxFQUNYLFVBQVUsRUFDVixXQUFXLEVBQ1gsT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1Ysb0JBQW9CLENBQ3BCO1lBQ0QsSUFBSTZFLEtBQUtBLENBQUE7Y0FDUixPQUFPVCxNQUFBLENBQUFVLGFBQWEsQ0FBQ2xDLEtBQUs7WUFDM0I7WUFFQSxDQUFBaUUsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHekMsTUFBQSxDQUFBVSxhQUFhLENBQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDWSxJQUFJLENBQUM7Y0FDN0MsT0FBTyxJQUFJLENBQUMsQ0FBQXVELFFBQVM7WUFDdEI7WUFDQSxDQUFBbkYsR0FBSTtZQUNKLENBQUE0QyxjQUFlO1lBQ2YsSUFBSUEsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBQSxjQUFlO1lBQzVCO1lBQ0EsQ0FBQUMsV0FBWTtZQUNaLENBQUF1QyxZQUFhO1lBQ2IsQ0FBQTVFLEtBQU07WUFFTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlBLEtBQUtBLENBQUN6QixLQUFLO2NBQ2QsSUFBSSxDQUFDLENBQUF5QixLQUFNLENBQUN1QixHQUFHLENBQUNoRCxLQUFLLENBQUM7WUFDdkI7WUFFQSxJQUFJc0csZUFBZUEsQ0FBQTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBekMsY0FBZSxFQUFFNEIsUUFBUTtZQUN0QztZQUVBLENBQUFjLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLElBQUlBLFNBQVNBLENBQUN2RyxLQUFLO2NBQ2xCLElBQUksQ0FBQyxDQUFBdUcsU0FBVSxDQUFDdkQsR0FBRyxDQUFDaEQsS0FBSyxDQUFDO1lBQzNCO1lBRUE7OztZQUdBLENBQUF3RixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxJQUFJQSxNQUFNQSxDQUFDeEYsS0FBSztjQUNmLElBQUksQ0FBQyxDQUFBd0YsTUFBTyxHQUFHeEYsS0FBSztZQUNyQjtZQUNBLElBQUl3RyxXQUFXQSxDQUFBO2NBQ2QsTUFBTTNELElBQUksR0FBR2MsTUFBQSxDQUFBVSxhQUFhLENBQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDWSxJQUFJLENBQUM7Y0FDekM7OztjQUdBLElBQUksQ0FBQ0EsSUFBSSxFQUFFNEQsU0FBUyxFQUFFLE9BQU8sSUFBSTtjQUVqQyxPQUFPNUQsSUFBSSxDQUFDNEQsU0FBUyxDQUFDakMsS0FBSyxDQUFDa0MsS0FBSyxJQUFHO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDQyxRQUFRLENBQUNELEtBQUssQ0FBQyxFQUFFO2tCQUMxQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNqRixLQUFLLENBQUNpRixLQUFLLENBQUM7O2dCQUczQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNBLEtBQUssQ0FBQztjQUNyQixDQUFDLENBQUM7WUFDSDtZQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBLElBQUlqQyxLQUFLQSxDQUFBO2NBQ1IsTUFBTTVCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQXdELFlBQWE7Y0FDL0IsTUFBTUUsU0FBUyxHQUFHLENBQUMxRCxJQUFJLENBQUMwRCxTQUFTLEdBQUcsRUFBRSxHQUFHMUQsSUFBSSxDQUFDMEQsU0FBUyxFQUFFSyxNQUFNLENBQUNwRyxJQUFJLElBQUlBLElBQUksQ0FBQ3FHLFFBQVEsQ0FBQztjQUV0RixNQUFNcEYsS0FBSyxHQUFHb0IsSUFBSSxDQUFDcEIsS0FBSyxFQUFFMEMsR0FBRyxDQUFDM0QsSUFBSSxJQUFLLE9BQU9BLElBQUksS0FBSyxRQUFRLEdBQUdBLElBQUksR0FBR0EsSUFBSSxDQUFDc0csSUFBSyxDQUFDO2NBQ3BGLE1BQU1DLGNBQWMsR0FBR1IsU0FBUyxDQUFDUyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFekcsSUFBSSxLQUFJO2dCQUNyRCxNQUFNO2tCQUFFc0c7Z0JBQUksQ0FBRSxHQUFHdEcsSUFBSTtnQkFDckIsSUFBSTBHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBWixTQUFVLENBQUNPLElBQUksQ0FBQyxDQUFDLEVBQUU7a0JBQ3pDLE9BQU8sSUFBSSxDQUFDLENBQUFQLFNBQVUsQ0FBQ08sSUFBSSxDQUFDLENBQUN2QyxNQUFNLEdBQUcwQyxHQUFHLEdBQUcsQ0FBQyxHQUFHQSxHQUFHOztnQkFFcEQsT0FBTyxDQUFDRyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUFKLFNBQVUsQ0FBQ08sSUFBSSxDQUFDLENBQUMsR0FBR0csR0FBRyxHQUFHQSxHQUFHLEdBQUcsQ0FBQztjQUM3RSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2NBQ0w7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDQSxJQUFJRixjQUFjLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDdEYsS0FBSyxDQUFDNkMsS0FBSyxFQUFFLE9BQU8sWUFBWSxDQUFDLENBQUM7Y0FDcEUsSUFBSXlDLGNBQWMsS0FBS1IsU0FBUyxDQUFDaEMsTUFBTSxJQUFJLElBQUksQ0FBQzlDLEtBQUssQ0FBQzZDLEtBQUssRUFBRSxPQUFPLFdBQVc7Y0FFL0UsT0FBTyxZQUFZO1lBQ3BCO1lBRUEsSUFBSStDLFFBQVFBLENBQUE7Y0FDWCxNQUFNeEUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBd0QsWUFBYTtjQUMvQixNQUFNaUIsaUJBQWlCLEdBQUd6RSxJQUFJLENBQUNwQixLQUFLLENBQUNrRixRQUFRLENBQUMsV0FBVyxDQUFDO2NBQzFELE9BQ0MsQ0FBQyxDQUFDLElBQUksQ0FBQ1ksS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUNDLFdBQVcsS0FBSyxDQUFDRixpQkFBaUIsSUFBS0EsaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzdGLEtBQUssQ0FBQ2dHLFNBQVUsQ0FBQztZQUU3RztZQUNBbkksWUFBWTBDLElBQUk7Y0FDZixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMwRixhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2NBQ3pGLElBQUksQ0FBQyxDQUFBN0QsY0FBZSxHQUFHN0IsSUFBSSxDQUFDNkIsY0FBYztjQUMxQyxJQUFJLENBQUN4QixFQUFFLEdBQUdMLElBQUksQ0FBQ0ssRUFBRSxJQUFJLElBQUE4RCxLQUFBLENBQUF3QixFQUFNLEdBQUU7Y0FFN0IsSUFBSSxDQUFDLENBQUFsRyxLQUFNLEdBQUd5RSxRQUFBLENBQUEwQixvQkFBb0IsQ0FBQzNGLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDYSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUFnQixjQUFlLEVBQUUsSUFBSSxDQUFDO2NBQzdFLElBQUksQ0FBQyxDQUFBd0MsWUFBYSxHQUFHMUMsTUFBQSxDQUFBVSxhQUFhLENBQUNwQyxHQUFHLENBQUNELElBQUksQ0FBQ2EsSUFBSSxDQUFFO2NBQ2xELElBQUksQ0FBQyxDQUFBMEQsU0FBVSxHQUFHLElBQUlOLFVBQUEsQ0FBQTRCLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQWhFLGNBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQXdDLFlBQWEsQ0FBQ0UsU0FBUyxDQUFDO2NBQ2pHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUYsWUFBYSxFQUFFLE1BQU0sSUFBSTlELEtBQUssQ0FBQyxpQkFBaUJQLElBQUksQ0FBQ2EsSUFBSSxZQUFZLENBQUM7Y0FDaEYsSUFBSSxDQUFDRyxHQUFHLENBQUNoQixJQUFJLENBQUM7Y0FDZCxJQUFJLENBQUMsQ0FBQWYsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQWlFLE1BQU8sR0FBR3hELElBQUksQ0FBQ3dELE1BQU0sSUFBSSxLQUFLO2NBRW5DLElBQUl4RCxJQUFJLENBQUN1RSxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxDQUFBQSxTQUFVLENBQUN2RCxHQUFHLENBQUNoQixJQUFJLENBQUN1RSxTQUFTLEVBQUUsSUFBSSxDQUFDOztjQUcxQyxJQUFJLENBQUMsQ0FBQXpDLFdBQVksR0FBRyxJQUFJSixZQUFBLENBQUFnQixXQUFXLEVBQUU7WUFDdEM7WUFDQTtZQUNBMUIsR0FBR0EsQ0FBQ2hCLElBQUk7Y0FDUCxJQUFJQSxJQUFJLENBQUN1RSxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxDQUFBQSxTQUFVLENBQUN2RCxHQUFHLENBQUNoQixJQUFJLENBQUN1RSxTQUFTLENBQUM7O2NBRXBDLElBQUksQ0FBQyxDQUFBaEgsVUFBVyxDQUFDaUUsT0FBTyxDQUFDc0UsUUFBUSxJQUFHO2dCQUNuQyxJQUFJLENBQUM5RixJQUFJLENBQUMrRixjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHOUYsSUFBSSxDQUFDOEYsUUFBUSxDQUFDO2NBQ2hDLENBQUMsQ0FBQztZQUNIO1lBRUF6QyxPQUFPQSxDQUFBO2NBQ04sTUFBTTJDLE1BQU0sR0FBRyxFQUFFO2NBQ2pCLElBQUksQ0FBQyxDQUFBekksVUFBVyxDQUFDaUUsT0FBTyxDQUFDc0UsUUFBUSxJQUFHO2dCQUNuQyxJQUFJQSxRQUFRLEtBQUssT0FBTyxFQUFFO2tCQUN6QkUsTUFBTSxDQUFDRixRQUFRLENBQUMsR0FBRyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxDQUFDekMsT0FBTyxFQUFFO2tCQUMzQzs7Z0JBRUQsSUFBSXlDLFFBQVEsS0FBSyxXQUFXLEVBQUU7a0JBQzdCLElBQUksT0FBTyxJQUFJLENBQUN2QixTQUFTLEVBQUVsQixPQUFPLEtBQUssVUFBVSxFQUFFO29CQUNsRDJDLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUMsRUFBRXpDLE9BQU8sRUFBRTs7a0JBRTdDOztnQkFHRDJDLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUM7Y0FDbEMsQ0FBQyxDQUFDO2NBRUYsT0FBT0UsTUFBTTtZQUNkO1lBRUEsTUFBTUMsUUFBUUEsQ0FBQ0MsS0FBSztjQUNuQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1uRyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThCLFdBQVksQ0FBQ21FLFFBQVEsQ0FBQztrQkFDN0NwRixJQUFJLEVBQUUsVUFBVTtrQkFDaEJSLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQXdCLGNBQWUsQ0FBQ3hCLEVBQUU7a0JBQzNCd0MsUUFBUSxFQUFFLElBQUksQ0FBQ2hDLElBQUk7a0JBQ25CdUYsVUFBVSxFQUFFLElBQUksQ0FBQy9GLEVBQUU7a0JBQ25Cb0QsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtrQkFDdkJ5QztpQkFDQSxDQUFDO2dCQUNGLE1BQU0sSUFBSSxDQUFDbEYsR0FBRyxDQUFDaEIsSUFBSSxDQUFDO2dCQUVwQixJQUFJLENBQUMsQ0FBQTZCLGNBQWUsQ0FBQ2tDLFNBQVMsRUFBRTtnQkFDaEMsT0FBTy9ELElBQUk7ZUFDWCxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlELEtBQUssQ0FBQ0MsQ0FBQyxDQUFDNkYsT0FBTyxDQUFDO2VBQzFCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQTs7OztZQUlBLE1BQU1HLGVBQWVBLENBQUNDLE1BQU0sR0FBRyxFQUFFO2NBQ2hDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQSxNQUFNLEVBQUU7a0JBQ1osTUFBTSxJQUFJaEcsS0FBSyxDQUFDLDREQUE0RCxDQUFDOztnQkFHOUUsTUFBTWlHLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBMUUsV0FBWSxDQUFDMkUsS0FBSyxDQUFDO2tCQUM5Q0YsTUFBTTtrQkFDTkcsSUFBSSxFQUFFLFdBQVc7a0JBQ2pCQyxNQUFNLEVBQUU7aUJBQ1IsQ0FBQztnQkFFRixJQUFJLENBQUMsQ0FBQTFILEdBQUksQ0FBQ1MsTUFBTSxDQUFDVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBRTNDLE1BQU0rRyxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTNILEdBQUksQ0FBQzRILElBQUksQ0FDeEMsbUJBQW1CLElBQUksQ0FBQyxDQUFBaEYsY0FBZSxDQUFDeEIsRUFBRSxlQUFlLElBQUksQ0FBQ0EsRUFBRSxRQUFRLEVBQ3hFO2tCQUNDeUcsR0FBRyxFQUFFTixRQUFRLENBQUNNO2lCQUNkLENBQ0Q7Z0JBQ0QsSUFBSSxDQUFDQyxPQUFPLEdBQUdILFlBQVksQ0FBQzVHLElBQUksQ0FBQytHLE9BQU87Z0JBQ3hDLElBQUksQ0FBQ3JELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDcEMsSUFBSSxDQUFDa0QsWUFBWSxDQUFDN0csTUFBTSxFQUFFLE1BQU0sSUFBSVEsS0FBSyxDQUFDLG9CQUFvQixDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQ3dHLE9BQU87ZUFDbkIsQ0FBQyxPQUFPdkcsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDMkYsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTWEsWUFBWUEsQ0FBQTtjQUNqQixJQUFJLENBQUN2SCxLQUFLLENBQUM2RCxLQUFLLEVBQUU7Y0FDbEIsSUFBSSxDQUFDaUIsU0FBUyxDQUFDakIsS0FBSyxFQUFFO2NBQ3RCLE1BQU0sSUFBSSxDQUFDLENBQUF6QixjQUFlLENBQUNrQyxTQUFTLEVBQUU7WUFDdkM7WUFFQSxNQUFNa0QsSUFBSUEsQ0FBQ3hILEtBQUs7Y0FDZixNQUFNLElBQUksQ0FBQ3VCLEdBQUcsQ0FBQ3ZCLEtBQUssQ0FBQztjQUVyQixPQUFPLElBQUksQ0FBQyxDQUFBb0MsY0FBZSxDQUFDa0MsU0FBUyxFQUFFO1lBQ3hDOztVQUNBdkcsT0FBQSxDQUFBd0YsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNRRCxJQUFBOUYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJCLElBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBNEIsT0FBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUE2QixRQUFBLEdBQUE3QixPQUFBO1VBSU0sTUFBTzBJLGlCQUFrQixTQUFRM0ksTUFBQSxDQUFBRyxhQUFnQztZQUN0RSxDQUFBaUUsUUFBUyxHQUFHLElBQUlILEdBQUcsRUFBRTtZQUNyQixJQUFJRyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFuQixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBbEIsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFLUCxDQUFBMkMsY0FBZTtZQUVmLENBQUFxRixTQUFVO1lBQ1YsQ0FBQUMsWUFBYSxHQUFHO2NBQUVDLE9BQU8sRUFBRSxFQUFFO2NBQUVDLFNBQVMsRUFBRSxFQUFFO2NBQUVDLFFBQVEsRUFBRSxFQUFFO2NBQUVDLFlBQVksRUFBRSxFQUFFO2NBQUVDLFNBQVMsRUFBRTtZQUFFLENBQUU7WUFDN0YsQ0FBQUMsU0FBVSxHQUFHO2NBQUVMLE9BQU8sRUFBRSxFQUFFO2NBQUVDLFNBQVMsRUFBRSxFQUFFO2NBQUVFLFlBQVksRUFBRSxFQUFFO2NBQUVELFFBQVEsRUFBRSxFQUFFO2NBQUVFLFNBQVMsRUFBRTtZQUFFLENBQUU7WUFDMUZ4SCxJQUFJLEdBQVUsRUFBRTtZQUVoQixJQUFJMEgsS0FBS0EsQ0FBQTtjQUNSLE1BQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNwSyxVQUFVLENBQUNxSyxJQUFJLENBQUM5QixRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0EsUUFBUSxDQUFDLENBQUM7Y0FDckUsT0FBTyxDQUFDNkIsVUFBVTtZQUNuQjtZQUVBckssWUFBWTRCLE1BQWdCLEVBQUUySSxNQUFzQixFQUFFQyxRQUFRO2NBQzdELEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBN0ksR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUUvQyxJQUFJLENBQUNoQyxVQUFVLEdBQUd1SyxRQUFRLEdBQUdBLFFBQVEsQ0FBQzNGLEdBQUcsQ0FBQzNELElBQUksSUFBSyxPQUFPQSxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLEdBQUdBLElBQUksQ0FBQ3NHLElBQUssQ0FBQyxHQUFHLEVBQUU7Y0FFckcsSUFBSSxDQUFDLENBQUEzRSxLQUFNLEdBQUcySCxRQUFRLElBQUksRUFBRTtjQUM1QixJQUFJLENBQUMsQ0FBQWpHLGNBQWUsR0FBR2dHLE1BQU07Y0FDN0IsSUFBSSxDQUFDLENBQUEzSSxNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQW1FLE9BQU9BLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQzBFLGFBQWEsRUFBRTtZQUM1QjtZQUVBekUsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXlHLFNBQVUsRUFBRSxJQUFJLENBQUM7WUFDaEM7WUFDQSxNQUFNeEIsUUFBUUEsQ0FBQ25CLElBQUksRUFBRW9CLEtBQWE7Y0FDakMsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJckIsSUFBSSxLQUFLLFNBQVMsRUFBRSxPQUFPLElBQUksQ0FBQ2tELGVBQWUsQ0FBQzlCLEtBQUssQ0FBQztnQkFFMUQsSUFBSSxDQUFDLENBQUFqSCxHQUFJLENBQUNTLE1BQU0sQ0FBQ1YsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUUzQyxNQUFNaUgsR0FBRyxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQWpGLGNBQWUsQ0FBQ3hCLEVBQUUsZUFBZSxJQUFJLENBQUMsQ0FBQW5CLE1BQU8sQ0FBQ21CLEVBQUUsWUFBWTtnQkFDaEcsTUFBTTtrQkFBRU4sTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQzRILElBQUksQ0FBQ0MsR0FBRyxFQUFFO2tCQUNsRHZCLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQXJHLE1BQU8sQ0FBQ3FHLEtBQUs7a0JBQ3pCMUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBM0IsTUFBTyxDQUFDMkIsSUFBSTtrQkFDdkIyRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUF0RyxNQUFPLENBQUNzRyxXQUFXO2tCQUNyQzRCLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU87a0JBQ3JCM0QsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBdkUsTUFBTyxDQUFDdUUsUUFBUTtrQkFDL0JnQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUF2RyxNQUFPLENBQUNPLEtBQUssQ0FBQ2dHLFNBQVM7a0JBQ3ZDUztpQkFDQSxDQUFDO2dCQUVGLElBQUksQ0FBQ25HLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlRLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Z0JBRzlDLE1BQU0sSUFBSSxDQUFDUyxHQUFHLENBQUNoQixJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBNkIsY0FBZSxDQUFDa0MsU0FBUyxFQUFFO2dCQUVoQyxPQUFPL0QsSUFBSTtlQUNYLENBQUMsT0FBT1EsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDMkYsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUE7Ozs7O1lBS0FuRixHQUFHQSxDQUFDaEIsSUFBSSxFQUFFaUksYUFBYSxHQUFHLEtBQUs7Y0FDOUIsSUFBSUEsYUFBYSxFQUFFO2dCQUNsQixJQUFJLENBQUMsQ0FBQWQsWUFBYSxHQUFHbkgsSUFBSTs7Y0FFMUIsSUFBSSxDQUFDQSxJQUFJLENBQUNvRCxJQUFJLENBQUNwRCxJQUFJLENBQUM7Y0FFcEIsSUFBSSxDQUFDekMsVUFBVSxDQUFDaUUsT0FBTyxDQUFDc0UsUUFBUSxJQUFHO2dCQUNsQyxJQUFJLENBQUM5RixJQUFJLENBQUMrRixjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHOUYsSUFBSSxDQUFDOEYsUUFBUSxDQUFDO2NBQ2hDLENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQ3BDLFlBQVksRUFBRTtZQUNwQjtZQUVBLE1BQU1zRSxlQUFlQSxDQUFDOUIsS0FBSztjQUMxQixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBakgsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztnQkFFM0MsTUFBTWlILEdBQUcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUFqRixjQUFlLENBQUN4QixFQUFFLGVBQWUsSUFBSSxDQUFDLENBQUFuQixNQUFPLENBQUNtQixFQUFFLG9CQUFvQjtnQkFDeEcsTUFBTTtrQkFBRU4sTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQzRILElBQUksQ0FBQ0MsR0FBRyxFQUFFO2tCQUNsRHZCLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQXJHLE1BQU8sQ0FBQ3FHLEtBQUs7a0JBQ3pCRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUF2RyxNQUFPLENBQUNPLEtBQUssQ0FBQ2dHLFNBQVM7a0JBQ3ZDUztpQkFDQSxDQUFDO2dCQUNGLElBQUksQ0FBQ25HLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlRLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQzs7Z0JBRXJELElBQUksQ0FBQ1MsR0FBRyxDQUFDaEIsSUFBSSxDQUFDO2dCQUVkLE9BQU9BLElBQUk7ZUFDWCxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQzJGLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU0rQixhQUFhQSxDQUFDaEMsS0FBSztjQUN4QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBakgsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztnQkFFM0MsTUFBTWlILEdBQUcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUFqRixjQUFlLENBQUN4QixFQUFFLGVBQWUsSUFBSSxDQUFDLENBQUFuQixNQUFPLENBQUNtQixFQUFFLGtCQUFrQjtnQkFDdEcsTUFBTTtrQkFBRU4sTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQzRILElBQUksQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDdEQsSUFBSSxDQUFDL0csTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSVEsS0FBSyxDQUFDLG1DQUFtQyxDQUFDOztnQkFHckQsSUFBSSxDQUFDUyxHQUFHLENBQUNoQixJQUFJLENBQUM7Z0JBRWQsT0FBT0EsSUFBSTtlQUNYLENBQUMsT0FBT1EsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDMkYsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBM0ksT0FBQSxDQUFBcUksaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkpELElBQUEzSSxNQUFBLEdBQUFDLE9BQUE7VUFLTSxNQUFPZ0wsMEJBQTJCLFNBQVFqTCxNQUFBLENBQUFHLGFBQTBCO1lBQ3pFLENBQUE2QixNQUFPO1lBQ1AsQ0FBQTNCLFVBQVcsR0FBRyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDeENBLFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFFdkMsSUFBSStFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNtRCxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzJDLFNBQVM7WUFDNUM7WUFDQTlLLFlBQVk0QixNQUFnQjtjQUMzQixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUN3RyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztjQUNqQyxJQUFJLENBQUMsQ0FBQXhHLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBOEIsR0FBR0EsQ0FBQ2hCLElBQUk7Y0FDUCxJQUFJcUksTUFBTSxHQUFHLEtBQUs7Y0FDbEIsTUFBTUMsT0FBTyxHQUFHeEMsUUFBUSxJQUFHO2dCQUMxQixJQUFJLENBQUM5RixJQUFJLENBQUMrRixjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2dCQUVwQyxJQUFJQSxRQUFRLEtBQUssV0FBVyxFQUFFO2tCQUM3QixJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHOUYsSUFBSSxDQUFDOEYsUUFBUSxDQUFDO2tCQUMvQnVDLE1BQU0sR0FBRyxJQUFJO2tCQUNiOztnQkFHRCxJQUFJckksSUFBSSxDQUFDOEYsUUFBUSxDQUFDLEVBQUV1QyxNQUFNLEdBQUcsSUFBSTtjQUNsQyxDQUFDO2NBRUQsSUFBSSxDQUFDLENBQUE5SyxVQUFXLENBQUNpRSxPQUFPLENBQUM4RyxPQUFPLENBQUM7Y0FFakMsSUFBSUQsTUFBTSxFQUFFLElBQUksQ0FBQ25GLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkM7WUFFQUcsT0FBT0EsQ0FBQTtjQUNOLE1BQU0yQyxNQUFNLEdBQUcsRUFBRTtjQUNqQixJQUFJLENBQUMsQ0FBQXpJLFVBQVcsQ0FBQ2lFLE9BQU8sQ0FBQ3NFLFFBQVEsSUFBRztnQkFDbkNFLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUM7Y0FDbEMsQ0FBQyxDQUFDO2NBRUYsT0FBT0UsTUFBTTtZQUNkOztVQUNBeEksT0FBQSxDQUFBMkssMEJBQUEsR0FBQUEsMEJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNELElBQUFqTCxNQUFBLEdBQUFDLE9BQUE7VUFLTSxNQUFPb0wseUJBQTBCLFNBQVFyTCxNQUFBLENBQUFHLGFBQTBCO1lBQ3hFLENBQUE2QixNQUFPO1lBQ1AsQ0FBQTNCLFVBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMzQkEsVUFBVSxHQUFHLENBQUMsV0FBVyxDQUFDO1lBRTFCLElBQUkrRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDbUQsU0FBUztZQUN4QjtZQUNBbkksWUFBWTRCLE1BQWdCO2NBQzNCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ3dHLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztjQUNoRixJQUFJLENBQUMsQ0FBQXhHLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBOEIsR0FBR0EsQ0FBQ2hCLElBQUk7Y0FDUCxJQUFJcUksTUFBTSxHQUFHLEtBQUs7Y0FDbEIsTUFBTUMsT0FBTyxHQUFHeEMsUUFBUSxJQUFHO2dCQUMxQixJQUFJLENBQUM5RixJQUFJLENBQUMrRixjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2dCQUVwQyxJQUFJQSxRQUFRLEtBQUssV0FBVyxFQUFFO2tCQUM3QixJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHOUYsSUFBSSxDQUFDOEYsUUFBUSxDQUFDO2tCQUMvQnVDLE1BQU0sR0FBRyxJQUFJO2tCQUNiOztnQkFHRCxJQUFJckksSUFBSSxDQUFDOEYsUUFBUSxDQUFDLEVBQUV1QyxNQUFNLEdBQUcsSUFBSTtjQUNsQyxDQUFDO2NBRUQsSUFBSSxDQUFDLENBQUE5SyxVQUFXLENBQUNpRSxPQUFPLENBQUM4RyxPQUFPLENBQUM7Y0FFakMsSUFBSUQsTUFBTSxFQUFFLElBQUksQ0FBQ25GLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkM7WUFFQUcsT0FBT0EsQ0FBQTtjQUNOLE1BQU0yQyxNQUFNLEdBQUcsRUFBRTtjQUNqQixJQUFJLENBQUMsQ0FBQXpJLFVBQVcsQ0FBQ2lFLE9BQU8sQ0FBQ3NFLFFBQVEsSUFBRztnQkFDbkNFLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUM7Y0FDbEMsQ0FBQyxDQUFDO2NBRUYsT0FBT0UsTUFBTTtZQUNkOztVQUNBeEksT0FBQSxDQUFBK0sseUJBQUEsR0FBQUEseUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNELElBQUFDLENBQUEsR0FBQXJMLE9BQUE7VUFDQSxJQUFBc0wsZUFBQSxHQUFBdEwsT0FBQTtVQUVBLElBQUF1TCxPQUFBLEdBQUF2TCxPQUFBO1VBRU0sTUFBT3lJLG9CQUFvQjtZQUN4QixPQUFPK0MsS0FBSyxHQUFHO2NBQ3RCdkosT0FBTyxFQUFFb0osQ0FBQSxDQUFBSSxhQUFhO2NBQ3RCLGlCQUFpQixFQUFFSCxlQUFBLENBQUFJLDJCQUEyQjtjQUM5Q0MsTUFBTSxFQUFFSixPQUFBLENBQUFLO2FBQ1I7WUFDRCxPQUFPOUksR0FBR0EsQ0FBQ1ksSUFBSSxFQUFFZ0IsY0FBYyxFQUFFM0MsTUFBTTtjQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDeUosS0FBSyxDQUFDOUgsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQzhILEtBQUssQ0FBQ3ZKLE9BQU8sQ0FBQ3lCLElBQUksRUFBRWdCLGNBQWMsRUFBRTNDLE1BQU0sQ0FBQztjQUVsRixPQUFPLElBQUksSUFBSSxDQUFDeUosS0FBSyxDQUFDOUgsSUFBSSxDQUFDLENBQUNBLElBQUksRUFBRWdCLGNBQWMsRUFBRTNDLE1BQU0sQ0FBQztjQUN6RDtZQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCRCxJQUFBaEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJCLElBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBNEIsT0FBQSxHQUFBNUIsT0FBQTtVQUVBLElBQUF3RSxNQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQXVFLFlBQUEsR0FBQXZFLE9BQUE7VUFJTSxNQUFPeUwsYUFBYyxTQUFRMUwsTUFBQSxDQUFBRyxhQUEwQjtZQUM1RCxDQUFBNkIsTUFBTztZQUVQM0IsVUFBVSxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQzFCLENBQUEwQixHQUFJO1lBRU02QyxXQUFXO1lBQ1hELGNBQWM7WUFFeEIsSUFBSVMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDMEcsT0FBTztZQUNwQjtZQUNBLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQ3pMLFVBQVUsQ0FBQ3lILE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVhLFFBQVEsS0FBSTtnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsT0FBTyxLQUFLO2dCQUNqQyxPQUFPYixHQUFHO2NBQ1gsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNUO1lBRUEsSUFBSWdFLFNBQVNBLENBQUE7Y0FDWixNQUFNbEcsR0FBRyxHQUFHLElBQUksQ0FBQ3hGLFVBQVUsQ0FBQ3FLLElBQUksQ0FBQzlCLFFBQVEsSUFBRztnQkFDM0MsSUFBSUEsUUFBUSxLQUFLLFdBQVcsRUFBRSxPQUFPLEtBQUs7Z0JBQzFDLElBQUksSUFBSSxDQUFDQSxRQUFRLENBQUMsSUFBSVosS0FBSyxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDVyxRQUFRLENBQUMsQ0FBQyxFQUFFO2tCQUNwRCxPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDLENBQUN2RCxNQUFNLEdBQUcsQ0FBQzs7Z0JBRWpDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ3VELFFBQVEsQ0FBQztjQUN4QixDQUFDLENBQUM7Y0FFRixPQUFPL0MsR0FBRztZQUNYO1lBRUEsSUFBSTJFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsSUFBSSxDQUFDdUIsU0FBUztZQUN2QjtZQUVBLENBQUFwSSxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQXZELFlBQVl1RCxJQUFJLEVBQUVnQixjQUFjLEVBQUUzQyxNQUFnQjtjQUNqRCxLQUFLLEVBQUU7Y0FDUCxNQUFNNEksUUFBUSxHQUFHbkcsTUFBQSxDQUFBVSxhQUFhLENBQUNwQyxHQUFHLENBQUNZLElBQUksQ0FBQztjQUN4QyxJQUFJLENBQUNnQixjQUFjLEdBQUdBLGNBQWM7Y0FDcEMsSUFBSSxDQUFDM0MsTUFBTSxHQUFHQSxNQUFNO2NBQ3BCLElBQUksQ0FBQyxDQUFBMkIsSUFBSyxHQUFHQSxJQUFJO2NBRWpCLElBQUksQ0FBQ2lILFFBQVEsRUFBRTtnQkFDZCxNQUFNLElBQUl2SCxLQUFLLENBQUMsaUJBQWlCTSxJQUFJLFlBQVksQ0FBQzs7Y0FFbkQsSUFBSSxDQUFDaUIsV0FBVyxHQUFHLElBQUlKLFlBQUEsQ0FBQWdCLFdBQVcsRUFBRTtjQUNwQyxJQUFJLENBQUMsQ0FBQXpELEdBQUksR0FBRyxJQUFJSCxJQUFBLENBQUFLLEdBQUcsQ0FBQ0osT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDaEMsVUFBVSxHQUFHMkgsS0FBSyxDQUFDQyxPQUFPLENBQUMyQyxRQUFRLENBQUNySSxLQUFLLENBQUMsR0FBR3FJLFFBQVEsQ0FBQ3JJLEtBQUssR0FBRyxFQUFFO2NBRXJFLElBQUksQ0FBQyxDQUFBUCxNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQThCLEdBQUdBLENBQUNoQixJQUFJO2NBQ1AsSUFBSXFJLE1BQU0sR0FBRyxLQUFLO2NBRWxCLElBQUksQ0FBQzlLLFVBQVUsQ0FBQ2lFLE9BQU8sQ0FBQ3NFLFFBQVEsSUFBRztnQkFDbEMsSUFBSSxDQUFDOUYsSUFBSSxDQUFDK0YsY0FBYyxDQUFDRCxRQUFRLENBQUMsRUFBRTtnQkFDcEN1QyxNQUFNLEdBQUcsSUFBSTtnQkFDYixJQUFJLENBQUNySSxJQUFJLENBQUM4RixRQUFRLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBRzlGLElBQUksQ0FBQzhGLFFBQVEsQ0FBQztjQUNoQyxDQUFDLENBQUM7Y0FDRixJQUFJdUMsTUFBTSxFQUFFLElBQUksQ0FBQ25GLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkM7WUFFQUcsT0FBT0EsQ0FBQTtjQUNOLE1BQU0yQyxNQUFNLEdBQUcsRUFBRTtjQUNqQixJQUFJLENBQUN6SSxVQUFVLENBQUNpRSxPQUFPLENBQUNzRSxRQUFRLElBQUc7Z0JBQ2xDRSxNQUFNLENBQUNGLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDO2NBQ2xDLENBQUMsQ0FBQztjQUVGLE9BQU9FLE1BQU07WUFDZDtZQUVBLE1BQU1DLFFBQVFBLENBQUNDLEtBQUssRUFBRXpHLEtBQUs7Y0FDMUIsSUFBSTtnQkFDSCxJQUFJLENBQUMwRyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTW5HLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzhCLFdBQVcsQ0FBQ21FLFFBQVEsQ0FBQztrQkFDNUNwRixJQUFJLEVBQUUsZ0JBQWdCO2tCQUN0QlIsRUFBRSxFQUFFLElBQUksQ0FBQ3dCLGNBQWMsQ0FBQ3hCLEVBQUU7a0JBQzFCK0YsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBbEgsTUFBTyxDQUFDbUIsRUFBRTtrQkFDM0J3QyxRQUFRLEVBQUUsSUFBSSxDQUFDaEMsSUFBSTtrQkFDbkJxRixLQUFLO2tCQUNMLEdBQUd6RztpQkFDSCxDQUFDO2dCQUVGLE1BQU0sSUFBSSxDQUFDdUIsR0FBRyxDQUFDaEIsSUFBSSxDQUFDO2dCQUVwQixJQUFJLENBQUM2QixjQUFjLENBQUNrQyxTQUFTLEVBQUU7Z0JBQy9CLElBQUksQ0FBQ2IsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2VBQy9CLENBQUMsT0FBTzFDLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlELEtBQUssQ0FBQ0MsQ0FBQyxDQUFDNkYsT0FBTyxDQUFDO2VBQzFCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQTdDLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMvRixVQUFVLENBQUNpRSxPQUFPLENBQUNzRSxRQUFRLElBQUc7Z0JBQ2xDOzs7Z0JBR0EsSUFBSUEsUUFBUSxLQUFLLFdBQVcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBR1YsU0FBUztjQUMzQixDQUFDLENBQUM7Y0FDRixJQUFJLENBQUNsQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCOztVQUNBMUYsT0FBQSxDQUFBb0wsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pIRCxJQUFBSixDQUFBLEdBQUFyTCxPQUFBO1VBRUEsSUFBQStMLFNBQUEsR0FBQS9MLE9BQUE7VUFFQTs7O1VBR00sTUFBTzBMLDJCQUE0QixTQUFRTCxDQUFBLENBQUFJLGFBQWE7WUFDN0QsQ0FBQTFKLE1BQU87WUFFUDNCLFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUM7WUFDckMsQ0FBQTJKLFNBQVUsR0FBdUIsRUFBRTtZQUNuQyxJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLElBQUk1RSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUM0RSxTQUFTLENBQUMzRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBMkUsU0FBVSxDQUFDMUUsS0FBSyxDQUFDaEUsSUFBSSxJQUFJQSxJQUFJLENBQUM4RCxLQUFLLENBQUM7WUFDOUU7WUFFQSxJQUFJMEcsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDMUcsS0FBSztZQUNsQjtZQUVBLElBQUk2RyxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDakMsU0FBUyxDQUFDL0UsR0FBRyxDQUFDM0QsSUFBSSxJQUFJQSxJQUFJLENBQUM0SyxRQUFRLENBQUM7WUFDakQ7WUFFQXBJLEdBQUdBLENBQUNoQixJQUFJO2NBQ1AsSUFBSXFJLE1BQU0sR0FBRyxLQUFLO2NBRWxCLElBQUksQ0FBQzlLLFVBQVUsQ0FBQ2lFLE9BQU8sQ0FBQ3NFLFFBQVEsSUFBRztnQkFDbEMsSUFBSUEsUUFBUSxLQUFLLFdBQVcsSUFBSTlGLElBQUksQ0FBQytGLGNBQWMsQ0FBQ0QsUUFBUSxDQUFDLEVBQUU7a0JBQzlELElBQUk5RixJQUFJLENBQUM4RixRQUFRLENBQUMsRUFBRXVDLE1BQU0sR0FBRyxJQUFJO2tCQUVqQyxNQUFNbkIsU0FBUyxHQUFHbEgsSUFBSSxDQUFDOEYsUUFBUSxDQUFDLEVBQUUzRCxHQUFHLENBQUMsQ0FBQ25DLElBQUksRUFBRThDLEtBQUssS0FBSTtvQkFDckQsTUFBTXVHLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQW5DLFNBQVUsQ0FBQ3BFLEtBQUssQ0FBQyxJQUFJLElBQUlvRyxTQUFBLENBQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQ3BLLE1BQU0sQ0FBQztvQkFDakYsTUFBTU8sS0FBSyxHQUFHLE9BQU9PLElBQUksS0FBSyxRQUFRLEdBQUc7c0JBQUVvSixRQUFRLEVBQUVwSjtvQkFBSSxDQUFFLEdBQUdBLElBQUk7b0JBQ2xFcUosYUFBYSxDQUFDckksR0FBRyxDQUFDdkIsS0FBSyxDQUFDO29CQUN4QixPQUFPNEosYUFBYTtrQkFDckIsQ0FBQyxDQUFDO2tCQUNGLElBQUksQ0FBQyxDQUFBbkMsU0FBVSxHQUFHQSxTQUFTO2tCQUUzQjs7Z0JBRUQsSUFBSSxDQUFDbEgsSUFBSSxDQUFDK0YsY0FBYyxDQUFDRCxRQUFRLENBQUMsRUFBRTtnQkFDcEN1QyxNQUFNLEdBQUcsSUFBSTtnQkFDYixJQUFJLENBQUNySSxJQUFJLENBQUM4RixRQUFRLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBRzlGLElBQUksQ0FBQzhGLFFBQVEsQ0FBQztjQUNoQyxDQUFDLENBQUM7Y0FFRixJQUFJdUMsTUFBTSxFQUFFLElBQUksQ0FBQ25GLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkM7WUFFQUcsT0FBT0EsQ0FBQTtjQUNOLE1BQU0yQyxNQUFNLEdBQUcsRUFBRTtjQUVqQixJQUFJLENBQUN6SSxVQUFVLENBQUNpRSxPQUFPLENBQUNzRSxRQUFRLElBQUc7Z0JBQ2xDLElBQUlBLFFBQVEsS0FBSyxXQUFXLEVBQUU7a0JBQzdCRSxNQUFNLENBQUNGLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDLENBQUMzRCxHQUFHLENBQUMzRCxJQUFJLElBQUlBLElBQUksQ0FBQzZFLE9BQU8sRUFBRSxDQUFDO2tCQUM3RDs7Z0JBRUQyQyxNQUFNLENBQUNGLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDO2NBQ2xDLENBQUMsQ0FBQztjQUVGLE9BQU9FLE1BQU07WUFDZDtZQUVBMUMsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQy9GLFVBQVUsQ0FBQ2lFLE9BQU8sQ0FBQ3NFLFFBQVEsSUFBRztnQkFDbEMsSUFBSUEsUUFBUSxLQUFLLFdBQVcsRUFBRTtrQkFDN0IsSUFBSSxDQUFDLENBQUFvQixTQUFVLEdBQUcsRUFBRTtrQkFDcEI7O2dCQUVELElBQUlwQixRQUFRLEtBQUssV0FBVyxFQUFFO2dCQUM5QixJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHVixTQUFTO2NBQzNCLENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQXFHLFNBQVNBLENBQUN6RyxLQUFLLEVBQUUwRyxNQUFNO2NBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXRDLFNBQVUsQ0FBQ3BFLEtBQUssQ0FBQyxFQUFFO2dCQUM1QnJDLE9BQU8sQ0FBQ2dKLElBQUksQ0FBQyw0QkFBNEIsRUFBRTNHLEtBQUssQ0FBQztnQkFDakQ7O2NBRUQsSUFBSSxDQUFDLENBQUFvRSxTQUFVLENBQUNwRSxLQUFLLENBQUMsQ0FBQzRHLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDO2NBRXhDLElBQUksQ0FBQzlGLFlBQVksRUFBRTtZQUNwQjtZQUVBLE1BQU11QyxRQUFRQSxDQUFDQyxLQUFLO2NBQ25CLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTW5HLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzhCLFdBQVcsQ0FBQ21FLFFBQVEsQ0FBQztrQkFDNUNwRixJQUFJLEVBQUUsV0FBVztrQkFDakJSLEVBQUUsRUFBRSxJQUFJLENBQUN3QixjQUFjLENBQUN4QixFQUFFO2tCQUMxQnNKLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU87a0JBQ3JCekQ7aUJBQ0EsQ0FBQztnQkFFRixJQUFJLENBQUNsRixHQUFHLENBQUNoQixJQUFJLENBQUM7Z0JBQ2QsSUFBSSxDQUFDNkIsY0FBYyxDQUFDa0MsU0FBUyxFQUFFO2dCQUMvQixJQUFJLENBQUNiLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztlQUMvQixDQUFDLE9BQU8xQyxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJRCxLQUFLLENBQUNDLENBQUMsQ0FBQzZGLE9BQU8sQ0FBQztlQUMxQixTQUFTO2dCQUNULElBQUksQ0FBQ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBM0ksT0FBQSxDQUFBcUwsMkJBQUEsR0FBQUEsMkJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUdELElBQUEzTCxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBZ0gsS0FBQSxHQUFBaEgsT0FBQTtVQUNBLElBQUF1RSxZQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQTRCLE9BQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBMkIsSUFBQSxHQUFBM0IsT0FBQTtVQUVNLE1BQU9tTSxnQkFBaUIsU0FBUXBNLE1BQUEsQ0FBQUcsYUFBMEI7WUFDL0QsQ0FBQTZCLE1BQU87WUFDRzRDLFdBQVc7WUFDckJ2RSxVQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQztZQUNyRCxDQUFBMEIsR0FBSTtZQUVKLElBQUlxRCxLQUFLQSxDQUFBO2NBQ1IsT0FDQyxDQUFDLENBQUMsSUFBSSxDQUFDOEcsUUFBUSxJQUNmLElBQUksQ0FBQ1EsT0FBTyxDQUFDckgsTUFBTSxHQUFHLENBQUMsSUFDdkIsSUFBSSxDQUFDc0gsYUFBYSxLQUFLekUsU0FBUyxJQUNoQyxJQUFJLENBQUN5RSxhQUFhLEtBQUssSUFBSTtZQUU3QjtZQUVBdk0sWUFBWTRCLE1BQWdCO2NBQzNCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ21CLEVBQUUsR0FBRyxJQUFBOEQsS0FBQSxDQUFBd0IsRUFBSSxHQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBekcsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQzJDLGNBQWMsR0FBRzNDLE1BQU0sQ0FBQzJDLGNBQWM7Y0FDM0MsSUFBSSxDQUFDK0gsT0FBTyxHQUFHLEVBQUU7Y0FDakIsSUFBSSxDQUFDOUgsV0FBVyxHQUFHLElBQUlKLFlBQUEsQ0FBQWdCLFdBQVcsRUFBRTtjQUNwQyxJQUFJLENBQUMsQ0FBQXpELEdBQUksR0FBRyxJQUFJSCxJQUFBLENBQUFLLEdBQUcsQ0FBQ0osT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFFQXlCLEdBQUdBLENBQUNoQixJQUFJO2NBQ1AsSUFBSSxDQUFDekMsVUFBVSxDQUFDaUUsT0FBTyxDQUFDc0UsUUFBUSxJQUFHO2dCQUNsQyxJQUFJQSxRQUFRLEtBQUssZUFBZSxFQUFFLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUc5RixJQUFJLENBQUM4SixjQUFjO2dCQUN0RSxJQUFJLENBQUM5SixJQUFJLENBQUMrRixjQUFjLENBQUNELFFBQVEsQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHOUYsSUFBSSxDQUFDOEYsUUFBUSxDQUFDO2NBQ2hDLENBQUMsQ0FBQztZQUNIO1lBRUF6QyxPQUFPQSxDQUFBO2NBQ04sTUFBTTJDLE1BQU0sR0FBRyxFQUFFO2NBQ2pCLElBQUksQ0FBQ3pJLFVBQVUsQ0FBQ2lFLE9BQU8sQ0FBQ3NFLFFBQVEsSUFBRztnQkFDbENFLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUM7Y0FDbEMsQ0FBQyxDQUFDO2NBRUYsT0FBT0UsTUFBTTtZQUNkO1lBRUEwRCxTQUFTQSxDQUFDSyxNQUFNO2NBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDWCxRQUFRLElBQUksSUFBSSxDQUFDUSxPQUFPLENBQUNySCxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzZDLFNBQVMsRUFBRSxJQUFJLEVBQUU0RSxHQUFHLENBQUMsQ0FBQ3JGLFFBQVEsQ0FBQyxJQUFJLENBQUNrRixhQUFhLENBQUM7Y0FFekcsSUFBSSxDQUFDRCxPQUFPLENBQUN4RyxJQUFJLENBQUMyRyxNQUFNLENBQUM7Y0FDekIsSUFBSSxDQUFDckcsWUFBWSxFQUFFO1lBQ3BCO1lBQ0F1RyxZQUFZQSxDQUFDbkgsS0FBSztjQUNqQixJQUFJLENBQUM4RyxPQUFPLENBQUNNLE1BQU0sQ0FBQ3BILEtBQUssRUFBRSxDQUFDLENBQUM7Y0FDN0IsSUFBSSxDQUFDWSxZQUFZLEVBQUU7WUFDcEI7WUFFQXlHLFVBQVVBLENBQUNySCxLQUFLO2NBQ2YsSUFBSSxJQUFJLENBQUMrRyxhQUFhLEtBQUsvRyxLQUFLLEVBQUU7Y0FDbEMsSUFBSSxDQUFDK0csYUFBYSxHQUFHL0csS0FBSztjQUMxQixJQUFJLENBQUNZLFlBQVksRUFBRTtZQUNwQjtZQUVBLE1BQU0wRyxlQUFlQSxDQUFBO2NBQ3BCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDakUsUUFBUSxHQUFHLElBQUk7Z0JBRXBCLE1BQU1uRyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUM4QixXQUFXLENBQUNtRSxRQUFRLENBQUM7a0JBQzVDcEYsSUFBSSxFQUFFLFNBQVM7a0JBQ2ZSLEVBQUUsRUFBRSxJQUFJLENBQUN3QixjQUFjLENBQUN4QixFQUFFO2tCQUMxQitJLFFBQVEsRUFBRSxJQUFJLENBQUNBO2lCQUNmLENBQUM7Z0JBRUYsTUFBTSxJQUFJLENBQUNwSSxHQUFHLENBQUM7a0JBQUU0SSxPQUFPLEVBQUU1SixJQUFJLENBQUM0SixPQUFPO2tCQUFFQyxhQUFhLEVBQUU3SixJQUFJLENBQUM4SjtnQkFBYyxDQUFFLENBQUM7Z0JBQzdFLElBQUksQ0FBQ2pJLGNBQWMsQ0FBQ2tDLFNBQVMsRUFBRTtnQkFFL0IsSUFBSSxDQUFDYixPQUFPLENBQUMsaUJBQWlCLENBQUM7Z0JBQy9CLE9BQU9sRCxJQUFJLENBQUM0SixPQUFPO2VBQ25CLENBQUMsT0FBT3BKLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlELEtBQUssQ0FBQ0MsQ0FBQyxDQUFDNkYsT0FBTyxDQUFDO2VBQzFCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0EzSSxPQUFBLENBQUE4TCxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RkQsSUFBQWQsQ0FBQSxHQUFBckwsT0FBQTtVQUNNLE1BQU80TCxtQkFBb0IsU0FBUVAsQ0FBQSxDQUFBSSxhQUFhO1lBQ3JEckwsVUFBVSxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO1lBRTVELENBQUE4TSxhQUFjLEdBQUc7Y0FDaEJDLFFBQVEsRUFBRSxFQUFFO2NBQ1pDLElBQUksRUFBRSxFQUFFO2NBQ1JDLE9BQU8sRUFBRTthQUNUO1lBRUQsSUFBSWxJLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQy9FLFVBQVUsQ0FBQ3lILE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVhLFFBQVEsS0FBSTtnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsT0FBTyxLQUFLO2dCQUNqQyxJQUFJWixLQUFLLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNXLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxDQUFDdkQsTUFBTSxFQUFFLE9BQU8sS0FBSztnQkFDekUsT0FBTzBDLEdBQUc7Y0FDWCxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1Q7WUFDQTNILFlBQVl1RCxJQUFJLEVBQUVnQixjQUFjLEVBQUUzQyxNQUFnQjtjQUNqRCxLQUFLLENBQUMyQixJQUFJLEVBQUVnQixjQUFjLEVBQUUzQyxNQUFNLENBQUM7Y0FDbkMsSUFBSSxDQUFDOEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBcUosYUFBYyxDQUFDO1lBQzlCO1lBRUEsSUFBSXJCLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQ3pMLFVBQVUsQ0FBQ3lILE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVhLFFBQVEsS0FBSTtnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsT0FBTyxLQUFLO2dCQUNqQyxPQUFPYixHQUFHO2NBQ1gsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNUO1lBRUFqRSxHQUFHQSxDQUFDaEIsSUFBSTtjQUNQLElBQUlxSSxNQUFNLEdBQUcsS0FBSztjQUVsQixJQUFJLENBQUM5SyxVQUFVLENBQUNpRSxPQUFPLENBQUNzRSxRQUFRLElBQUc7Z0JBQ2xDdUMsTUFBTSxHQUFHLElBQUk7Z0JBQ2IsSUFBSXJLLEtBQUssR0FBRzhILFFBQVEsS0FBSyxVQUFVLElBQUksQ0FBQzlGLElBQUksQ0FBQzhGLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRzlGLElBQUksQ0FBQzhGLFFBQVEsQ0FBQztnQkFDNUUsSUFBSSxDQUFDOUgsS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQzhILFFBQVEsQ0FBQyxHQUFHOUgsS0FBSztjQUN2QixDQUFDLENBQUM7Y0FDRixJQUFJcUssTUFBTSxFQUFFLElBQUksQ0FBQ25GLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkM7WUFFQUksS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXFKLGFBQWMsQ0FBQztjQUM3QixJQUFJLENBQUNuSCxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCOztVQUNBMUYsT0FBQSxDQUFBdUwsbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJELE1BQU0wQixLQUFLO1lBQ1YsQ0FBQXJJLEtBQU0sR0FBRyxDQUNSO2NBQ0MvQixFQUFFLEVBQUUsZ0JBQWdCO2NBQ3BCeUUsSUFBSSxFQUFFLGdCQUFnQjtjQUN0QnJGLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQztjQUVwQmdGLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2NBQ2hERixTQUFTLEVBQUUsQ0FDVjtnQkFDQ08sSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZELFFBQVEsRUFBRTtlQUNWLEVBQ0Q7Z0JBQ0M2RixZQUFZLEVBQUUsU0FBUztnQkFDdkI1RixJQUFJLEVBQUU7ZUFDTixFQUNEO2dCQUNDNEYsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCNUYsSUFBSSxFQUFFO2VBQ04sRUFFRDtnQkFDQzRGLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDekI1RixJQUFJLEVBQUU7ZUFDTixDQUNEO2NBQ0Q2RixNQUFNLEVBQUUsQ0FBQyxVQUFVO2FBQ25CLEVBQ0Q7Y0FDQ3RLLEVBQUUsRUFBRSxRQUFRO2NBQ1p5RSxJQUFJLEVBQUUsUUFBUTtjQUNkckYsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztjQUMvQmdGLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVzthQUMvQyxFQUNEO2NBQ0NwRSxFQUFFLEVBQUUsZ0JBQWdCO2NBQ3BCeUUsSUFBSSxFQUFFLGdCQUFnQjtjQUN0QnJGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7Y0FDNUJnRixTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUM7Y0FDeERrRyxNQUFNLEVBQUUsQ0FBQyxVQUFVO2FBQ25CLEVBQ0Q7Y0FDQ3RLLEVBQUUsRUFBRSxpQkFBaUI7Y0FDckJ5RSxJQUFJLEVBQUUsaUJBQWlCO2NBQ3ZCO2NBQ0FyRixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUM7Y0FDcEI4RSxTQUFTLEVBQUUsRUFBRTtjQUNiekMsV0FBVyxFQUFFLFdBQVc7Y0FDeEI2SSxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVTthQUNoQztZQUNEO1lBQ0E7Y0FDQ3RLLEVBQUUsRUFBRSxRQUFRO2NBQ1p5RSxJQUFJLEVBQUUsUUFBUTtjQUNkTCxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztjQUNoRGtHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztjQUNwQmxMLEtBQUssRUFBRSxDQUNOLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOO2dCQUNDcUYsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCNkYsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVM7ZUFDMUI7YUFFRixDQUNEO1lBRUQsSUFBSXhLLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBaUMsS0FBTTtZQUNuQjtZQUNBLENBQUFELEdBQUksR0FBOEIsSUFBSWhCLEdBQUcsRUFBRTtZQUMzQyxJQUFJakIsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFpQyxHQUFJO1lBQ2pCO1lBQ0E3RSxZQUFBO2NBQ0MsSUFBSSxDQUFDLENBQUE4RSxLQUFNLENBQUNaLE9BQU8sQ0FBQ1gsSUFBSSxJQUFHO2dCQUMxQixJQUFJLENBQUMsQ0FBQXNCLEdBQUksQ0FBQ25CLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDUixFQUFFLEVBQUVRLElBQUksQ0FBQztjQUM3QixDQUFDLENBQUM7WUFDSDtZQUVBWixHQUFHQSxDQUFDSSxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQThCLEdBQUksQ0FBQ2xDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDO1lBQ3pCOztVQUdNO1VBQVcsTUFBTWdDLGFBQWEsR0FBQTdFLE9BQUEsQ0FBQTZFLGFBQUEsR0FBRyxJQUFJb0ksS0FBSyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlHbkQsSUFBQXZOLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFlLEtBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUEyQixJQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLE9BQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsUUFBQSxHQUFBN0IsT0FBQTtVQUNNLE1BQU95TixpQkFBa0IsU0FBUTFOLE1BQUEsQ0FBQUcsYUFBZ0M7WUFDdEUsQ0FBQTZCLE1BQU87WUFDUCxDQUFBaUQsR0FBSSxHQUFrQyxJQUFJaEIsR0FBRyxFQUFFO1lBQy9DLENBQUFsQyxHQUFJO1lBQ0osSUFBSWlCLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBaUMsR0FBSTtZQUNqQjtZQUVBLElBQUloQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTytFLEtBQUssQ0FBQzJGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTFJLEdBQUksQ0FBQ1osTUFBTSxFQUFFLENBQUM7WUFDdEM7WUFDQSxDQUFBdUosVUFBVyxHQUFrQyxJQUFJM0osR0FBRyxFQUFFO1lBQ3RELElBQUkySixVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBeE4sWUFBWTRCLE1BQXNCO2NBQ2pDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNKLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQ1YsT0FBTyxHQUFHLGFBQWE7Y0FDNUIsSUFBSSxDQUFDLENBQUFLLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBOEIsR0FBR0EsQ0FBQ2IsS0FBSztjQUNSLElBQUksQ0FBQytFLEtBQUssQ0FBQ0MsT0FBTyxDQUFDaEYsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSUksS0FBSyxDQUFDLHdCQUF3QixDQUFDOztjQUUxQ0osS0FBSyxDQUFDcUIsT0FBTyxDQUFDaEQsSUFBSSxJQUFHO2dCQUNwQixNQUFNaUQsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBVSxHQUFJLENBQUNZLEdBQUcsQ0FBQ3ZFLElBQUksQ0FBQzZCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBOEIsR0FBSSxDQUFDbEMsR0FBRyxDQUFDekIsSUFBSSxDQUFDNkIsRUFBRSxDQUFDLEdBQUcsSUFBSW5DLEtBQUEsQ0FBQTZNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBN0wsTUFBTyxFQUFFVixJQUFJLENBQUM7Z0JBQzNHLElBQUksQ0FBQyxDQUFBMkQsR0FBSSxDQUFDbkIsR0FBRyxDQUFDeEMsSUFBSSxDQUFDNkIsRUFBRSxFQUFvQm9CLFFBQVEsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLENBQUFxSixVQUFXLENBQUM5SixHQUFHLENBQUN4QyxJQUFJLENBQUN3TSxTQUFTLENBQUMzSyxFQUFFLEVBQW9Cb0IsUUFBUSxDQUFDO2NBQ3BFLENBQUMsQ0FBQztZQUNIO1lBRUEsTUFBTThCLEdBQUdBLENBQUMwSCxXQUFXO2NBQ3BCLE1BQU14TCxLQUFLLEdBQUc7Z0JBQUV5TCxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFoTSxNQUFPLENBQUNtQixFQUFFO2dCQUFFNEs7Y0FBVyxDQUFFO2NBQ3hELElBQUksQ0FBQyxDQUFBaE0sR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNMkcsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2SCxHQUFJLENBQUM0SCxJQUFJLENBQUMsY0FBYyxFQUFFcEgsS0FBSyxDQUFDO2NBRTVELElBQUksQ0FBQytHLFFBQVEsQ0FBQ3pHLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJUSxLQUFLLENBQUNpRyxRQUFRLENBQUM5RixLQUFLLENBQUM7O2NBRWhDLE1BQU15SyxVQUFVLEdBQUcsSUFBSWpOLEtBQUEsQ0FBQTZNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBN0wsTUFBTyxFQUFFc0gsUUFBUSxDQUFDeEcsSUFBSSxDQUFDO2NBQ3BFLElBQUksQ0FBQyxDQUFBbUMsR0FBSSxDQUFDbkIsR0FBRyxDQUFDd0YsUUFBUSxDQUFDeEcsSUFBSSxDQUFDSyxFQUFFLEVBQUU4SyxVQUFVLENBQUM7Y0FDM0M7Y0FDQSxPQUFPQSxVQUFVO1lBQ2xCOztVQUNBM04sT0FBQSxDQUFBb04saUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERELElBQUExTixNQUFBLEdBQUFDLE9BQUE7VUFHTSxNQUFPNE4sZ0JBQWlCLFNBQVE3TixNQUFBLENBQUFHLGFBQStCO1lBQ3BFLENBQUE2QixNQUFPO1lBRVAsSUFBSWtNLFNBQVNBLENBQUE7Y0FDWixPQUFPLGdCQUFnQixJQUFJLENBQUMvSyxFQUFFLHNCQUFzQjtZQUNyRDtZQUVBLElBQUlnTCxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDaEwsRUFBRSxFQUFFO1lBQ2pDO1lBQ0EvQyxZQUFZNEIsTUFBc0IsRUFBRWMsSUFBSTtjQUN2QyxLQUFLLENBQUM7Z0JBQ0x6QyxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSTtlQUM5QixDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUEyQixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDOEIsR0FBRyxDQUFDaEIsSUFBSSxDQUFDO1lBQ2Y7O1VBQ0F4QyxPQUFBLENBQUF1TixnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkQsSUFBQTlNLFNBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUEyQixJQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLE9BQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsUUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUFtTyxXQUFBLEdBQUFuTyxPQUFBO1VBQ0EsSUFBQWdCLFNBQUEsR0FBQWhCLE9BQUE7VUFFQSxJQUFBdUUsWUFBQSxHQUFBdkUsT0FBQTtVQUdBLElBQUFvTyxXQUFBLEdBQUFwTyxPQUFBO1VBQ0EsSUFBQXFPLFFBQUEsR0FBQXJPLE9BQUE7VUFFTztVQUFVLE1BQU9zQixjQUFlLFNBQVFSLFNBQUEsQ0FBQXdOLElBQXFCO1lBQ3pEbE8sVUFBVSxHQUFHLENBQ3RCLElBQUksRUFDSixPQUFPLEVBQ1AsYUFBYSxFQUNiLFFBQVEsRUFDUixRQUFRLEVBQ1IsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLFNBQVMsRUFDVCxhQUFhLEVBQ2IsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixPQUFPLEVBQ1AsU0FBUyxFQUNULFFBQVEsQ0FBQztZQUFBLENBQ1Q7O1lBRUQsQ0FBQW1PLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlBLFVBQVVBLENBQUMxTixLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBME4sVUFBVyxDQUFDcEksS0FBSyxFQUFFO2NBQ3hCLElBQUksQ0FBQyxDQUFBb0ksVUFBVyxDQUFDMUssR0FBRyxDQUFDaEQsS0FBSyxDQUFDO2NBQzNCLElBQUksQ0FBQzBGLFlBQVksRUFBRTtZQUNwQjtZQUVBLENBQUFpSSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJckosS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ2pDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDa0YsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUNDLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDQyxTQUFTO1lBQzNFO1lBRUEsSUFBSW1HLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQ3RKLEtBQUssSUFBSSxJQUFJLENBQUNvSixVQUFVLENBQUNwSixLQUFLO1lBQzNDO1lBRUEsQ0FBQXVKLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUSxDQUFDOUQsYUFBYSxFQUFFO1lBQ3JDO1lBRUEsSUFBSThELE9BQU9BLENBQUM3TixLQUFLO2NBQ2hCLElBQUksQ0FBQyxDQUFBNk4sT0FBUSxDQUFDN0ssR0FBRyxDQUFDaEQsS0FBSyxDQUFDO2NBQ3hCLElBQUksQ0FBQzBGLFlBQVksRUFBRTtZQUNwQjtZQUVBLENBQUFvSSxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFDQSxDQUFBN00sR0FBSTtZQUNKLENBQUE2QyxXQUFZO1lBQ0osT0FBT2lLLFNBQVMsR0FBRyxJQUFJNUssR0FBRyxFQUFFO1lBRXBDN0QsWUFBWTtjQUFFK0MsRUFBRSxHQUFHK0UsU0FBUztjQUFFdkUsSUFBSSxHQUFHO1lBQVEsQ0FBRSxHQUFHLEVBQUU7Y0FDbkQsS0FBSyxDQUFDO2dCQUFFUixFQUFFO2dCQUFFOUIsRUFBRSxFQUFFLFVBQVU7Z0JBQUVELFNBQVMsRUFBRSxTQUFTO2dCQUFFSSxRQUFRLEVBQUVQLFNBQUEsQ0FBQTZOO2NBQWMsQ0FBRSxDQUFDO2NBRTdFLElBQUksQ0FBQ0MsVUFBVSxFQUFFO2NBRWpCLElBQUksQ0FBQyxDQUFBbkssV0FBWSxHQUFHLElBQUlKLFlBQUEsQ0FBQWdCLFdBQVcsRUFBRTtjQUNyQyxJQUFJLENBQUNnRCxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztjQUNyQyxJQUFJLENBQUMsQ0FBQWdHLFVBQVcsR0FBRyxJQUFJSixXQUFBLENBQUExSixVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ3ZDLElBQUksQ0FBQyxDQUFBaUssT0FBUSxHQUFHLElBQUlMLFFBQUEsQ0FBQXBPLE9BQU8sRUFBRTtjQUM3QixJQUFJLENBQUMsQ0FBQTBPLFdBQVksR0FBRyxJQUFJUCxXQUFBLENBQUFYLGlCQUFpQixDQUFDLElBQUksQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQWMsVUFBVyxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3hJLFlBQVksQ0FBQztjQUNoRDtjQUNBLElBQUksQ0FBQyxDQUFBekUsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUNzQixJQUFJLEdBQUdBLElBQUk7Y0FDaEIsSUFBSSxDQUFDc0wsUUFBUSxHQUFHO2dCQUFFQyxlQUFlLEVBQUU7Y0FBQyxDQUFFO2NBQ3RDQyxVQUFVLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ3hCO1lBRUEsTUFBTUMsV0FBV0EsQ0FBQ3ZNLElBQUk7Y0FDckI7Ozs7O2NBTUEsSUFBSSxDQUFDLENBQUEyTCxLQUFNLEdBQUcsSUFBSTtZQUNuQjtZQUVBLE1BQU0zSyxHQUFHQSxDQUFDaEIsSUFBSTtjQUNiLEtBQUssQ0FBQ2dCLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQztjQUNmLElBQUlBLElBQUksQ0FBQzhMLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQzlLLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQzhMLFdBQVcsQ0FBQzs7Y0FFeEMsSUFBSSxDQUFDLElBQUksQ0FBQ1UsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQ0MsT0FBTztjQUUxQyxJQUFJek0sSUFBSSxDQUFDNkwsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsQ0FBQUEsT0FBUSxDQUFDN0ssR0FBRyxDQUFDaEIsSUFBSSxDQUFDNkwsT0FBTyxDQUFDOztjQUVoQyxJQUFJN0wsSUFBSSxDQUFDMEwsVUFBVSxJQUFJeEcsS0FBSyxDQUFDQyxPQUFPLENBQUNuRixJQUFJLENBQUMwTCxVQUFVLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLENBQUFBLFVBQVcsQ0FBQy9JLFFBQVEsQ0FBQzNDLElBQUksQ0FBQzBMLFVBQVUsRUFBRSxJQUFJLENBQUM7O1lBRWxEO1lBRUE7Ozs7O1lBS0EsTUFBTWdCLG1CQUFtQkEsQ0FBQ25MLE1BQU07Y0FDL0IsSUFBSTtnQkFDSCxJQUFJLENBQUNvTCxhQUFhLEdBQUcsSUFBSTtnQkFDekIsSUFBSSxDQUFDM0wsR0FBRyxDQUFDTyxNQUFNLENBQUM7Z0JBQ2hCLE1BQU12QixJQUFJLEdBQXdCLE1BQU0sSUFBSSxDQUFDLENBQUE4QixXQUFZLENBQUNtRSxRQUFRLENBQUM7a0JBQ2xFNUYsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtrQkFDWG9GLFNBQVMsRUFBRSxJQUFJLENBQUNBLFNBQVM7a0JBQ3pCNUUsSUFBSSxFQUFFO2lCQUNOLENBQUM7Z0JBRUYsSUFBSSxDQUFDYixJQUFJLENBQUN1RixLQUFLLEVBQUU7a0JBQ2hCOUUsT0FBTyxDQUFDZ0osSUFBSSxDQUFDLDBDQUEwQyxFQUFFekosSUFBSSxDQUFDOztnQkFFL0QsTUFBTSxJQUFJLENBQUNnQixHQUFHLENBQUM7a0JBQUUsR0FBR2hCLElBQUk7a0JBQUVLLEVBQUUsRUFBRUwsSUFBSSxDQUFDSyxFQUFFO2tCQUFFb0MsS0FBSyxFQUFFO2dCQUFrQixDQUFFLENBQUM7Z0JBQ25FaEMsT0FBTyxDQUFDdUQsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDK0QsYUFBYSxFQUFFLENBQUM7Z0JBQ2hELElBQUkvSCxJQUFJLENBQUMwTCxVQUFVLEVBQUU7a0JBQ3BCLElBQUksQ0FBQ0EsVUFBVSxDQUFDL0ksUUFBUSxDQUFDM0MsSUFBSSxDQUFDMEwsVUFBVSxDQUFDOztnQkFHMUMsSUFBSSxDQUFDaUIsYUFBYSxHQUFHLEtBQUs7Z0JBQzFCLElBQUksQ0FBQ2pKLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztlQUN6QyxDQUFDLE9BQU9sRCxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJRCxLQUFLLENBQUMsMkJBQTJCLENBQUM7ZUFDNUMsU0FBUztnQkFDVCxJQUFJLENBQUNvTSxhQUFhLEdBQUcsS0FBSzs7WUFFNUI7WUFDQSxNQUFNNUksU0FBU0EsQ0FBQ3RFLEtBQUssR0FBRyxFQUFFO2NBQ3pCLE1BQU1PLElBQUksR0FBRztnQkFDWixHQUFHLElBQUksQ0FBQytILGFBQWEsRUFBRTtnQkFDdkIsR0FBR3RJLEtBQUs7Z0JBQ1JpTSxVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVLENBQUN2SSxRQUFRLEVBQUU7Z0JBQ3RDdEMsSUFBSSxFQUFFO2VBQ047Y0FDRCxJQUFJLENBQUMsQ0FBQThLLEtBQU0sR0FBRyxJQUFJO2NBQ2xCLE1BQU1uRixRQUFRLEdBQUcsS0FBSyxDQUFDb0csT0FBTyxDQUFDNU0sSUFBSSxDQUFDO2NBRXBDLE9BQU93RyxRQUFRO1lBQ2hCO1lBRUEsTUFBTXFHLGdCQUFnQkEsQ0FBQztjQUFFQztZQUFZLENBQUU7Y0FDdEMsTUFBTTlNLElBQUksR0FBRztnQkFDWitNLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7Z0JBQ3ZCdkgsV0FBVyxFQUFFLElBQUksQ0FBQ0EsV0FBVztnQkFDN0JzSCxZQUFZO2dCQUNaRSxNQUFNLEVBQUUsSUFBSSxDQUFDQSxNQUFNO2dCQUNuQnZILFNBQVMsRUFBRSxJQUFJLENBQUNBLFNBQVM7Z0JBQ3pCcEYsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtnQkFDWDRNLFFBQVEsRUFBRSxJQUFJLENBQUNBO2VBQ2Y7Y0FFRCxNQUFNekQsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUExSCxXQUFZLENBQUNtRSxRQUFRLENBQUM7Z0JBQy9DcEYsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEdBQUdiLElBQUk7Z0JBQ1A4TSxZQUFZO2dCQUNaSSxlQUFlLEVBQUUsQ0FBQztnQkFDbEJ4QixVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVLENBQUN2SSxRQUFRO2VBQ3BDLENBQUM7Y0FFRixJQUFJLENBQUNuQyxHQUFHLENBQUN3SSxNQUFNLENBQUM7Y0FDaEIsSUFBSSxDQUFDOUYsWUFBWSxDQUFDLHNCQUFzQixDQUFDO2NBQ3pDLE9BQU84RixNQUFNO1lBQ2Q7WUFFQTs7OztZQUlBLE1BQU0yRCx3QkFBd0JBLENBQUM7Y0FBRTFIO1lBQVMsQ0FBRTtjQUMzQyxJQUFJO2dCQUNILElBQUksQ0FBQ1UsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1uRyxJQUFJLEdBQXNCLE1BQU0sSUFBSSxDQUFDLENBQUE4QixXQUFZLENBQUNtRSxRQUFRLENBQUM7a0JBQ2hFcEYsSUFBSSxFQUFFLFdBQVc7a0JBQ2pCUixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYb0Y7aUJBQytCLENBQUM7Z0JBRWpDOzs7Z0JBR0EsT0FBT3pGLElBQUk7Z0JBQ1g7ZUFDQSxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlELEtBQUssQ0FBQywyQkFBMkIsQ0FBQztlQUM1QyxTQUFTO2dCQUNULElBQUksQ0FBQzRGLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBOzs7Ozs7O1lBT0EsTUFBTWlILGlCQUFpQkEsQ0FBQztjQUFFM0gsU0FBUztjQUFFNEg7WUFBWSxDQUFFO2NBQ2xELElBQUk7Z0JBQ0gsSUFBSSxDQUFDbEgsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1uRyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThCLFdBQVksQ0FBQ21FLFFBQVEsQ0FBQztrQkFDN0NwRixJQUFJLEVBQUUsdUJBQXVCO2tCQUM3QndNLFlBQVk7a0JBQ1poTixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2tCQUNYb0Y7aUJBQ0EsQ0FBQztnQkFFRixPQUFPekYsSUFBSTtlQUNYLENBQUMsT0FBT1EsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSUQsS0FBSyxDQUFDLDJCQUEyQixDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDNEYsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTW1ILG1CQUFtQkEsQ0FBQztjQUFFek0sSUFBSTtjQUFFaU0sWUFBWTtjQUFFdEgsV0FBVztjQUFFRDtZQUFLLENBQUU7Y0FDbkUsT0FBTyxJQUFJLENBQUNnSSxrQkFBa0IsQ0FBQzFNLElBQUksRUFBRTtnQkFDcEMyRSxXQUFXO2dCQUNYc0gsWUFBWTtnQkFDWnZIO2VBQ0EsQ0FBQztZQUNIO1lBRUEsTUFBTXFILE9BQU9BLENBQUNZLEtBQUs7Y0FDbEIsSUFBSSxDQUFDM00sSUFBSSxHQUFHLFFBQVE7Y0FDcEIsT0FBTyxLQUFLLENBQUMrTCxPQUFPLENBQUNZLEtBQUssQ0FBQztZQUM1QjtZQUVBLE1BQU1sSCxlQUFlQSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtjQUNoQyxJQUFJO2dCQUNILElBQUksQ0FBQ0EsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSWhHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Z0JBR3RDLE1BQU1pRyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTFFLFdBQVksQ0FBQzJFLEtBQUssQ0FBQztrQkFDOUNGLE1BQU07a0JBQ05HLElBQUksRUFBRSxXQUFXO2tCQUNqQkMsTUFBTSxFQUFFO2lCQUNSLENBQUM7Z0JBRUYsSUFBSSxDQUFDLENBQUExSCxHQUFJLENBQUNTLE1BQU0sQ0FBQ1YsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUMzQyxNQUFNK0csWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEzSCxHQUFJLENBQUM0SCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQ3hHLEVBQUUsUUFBUSxFQUFFO2tCQUM3RXlHLEdBQUcsRUFBRU4sUUFBUSxDQUFDTTtpQkFDZCxDQUFDO2dCQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEdBQUdILFlBQVksQ0FBQzVHLElBQUksQ0FBQytHLE9BQU8sSUFBSTBHLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQ2hLLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDcEMsSUFBSSxDQUFDa0QsWUFBWSxDQUFDN0csTUFBTSxFQUFFLE1BQU0sSUFBSVEsS0FBSyxDQUFDLG9CQUFvQixDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQ3dHLE9BQU87ZUFDbkIsQ0FBQyxPQUFPdkcsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLGFBQWFQLEdBQUdBLENBQUNSLEtBQUs7Y0FDckIsSUFBSSxJQUFJLENBQUNzTSxTQUFTLENBQUNoSixHQUFHLENBQUN0RCxLQUFLLENBQUNZLEVBQUUsQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLElBQUksQ0FBQzBMLFNBQVMsQ0FBQzlMLEdBQUcsQ0FBQ1IsS0FBSyxDQUFDWSxFQUFFLENBQUM7O2NBR3BDLE1BQU13SCxNQUFNLEdBQUcsSUFBSXBKLGNBQWMsQ0FBQ2dCLEtBQUssQ0FBQztjQUN4QyxJQUFJQSxLQUFLLENBQUNZLEVBQUUsRUFBRTtnQkFDYixNQUFNd0gsTUFBTSxDQUFDekcsSUFBSSxFQUFFO2VBQ25CLE1BQU07Z0JBQ04sTUFBTXlHLE1BQU0sQ0FBQ3hHLE9BQU87O2NBR3JCLElBQUksQ0FBQzBLLFNBQVMsQ0FBQy9LLEdBQUcsQ0FBQ3ZCLEtBQUssQ0FBQ1ksRUFBRSxFQUFFd0gsTUFBTSxDQUFDO2NBQ3BDLE9BQU9BLE1BQU07WUFDZDtZQUVBLE1BQU04RixZQUFZQSxDQUFBO2NBQ2pCLE1BQU1uSCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUM5SCxRQUFRLENBQUNpUCxZQUFZLEVBQUU7Y0FFbkQsSUFBSSxDQUFDbkgsUUFBUSxDQUFDekcsTUFBTSxFQUFFO2dCQUNyQixPQUFPeUcsUUFBUTs7Y0FFaEIsTUFBTSxJQUFJLENBQUN4RixHQUFHLENBQUN3RixRQUFRLENBQUN4RyxJQUFJLENBQUM7Y0FDN0IsSUFBSSxDQUFDa0QsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztjQUNyQyxPQUFPc0QsUUFBUTtZQUNoQjtZQUVBb0gsS0FBS0EsQ0FBQyxHQUFHQyxJQUFJO2NBQ1osT0FBTyxJQUFJLENBQUNuUCxRQUFRLENBQUNrUCxLQUFLLENBQUMsR0FBR0MsSUFBSSxDQUFDO1lBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeFRELElBQUEzUSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkIsSUFBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUE0QixPQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLFFBQUEsR0FBQTdCLE9BQUE7VUFHTSxNQUFPNk8sY0FBZSxTQUFROU8sTUFBQSxDQUFBRyxhQUE2QjtZQUNoRSxDQUFBNEIsR0FBSTtZQUNKLENBQUFDLE1BQU87WUFFUDVCLFlBQVk0QixNQUFzQjtjQUNqQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQUwsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCLENBQUMsQ0FBQztZQUNGa0MsSUFBSSxHQUFHLE1BQU0zQixLQUFLLElBQUc7Y0FDcEIsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1MsTUFBTSxDQUFDVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsTUFBTTtnQkFBRUUsTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDZ0IsR0FBRyxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQWYsTUFBTyxDQUFDbUIsRUFBRSxFQUFFLENBQUM7Y0FFbEYsSUFBSSxDQUFDTixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJUSxLQUFLLENBQUMsc0JBQXNCLENBQUM7O2NBR3hDLElBQUksQ0FBQyxDQUFBckIsTUFBTyxDQUFDOEIsR0FBRyxDQUFDaEIsSUFBSSxDQUFDO2NBQ3RCLElBQUksQ0FBQyxDQUFBZCxNQUFPLENBQUN3TSxVQUFVLENBQUMvSSxRQUFRLENBQUMzQyxJQUFJLENBQUMwTCxVQUFVLENBQUM7Y0FFakQ7Y0FDQSxNQUFNLElBQUksQ0FBQyxDQUFBeE0sTUFBTyxDQUFDcU4sV0FBVyxDQUFDdk0sSUFBSSxDQUFDO2NBRXBDLE9BQU87Z0JBQUVELE1BQU07Z0JBQUVDO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRUQsTUFBTThOLFFBQVFBLENBQUN6TixFQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBcEIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNO2dCQUFFRSxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZixHQUFJLENBQUNnQixHQUFHLENBQUMsbUJBQW1CSSxFQUFFLEVBQUUsQ0FBQztjQUNyRSxJQUFJLENBQUNOLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlRLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Y0FFOUMsT0FBT1AsSUFBSTtZQUNaO1lBRUEsTUFBTU0sTUFBTUEsQ0FBQTtjQUNYLElBQUksQ0FBQyxDQUFBckIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUUzQyxNQUFNRyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDcUIsTUFBTSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQXBCLE1BQU8sQ0FBQ21CLEVBQUUsRUFBRSxDQUFDO2NBRXpFLE9BQU9MLElBQUk7WUFDWjtZQUVBLE1BQU00TSxPQUFPQSxDQUFDbk4sS0FBSyxHQUFHLEVBQUU7Y0FDdkIsSUFBSUEsS0FBSyxDQUFDb0IsSUFBSSxLQUFLLE9BQU8sRUFBRSxPQUFPLElBQUksQ0FBQ2tELFNBQVMsQ0FBQ3RFLEtBQUssQ0FBQztjQUN4RCxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxPQUFPLElBQUksQ0FBQyxDQUFBWixHQUFJLENBQUM0SCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBM0gsTUFBTyxDQUFDbUIsRUFBRSxVQUFVLEVBQUVaLEtBQUssQ0FBQztZQUMzRTtZQUVBLE1BQU1zRSxTQUFTQSxDQUFDdEUsS0FBSztjQUNwQixJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNMkcsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2SCxHQUFJLENBQUM0SCxJQUFJLENBQUMsaUJBQWlCLEVBQUVwSCxLQUFLLENBQUM7Y0FDL0QsSUFBSSxDQUFDK0csUUFBUSxDQUFDekcsTUFBTSxFQUFFO2dCQUNyQjtjQUFBO2NBRUQsT0FBT3lHLFFBQVE7WUFDaEI7WUFFQSxNQUFNbUgsWUFBWUEsQ0FBQTtjQUNqQixJQUFJLENBQUMsQ0FBQTFPLEdBQUksQ0FBQ1MsTUFBTSxDQUFDVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0M7Y0FDQSxPQUFPLElBQUksQ0FBQyxDQUFBWixHQUFJLENBQUM0SCxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFBM0gsTUFBTyxDQUFDbUIsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDOUU7WUFFQSxNQUFNdU4sS0FBS0EsQ0FBQzFDLFFBQVEsRUFBRTZDLE9BQU8sRUFBRUMsTUFBTTtjQUNwQyxJQUFJLENBQUMsQ0FBQS9PLEdBQUksQ0FBQ1MsTUFBTSxDQUFDVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsT0FBTyxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDNEgsSUFBSSxDQUFDLHNCQUFzQnFFLFFBQVEsUUFBUSxFQUFFO2dCQUFFc0IsS0FBSyxFQUFFdUIsT0FBTztnQkFBRUM7Y0FBTSxDQUFFLENBQUM7WUFDMUY7O1VBQ0F4USxPQUFBLENBQUF3TyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0VELElBQUE5TyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkIsSUFBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUE0QixPQUFBLEdBQUE1QixPQUFBO1VBR0EsSUFBQTZCLFFBQUEsR0FBQTdCLE9BQUE7VUFHTSxNQUFPdUYsV0FBWSxTQUFReEYsTUFBQSxDQUFBRyxhQUEwQjtZQUcxRCxDQUFBNEIsR0FBSTtZQUNKM0IsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ29JLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztjQUN2QyxJQUFJLENBQUMsQ0FBQXpHLEdBQUksR0FBRyxJQUFJSCxJQUFBLENBQUFLLEdBQUcsQ0FBQ0osT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFFQSxNQUFNMEcsUUFBUUEsQ0FBQ3hHLEtBQVU7Y0FDeEIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztnQkFFM0MsTUFBTTtrQkFBRUUsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQzRILElBQUksQ0FBQyxjQUFjLEVBQUU7a0JBQUUsR0FBR3BIO2dCQUFLLENBQUUsQ0FBQztnQkFDM0UsSUFBSSxDQUFDTSxNQUFNLEVBQUUsTUFBTSxJQUFJUSxLQUFLLENBQUMsOEJBQThCLENBQUM7Z0JBQzVELE9BQU9QLElBQUk7ZUFDWCxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlELEtBQUssQ0FBQ0MsQ0FBQyxDQUFDNkYsT0FBTyxDQUFDOztZQUU1QjtZQUVBLE1BQU1JLEtBQUtBLENBQUNoSCxLQUF1RDtjQUNsRSxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNMkcsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2SCxHQUFJLENBQUM0SCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQUVwRCxRQUFRLEVBQUUsSUFBSTtnQkFBRSxHQUFHaEU7Y0FBSyxDQUFFLENBQUM7Y0FDdkYsSUFBSSxDQUFDK0csUUFBUSxDQUFDekcsTUFBTSxFQUFFLE1BQU0sSUFBSVEsS0FBSyxDQUFDLHdCQUF3QixDQUFDO2NBQy9EOzs7O2NBSUEsT0FBT2lHLFFBQVEsQ0FBQ3hHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEI7O1VBQ0F4QyxPQUFBLENBQUFrRixXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7O1VDeENEOztVQUVBNUUsTUFBQSxDQUFBQyxjQUFBLENBQUFQLE9BQUE7WUFDQVEsS0FBQTtVQUNBIn0=