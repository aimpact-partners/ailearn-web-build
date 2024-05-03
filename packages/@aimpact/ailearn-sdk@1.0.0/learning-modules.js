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
        hash: 737618688,
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
              console.log(0.1, specs.route);
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
        hash: 1538556235,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwibGlzdCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwicm91dGUiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiZW50cmllcyIsIml0ZW1zIiwiZGVsZXRlSXRlbXMiLCJpZCIsImRlbGV0ZSIsIkVycm9yIiwiZSIsImVycm9yIiwiSW50cm9kdWN0aW9uRWxlbWVudCIsImVsZW1lbnQiLCJ0eXBlIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiX2VsZW1lbnQiLCJJbnRyb2R1Y3Rpb24iLCJNYXAiLCJsb2FkIiwiaXNSZWFkeSIsImVsZW1lbnRzIiwidmFsdWVzIiwiZm9yRWFjaCIsImluc3RhbmNlIiwiX3N1Z2dlc3Rpb25zIiwiX3R5cGVzIiwiQWN0aXZpdGllcyIsImxlYXJuaW5nTW9kdWxlIiwic3VnZ2VzdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsIm1hcCIsInR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInZhbGlkIiwibGVuZ3RoIiwiZXZlcnkiLCJzdGF0ZSIsIlN1Z2dlc3Rpb25zIiwic2V0SXRlbXMiLCJjbGVhbiIsImFjdGl2aXR5IiwiaW5kZXgiLCJoYXMiLCJBY3Rpdml0eSIsInJlbW92ZSIsInRyaWdnZXIiLCJnZXRJdGVtcyIsInB1c2giLCJnZXREYXRhIiwiY2xlYXIiLCJhZGQiLCJtYW51YWwiLCJsYW5ndWFnZSIsInRyaWdnZXJFdmVudCIsInNhdmVUaW1lb3V0IiwicmVvcmRlciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRHJhZnQiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJfdXVpZCIsImRhdGFUeXBlIiwic2V0dGluZ3NUeXBlIiwiZGVmYXVsdExhbmd1YWdlIiwibWF0ZXJpYWxzIiwiYWlDb21wbGV0ZWQiLCJhaUNvbnRlbnQiLCJmaWVsZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwicmVxdWlyZWQiLCJuYW1lIiwidG90YWxNYXRlcmlhbHMiLCJyZWR1Y2UiLCJhY2MiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJwcmVwYXJlZCIsImluY2x1ZGVzT2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsInJlYWN0aXZlUHJvcHMiLCJ2NCIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiQWN0aXZpdHlNYXRlcmlhbHMiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Iiwib3V0cHV0IiwiZ2VuZXJhdGUiLCJub3RlcyIsImZldGNoaW5nIiwiYWN0aXZpdHlJZCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJyZXNwb25zZSIsImltYWdlIiwic2l6ZSIsImZvcm1hdCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJ1cmwiLCJwaWN0dXJlIiwiY2xlYXJDb250ZW50Iiwic2F2ZSIsInF1ZXN0aW9ucyIsIm9yaWdpbmFsRGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJkeXNsZXhpYSIsImludHJvZHVjdGlvbiIsImZsYXNoY2FyZCIsImVtcHR5RGF0YSIsImVtcHR5IiwiaGFzQ29udGVudCIsInNvbWUiLCJtb2R1bGUiLCJzZXR0aW5ncyIsImdldFByb3BlcnRpZXMiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwZXJzaXN0ZWREYXRhIiwiZ2VuZXJhdGVBdWRpbyIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eVNwZWNzIiwiY2hhcmFjdGVyIiwiY2hhbmdlIiwicHJvY2VzcyIsIkNvbnZlcnNhdGlvbkFjdGl2aXR5U3BlY3MiLCJfIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlRZUEVTIiwiQWN0aXZpdHlTcGVjcyIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJpc1ZhbGlkIiwiaGFzVmFsdWVzIiwiX3F1ZXN0aW9uIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImdlbmVyYXRlQW5zd2VycyIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJmaWVsZHMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJjcmVkaXRzIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJvd25lciIsImNyZWF0b3IiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsInB1Ymxpc2giLCJyZWZpbmVBY3Rpdml0aWVzIiwib2JzZXJ2YXRpb25zIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJhdWRpZW5jZSIsInRvdGFsQWN0aXZpdGllcyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwiYWN0aXZpdHlTdWdnZXN0aW9ucyIsImdlbmVyYXRlU3VnZXN0aW9ucyIsInByb3BzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb25zdW1lQ29pbnMiLCJjbG9uZSIsImFyZ3MiLCJnZXREcmFmdCIsIm9ud2VySWQiLCJlbnRpdHkiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb24udHMiLCIvaXRlbS9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvdHlwZXMudHMiLCIvaXRlbS9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0vYXNzaWdubWVudHMvaXRlbS50cyIsIi9pdGVtL2luZGV4LnRzIiwiL2l0ZW0vcHJvdmlkZXIudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU1PO1VBQVUsTUFBT0MsT0FBUSxTQUFRRixNQUFBLENBQUFHLGFBQXNCO1lBQzdEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTztjQUFDLENBQUUsQ0FBQztZQUM3Qzs7VUFDQUMsT0FBQSxDQUFBSixPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBRixNQUFBLEdBQUFDLE9BQUE7VUFFQSxNQUFNTSxTQUFVLFNBQVFQLE1BQUEsQ0FBQUcsYUFBYTtZQUNwQ0MsWUFBWUksWUFBb0I7Y0FDL0IsS0FBSyxDQUFDO2dCQUFFQyxLQUFLLEVBQUVELFlBQVk7Z0JBQUVILFVBQVUsRUFBRSxDQUFDLE9BQU87Y0FBQyxD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