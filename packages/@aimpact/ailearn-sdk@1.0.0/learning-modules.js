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
        hash: 2480862541,
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
            async consumeCoins() {
              const response = await this.provider.consumeCoins();
              if (!response.status) {
                return response;
              }
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwibGlzdCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJzdGF0dXMiLCJkYXRhIiwiZ2V0Iiwicm91dGUiLCJFcnJvciIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJsb2FkIiwiaXNSZWFkeSIsImVsZW1lbnRzIiwidmFsdWVzIiwiZm9yRWFjaCIsImluc3RhbmNlIiwiX3N1Z2dlc3Rpb25zIiwiX3R5cGVzIiwiQWN0aXZpdGllcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsIm1hcCIsInR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInZhbGlkIiwibGVuZ3RoIiwiZXZlcnkiLCJzdGF0ZSIsIlN1Z2dlc3Rpb25zIiwic2V0SXRlbXMiLCJjbGVhbiIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJsb2ciLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJwcmVwYXJlZCIsImluY2x1ZGVzT2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJyZXNwb25zZSIsImltYWdlIiwic2l6ZSIsImZvcm1hdCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJ1cmwiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9uIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImdlbmVyYXRlQW5zd2VycyIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJmaWVsZHMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJjcmVkaXRzIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJvd25lciIsImNyZWF0b3IiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsInB1Ymxpc2giLCJyZWZpbmVBY3Rpdml0aWVzIiwib2JzZXJ2YXRpb25zIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJhdWRpZW5jZSIsInRvdGFsQWN0aXZpdGllcyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwiYWN0aXZpdHlTdWdnZXN0aW9ucyIsImdlbmVyYXRlU3VnZXN0aW9ucyIsInByb3BzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb25zdW1lQ29pbnMiLCJnZXREcmFmdCJdLCJzb3VyY2VzIjpbIi9jb2lucy9jcmVkaXRzLnRzIiwiL2NvaW5zL2luZGV4LnRzIiwiL2NvaW5zLnRzIiwiL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9hY3Rpdml0aWVzLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL2xlYXJuaW5nLW1vZHVsZS50cyIsIi9pbnRyb2R1Y3Rpb24vZWxlbWVudC50cyIsIi9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pdGVtLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jb252ZXJzYXRpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2ZhY3RvcnkudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS9xdWVzdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTU87VUFBVSxNQUFPQyxPQUFRLFNBQVFGLE1BQUEsQ0FBQUcsYUFBc0I7WUFDN0RDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPO2NBQUMsQ0FBRSxDQUFDO1lBQzdDOztVQUNBQyxPQUFBLENBQUFKLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFGLE1BQUEsR0FBQUMsT0FBQTtVQUVBLE1BQU1NLFNBQVUsU0FBUVAsTUFBQSxDQUFBRyxhQUFhO1lBQ3BDQyxZQUFZSSxZQUFvQjtjQUMvQixLQUFLLENBQUM7Z0JBQUVDLEtBQUssRUFBRUQsWUFBWTtnQkFBRUgsVUFBVSxFQUFFLENBQUMsT0FBTztjQUFDLENBQUUsQ0FBQztZQUN0RDtZQUVBSyxPQUFPQSxDQUFDQyxN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