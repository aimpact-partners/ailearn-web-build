System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/reactive@1.1.12/entities", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32-beta.5/config", "@aimpact/chat-sdk@1.0.0/session", "uuid@9.0.1", "@aimpact/chat-sdk@1.0.0/api", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0032Beta5Config) {
      dependency_4 = _aimpactAilearnApp0032Beta5Config;
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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32-beta.5"]]);
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
        hash: 4207940293,
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
        hash: 1745483127,
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
                });
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                await this.set({
                  ...data,
                  id: data.id,
                  state: 'mudule-generated'
                });
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
        hash: 593181828,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJhcGkiLCJwYXJlbnQiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJsaXN0Iiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJvdXRlIiwic3RhdHVzIiwiZGF0YSIsImdldCIsImVudHJpZXMiLCJpdGVtcyIsImRlbGV0ZUl0ZW1zIiwiaWQiLCJkZWxldGUiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJJbnRyb2R1Y3Rpb25FbGVtZW50IiwiZWxlbWVudCIsInR5cGUiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJfZWxlbWVudCIsIkludHJvZHVjdGlvbiIsIk1hcCIsImxvYWQiLCJpc1JlYWR5IiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJfc3VnZ2VzdGlvbnMiLCJfdHlwZXMiLCJBY3Rpdml0aWVzIiwibGVhcm5pbmdNb2R1bGUiLCJzdWdnZXN0aW9ucyIsInNvcnQiLCJhIiwiYiIsIm9yZGVyIiwibWFwIiwidHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidmFsaWQiLCJsZW5ndGgiLCJldmVyeSIsInN0YXRlIiwiU3VnZ2VzdGlvbnMiLCJzZXRJdGVtcyIsImNsZWFuIiwiYWN0aXZpdHkiLCJpbmRleCIsImhhcyIsIkFjdGl2aXR5IiwicmVtb3ZlIiwidHJpZ2dlciIsImdldEl0ZW1zIiwicHVzaCIsImdldERhdGEiLCJjbGVhciIsImFkZCIsIm1hbnVhbCIsImxhbmd1YWdlIiwidHJpZ2dlckV2ZW50Iiwic2F2ZVRpbWVvdXQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNhdmVEcmFmdCIsImxvZyIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl91dWlkIiwiZGF0YVR5cGUiLCJzZXR0aW5nc1R5cGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJtYXRlcmlhbHMiLCJhaUNvbXBsZXRlZCIsImFpQ29udGVudCIsImZpZWxkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJyZXF1aXJlZCIsIm5hbWUiLCJ0b3RhbE1hdGVyaWFscyIsInJlZHVjZSIsImFjYyIsIkFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsImZpZWxkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsImluY2x1ZGVzT2JqZWN0aXZlIiwib2JqZWN0aXZlIiwicmVhY3RpdmVQcm9wcyIsInY0IiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJBY3Rpdml0eU1hdGVyaWFscyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJvdXRwdXQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJhY3Rpdml0eUlkIiwibWVzc2FnZSIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInJlc3BvbnNlIiwiaW1hZ2UiLCJzaXplIiwiZm9ybWF0Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInVybCIsInBpY3R1cmUiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwicXVlc3Rpb25zIiwib3JpZ2luYWxEYXRhIiwiYXJ0aWNsZSIsInN5bnRoZXNpcyIsImR5c2xleGlhIiwiaW50cm9kdWN0aW9uIiwiZmxhc2hjYXJkIiwiZW1wdHlEYXRhIiwiZW1wdHkiLCJoYXNDb250ZW50Iiwic29tZSIsIm1vZHVsZSIsInNldHRpbmdzIiwiZ2V0UHJvcGVydGllcyIsImdlbmVyYXRlQ29udGVudCIsInBlcnNpc3RlZERhdGEiLCJnZW5lcmF0ZUF1ZGlvIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJjaGFyYWN0ZXIiLCJjaGFuZ2UiLCJwcm9jZXNzIiwiQ29udmVyc2F0aW9uQWN0aXZpdHlTcGVjcyIsIl8iLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiVFlQRVMiLCJBY3Rpdml0eVNwZWNzIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVNwZWNzIiwic3Bva2VuIiwiU3Bva2VuQWN0aXZpdHlTcGVjcyIsImlzVmFsaWQiLCJoYXNWYWx1ZXMiLCJfcXVlc3Rpb25zIiwicXVlc3Rpb25MYWJlbHMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uTW9kZWwiLCJBY3Rpdml0eVF1ZXN0aW9uIiwiYWRkQW5zd2VyIiwiYW5zd2VyIiwid2FybiIsImFkZE9wdGlvbiIsInJlbGF0ZWQiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwib3B0aW9uIiwiTmFOIiwicmVtb3ZlT3B0aW9uIiwic3BsaWNlIiwic2V0Q29ycmVjdCIsImdlbmVyYXRlQW5zd2VycyIsImRlZmF1bHRWYWx1ZXMiLCJjcml0ZXJpYSIsInRhc2siLCJzdWJqZWN0IiwiVHlwZXMiLCJkZXBlbmRlbmNpZXMiLCJNb2R1bGVBc3NpZ25tZW50cyIsImZyb20iLCJjbGFzc3Jvb21zIiwiTW9kdWxlQXNzaWdubWVudCIsImNsYXNzcm9vbSIsImNsYXNzcm9vbUlkIiwibW9kdWxlSWQiLCJhc3NpZ25tZW50IiwiZGFzaGJvYXJkIiwibGluayIsIl9hY3Rpdml0aWVzIiwiX2NvbGxlY3Rpb24iLCJfY3JlZGl0cyIsIkl0ZW0iLCJhY3Rpdml0aWVzIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJjcmVkaXRzIiwiYXNzaWdubWVudHMiLCJpbnN0YW5jZXMiLCJNb2R1bGVQcm92aWRlciIsImluaXRpYWxpc2UiLCJvbiIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJvd25lciIsImNyZWF0b3IiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsIm9ic2VydmF0aW9ucyIsInB1Ymxpc2giLCJyZWZpbmVBY3Rpdml0aWVzIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJhdWRpZW5jZSIsInRvdGFsQWN0aXZpdGllcyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwiYWN0aXZpdHlTdWdnZXN0aW9ucyIsImdlbmVyYXRlU3VnZXN0aW9ucyIsInByb3BzIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb25zdW1lQ29pbnMiLCJjbG9uZSIsImFyZ3MiLCJnZXREcmFmdCIsIm9ud2VySWQiLCJlbnRpdHkiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL29wdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDN0M7O1VBQ0FDLE9BQUEsQ0FBQUosT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQUYsTUFBQSxHQUFBQyxPQUFBO1VBRUEsTUFBTU0sU0FBVSxTQUFRUCxNQUFBLENBQUFHLGFB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RCxDQUFBNEIsR0FBSTtZQUNKM0IsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ3FJLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztjQUN2QyxJQUFJLENBQUMsQ0FBQTFHLEdBQUksR0FBRyxJQUFJSCxJQUFBLENBQUFLLEdBQUcsQ0FBQ0osT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDaEQ7WUFFQSxNQUFNMkcsUUFBUUEsQ0FBQ3pHLEtBQVU7Y0FDeEIsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztnQkFFM0MsTUFBTTtrQkFBRUUsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQzZILElBQUksQ0FBQyxjQUFjLEVBQUU7a0JBQUUsR0FBR3JIO2dCQUFLLENBQUUsQ0FBQztnQkFDM0UsSUFBSSxDQUFDTSxNQUFNLEVBQUUsTUFBTSxJQUFJUSxLQUFLLENBQUMsOEJBQThCLENBQUM7Z0JBQzVELE9BQU9QLElBQUk7ZUFDWCxDQUFDLE9BQU9RLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlELEtBQUssQ0FBQ0MsQ0FBQyxDQUFDOEYsT0FBTyxDQUFDOztZQUU1QjtZQUVBLE1BQU1JLEtBQUtBLENBQUNqSCxLQUF1RDtjQUNsRSxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxNQUFNLENBQUNWLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNNEcsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF4SCxHQUFJLENBQUM2SCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQUVyRCxRQUFRLEVBQUUsSUFBSTtnQkFBRSxHQUFHaEU7Y0FBSyxDQUFFLENBQUM7Y0FDdkYsSUFBSSxDQUFDZ0gsUUFBUSxDQUFDMUcsTUFBTSxFQUFFLE1BQU0sSUFBSVEsS0FBSyxDQUFDLHdCQUF3QixDQUFDO2NBQy9EOzs7O2NBSUEsT0FBT2tHLFFBQVEsQ0FBQ3pHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEI7O1VBQ0F4QyxPQUFBLENBQUFrRixXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7O1VDeENEOztVQUVBNUUsTUFBQSxDQUFBQyxjQUFBLENBQUFQLE9BQUE7WUFDQVEsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119