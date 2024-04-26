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
        hash: 2692784330,
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
              if (this.dataType?.id === 'multiple-choice') {
                console.log('es una multiple choice', this.#materials, this.#specs);
              }
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
        hash: 189123567,
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
              if (specs.type === 'draft') return this.saveDraft(specs);
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
            }
            async saveDraft(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post(`/modules/drafts`, specs);
                if (!response.status) {
                  //throw new Error('error saving module draft');
                }
                return response;
              } catch (e) {
                console.error(e);
              }
            }
            async getCredits() {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwibGlzdCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJzdGF0dXMiLCJkYXRhIiwiZ2V0Iiwicm91dGUiLCJFcnJvciIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJsb2FkIiwiaXNSZWFkeSIsImVsZW1lbnRzIiwidmFsdWVzIiwiZm9yRWFjaCIsImluc3RhbmNlIiwiX3N1Z2dlc3Rpb25zIiwiX3R5cGVzIiwiQWN0aXZpdGllcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsIm1hcCIsInR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInZhbGlkIiwibGVuZ3RoIiwiZXZlcnkiLCJzdGF0ZSIsIlN1Z2dlc3Rpb25zIiwic2V0SXRlbXMiLCJjbGVhbiIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJsb2ciLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJwcmVwYXJlZCIsImluY2x1ZGVzT2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJyZXNwb25zZSIsImltYWdlIiwic2l6ZSIsImZvcm1hdCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJ1cmwiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9uIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImdlbmVyYXRlQW5zd2VycyIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJmaWVsZHMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJjcmVkaXRzIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJvd25lciIsImNyZWF0b3IiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsInB1Ymxpc2giLCJyZWZpbmVBY3Rpdml0aWVzIiwib2JzZXJ2YXRpb25zIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJhdWRpZW5jZSIsInRvdGFsQWN0aXZpdGllcyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwiYWN0aXZpdHlTdWdnZXN0aW9ucyIsImdlbmVyYXRlU3VnZXN0aW9ucyIsInByb3BzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXRDcmVkaXRzIiwiZ2V0RHJhZnQiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvaXRlbS9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvaXRlbS50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2l0ZW0vcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU1PO1VBQVUsTUFBT0MsT0FBUSxTQUFRRixNQUFBLENBQUFHLGFBQXNCO1lBQzdEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTztjQUFDLENBQUUsQ0FBQztZQUM3Qzs7VUFDQUMsT0FBQSxDQUFBSixPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBRixNQUFBLEdBQUFDLE9BQUE7VUFFQSxNQUFNTSxTQUFVLFNBQVFQLE1BQUEsQ0FBQUcsYUFBYTtZQUNwQ0MsWUFBWUksWUFBb0I7Y0FDL0IsS0FBSyxDQUFDO2dCQUFFQyxLQUFLLEVBQUVELFlBQVk7Z0JBQUVILFVBQVUsRUFBRSxDQUFDLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDdEQ7WUFFQUssT0FBT0EsQ0FBQ0MsTUFB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