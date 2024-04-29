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
        hash: 2763911788,
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
            properties = ['id', 'title', 'description', 'status', 'userId', 'sessions', 'picture', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'pictureSuggestions', 'state', 'credits', 'manual' // let the system know that the module was created manually
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
            async getCredits() {
              try {
                const response = await this.provider.getCredits();
                if (!response.status) {
                  return response;
                }
                await this.set(response.data);
                this.trigger('credits.change', 'add');
                return response;
              } catch (e) {
                //todo: handle error
              }
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/provider
      *******************************/

      ims.set('./item/provider', {
        hash: 1612040105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwibGlzdCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJzdGF0dXMiLCJkYXRhIiwiZ2V0Iiwicm91dGUiLCJFcnJvciIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJsb2FkIiwiaXNSZWFkeSIsImVsZW1lbnRzIiwidmFsdWVzIiwiZm9yRWFjaCIsImluc3RhbmNlIiwiX3N1Z2dlc3Rpb25zIiwiX3R5cGVzIiwiQWN0aXZpdGllcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsIm1hcCIsInR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInZhbGlkIiwibGVuZ3RoIiwiZXZlcnkiLCJzdGF0ZSIsIlN1Z2dlc3Rpb25zIiwic2V0SXRlbXMiLCJjbGVhbiIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJsb2ciLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJwcmVwYXJlZCIsImluY2x1ZGVzT2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJyZXNwb25zZSIsImltYWdlIiwic2l6ZSIsImZvcm1hdCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJ1cmwiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9uIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImdlbmVyYXRlQW5zd2VycyIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJmaWVsZHMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJjcmVkaXRzIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJvd25lciIsImNyZWF0b3IiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsInB1Ymxpc2giLCJyZWZpbmVBY3Rpdml0aWVzIiwib2JzZXJ2YXRpb25zIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJhdWRpZW5jZSIsInRvdGFsQWN0aXZpdGllcyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwiYWN0aXZpdHlTdWdnZXN0aW9ucyIsImdlbmVyYXRlU3VnZXN0aW9ucyIsInByb3BzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXRDcmVkaXRzIiwiZ2V0RHJhZnQiLCJjb25zdW1lQ29pbnMiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvaXRlbS9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvaXRlbS50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2l0ZW0vcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU1PO1VBQVUsTUFBT0MsT0FBUSxTQUFRRixNQUFBLENBQUFHLGFBQXNCO1lBQzdEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTztjQUFDLENBQUUsQ0FBQztZQUM3Qzs7VUFDQUMsT0FBQSxDQUFBSixPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBRixNQUFBLEdBQUFDLE9BQUE7VUFFQSxNQUFNTSxTQUFVLFNBQVFQLE1BQUEsQ0FBQUcsYUFBYTtZQUNwQ0MsWUFBWUksWUFBb0I7Y0FDL0IsS0FBSyxDQUFDO2dCQUFFQyxLQUFLLEVBQUVELFlBQVk7Z0JBQUVILFVBQVUsRUFBRSxDQUFDLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDdEQ7WUFFQUss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SyxFQUFFO2NBQ1AsSUFBSSxDQUFDa0ksYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2NBQ3ZDLElBQUksQ0FBQyxDQUFBekcsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUNoRDtZQUVBLE1BQU0wRyxRQUFRQSxDQUFDeEcsS0FBVTtjQUN4QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNTLE1BQU0sQ0FBQ1YsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUUzQyxNQUFNO2tCQUFFQyxNQUFNO2tCQUFFQztnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWQsR0FBSSxDQUFDNEgsSUFBSSxDQUFDLGNBQWMsRUFBRTtrQkFBRSxHQUFHcEg7Z0JBQUssQ0FBRSxDQUFDO2dCQUMzRSxJQUFJLENBQUNLLE1BQU0sRUFBRSxNQUFNLElBQUlJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztnQkFDNUQsT0FBT0gsSUFBSTtlQUNYLENBQUMsT0FBT1MsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSU4sS0FBSyxDQUFDTSxDQUFDLENBQUM2RixPQUFPLENBQUM7O1lBRTVCO1lBRUEsTUFBTUksS0FBS0EsQ0FBQ2hILEtBQXVEO2NBQ2xFLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNTLE1BQU0sQ0FBQ1YsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU0yRyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXZILEdBQUksQ0FBQzRILElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFBRXBELFFBQVEsRUFBRSxJQUFJO2dCQUFFLEdBQUdoRTtjQUFLLENBQUUsQ0FBQztjQUN2RixJQUFJLENBQUMrRyxRQUFRLENBQUMxRyxNQUFNLEVBQUUsTUFBTSxJQUFJSSxLQUFLLENBQUMsd0JBQXdCLENBQUM7Y0FDL0Q7Ozs7Y0FJQSxPQUFPc0csUUFBUSxDQUFDekcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4Qjs7VUFDQXJDLE9BQUEsQ0FBQWdGLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7VUN4Q0Q7O1VBRUExRSxNQUFBLENBQUFDLGNBQUEsQ0FBQVAsT0FBQTtZQUNBUSxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=