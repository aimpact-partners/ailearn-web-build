System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/reactive@1.2.0/entities", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "uuid@9.0.1", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.0.1/api"], function (_export, _context) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsReactive120Entities) {
      dependency_2 = _beyondJsReactive120Entities;
    }, function (_aimpactHttpSuite001Api) {
      dependency_3 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_4 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk101Api) {
      dependency_8 = _aimpactChatSdk101Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.0-dev.03"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities', dependency_2], ['@aimpact/http-suite/api', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['uuid', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@aimpact/chat-sdk/api', dependency_8]]);
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
        hash: 3699658746,
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
              globalThis.collection = this;
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
        hash: 4039456007,
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
              this.#saveTimeout = setTimeout(() => this.#learningModule.saveDraft(), 500);
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
        hash: 2394035483,
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
              const stringFormat = {
                en: 'generate the image in 16:9 format.',
                pt: 'gerar a imagem no formato 16:9.',
                de: 'generieren Sie das Bild im 16:9-Format.',
                es: 'generar la imagen en formato 16:9.'
              };
              prompt += ` ${stringFormat[this.language] ?? stringFormat.en}`;
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
        hash: 3471700775,
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
            async generate(notes, {
              related
            }) {
              const data = await this.suggestions.generate({
                type: 'questions',
                id: this.learningModule.id,
                related,
                notes
              });
              if (data.error) {
                return data;
              }
              this.set(data);
              this.learningModule.saveDraft();
              this.trigger('specs.generated');
              return data;
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
        hash: 3924675292,
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
        hash: 2276502694,
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
              this.#classrooms.set(classroomId, assignment);
              this.#parent.trigger('change');
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
        hash: 895508839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _entities = require("@beyond-js/reactive/entities");
          var _suggestions = require("../suggestions");
          var _activities = require("./activities");
          var _collection = require("./assignments/collection");
          var _provider = require("./provider");
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
                localdb: false,
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
              LearningModule.instances.set(this.id, this);
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
                const stringFormat = {
                  es: {
                    prefix: 'Ilustación: ',
                    sufix: 'genera la imagen en formato 16:9.'
                  },
                  en: {
                    prefix: 'Illustration: ',
                    sufix: 'generate the image in 16:9 format.'
                  },
                  de: {
                    prefix: 'Illustration: ',
                    sufix: 'generieren Sie das Bild im 16:9-Format.'
                  }
                };
                prompt += ` ${stringFormat[this.language] ?? stringFormat.en}`;
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
              console.log(45);
              return this.provider.clone(...args);
            }
            static async get(specs) {
              // console.log(0.1, specs.id, this.instances);
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              } else {
                await module.isReady;
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/provider
      *******************************/

      ims.set('./item/provider', {
        hash: 763106818,
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
              console.log(46, _session.sessionWrapper.user.id, onwerId, entity);
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
        hash: 3743550615,
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
                const response = await this.#api.post('/suggestions', {
                  ...specs
                });
                if (!response.status) {
                  let {
                    error: {
                      text: error
                    }
                  } = response;
                  if (error.includes('The related activity')) {
                    return {
                      error: 'NO_RELATED_ACTIVITY'
                    };
                  }
                  if (error.includes('The draft does not have the following parameters to process the suggestion:')) {
                    return {
                      error: 'INCOMPLETE_MODULE',
                      fields: error.split(':')[1]
                    };
                  }
                  return {
                    error
                  };
                }
                return response.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQ3JlZGl0cyIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHBvcnRzIiwiQ29pbk1vZGVsIiwiaW5pdGlhbENvaW5zIiwiY29pbnMiLCJjb25zdW1lIiwiYW1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9lbnRpdGllcyIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGVzIiwiQ29sbGVjdGlvbiIsInN0b3JlTmFtZSIsImRiIiwiaXRlbSIsIkxlYXJuaW5nTW9kdWxlIiwicHJvdmlkZXIiLCJNb2R1bGVzUHJvdmlkZXIiLCJsb2NhbGRiIiwib3JkZXJCeSIsImdsb2JhbFRoaXMiLCJjb2xsZWN0aW9uIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsImFwaSIsInBhcmVudCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImxpc3QiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicm91dGUiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiZW50cmllcyIsIml0ZW1zIiwiZGVsZXRlSXRlbXMiLCJpZCIsImRlbGV0ZSIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkludHJvZHVjdGlvbkVsZW1lbnQiLCJlbGVtZW50IiwidHlwZSIsIkpTT04iLCJwYXJzZSIsInNldCIsIl9lbGVtZW50IiwiSW50cm9kdWN0aW9uIiwiTWFwIiwibG9hZCIsImlzUmVhZHkiLCJlbGVtZW50cyIsInZhbHVlcyIsImZvckVhY2giLCJpbnN0YW5jZSIsIl9zdWdnZXN0aW9ucyIsIl90eXBlcyIsIkFjdGl2aXRpZXMiLCJsZWFybmluZ01vZHVsZSIsInN1Z2dlc3Rpb25zIiwic29ydCIsImEiLCJiIiwib3JkZXIiLCJtYXAiLCJ0eXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJ2YWxpZCIsImxlbmd0aCIsImV2ZXJ5Iiwic3RhdGUiLCJTdWdnZXN0aW9ucyIsInNldEl0ZW1zIiwiYWN0aXZpdHkiLCJpbmRleCIsImhhcyIsIkFjdGl2aXR5IiwicmVtb3ZlIiwidHJpZ2dlciIsImdldEl0ZW1zIiwicHVzaCIsImdldERhdGEiLCJjbGVhciIsImFkZCIsIm1hbnVhbCIsImxhbmd1YWdlIiwidHJpZ2dlckV2ZW50Iiwic2F2ZVRpbWVvdXQiLCJyZW9yZGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNhdmVEcmFmdCIsIl9tYXRlcmlhbHMiLCJfZmFjdG9yeSIsIl91dWlkIiwiZGF0YVR5cGUiLCJzZXR0aW5nc1R5cGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJtYXRlcmlhbHMiLCJhaUNvbXBsZXRlZCIsImFpQ29udGVudCIsImZpZWxkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJyZXF1aXJlZCIsInRvdGFsTWF0ZXJpYWxzIiwicmVkdWNlIiwiYWNjIiwibmFtZSIsIkFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsImZpZWxkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsImluY2x1ZGVzT2JqZWN0aXZlIiwib2JqZWN0aXZlIiwicmVhY3RpdmVQcm9wcyIsInY0IiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJBY3Rpdml0eU1hdGVyaWFscyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJvdXRwdXQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwiZmV0Y2hpbmciLCJhY3Rpdml0eUlkIiwibWVzc2FnZSIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsInN0cmluZ0Zvcm1hdCIsImVuIiwicHQiLCJkZSIsImVzIiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiZm9ybWF0IiwiZW5kcG9pbnQiLCJzYXZlUmVzcG9uc2UiLCJwb3N0IiwicGljdHVyZSIsImNsZWFyQ29udGVudCIsInNhdmUiLCJxdWVzdGlvbnMiLCJvcmlnaW5hbERhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiZHlzbGV4aWEiLCJpbnRyb2R1Y3Rpb24iLCJmbGFzaGNhcmQiLCJlbXB0eURhdGEiLCJlbXB0eSIsImhhc0NvbnRlbnQiLCJzb21lIiwibW9kdWxlIiwic2V0dGluZ3MiLCJnZXRQcm9wZXJ0aWVzIiwiZ2VuZXJhdGVDb250ZW50IiwicGVyc2lzdGVkRGF0YSIsImdlbmVyYXRlQXVkaW8iLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsImNoYXJhY3RlciIsImNoYW5nZSIsInByb2Nlc3MiLCJDb252ZXJzYXRpb25BY3Rpdml0eVNwZWNzIiwiXyIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJUWVBFUyIsIkFjdGl2aXR5U3BlY3MiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJzcG9rZW4iLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiaXNWYWxpZCIsImhhc1ZhbHVlcyIsIl9xdWVzdGlvbnMiLCJxdWVzdGlvbkxhYmVscyIsInF1ZXN0aW9uIiwicXVlc3Rpb25Nb2RlbCIsIkFjdGl2aXR5UXVlc3Rpb24iLCJhZGRBbnN3ZXIiLCJhbnN3ZXIiLCJ3YXJuIiwiYWRkT3B0aW9uIiwicmVsYXRlZCIsImdlbmVyYXRlQW5zd2VycyIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJvcHRpb24iLCJOYU4iLCJyZW1vdmVPcHRpb24iLCJzcGxpY2UiLCJzZXRDb3JyZWN0IiwiZGVmYXVsdFZhbHVlcyIsImNyaXRlcmlhIiwidGFzayIsImFzc2Vzc21lbnQiLCJUeXBlcyIsImRlcGVuZGVuY2llcyIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiZnJvbSIsImNsYXNzcm9vbXMiLCJNb2R1bGVBc3NpZ25tZW50IiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsInJlc3BvbnNlIiwiYXNzaWdubWVudCIsImRhc2hib2FyZCIsImxpbmsiLCJfYWN0aXZpdGllcyIsIl9jb2xsZWN0aW9uIiwiSXRlbSIsImFjdGl2aXRpZXMiLCJzYXZlZCIsImNvbXBsZXRlZCIsImFzc2lnbm1lbnRzIiwiaW5zdGFuY2VzIiwiTW9kdWxlUHJvdmlkZXIiLCJpbml0aWFsaXNlIiwib24iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsIm1vZGVsIiwicHJvY2Vzc0xvYWQiLCJhcmdzIiwiY3JlZGl0cyIsIm93bmVyIiwiY3JlYXRvciIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwicHVibGlzaCIsInJlZmluZUFjdGl2aXRpZXMiLCJkdXJhdGlvbiIsInRhcmdldCIsImF1ZGllbmNlIiwidG90YWxBY3Rpdml0aWVzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJpbXByb3ZlbWVudHMiLCJhY3Rpdml0eVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVTdWdlc3Rpb25zIiwicHJvcHMiLCJwcmVmaXgiLCJzdWZpeCIsInBlcmZvcm1hbmNlIiwibm93IiwiY29uc3VtZUNvaW5zIiwiY2xvbmUiLCJsb2ciLCJnZXREcmFmdCIsIm9ud2VySWQiLCJlbnRpdHkiLCJvcmdhbml6YXRpb25JZCIsInRleHQiLCJzcGxpdCIsImNvZGUiXSwic291cmNlcyI6WyIvY29pbnMvY3JlZGl0cy50cyIsIi9jb2lucy9pbmRleC50cyIsIi9jb2lucy50cyIsIi9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvaW50cm9kdWN0aW9uL2VsZW1lbnQudHMiLCIvaW50cm9kdWN0aW9uL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9pdGVtL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9jaGFyYWN0ZXItdGFsay50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvY29udmVyc2F0aW9uLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9pbmRleC50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL2luZGV4LnRzIiwiL2l0ZW0vYWN0aXZpdGllcy9zcGVjcy9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zL29wdGlvbi50cyIsIi9pdGVtL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2l0ZW0vYWN0aXZpdGllcy90eXBlcy50cyIsIi9pdGVtL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvaXRlbS9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2l0ZW0vaW5kZXgudHMiLCIvaXRlbS9wcm92aWRlci50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFNTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUFzQjtZQUM3REMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU87Y0FBQyxDQUFFLENBQUM7WUFDN0M7O1VBQ0FDLE9B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